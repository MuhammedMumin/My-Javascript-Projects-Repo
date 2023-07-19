let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let resumeBtn = document.getElementById('resume');

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let pausedValues = {};

document.getElementById('resume').style.display = "none";
document.getElementById('reset').style.display = "none";
document.getElementById('stop').style.display = "none";

startBtn.addEventListener('click', function () {
  time = true;
  stopWatch();

  document.getElementById('stop').style.display = "block";
  document.getElementById('reset').style.display = "block";
  document.getElementById('resume').style.display = "none";
  document.getElementById('start').style.display = "none";
});

stopBtn.addEventListener('click', function () {
  time = false;
  pausedValues = {
    hour: hour,
    minute: minute,
    second: second,
  };

  document.getElementById('stop').style.display = "none";
  document.getElementById('resume').style.display = "block";

  showPausedValues();
});

resumeBtn.addEventListener('click', function () {
  time = true;
  hour = pausedValues.hour;
  minute = pausedValues.minute;
  second = pausedValues.second;
//   count = pausedValues.count;

  stopWatch();

  document.getElementById('start').style.display = "none";
  document.getElementById('reset').style.display = "block";
  document.getElementById('stop').style.display = "block";
  document.getElementById('resume').style.display = "none";
});

resetBtn.addEventListener('click', function () {
  time = false;
  hour = 0;
  minute = 0;
  second = 0;
  count = 0;
  document.getElementById("main").innerHTML = '';
  document.getElementById('hr').innerHTML = "00";
  document.getElementById('min').innerHTML = "00";
  document.getElementById('sec').innerHTML = "00";
  document.getElementById('count').innerHTML = "00";

  document.getElementById('stop').style.display = "none";
  document.getElementById('reset').style.display = "none";
  document.getElementById('resume').style.display = "none";
  document.getElementById('start').style.display = "block";
});

function stopWatch() {
  if (time) {
    count++;

    if (count == 100) {
      second++;
      count = 0;
    }

    if (second == 60) {
      minute++;
      second = 0;
    }

    if (minute == 60) {
      hour++;
      minute = 0;
      second = 0;
    }

    let hrString = hour;
    let minString = minute;
    let secString = second;
    let countString = count;

    if (hour < 10) {
      hrString = "0" + hrString;
    }

    if (minute < 10) {
      minString = "0" + minString;
    }

    if (second < 10) {
      secString = "0" + secString;
    }

    if (count < 10) {
      countString = "0" + countString;
    }

    document.getElementById('hr').innerHTML = hrString;
    document.getElementById('min').innerHTML = minString;
    document.getElementById('sec').innerHTML = secString;
    document.getElementById('count').innerHTML = countString;

    setTimeout(stopWatch, 10);
  }
}

function showPausedValues() {
  let div = document.createElement("div");
  div.innerHTML = 'Stopwatch Paused at: ' + pausedValues.hour + ' Hours: ' + pausedValues.minute + ' Minutes: ' + pausedValues.second + ' Seconds';
  div.style.paddingTop = '8px';
  div.style.display = 'flex';
  div.style.justifyContent = 'center';
  div.style.alignItems = 'center';
  document.getElementById("main").appendChild(div);
}
