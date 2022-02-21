let value = 0; // It tracks the number based on the buttons the user presses.
const buttons = document.querySelectorAll('.cta');
const number = document.getElementById('number');
let sound = new Audio();

// Function for handle the sounds of the buttons.
const playSound = (url) => {
    sound.src = url;
    sound.play();
}

// Adding for each button the listener and functions based in event.target.id
buttons.forEach(btn => {
    btn.addEventListener('click',(e) => {
        if(e.target.id == 'decrease') {
            value--;
            playSound("assets/sound/decrease.mp3");
        } else if(e.target.id == 'increase') {
            value++;
            playSound("assets/sound/increase.mp3")
        } else if(e.target.id == 'reset') {
            value = 0;
            playSound("assets/sound/reset.mp3");
        }

        // Adding the colors according the value <,> or = than 0.
        if(value > 0){
            number.style.color = "rgb(69, 163, 69)";
        } else if (value<0) {
            number.style.color = "rgb(168, 88, 88)";
        } else{
            number.style.color = "antiquewhite";
            number.style.opacity = "60%";
        }

        // Updating the value on the screen.
        number.textContent = value;
    })
})

/* First way that I achieved the result expected, less optimal.

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
    if (numbers > 0) {
        number.style.color = "rgb(69, 163, 69)";
    } else if (numbers < 0){
        number.style.color = "rgb(168, 88, 88)";
    } else if (numbers == 0) {
        number.style.color = "antiquewhite";
        number.style.opacity = "60%";
    }
}
 */