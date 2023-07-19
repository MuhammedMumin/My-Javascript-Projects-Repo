var time_in_hours;
var current_time = Date.parse(new Date());
var deadline = new Date(current_time + time_in_hours*60*1000);
var endtime = new Date();

var show;
var list = [];

var time_in_hours = 0; //

    document.getElementById('stop').style.display = "none";
    document.getElementById('reset').style.display = "none";
    document.getElementById('pause').style.display = "none"; 
    document.getElementById('resume').style.display = "none";
    document.getElementById('start').style.display = "none";
    
function startCountdown() {
    end_clock()
  var durationInput = document.getElementById("durationInput");

  time_in_hours = durationInput.value;

 
  if (time_in_hours <= 0) {
    alert("Please enter a valid duration in minutes.");
    document.getElementById('pause').style.display = "none";
    document.getElementById('reset').style.display = "none";
    document.getElementById('stop').style.display = "none";
    return;
    
  }
  

  current_time = Date.parse(new Date());
  deadline = new Date(current_time + time_in_hours * 60 * 1000);
  run_clock("clockdiv", deadline);
}




function time_remaining(endtime){
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor( (t/1000) % 60 );
	var minutes = Math.floor( (t/1000/60) % 60 );
	var hours = Math.floor( (t/(1000*60*60)) % 24 );
	var days = Math.floor( t/(1000*60*60*24) );

    var s = endtime.getHours();

    this.show = {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds }
	return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds };
}
// var stage = 'start'
var timeinterval;
function run_clock(id,endtime){
	var clock = document.getElementById(id);
	function update_clock(){
		var t = time_remaining(endtime);
		// clock.innerHTML = 'hours: ' +t.hours+' minutes: '+t.minutes+' seconds: '+t.seconds;
        clock.innerHTML = t.days + ' days:'+ t.hours+' hours: ' +t.minutes+' minutes: '+t.seconds+' seconds ' ;
		if(t.total<=0){ 
            clearInterval(timeinterval);
            clock.innerHTML = "Countdown Ended";
            document.getElementById('pause').style.display = "none";
            document.getElementById('start').style.display = "none";
            document.getElementById('stop').style.display = "none";
            document.getElementById('reset').style.display = "none";
         }
	}
	update_clock(); // run function once at first to avoid delay
	timeinterval = setInterval(update_clock,1000);
    console.log(timeinterval, "my time interval", endtime)
}
// run_clock('clockdiv',deadline);
// return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};


var paused = false; // is the clock paused?
var time_left; // time left on the clock when paused
// document.getElementById('pause').style.display = "block";       // is
// document.getElementById('resume').style.display = "none";
// document.getElementById('start').style.display = "none";



function pause_clock(){
    this.list = []   //this stops the list from looping over again when I pause 
    paused = true
    document.getElementById('pause').style.display = "none";        
    document.getElementById('resume').style.display = "block";

    clearInterval(timeinterval); // stop the clock
	time_left = time_remaining(deadline).total; // preserve remaining time

    this.list.push(this.show)
    this.list.forEach(element => {
        var div = document.createElement("div");
        div.innerHTML = 'Countdown Paused: ' + new Date().toLocaleTimeString() + ' At ' + element.hours + ' Hours: ' + element.minutes + ' Minutes: ' + element.seconds +' Seconds '
        // div.style.color = 'maroon';
        div.style.paddingTop = '6px';
        div.style.display = 'flex';
        div.style.justifyContent = 'center';
        div.style.alignItems = 'center';
        // div.style.background = 'red';
        document.getElementById("main").appendChild(div);
    });
    
    // this.stage = 'paused'
}

function resume_clock(){
    // paused = false
    document.getElementById('pause').style.display = "block";
    document.getElementById('resume').style.display = "none";
    // update the deadline to preserve the amount of time remaining
		deadline = new Date(Date.parse(new Date()) + time_left);

		// start the clock
		run_clock('clockdiv',deadline);
}

    
function reset_clock() {
    paused = false
    // list = []
    // show = {}
    document.getElementById("main").innerHTML = '';
    document.getElementById('pause').style.display = "block";
    document.getElementById('resume').style.display = "none";
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";
    document.getElementById('stop').style.display = "block";

    var clock = document.getElementById('clockdiv');

    clearInterval(timeinterval); // stop the clock
    // time_in_hours = time_in_hours
    current_time = Date.parse(new Date());
    deadline = new Date(current_time + time_in_hours*60*1000);
    run_clock('clockdiv', deadline)
    // this.stage = 'reset'
}
function stop_clock(){
        document.getElementById("main").innerHTML = '';
        var clock = document.getElementById('clockdiv');
        function stop_clock(){
            document.getElementById('resume').style.display = "none";
            document.getElementById('pause').style.display = "none";        
            document.getElementById('start').style.display = "none";
            document.getElementById('reset').style.display = "none";
            document.getElementById('stop').style.display = "none";
            // clock.innerHTML = "'hours: ' + 0 +' minutes: '+ 0 +' seconds: '+ 0";  This or the next line
            clock.innerHTML = "Countdown Stopped";
            clearInterval(timeinterval)

            
        }
        stop_clock() 
}

function end_clock(){
    document.getElementById("main").innerHTML = '';
    // var clock = document.getElementById('clockdiv');
    function end_clock(){
        document.getElementById('resume').style.display = "none";
        document.getElementById('pause').style.display = "block";        
        document.getElementById('reset').style.display = "block";
        document.getElementById('start').style.display = "none";
        document.getElementById('stop').style.display = "block";
        // clock.innerHTML = "'hours: ' + 0 +' minutes: '+ 0 +' seconds: '+ 0";  This or the next line
        clearInterval(timeinterval)
    }
    end_clock() 
}

// handle pause and resume button clicks
// document.getElementById('pause').onclick = pause_clock;
// document.getElementById('resume').onclick = resume_clock;
// document.getElementById('reset').onclick = reset_clock;








