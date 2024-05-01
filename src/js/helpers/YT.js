const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

function YTIframe(event) {
  const videoId = event.getAttribute('data-video')
  const playerId = event.getAttribute('data-id');

  player = new YT.Player(playerId, {
    videoId: videoId,
    playerVars: {
      autoplay: 0,
      controls: 1,
      playsinline: 1,
      mute: 1,
    },
    events: {
      onReady: onPlayerReady,
    },
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

export default YTIframe;