const playForm = document.getElementById('playForm');
const urlInput = document.getElementById('urlInput');
const videoTitle = document.getElementById('videoTitle');
const playlistContainer = document.getElementById('playlistContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');

let playlistData = [];
let currentVideoIndex = 0;
let player;
let playerInterval;

// Fetch current playlist
async function fetchPlaylist() {
    const res = await fetch('/current');
    const data = await res.json();
    return data;
}

// Render playlist
function renderPlaylist() {
    playlistContainer.innerHTML = '';
    playlistData.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'playlist-item';
        div.draggable = true;
        div.dataset.index = index;

        div.innerHTML = `
            <img src="${item.info.thumbnail_url}" alt="Thumbnail">
            <p>${item.info.title}</p>
            <button onclick="removeVideo(${index})">Remove</button>
        `;

        div.addEventListener('dragstart', e => e.dataTransfer.setData('text/plain', index));
        div.addEventListener('dragover', e => e.preventDefault());
        div.addEventListener('drop', e => {
            const from = e.dataTransfer.getData('text/plain');
            const to = index;
            reorderPlaylist(from, to);
        });

        playlistContainer.appendChild(div);
    });
}

// Update UI
async function updateUI() {
    const data = await fetchPlaylist();
    playlistData = data.playlist || [];
    if (playlistData.length > 0) {
        currentVideoIndex = data.current ? playlistData.indexOf(data.current) : 0;
        loadVideo(playlistData[currentVideoIndex].url, playlistData[currentVideoIndex].info.title);
    } else {
        videoTitle.textContent = "Tidak ada video";
    }
    renderPlaylist();
}

// Add video
playForm.addEventListener('submit', e => {
    e.preventDefault();
    const url = urlInput.value.trim();
    if(!url) return;
    window.location.href = `/play?url=${encodeURIComponent(url)}`;
});

// Next / Previous
nextBtn.addEventListener('click', ()=> playNext());
prevBtn.addEventListener('click', ()=> playPrev());

// Remove video
window.removeVideo = async function(index) {
    await fetch('/remove', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({index})
    });
    updateUI();
}

// Reorder playlist
async function reorderPlaylist(from, to) {
    const temp = [...playlistData];
    const [moved] = temp.splice(from, 1);
    temp.splice(to, 0, moved);
    playlistData = temp;
    const newOrder = playlistData.map((_,i)=>i);
    await fetch('/reorder', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({newOrder})
    });
    updateUI();
}

// YouTube IFrame API
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '315',
        width: '560',
        videoId: '',
        events: { 'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange }
    });
}

// Load video by URL
function loadVideo(url, title) {
    const videoId = url.split('v=')[1]?.split('&')[0];
    if(!videoId) return;
    videoTitle.textContent = title;
    if(player && player.loadVideoById){
        player.loadVideoById(videoId);
    }
}

// Player ready
function onPlayerReady(event) {
    event.target.playVideo();
    if(playerInterval) clearInterval(playerInterval);
    playerInterval = setInterval(updateProgressBar, 500);
}

// State change
function onPlayerStateChange(event) {
    if(event.data === YT.PlayerState.ENDED){
        playNext();
    }
}

// Update progress bar
function updateProgressBar() {
    if(!player || player.getDuration() === 0) return;
    const progress = (player.getCurrentTime() / player.getDuration()) * 100;
    progressBar.style.width = `${progress}%`;
}

// Next video
function playNext() {
    if(currentVideoIndex + 1 < playlistData.length){
        currentVideoIndex++;
        loadVideo(playlistData[currentVideoIndex].url, playlistData[currentVideoIndex].info.title);
    }
}

// Previous video
function playPrev() {
    if(currentVideoIndex - 1 >= 0){
        currentVideoIndex--;
        loadVideo(playlistData[currentVideoIndex].url, playlistData[currentVideoIndex].info.title);
    }
}

// Initial load
updateUI();
setInterval(updateUI, 5000);
