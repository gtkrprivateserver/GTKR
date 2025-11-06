export class MusicQueue {
    constructor() {
        this.songs = [];
    }
    add(song) {
        this.songs.push(song);
    }
    next() {
        return this.songs.shift();
    }
    list() {
        return this.songs;
    }
}
