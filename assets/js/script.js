var timerEl = document.getElementById('timer-count');
var seeScore = document.getElementById('score');
var playerScore = 0;
var timerCount = 30;
var questionNumber =-1;
var seeMain = document.getElementById('main');
var rightAnswer ="";
var playerName="";
var items ="";
var numberOne = document.getElementById('numberOne');

function countdown() {
    timerCount = 30;
    var timeInterval = setInterval(function () {
      if (timerCount > 0) {
        timerEl.textContent = timerCount;
        timerCount--;
      } else if (questionNumber === 3) {
         clearInterval(timeInterval)
      }
      else {
        clearInterval(timeInterval);
        showResults();
      }
    }, 1000);}



var questionArray =[{
    "question": "hey there",
    "A": "OMG!",
    "B": "IS THIS",
    "C": "ACTUALLY",
    "D": "WORKING?",
    rightAnswer: C},
    
    {"question": "holy cow",
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
    rightAnswer: A},

    {"question": "test1",
    "A": "test1",
    "B": "test1",
    "C": "test1",
    "D": "wtes11!",
    rightAnswer: A}

    ]
function keepingScore (){
    playerScore = playerScore+1

}
function buildQuiz() {
    if (questionNumber <3) {
    countQuestion();
    question.textContent = questionArray[questionNumber]["question"], 
    A.textContent = questionArray[questionNumber]["A"],
    B.textContent = questionArray[questionNumber]["B"], 
    C.textContent = questionArray[questionNumber]["C"], 
    D.textContent = questionArray[questionNumber]["D"],
    rightAnswer = questionArray[questionNumber]["rightAnswer"]
        if (rightAnswer.addEventListener("click",keepingScore) ){
            playerScore=playerScore+1;
            }}
            
    else{
    showResults();
    }};
    
function countQuestion(){
    questionNumber = questionNumber+1;
    };
    
function unhideMain(){
    seeMain.style.visibility = "visible"
    };

function addToStorage() {
    let itemsArray = [playerScore,playerName]
    localStorage.setItem('items', JSON.stringify(itemsArray));};

function setHighScore (){
    seeScore.style.visibility = "visible";
    items= JSON.parse(localStorage.getItem('items'));
    numberOne.textContent = items[1]+" - "+items[0];
    };


function showResults(){
    window.alert("The game has ended! You have scored "+playerScore+" points!");
    seeMain.style.visibility = "hidden";
    header.style.visibility = "hidden";
    playerName = window.prompt("initials");
    addToStorage();
    setHighScore ();
    };

function exitQuiz() {
    location.reload()
};

buildQuiz();
document.querySelector("#ready").addEventListener("click", ()=> {unhideMain();countdown()});
document.querySelector("#confirm").addEventListener("click",buildQuiz);
document.querySelector("#skip").addEventListener("click",buildQuiz);
document.getElementById('exit').addEventListener("click",exitQuiz);






