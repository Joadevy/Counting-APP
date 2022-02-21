const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');
const number = document.getElementById('number');
let sound = new Audio();

 increaseButton.addEventListener('click', () => {
    let actualNumber = parseInt(number.textContent);
    actualNumber++;
    number.textContent = actualNumber;
    addColorToNumber();
    sound.src = "assets/sound/increase.mp3";
    sound.play();
}); 

decreaseButton.addEventListener('click', () => {
    let actualNumber = parseInt(number.textContent);
    actualNumber--;
    number.textContent = actualNumber;
    addColorToNumber();
    sound.src = "assets/sound/decrease.mp3";
    sound.play();
});

reset.addEventListener('click', () => {
    number.textContent = 0;
    number.style.color = "antiquewhite";
    number.style.opacity = "60%";
    sound.src = "assets/sound/reset.mp3";
    sound.play();
});

const addColorToNumber = () => {
    let numbers = parseInt(number.textContent);
    console.log(numbers)
    if (numbers > 0) {
        number.style.color = "rgb(69, 163, 69)";
    } else if (numbers < 0){
        number.style.color = "rgb(168, 88, 88)";
    } else if (numbers == 0) {
        number.style.color = "antiquewhite";
        number.style.opacity = "60%";
    }
}