let startButton = document.querySelector("#startStop");
let isRunning = false;
startButton.addEventListener('click', changeButton);

function changeButton() {
     startButton.innerHTML = "Stop";
   
}

