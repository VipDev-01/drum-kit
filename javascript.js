const container = document.getElementById('container');

const audioA = document.getElementById('a')
const audioS = document.getElementById('s')
const audioD = document.getElementById('d')
const audioF = document.getElementById('f')
const audioG = document.getElementById('g')
const audioH = document.getElementById('h')
const audioJ = document.getElementById('j')
const audioK = document.getElementById('k')
const audioL = document.getElementById('l')

const soundA = document.querySelector('.a')
const soundS = document.querySelector('.s')
const soundD = document.querySelector('.d')
const soundF = document.querySelector('.f')
const soundG = document.querySelector('.g')
const soundH = document.querySelector('.h')
const soundJ = document.querySelector('.j')
const soundK = document.querySelector('.k')
const soundL = document.querySelector('.l')



function playsound(e) {
    const audio = document.querySelector()
}


const delay = 0;

document.addEventListener('keydown', function (event) {

    switch (event.key) {

        case 'a':
            audioA.currentTime = 0;
            audioA.play();
            style(soundA);
            break;


        case 's':
            audioS.currentTime = 0;
            audioS.play();
            style(soundS);
            break;

        case 'd':
            audioD.currentTime = 0;
            audioD.play();
            style(soundD);
            break;

        case 'f':
            audioF.currentTime = 0;
            audioF.play();
            style(soundF);
            break;

        case 'g':
            audioG.currentTime = 0;
            audioG.play();
            style(soundG);
            break;

        case 'h':
            audioH.currentTime = 0;
            audioH.play();
            style(soundH);
            break;

        case 'j':
            audioJ.currentTime = 0;
            audioJ.play();
            style(soundJ);
            break;

        case 'k':
            audioK.currentTime = 0;
            audioK.play();
            style(soundK);
            break;

        case 'l':
            audioL.currentTime = 0;
            audioL.play();
            style(soundL);
            break;

    }

});

function style(sound) {
    sound.style.backgroundColor = 'lightblue'

    setTimeout(() => {
        sound.style.backgroundColor = 'rgb(116, 167, 94'
    }, delay);
}





