var seconds = 00;
var tens = 00;
var min = 00;
var appendMin = document.getElementById("min")
var appendSeconds = document.getElementById("seconds");
var appendTens = document.getElementById("tens");
var buttonStart = document.getElementById("button-start");
var buttonPause = document.getElementById("button-pause");
var buttonReset = document.getElementById("button-reset");
var interval; // to store timer value

// this function will run when click on start

function startTimer() {
  tens++;
  if(tens < 9) {
    appendTens.innerHTML = "0" + tens;
  };

  if(tens > 9){
    appendTens.innerHTML = tens;
  };

  if(tens > 99) {
   seconds++;
   appendSeconds.innerHTML = "0" + seconds;
   tens = 0;
   appendTens.innerHTML = "0" + 0;
  };

  if(seconds > 9) {
    appendSeconds.innerHTML = seconds;
  };
  if(seconds > 60) {
    min++;
    appendMin.innerHTML = "0" + min;
    seconds = 0;
    appendSeconds.innerHTML = "0" + 0;
  }
  if (min > 9) {
    appendMin.innerHTML = min;
  }

};

buttonStart.onclick = function() {
  interval = setInterval(startTimer);
};
buttonPause.onclick = function() {
  clearInterval(interval);
}
buttonReset.onclick = function () {
  clearInterval(interval);
  tens = "00";
  seconds = "00";
  min = "00"
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
  appendMin.innerHTML = min
} 