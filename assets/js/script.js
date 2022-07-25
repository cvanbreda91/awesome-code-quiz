var timerEl = document.getElementById('timer-count');
var seeMain = document.getElementsByClassName('hide');
var question = document.getElementById('question');
var A = document.getElementById('A');
var B = document.getElementById('B');
var C = document.getElementById('C');
var D = document.getElementById('D');



var questionNumber = 0;

console.log(document.getElementById('confirm'))

document.getElementById('confirm').addEventListener("click", function clickCounter (){
        questionNumber = questionNumber+1;
        console.log (questionNumber)
    
    }
);document.getElementById('confirm').addEventListener("click", buildQuiz)



function buildQuiz (){
    if (questionNumber===0) {
        question.textContent = "question";
        A.textContent = "A";
        B.textContent = "B";
        C.textContent = "C";
        D.textContent = "D";
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

function showResults(){

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



