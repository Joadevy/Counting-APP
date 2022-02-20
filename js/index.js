const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');
const number = document.querySelector('.number');

increaseButton.addEventListener('click', () => {
    let actualNumber = parseInt(number.textContent);
    actualNumber++;
    number.textContent = actualNumber;
});

decreaseButton.addEventListener('click', () => {
    let actualNumber = parseInt(number.textContent);
    actualNumber--;
    number.textContent = actualNumber;
});

reset.addEventListener('click', () => {
    number.textContent = 0;
});
