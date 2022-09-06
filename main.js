//Variáveis

const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');
const randonNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

//Eventos

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

//Callbacks

function handleTryClick(event) {
    event.preventDefault();
    const inputNumber = document.querySelector('#inputNumber')

    if(Number(inputNumber.value) == randonNumber) {
        toggleScreen();
        document.querySelector('.screen2 h2').innerText = `acertou em ${xAttempts} tentativas`;
    }
    inputNumber.value = "";
    xAttempts++;
    console.log(xAttempts);
}

function handleResetClick() {
    toggleScreen();
    xAttempts = 1;
}

function toggleScreen(){
    screen1.classList.toggle('hide');
    screen2.classList.toggle('hide');
}