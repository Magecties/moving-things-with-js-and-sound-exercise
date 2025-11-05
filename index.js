"use strict";

const dodger = document.getElementById("dodger");

const movement = document.getElementById("movement");


/* variabler til lyde der skal afspilles */

const movementsound = new Audio();

movementsound.src = "audio/movement_sound.m4a";


const gameoversound = new Audio();

gameoversound.src = "audio/gameover_sound.m4a";


//dodger.style.backgroundColor = "#FF69B4";

dodger.style.backgroundImage = 'url("img/pacman.png")';
dodger.style.backgroundSize = "contain";
dodger.style.backgroundRepeat = "no-repeat";

//dodger.style.bottom = "100px";

// dodger.style.left = "0px";



document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
     console.log(e.key)
  }
 
  if (e.key === "ArrowRight") {
    moveDodgerRight();
     console.log(e.key)
}

 if (e.key === "ArrowUp") {
    moveDodgerUp();
    console.log(e.key)
}

if (e.key === "ArrowDown") {
    moveDodgerDown();
    console.log(e.key)
}
});

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
     playSoundOnMovement()
  }
  else if (left >= -180) {
  playGameOverSound()
}}


  function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 360 ) {
    dodger.style.left = `${left + 1}px`;
     playSoundOnMovement()
     console.log(left)
  }
  else if (left >= 360) {
  playGameOverSound()
}}


function moveDodgerUp() { 
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);
  if (bottom < 380) {
     dodger.style.bottom = `${bottom + 1}px`;
      playSoundOnMovement()
  }
  else {
  playGameOverSound()
}}



function moveDodgerDown() { 
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);
  if (bottom > 0) {
     dodger.style.bottom = `${bottom - 1}px`;
     playSoundOnMovement()
  }
  else if (bottom <= 0) {
  playGameOverSound()
}}


function playSoundOnMovement() {

    movementsound.play();

}




function playGameOverSound () {

    movementsound.currentTime = 0;
    gameoversound.play();

}