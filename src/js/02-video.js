import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(e) {
    localStorage.setItem("videoplayer-current-time", e.seconds);
    
    if (e.seconds === e.duration) {
        localStorage.removeItem("videoplayer-current-time");
    }
}

player.setCurrentTime(localStorage.getItem("videoplayer-current-time") || 0);