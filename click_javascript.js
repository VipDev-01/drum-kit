window.addEventListener('click',function(e) {

    if (e.target.classList[0] == 'sound') {
        playSound(e.target.classList[1]);
    }
    

})

function playSound(name) {
    //console.log(name);
    const audio = document.getElementById(name)
    audio.currentTime = 0;
    audio.play();

    transform(name);
}

function transform(className) {
    const div = document.querySelector('.' + className)
    div.style.backgroundColor = 'lightblue'
    
    setTimeout(() => {
        div.style.backgroundColor = 'rgb(116, 167, 94'
    }, delay);
}


