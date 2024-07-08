let startButton = document.querySelector("#startStop");
startButton.addEventListener('click', changeButton);

// declarar variable

let isStart = true;

function changeButton() {
     
     if (isStart) {
          startButton.innerHTML = "Stop";
     } else {
          startButton.innerHTML = "Start";
     }
    
     isStart = !isStart;
   }


