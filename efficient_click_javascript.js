const soundDivs = document.querySelectorAll('.sound');

window.addEventListener('keydown', playSoundKey);

soundDivs.forEach(sound => { 

    sound.addEventListener('click', playSoundClick);
    sound.addEventListener('transitionend', removeClass);
    
});

function playSoundClick(e) {

    const audio = document.getElementById(this.classList[1]);
    audio.currentTime = 0;
    audio.play();

    const div   = document.querySelector('.' + this.classList[1])
    this.classList.add('playing')
}

function playSoundKey(e) {
    const audio = document.getElementById(e.key);
    if (audio == null) return;
    audio.currentTime = 0;
    audio.play();

    const div = document.querySelector('.' + e.key)
    div.classList.add('playing')
}


function removeClass(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing')
}
