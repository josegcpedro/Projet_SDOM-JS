const bg = document.getElementById('particles-js');


document.addEventListener("keydown", function(event) {
    bg.style.backgroundColor = getRandomColor();
    let key = event.key;
    playMusic(key);
})

function playMusic(key){
    switch(key){
        case "d":
        var audio = new Audio("Kick1.wav")
        audio.play();
        break
        case "a":
        var audio = new Audio ("clap1.wav")
        audio.play();
        break
        case "s":
        var audio = new Audio ("Kick2.mp3")
        audio.play();
        break
        case "z":
        var audio = new Audio ("kick.mp3")
        audio.play();
        break
    }
}
function getRandomColor(){
    let color = "#";
    const letters = "0123456789ABCDEF";
    for(let i=0; i<6;i++){
        color = color + letters[Math.floor(Math.random()*16)]

    }
    return color;
}



