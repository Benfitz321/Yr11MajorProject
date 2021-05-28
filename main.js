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