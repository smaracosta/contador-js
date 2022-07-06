var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;
function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
function increment2(){
    currentNumber = currentNumber + 2;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
function decrement2(){
    currentNumber = currentNumber - 2;
    currentNumberWrapper.innerHTML = currentNumber;
}

function reset(){
    currentNumber = currentNumber = 0;
    currentNumberWrapper.innerHTML = currentNumber;
}