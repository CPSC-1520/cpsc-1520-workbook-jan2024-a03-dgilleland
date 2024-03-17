// Create a stopwatch object
let log = console.log;
const StopWatch = function() {
  let isStart = false;
  let startCount = 0;
  let stopCount = 0;
  let durationCount = 0;
  let preDuration = 0;

  // Start method
  this.start = function() {
    if (isStart === true) {
      log("Stopwatch is already started");
    } else if (startCount === 0) {
      let dt = new Date();
      startCount = dt.getTime();
      isStart = true;
      log("Stopwatch has been started");
    } else {
      let dt = new Date();
      startCount = dt.getTime();
      isStart = true;
      log("Stopwatch has been continued");
    }
  };

  // Stop method
  this.stop = function() {
    if (isStart === false) {
      log("Stopwatch is not started");
    } else {
      let dt = new Date();
      stopCount = dt.getTime();
      isStart = false;
      log("Stopwatch has been stoped");
    }
  };

  // Duration method
  this.duration = function() {
    durationCount = (stopCount - startCount) / 1000;
    if (preDuration === 0) {
      preDuration = durationCount;
    } else {
      durationCount += preDuration;
    }

    if (durationCount > 60) {
      const dur = durationCount / 60;
      return Number(dur.toFixed(1)) + " Minutes";
    } else {
      return Number(durationCount.toFixed(1)) + " Seconds";
    }
  };

  // Reset method
  this.reset = function() {
    durationCount = startCount = stopCount = preDuration = 0;
    isStart = false;
  };
}

// Create a new stopwatch instance
let stopwatch = new StopWatch();

// Get the Html elements
let stopwatchDisplay = document.querySelector('.stopwatch');
let mainButton = document.getElementById('main-button');
let clearButton = document.getElementById('clear-button');

// Update the stopwatch display
const updateDisplay = function() {
  stopwatchDisplay.textContent = stopwatch.duration();
}

// Handle the main button click
mainButton.addEventListener('click', function() {
  if (mainButton.textContent === 'Start') {
    stopwatch.start();
    mainButton.textContent = 'Stop';
  } else {
    stopwatch.stop();
    mainButton.textContent = 'Start';
  }
  updateDisplay();
});

// Handle the clear button click
clearButton.addEventListener('click', function() {
  stopwatch.reset();
  updateDisplay();
});
