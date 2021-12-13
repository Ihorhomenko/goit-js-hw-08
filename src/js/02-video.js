import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

function timeUpdate(data) {
  const seconds = data.seconds;
  localStorage.setItem('videoplayer-current-time', seconds, 1000);
}

player.on('timeupdate', throttle(timeUpdate, 1000));

const currentTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(currentTime);
