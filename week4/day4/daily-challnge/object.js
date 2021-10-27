class Video {
    
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    };
    watch () {
        console.log(`${this.uploader} watched all the ${this.time} seconds of ${this.title}!`);
    };
};

let film = new Video ("game scuid", "haim", 10589);
film.watch();

let action = new Video("armagedon", "david", 2900);
action.watch();

