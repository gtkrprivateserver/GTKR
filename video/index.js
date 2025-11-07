const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(express.static('public'));

const WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;
const KEEP_ALIVE_URL = process.env.KEEP_ALIVE_URL;

let playlist = [];
let currentIndex = -1;

// Ambil info YouTube via oEmbed
async function getYouTubeInfo(url) {
    try {
        const oembedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`;
        const response = await axios.get(oembedUrl);
        return response.data;
    } catch (err) {
        console.error(err.message);
        return null;
    }
}

// Add video
app.get('/play', async (req, res) => {
    const videoUrl = req.query.url;
    if (!videoUrl) return res.send("❌ Masukkan URL YouTube dengan ?url=");

    const videoInfo = await getYouTubeInfo(videoUrl);
    if (!videoInfo) return res.send("❌ Gagal ambil info video");

    playlist.push({ url: videoUrl, info: videoInfo });
    currentIndex = playlist.length - 1;

    // Discord webhook
    try {
        await axios.post(WEBHOOK_URL, {
            embeds: [{
                title: `GTKR VIDEO: ${videoInfo.title}`,
                url: videoUrl,
                thumbnail: { url: videoInfo.thumbnail_url },
                color: 0xFF0000
            }]
        });
    } catch (err) {
        console.error("❌ Gagal kirim webhook:", err.message);
    }

    res.redirect('/');
});

// Next / Previous
app.get('/next', (req, res) => {
    if (currentIndex + 1 < playlist.length) currentIndex++;
    res.redirect('/');
});
app.get('/prev', (req, res) => {
    if (currentIndex - 1 >= 0) currentIndex--;
    res.redirect('/');
});

// Remove video
app.post('/remove', (req, res) => {
    const { index } = req.body;
    if (index >= 0 && index < playlist.length) {
        playlist.splice(index, 1);
        if (currentIndex >= playlist.length) currentIndex = playlist.length - 1;
    }
    res.json({ success: true });
});

// Reorder playlist
app.post('/reorder', (req, res) => {
    const { newOrder } = req.body;
    if (newOrder && newOrder.length === playlist.length) {
        playlist = newOrder.map(i => playlist[i]);
        currentIndex = 0;
    }
    res.json({ success: true });
});

// Current video + playlist
app.get('/current', (req, res) => {
    res.json({
        current: currentIndex >= 0 ? playlist[currentIndex] : null,
        playlist
    });
});

// Keep-alive ping
if (KEEP_ALIVE_URL) {
    setInterval(() => {
        axios.get(KEEP_ALIVE_URL).then(()=>console.log('✅ Keep-alive ping')).catch(()=>console.log('❌ Keep-alive gagal'));
    }, 5*60*1000);
}

module.exports = app;
