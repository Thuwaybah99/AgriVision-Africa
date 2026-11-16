const button=document.getElementById('menuButton');const nav=document.getElementById('navLinks');if(button&&nav){button.addEventListener('click',()=>{const expanded=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!expanded));nav.classList.toggle('open',!expanded)});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');button.setAttribute('aria-expanded','false')}));}
// YouTube video is embedded directly in index.html.

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
