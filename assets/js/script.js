var timerEl = document.getElementById('timer-count');
var seeMain = document.getElementsByClassName('hide');
var playerScore = 0;
var timerCount = 30;
var questionNumber =-1;
var seeMain = document.getElementById('main')
var rightAnswer ="";

function countdown() {
    timerCount = 30;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timerCount > 0) {
        timerEl.textContent = timerCount;
        // Decrement `timeCount` by 1
        timerCount--;
      }
      else {
       showResults();
        clearInterval(timeInterval);

      }
    }, 1000);}



var questionArray =[{
    "question": "hey there",
    "A": "OMG!",
    "B": "IS THIS",
    "C": "ACTUALLY",
    "D": "WORKING?",
    rightAnswer: C},
    {
        "question": "holy cow",
        "A": "I think",
        "B": "this is",
        "C": "really",
        "D": "working!",
        rightAnswer: D},

    {"question": "test",
    "A": "test",
    "B": "test",
    "C": "test",
    "D": "wtes!",
    rightAnswer: A}

    ]
function keepingScore (){
    playerScore = playerScore+1

}

    function buildQuiz() {

        countQuestion();
        console.log(playerScore)
        if (questionNumber <3) {
        question.textContent = questionArray[questionNumber]["question"], 
        A.textContent = questionArray[questionNumber]["A"],
        B.textContent = questionArray[questionNumber]["B"], 
        C.textContent = questionArray[questionNumber]["C"], 
        D.textContent = questionArray[questionNumber]["D"],
        rightAnswer = questionArray[questionNumber]["rightAnswer"]
            if (
                rightAnswer.addEventListener("click",keepingScore) ){
                    playerScore=playerScore+1;
                }}
            
        else{
        showResults();

         }}
    
        function countQuestion(){
            questionNumber = questionNumber+1;
        }
    

// function buildQuiz (){
    // rightAnswer = questionArray[i]["rightAnswer"];}}

//if (rightAnswer){rightAnswer.addEventListener("click", keepingScore)}

 

function unhideMain(){
    seeMain.style.visibility = "visible"
    };

function showResults(){
    window.alert("game has ended");
    seeMain.style.visibility = "hidden";
    header.style.visibility = "hidden"
}
buildQuiz();
document.querySelector("#ready").addEventListener("click", ()=> {unhideMain();countdown()});
document.querySelector("#confirm").addEventListener("click",buildQuiz);
document.querySelector("#skip").addEventListener("click",buildQuiz)





