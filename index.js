'use strict';
let random
const create_random={
     random = Math.trunc(Math.random() * 20 + 1);
}
create_random()
let score = 10;

// constants

const inputNumber = document.querySelector("input");
const randomNumber = document.querySelector(".random-number");
const checkerBtn = document.querySelector(".check");
const notification = document.querySelector(".notification");
const scoreSpan = document.querySelector(".scoreSpan");
const highScore = document.querySelector(".highSpan");
const reset = document.querySelector(".reset");



checkerBtn.addEventListener("click", ()=>{
    let val=inputNumber.value;
    if(val > random){
        notification.textContent="TOO HIGH";
        scoreSpan.textContent=--score;
        inputNumber.value="";
    }
    else if(val < random){
        notification.textContent="TOO LOW";
        scoreSpan.textContent=--score;
        inputNumber.value="";
    }
    else{
        highScore.textContent=score;
        notification.textContent="YOU ARE WIN";
        document.body.style.backgroundColor="green";
        randomNumber.textContent=random;
    }
})

inputNumber.addEventListener("change",()=>{
    let val=inputNumber.value;
    if(val <21 && val > 0) {
        checkerBtn.disabled=false;
    }
    else{ 
        checkerBtn.disabled=true;
    }
})

reset.addEventListener("click",()=>{
     notification.textContent="";
     document.body.style.backgroundColor="indigo";
     randomNumber.textContent="?";
     scoreSpan.textContent="10";
     score=10;
     inputNumber.value="";
     checkerBtn.disabled=true;
     create_random()
})


