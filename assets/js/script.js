//Define Global Variables to be used in various functions
var timerEl = document.getElementById('timer-count');
var seeScore = document.getElementById('score');
var playerScore = 0;
var currentPlayerScore = 0;
var currentPlayerName ="";
var timerCount = 30;
var questionNumber =-1;
var seeMain = document.getElementById('main');
var rightAnswer ="";
var playerName="";
var items ="";
var items=[];
var itemArray=[];
var itemArrayNew=[];
var itemCounter = 0;
var itemArrayFinal=[];
var getData=[];
var getNewData=[];
var key = 0;

//create countdown function to run while quiz is going on - cleared if user reaches end of quiz before time runs out

function countdown() {
    timerCount = 30;
    var timeInterval = setInterval(function () {
      if (timerCount > 0) {
        timerEl.textContent = timerCount;
        timerCount--;
      } else if (questionNumber === 4) {
         clearInterval(timeInterval)
      }
      else {
        clearInterval(timeInterval);
        showResults();
      }
    }, 1000);}

//create a function for keeping track of items in localStorage

var countItems = function () {
    itemCounter=localStorage.length +1;
    console.log(itemCounter);
    };

//set and get scores and player names from localStorage
var addToStorage = function() {
    countItems ();
    seeScore.style.visibility = "visible";
    playerName = window.prompt("initials");
    items=[playerScore, playerName];
    key=itemCounter;
    localStorage.setItem('items'+key,JSON.stringify(items));
    getData = JSON.parse(localStorage.getItem('items'+(key-2)));
    getNewData = JSON.parse(localStorage.getItem('items'+(key-1)));
    currentPlayerScore = playerScore;
    currentPlayerName = playerName;

//set up different scenarios for leaderboard
    if (getData===null && getNewData===null){
    itemArrayNew =[{"score":currentPlayerScore,"name":currentPlayerName},
                  {"score":0, "name":"waiting"},
                  {"score":0, "name":"waiting"}]}
    else if (getData===null) {
        itemArrayNew =[{"score":currentPlayerScore,"name":currentPlayerName},
        {"score":0, "name":"waiting"},
        {"score":getNewData[0], "name":getNewData[1]}]}

    else {                  itemArrayNew =[{"score":currentPlayerScore,"name":currentPlayerName},
    {"score":getData[0], "name":getData[1]},
    {"score":getNewData[0], "name":getNewData[1]}];
    }

    itemArrayFinal = itemArrayNew.sort( (a,b) => b.score - a.score )
    console.log(itemArrayFinal)

    if (getData===null & getNewData===null) {
        document.getElementById('numberOne').textContent = itemArrayFinal[0]['name'] + " - " + itemArrayFinal[0]['score'];
    } else if (getData===null && itemArrayFinal[0]>=itemArrayFinal[1]) {
        document.getElementById('numberOne').textContent = itemArrayFinal[0]['name'] + " - " + itemArrayFinal[0]['score'];
        document.getElementById('numberTwo').textContent = itemArrayFinal[1]['name'] + " - " + itemArrayFinal[1]['score'];
    } else if (getData===null && itemArrayFinal[0]<=itemArrayFinal[1]) {
        document.getElementById('numberOne').textContent = itemArrayFinal[1]['name'] + " - " + itemArrayFinal[1]['score'];
        document.getElementById('numberTwo').textContent = itemArrayFinal[0]['name'] + " - " + itemArrayFinal[0]['score'];
    } else {

    document.getElementById('numberOne').textContent = itemArrayFinal[0]['name'] + " - " + itemArrayFinal[0]['score'];
    document.getElementById('numberTwo').textContent = itemArrayFinal[1]['name'] + " - " + itemArrayFinal[1]['score'];
    document.getElementById('numberThree').textContent = itemArrayFinal[2]['name'] + " - " + itemArrayFinal[2]['score'];}


};

//create question array
var questionArray =[{
    "question": "What does the function 'console.log' do?",
    "A": "Prints content to the webpage",
    "B": "Prints content to the html file",
    "C": "Prints content to the debugger",
    "D": "Prints content to localStorage",
    rightAnswer: C},
    
    {"question": "How do we write strings in JavaScript?",
     "A": "Between quotation marks",
    "B": "Between excelmation marks",
    "C": "Between question marks",
    "D": "Between curly brackets",
    rightAnswer: A},

    {"question": "What does b==c compare?",
    "A": "not same value, same or different type",
    "B": "same value and same type",
    "C": "less than or equal to",
    "D": "same value, same or different type",
    rightAnswer: D},

    {"question": "What is an Array?",
    "A": "A type of variable that are single items",
    "B": "A type of variable that are collections",
    "C": "A type of loop that are collections",
    "D": "a type of condition",
    rightAnswer: B},

    {"question": "What word do we use to end a while?",
    "A": "A type of variable that are single items",
    "B": "A type of variable that are collections",
    "C": "A type of loop that are collections",
    "D": "a type of condition",
    rightAnswer: B}
]

//keep score
function keepingScore (){
    playerScore = playerScore+1

}

//cycle through quiz questions
function buildQuiz() {
    if (questionNumber <4) {
    countQuestion();
    question.textContent = questionArray[questionNumber]["question"], 
    A.textContent = questionArray[questionNumber]["A"],
    B.textContent = questionArray[questionNumber]["B"], 
    C.textContent = questionArray[questionNumber]["C"], 
    D.textContent = questionArray[questionNumber]["D"],
    rightAnswer = questionArray[questionNumber]["rightAnswer"]
        if (rightAnswer.addEventListener("click",keepingScore) ){
            }}
            
    else{
    showResults();
    }};

//keep track of number of questions
function countQuestion(){
    questionNumber = questionNumber+1;
    };

//function for displaying different user screens
    
function unhideMain(){
    seeMain.style.visibility = "visible"
    };

//record player score and name
function showResults(){
    window.alert("The game has ended! You have scored "+playerScore+" points!");
    seeMain.style.visibility = "hidden";
    header.style.visibility = "hidden";
    addToStorage();
    document.getElementById('replay').addEventListener("click",exitQuiz)
    };

//end quiz early

function exitQuiz() {
        location.reload()
};

//run build quiz function
buildQuiz();

//set event listeners for clicks
document.querySelector("#ready").addEventListener("click", ()=> {unhideMain();countdown()});
document.querySelector("#confirm").addEventListener("click",buildQuiz);
document.querySelector("#skip").addEventListener("click",buildQuiz);
document.getElementById('exit').addEventListener("click",exitQuiz);






