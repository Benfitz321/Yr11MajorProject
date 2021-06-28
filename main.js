var teamOne = "Home";//team 1's name
var numOne = document.getElementById("numOne");
var nameOne = document.getElementById("nameOne");
var iOne = 0;
var teamTwo = "Guest";//team 2's name
var numTwo = document.getElementById("numTwo");
var nameTwo = document.getElementById("nameTwo");
var totalScoreOne = 0;//team 1's total score
var totalScoreTwo = 0;//team 2's total score
var totalFoulsOne = 0;//team 1's number of fouls
var totalFoulsTwo = 0;//team 2's number of fouls
var half = 1;
var timeOuts = 0;

var teamOnePlayer = []; //an array of objects each containing info on the players on team one
for(iOne = 0; iOne < 14; iOne++){
  teamOnePlayer[iOne] = {number: "", name: "", scores: 0, fouls: 0};
}
iOne = 0;
listOne.innerHTML = iOne + 1 + ".";

var teamTwoPlayer = []; //an array of objects each containing info on the players on team two
for(iTwo = 0; iTwo < 14; iTwo++){
  teamTwoPlayer[iTwo] = {number: "", name: "", scores: 0, fouls: 0};
}
iTwo = 0;
listTwo.innerHTML = iTwo + 1 + "."

resetGame();

