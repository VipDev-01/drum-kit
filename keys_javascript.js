
const soundDivs = document.querySelectorAll('.sound');

window.addEventListener('keydown', playSound);

soundDivs.forEach (sound => sound.addEventListener('transitionend', removeClass));

function playSound(e) {
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
