var startBtn = document.getElementById("start-btn");
var qSection = document.getElementById("Q")
var mSection = document.getElementById("start-scr")
var fSection = document.getElementById("final");
//counters
var questionsIndex = 0;
var qCounter = 0;
var lenght = questions.length;


var counter = 0;
//preseting the questions vars
var qtitle = questions[questionsIndex].title;
var qChoices = questions[questionsIndex].choices[counter];
var qAnswer = questions[questionsIndex].answer;

var timeEl = document.getElementById("time");
var timer;

var game = 0;
var time = questions.length * 15;

var score = 0;
var scoreEl = document.getElementById("score");

var finalEl = document.getElementById("final");

startBtn.onclick = startQuiz;

function startQuiz(){
    startBtn.classList.add("hide");
    mSection.classList.add("hide");
    qSection.classList.remove("hide")
    startGame();
    setScore();
}

function startGame(){
    timer = setInterval(timerDown , 1000);
    timeEl.textContent = ("time ") + time;
    presentQuestions();
    
}

function presentQuestions(){
    var currentQ = questions[questionsIndex];
    var titleElement = document.getElementById("titleOfq");
    titleElement.textContent = currentQ.title;

    for(var i=0 ; i < questions[questionsIndex].choices.length ; i++){
        var answer = document.createElement("button");
        answer.setAttribute("class" , "btnChoice");
        answer.setAttribute("value" , questions[questionsIndex].choices[i]);
        answer.textContent = questions[questionsIndex].choices[i];

        qSection.appendChild(answer);
        console.log(answer.textContent)
    }
    addlister();
    
     
    //console.log('1')
     
     
}

function addlister(){
   // var adds = document.getElementsByClassName('btnChoice');
   // adds.addEventListener("click",check, false );
   console.log('2')
    $(".btnChoice").click(function(){
        //console.log(this.value)
        var answerChoice = this.value;
        //console.log("answer is " + answerChoice);
        //console.log(score);
        if (answerChoice == qAnswer){
            score = score + 1;
            setScore()
        }else{
            time = time -15;
            timeEl.textContent = ("time ") + time;
        }
        
        questionsIndex++;
        $(".btnChoice").remove();
        
        check();
        presentQuestions()
        
      });
    }
    
function check(){
    if(questionsIndex == questions.length){
        qSection.classList.add("hide");
        fSection.classList.remove("hide")
        clearInterval(timer);

   }
}

function timerDown(){
    time--;
    timeEl.textContent = ("time ") + time;
}

function setScore(){
    scoreEl.textContent = ("score ") + score;
}

function endgame(){
    //qSection.classList.add("hide")
    var finalResult = document.createElement("h1");

}