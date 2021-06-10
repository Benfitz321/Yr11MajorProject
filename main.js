var teamOne = "Home";//team 1's name
document.getElementById("teamOne").innerHTML = teamOne;
document.getElementById("logTeamOne").innerHTML = teamOne;
var teamTwo = "Guest";//team 2's name
document.getElementById("teamTwo").innerHTML = teamTwo;
document.getElementById("logTeamTwo").innerHTML = teamTwo;
var totalScoreOne = 0;//team 1's total score
var totalScoreTwo = 0;//team 2's total score
var totalFoulsOne = 0;//team 1's number of fouls
var totalFoulsTwo = 0;//team 2's number of fouls
var half = 1;
var timeOuts = 0;


resetGame();

function addPoint(team) {
  var playerNumOne = document.getElementById("playerNumOne").value;//the player on team 1 who scored
  var pointsOne = document.getElementById("pointsOne").value;//points team 1 just scored
  var playerNumTwo = document.getElementById("playerNumTwo").value;//the player on team 1 who scored
  var pointsTwo = document.getElementById("pointsTwo").value;//points team 1 just scored
  if (team == 1) {
    if (allnumeric(playerNumOne)) {
      if ((pointsOne >= 1)&&(pointsOne <=3)) {
        totalScoreOne = totalScoreOne + Number(pointsOne);
        if (pointsOne == 1) {
          console.log(teamOne + " number " + playerNumOne + " scored " + pointsOne + " point")
        } else {
          console.log(teamOne + " number " + playerNumOne + " scored " + pointsOne + " points")
        }
      } else {
        alert("Please input 1, 2 or 3 points");
      }
    } else {
      alert("Input the number of the player who scored");
    }
  } else {
    if (allnumeric(playerNumTwo)) {
      if ((pointsTwo >= 1)&&(pointsTwo <=3)) {
        totalScoreTwo = totalScoreTwo + Number(pointsTwo);
        if (pointsTwo == 1) {
          console.log(teamTwo + " number " + playerNumTwo + " scored " + pointsTwo + " point");
        } else {
          console.log(teamTwo + " number " + playerNumTwo + " scored " + pointsTwo + " points");
        }
      } else {
        alert("Please input 1, 2 or 3 points");
      }
    } else {
      alert("Input the number of the player who scored");
    }
  }
  updateScoreboard();
}

function addFoul(team) {
  var foulOne = document.getElementById("foulOne").value;//The player on team 1 who foulled an opponent
  var foulOppOne = document.getElementById("foulOppOne").value;//The opponent who got fouled
  var foulTwo = document.getElementById("foulTwo").value;
  var foulOppTwo = document.getElementById("foulOppTwo").value;
  
  if (team == 1) {
    if (allnumeric(foulOne) && allnumeric(foulOppOne)) {
      totalFoulsOne++;
      console.log(teamOne + " " + foulOne + " fouled opposition " + foulOppOne);
    } else {
      alert("Please input the number of the player who fouled the opponent and the number of the player who got fouled.");
    }
  } else {
    if (allnumeric(foulTwo) && allnumeric(foulOppTwo)) {
      totalFoulsTwo++;
      console.log(teamTwo + " " + foulTwo + " fouled opposition " + foulOppTwo);
    } else {
      alert("Please input the number of the player who fouled the opponent and the number of the player who got fouled.");
    }
  }
  updateScoreboard();
}

function addTimeOut() {
    timeOuts++
    updateScoreboard();
}

function resetGame(){
  totalScoreOne = 0;
  totalScoreTwo = 0;
  totalFoulsOne = 0;
  totalFoulsTwo = 0;
  half = 1;
  timeOuts = 0;
  updateScoreboard();
}

function updateScoreboard() {//when one of these variables change, change the scoreboard to match
  document.getElementById("totalScoreOne").innerHTML = totalScoreOne;
  document.getElementById("totalScoreTwo").innerHTML = totalScoreTwo;
  document.getElementById("totalFoulsOne").innerHTML = "Fouls: " + totalFoulsOne;
  document.getElementById("totalFoulsTwo").innerHTML = "Fouls: " + totalFoulsTwo;
  document.getElementById("TimeOuts").innerHTML = "Time outs: " + timeOuts;
  if (half == 1) {
    document.getElementById("half").innerHTML = "1st half";
  } else {
    document.getElementById("half").innerHTML = "2nd half";
  }
}

function allnumeric(inputtxt){
  var numbers =/^[0-9]/;//this is a regular expression
  if(inputtxt.match(numbers)){
    return true;
  } else {
    return false;//don't do anything
  }
}
function _timer(callback)
{
    var Time = 0;     //  Timer starts at 0:00
    var Countdown = 1;     //   This will count the time down 
    var checkTimer = 0;    //    Displays whether the timer is running or stopping 
    var countdownInterval;    //this will work alongside the function (interval) ensuring that the timer has a 1 second interval (1000 milliseconds) 
    
    // starts the timer (via clicking 'start') (e.g. when clicking 'reset' it will start from 20:00)
    this.start = function(interval)
    {
        interval = (typeof(interval) !== 'undefined') ? interval : 1000;
 
        if(status == 0)
        {
            status = 1;
            timer_id = setInterval(function()
            {
                switch(mode)
                {
                    default:
                    if(time)
                    {
                        time--;
                        generateTime();
                        if(typeof(callback) === 'function') callback(time);
                    }
                    break;
                    
                    case 1:
                    if(time < 106400)
                    {
                        time++;
                        generateTime();
                        if(typeof(callback) === 'function') callback(time);
                    }
                    break;
                }
            }, interval);
        }
    }
    
    //  This will stop/pause the timer (using code: timer.stop)
    this.stop =  function()
    {
        if(status == 1)
        {
            status = 0;
            clearInterval(timer_id);
        }
    }
    
    // This will reset the timer from its current point (e.g. 0:00) back to 20:00- this should be used when starting the second half.
    this.reset =  function(sec)
    {
        sec = (typeof(sec) !== 'undefined') ? sec : 0;
        time = sec;
        generateTime(time);
    }
    
    // This will count the timer back up to its original state (20:00) and will countdown to 0:00
    this.mode = function(tmode)
    {
        mode = tmode;
    }
    
    // This will display the time of the countdown
    this.getTime = function()
    {
        return time;
    }
    
    
    this.getMode = function()
    {
        return mode;
    }
    
    
    this.getStatus
    {
        return status;
    }
    
    // This serves as the formatting for the timer (00- minutes :00- seconds)
    function generateTime()
    {
        var second = time % 60;
        var minute = Math.floor(time / 60) % 60;
        
        second = (second < 10) ? '0'+second : second;
        minute = (minute < 10) ? '0'+minute : minute;
        
        $('div.timer span.second').html(second);
        $('div.timer span.minute').html(minute);
    }
}
var timer;
 
$(document).ready(function(e) 
{
    timer = new _timer 
    (
        function(time)
        {
            if(time == 0)
            {
                timer.stop();
                alert('half time!');//shows the players that half time has been achieved
            }
        }
    );
    timer.reset(0);//use the reset button to refresh the time (ready for second half)
    timer.mode(0);
});