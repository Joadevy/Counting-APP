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
    number.classList.replace("red","neutral");
    number.classList.replace("green","neutral");
    sound.src = "assets/sound/reset.mp3";
    sound.play();
});

const addColorToNumber = () => {
    let numbers = parseInt(number.textContent);
    console.log(numbers)
    if (numbers > 0) {
        number.classList.replace("neutral","green");
    } else if (numbers < 0){
        number.classList.replace("neutral","red");
    } else if (numbers == 0) {
        number.classList.replace("red","neutral");
        number.classList.replace("green","neutral");
    }
}

 