//scoreboard functions
function addPoint(team) {
  var playerNumOne = document.getElementById("playerNumOne").value;//the player on team 1 who scored
  var pointsOne = document.getElementById("pointsOne").value;//points team 1 just scored
  var playerNumTwo = document.getElementById("playerNumTwo").value;//the player on team 1 who scored
  var pointsTwo = document.getElementById("pointsTwo").value;//points team 1 just scored
  if (team == 1) {
    if (allnumeric(playerNumOne)) {
      if(findPlayerOne(playerNumOne)) {//check there is a player with the entered number
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
      }
    } else {
      alert("Input the number of the player who scored");
    }
  } else { //if team = 2
    if (allnumeric(playerNumTwo)) {
      if(findPlayerTwo(playerNumTwo)) {
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
      if(findPlayerOne(foulOne) && findPlayerTwo(foulOppOne)) {
        totalFoulsOne++;
        console.log(teamOne + " " + foulOne + " fouled opposition " + foulOppOne);
      }
    } else {
      alert("Please input the number of the player who fouled the opponent and the number of the player who got fouled.");
    }
  } else { //if team = 2
    if (allnumeric(foulTwo) && allnumeric(foulOppTwo)) {
      if(findPlayerTwo(foulTwo) && findPlayerOne(foulOppTwo)) {
        totalFoulsTwo++;
        console.log(teamTwo + " " + foulTwo + " fouled opposition " + foulOppTwo);
      }
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
  document.getElementById("logTable").style.display = "block";
  document.getElementById("scoreboard").style.display = "none";
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

//log table functions
function nextPlayerOne() {
  if (allnumeric(numOne.value) && nameOne.value != "") {
    if (iOne < 14) {
       teamOnePlayer[iOne] = {number: numOne.value, name: nameOne.value, scores: 0, fouls: 0};
       iOne++;
       numOne.value = teamOnePlayer[iOne].number;
       nameOne.value = teamOnePlayer[iOne].name;
       listOne.innerHTML = iOne + 1 + ".";
    }
  } else {
    alert("please enter the number and name of the player")
  }
   
}

function lastPlayerOne() {
  if (iOne > 0) {
    teamOnePlayer[iOne] = {number: numOne.value, name: nameOne.value, scores: 0, fouls: 0};
    iOne = iOne - 1;
    numOne.value = teamOnePlayer[iOne].number;
    nameOne.value = teamOnePlayer[iOne].name;
    listOne.innerHTML = iOne + 1 + ".";
  }
}

function nextPlayerTwo() {
  if (allnumeric(numTwo.value) && nameTwo.value != "") {
    if (iTwo < 14) {
      teamTwoPlayer[iTwo] = {number: numTwo.value, name: nameTwo.value, scores: 0, fouls: 0};
      iTwo++;
      numTwo.value = teamTwoPlayer[iTwo].number;
      nameTwo.value = teamTwoPlayer[iTwo].name;
      listTwo.innerHTML = iTwo + 1 + ".";
    }
  } else {
    alert("please enter the number and name of the player")
  }
}

function lastPlayerTwo() {
  if (iTwo > 0) {
    teamTwoPlayer[iTwo] = {number: numTwo.value, name: nameTwo.value, scores: 0, fouls: 0};
    iTwo = iTwo - 1;
    numTwo.value = teamTwoPlayer[iTwo].number;
    nameTwo.value = teamTwoPlayer[iTwo].name;
    listTwo.innerHTML = iTwo + 1 + ".";
  }
}

function toScoreboard() { 
if (allnumeric(numOne.value) && nameOne.value != "") {//log the current data before proceding
     teamOnePlayer[iOne] = {number: numOne.value, name: nameOne.value, scores: 0, fouls: 0};
  } 
  if (allnumeric(numTwo.value) && nameTwo.value != "") {
    teamTwoPlayer[iTwo] = {number: numTwo.value, name: nameTwo.value, scores: 0, fouls: 0};
  }
  
  if (teamOnePlayer[4].number == "" || teamTwoPlayer[4].number == "") {//check both teams have minimum of 5 players before going
    alert("Both teams must have minimum 5 players");
  } else {
    for(iOne = 14; teamOnePlayer[iOne].number == ""; iOne = iOne - 1){//removes all blank values from teamOnePlayer
      teamOnePlayer.pop();
    }
    for(iTwo = 14; teamTwoPlayer[iTwo].number == ""; iTwo = iTwo - 1){//removes all blank values from teamTwoPlayer
      teamTwoPlayer.pop();
    }
    teamOnePlayer.sort(function(a,b){return a.number - b.number});
    teamTwoPlayer.sort(function(a,b){return a.number - b.number});
    
    document.getElementById("logTable").style.display = "none"; //hide the logTable
    document.getElementById("scoreboard").style.display = "block"; //show the scoreboard
    teamOne = document.getElementById(teamOneName.value);//assign the team names to the scoreboard
    document.getElementById("teamOne").innerHTML = teamOne;
    document.getElementById("logTeamOne").innerHTML = teamOne;
    teamTwo = document.getElementById(teamTwoName.value);
    document.getElementById("teamTwo").innerHTML = teamTwo;
    document.getElementById("logTeamTwo").innerHTML = teamTwo;
    updateScoreboard();
  }
}

function findPlayerOne(number) { //binary search for a player in team one based on their number
  var min = 1;//the first player in teamOnePlayer
  var max = teamOnePlayer.length;//the last player in teamOnePlayer
  var foundIt = false;
  while(foundIt == false && min <= max){
    var middle = (min + max)/2;
    if (teamOnePlayer[middle].number = number) {
      foundIt = true;
    } else if (number < Number(teamOnePlayer[middle].number)){
      max = middle - 1
    } else {
      min = middle + 1
    }
  }
  if (foundIt == true){
    iOne = middle;
  } else {
    alert("There is no player on team 1 with this number.");
    return false;
  }
}

function findPlayerTwo(number) {
  var min = 1;//the first player in teamTwoPlayer
  var max = teamTwoPlayer.length;//the last player in teamTwoPlayer
  var foundIt = false;
  while(foundIt == false && min <= max){
    var middle = (min + max)/2;
    if (teamTwoPlayer[middle].number = number) {
      foundIt = true;
    } else if (number < Number(teamTwoPlayer[middle].number)){
      max = middle - 1
    } else {
      min = middle + 1
    }
  }
  if (foundIt == true){
    iTwo = middle;
    return true;
  } else {
    alert("There is no player on team 2 with this number.");
    return false;
  }
}

function allnumeric(inputtxt){//check if inputed value is a number
  var numbers =/^[0-9]/;//this is a regular expression
  if(inputtxt.match(numbers) && inputtxt != ""){
    return true;
  } else {
    return false;//don't do anything
  }
}

//timer functions
function _timer(callback)
{
    var time = 0;     //  Timer starts at 0:00
    var mode = 1;     //   This will count the time down 
    var status = 0;    //    Displays whether the timer is running or stopping 
    var timer_id;    
    
    // starts the timer (e.g. when clicking 'reset' it will start from 20:00)
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
    
    // This will display the time of the current setting 
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
    
    // This method will render the time variable to hour:minute:second format
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