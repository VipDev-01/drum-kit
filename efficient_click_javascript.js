const soundDivs = document.querySelectorAll('.sound');

soundDivs.forEach(sound => { 

    sound.addEventListener('click', playSound);
    sound.addEventListener('transitionend', removeClass);
    
});

function playSound(e) {
    const audio = document.getElementById(this.classList[1]);
    audio.currentTime = 0;
    audio.play();

    const div = document.querySelector('.' + this.classList[1])
    div.classList.add('playing')
}


function removeClass(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing')
}
