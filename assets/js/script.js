var timerEl = document.getElementById('timer-count');
var seeMain = document.getElementsByClassName('hide');
var question = document.getElementById('question');
var A = document.getElementById('A');
var B = document.getElementById('B');
var C = document.getElementById('C');
var D = document.getElementById('D');
var questionNumber = 0;
var playerScore = 0;


document.getElementById('confirm').addEventListener("click", function clickCounter (){
        questionNumber = questionNumber+1;
    
    }
);
document.getElementById('confirm').addEventListener("click", buildQuiz)

function showResults(){
    var seeMain = document.getElementById('main')
    if(seeMain.style.visibility === "visible")
    {
    seeMain.style.visibility = "hidden";
    }
    else
    {
    seeMain.style.visibility = "visible";
    }
    window.alert ("You've completed the game you've scored " + playerScore + " points! - click 'OK' to see leaderboard");
   };
function keepingScore () {
    playerScore=playerScore+1;
};

function buildQuiz (){
    if (questionNumber===0) {
        question.textContent = "question";
        A.textContent = "A";
        B.textContent = "B";
        C.textContent = "C";
        D.textContent = "D";
        var rightAnswer = D;
        if (rightAnswer.addEventListener("click", keepingScore)){}


    }
    else if (questionNumber===1) {
        question.textContent = "How are you today?";
        A.textContent = "meh";
        B.textContent = "good";
        C.textContent = "great";
        D.textContent = "groovy";
    }
    else if (questionNumber === 2){
        question.textContent = "Are you doing ok";
        A.textContent = "yes";
        B.textContent = "YES";
        C.textContent = "Yes";
        D.textContent = "mhmm";
    }
    else {
        showResults()
    }
}


function countdown() {
    var timerCount = 30;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timerCount > 1) {
        timerEl.textContent = timerCount;
        // Decrement `timeCount` by 1
        timerCount--;
      }
      else {
        // Once `timeCount` gets to 0
        timerEl.textContent = 'Time is Up!';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);

      }
    }, 1000);}

    function unhideMain(){
       var seeMain = document.getElementById('main')
       if(seeMain.style.visibility === "hidden")
       {
       seeMain.style.visibility = "visible";
       }
       else
       {
       seeMain.style.visibility = "hidden";
       }
      };

    function hideHeader(){
        var hideTheHeader = document.getElementById('header')
        if(hideTheHeader.style.visibility === "visible")
        {
            hideTheHeader.style.visibility = "hidden";
        }
        else
        {
            hideTheHeader.style.visibility = "visible";
        }
       };
 

document.querySelector("#ready").addEventListener("click", unhideMain);
document.querySelector("#ready").addEventListener("click", hideHeader);
document.querySelector("#ready").addEventListener("click", countdown);
document.querySelector("#ready").addEventListener("click", buildQuiz);



