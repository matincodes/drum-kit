// Play Sound according to key pressed
const playSound = (event) => {
    const audio = document.querySelector(`audio[data-key="${event.which}"]`)
    const key = document.querySelector(`.key[data-key="${event.which}"]`)
    if(!audio) return // stops the function from  running
    audio.currentTime = 0; //rewind to the start 
    audio.play();
    
    key.classList.add("playing")
}

function removeTransition(event) {
     if(event.propertyName != "transform") return //skip if property is ot transform
    this.classList.remove("playing")
}

const keys = document.querySelectorAll(".key")

for (let key of keys) {
   key.addEventListener('transitionend', removeTransition)
}

window.addEventListener('keydown', playSound)