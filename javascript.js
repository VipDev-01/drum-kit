const container = document.getElementById('container');

const audioA = document.getElementById('a')
const audioB = document.getElementById('b')
const audioC = document.getElementById('c')
const audioD = document.getElementById('d')
const audioE = document.getElementById('e')
const audioF = document.getElementById('f')
const audioG = document.getElementById('g')
const audioH = document.getElementById('h')
const audioI = document.getElementById('i')

const soundA = document.querySelector('.a')
const soundB = document.querySelector('.b')
const soundC = document.querySelector('.c')
const soundD = document.querySelector('.d')
const soundE = document.querySelector('.e')
const soundF = document.querySelector('.f')
const soundG = document.querySelector('.g')
const soundH = document.querySelector('.h')
const soundI = document.querySelector('.i')



const delay = 250;

document.addEventListener('keydown', function (event) {

    switch (event.key) {

        case 'a':
            audioA.play();
            style(soundA);
            break;


        case 'b':
            audioB.play();
            style(soundB);
            break;

        case 'c':
            audioC.play();
            style(soundC);
            break;

        case 'd':
            audioD.play();
            style(soundD);
            break;

        case 'e':
            audioE.play();
            style(soundE);
            break;

        case 'f':
            audioF.play();
            style(soundF);
            break;

        case 'g':
            audioG.play();
            style(soundG);
            break;

        case 'h':
            audioH.play();
            style(soundH);
            break;

        case 'i':
            audioI.play();
            style(soundI);
            break;

    }

});

function style(sound) {
    sound.style.backgroundColor = 'lightblue'

    setTimeout(() => {
        sound.style.backgroundColor = 'rgb(116, 167, 94'
    }, delay);
}





