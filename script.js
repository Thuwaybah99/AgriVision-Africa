const button=document.getElementById('menuButton');const nav=document.getElementById('navLinks');if(button&&nav){button.addEventListener('click',()=>{const expanded=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!expanded));nav.classList.toggle('open',!expanded)});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');button.setAttribute('aria-expanded','false')}));}
// Use the repository's root video.mp4 for reliable same-origin GitHub Pages playback.
// If it is absent, try the public raw URL, then the packaged conceptual fallback.
const player=document.getElementById('agriVideo');
if(player){
  const sources=['video.mp4','https://raw.githubusercontent.com/Thuwaybah99/AgriVision-Africa/main/video.mp4','assets/agri-demo.mp4'];
  let sourceIndex=0;
  const showVideoError=()=>{
    if(document.querySelector('.video-error'))return;
    const msg=document.createElement('p');
    msg.className='video-error';
    msg.textContent='Video unavailable here. Please use the GitHub link below the player.';
    player.insertAdjacentElement('afterend',msg);
  };
  player.addEventListener('error',()=>{
    if(sourceIndex>=sources.length-1){showVideoError();return;}
    sourceIndex++;
    player.src=sources[sourceIndex];
    player.load();
  });
  // Set src on <video> (instead of relying on source tags), so media errors
  // reach this element and activate the fallback reliably.
  player.src=sources[0];
  player.load();
}

// If a public GitHub image is moved or renamed, show a working source link instead of a broken-image icon.
document.querySelectorAll('img[data-source-link]').forEach(img => {
  img.addEventListener('error', () => {
    const source = img.dataset.sourceLink;
    const message = document.createElement('div');
    message.className = 'asset-unavailable';
    const label = document.createElement('span');
    label.textContent = 'Project image could not be loaded here.';
    const link = document.createElement('a');
    link.href = source;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'Open image on GitHub ↗';
    message.append(label, link);
    img.replaceWith(message);
  }, {once:true});
});
