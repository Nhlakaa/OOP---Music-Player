class Player {
    constructor(song){
        this.song = song;
    }


    getMinutes = len => {
        let mins = Math.floor(len / 60);
        let secs = Math.floor(len % 60);
            if (secs < 10){
                secs = `0${Math.floor(len % 60)}`;
            }
        let duration = mins + ":"+ secs;
        return duration
    }

    play = () => {
       this.song.play();

        this.song.addEventListener('play', () => {
            setInterval(() => {
                currentTime.textContent = this.getMinutes(this.song.currentTime);
                progress.value = this.song.currentTime;
                progress.max = this.song.duration;
            }, 1000);
        
            duration.textContent = this.getMinutes(this.song.duration);
        });
    }

    pause = () => {
        this.song.pause();
    }

    forward = () => {
        this.song.currentTime += 10 ;
    }

    back = () => {
        this.song.currentTime -= 10 ;
    }
}


const music = new Player(track);

play.addEventListener('click', () => {
    music.play();
})

pause.addEventListener('click', () => {
    music.pause();
})

forward.addEventListener('click', () => {
    music.forward();
})

back.addEventListener('click', () => {
    music.back();
})
