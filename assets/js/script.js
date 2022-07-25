var timerEl = document.getElementById('timer-count');
var seeMain = document.getElementsByClassName('hide')
// document.getElementById('question').innerHTML;
// document.getElementById('A').innerHTML;
// document.getElementById('B').innerHTML;
// document.getElementById('C').innerHTML;
// document.getElementById('D').innerHTML;
var questionNumber = 0;

function questionCount (){
questionNumber++;
console.log(questionNumber);
}



function buildQuiz (){

if (questionNumber === 0) {
    document.getElementById('question').innerHTML= "question";
    document.getElementById('A').innerHTML = "a";
    document.getElementById('B').innerHTML = "b";
    document.getElementById('C').innerHTML = "c";
    document.getElementById('D').innerHTML = "d";}
else if (questionNumber === 1) {
    document.getElementById('question').innerHTML= "butt";
    document.getElementById('A').innerHTML = "butt";
    document.getElementById('B').innerHTML = "butt";
    document.getElementById('C').innerHTML = "butt";
    document.getElementById('D').innerHTML = "butt";
    }
else if (questionNumber === 2) {
    document.getElementById('question').innerHTML= "buns";
    document.getElementById('A').innerHTML = "buns";
    document.getElementById('B').innerHTML = "buns";
    document.getElementById('C').innerHTML = "buns";
    document.getElementById('D').innerHTML = "buns";
    }

else {
    document.getElementById('question').innerHTML= "bum";
    document.getElementById('A').innerHTML = "bum";
    document.getElementById('B').innerHTML = "bum";
    document.getElementById('C').innerHTML = "bum";
    document.getElementById('D').innerHTML = "bum";

};
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
document.querySelector("#confirm").addEventListener("click",questionCount);


