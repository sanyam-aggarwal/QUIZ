window.onload=function(){
    var fileName = location.href.split("/").slice(-1);
    if(fileName=="answers.html")
    {
        disAns();
    }
    else
    show(question_count);
}
let questions = [
  {
    id: 1,
    question: "How to check if a value is NAN in JS ?",
    answer: "isNaN(val)",
    options: [
      "None of these",
      "isNotaNumer(val)",
      "isNaNum(val)",
      "isNaN(val)"
    ]
  },
  {
    id: 2,
    question: "How do you define objects in JS ?",
    answer: "{}",
    options: [
      "[]",
      "()",
      "{}",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "What is the output of '2'-1 ?",
    answer: "1",
    options: [
      "3",
      "2",
      "1",
      "None of these"
    ]
  },
  {
    id: 4,
    question: "Which of the following property is used to set the background color of an element?",
    answer: "background-color",
    options: [
      "background-color",
      "background-repeat",
      "background-position",
      "None of these"
    ]
  },
  {
    id: 5,
    question: "Which of the following property is used to add or subtract space between the words of a sentence?",
    answer: "text-indent",
    options: [
      "text-indent",
      "text-align",
      "text-decoration",
      "None of these"
    ]
  },
  {
    id: 6,
    question: "What is the full form of RAM ?",
    answer: "Random Access Memory",
    options: [
      "Random Access Memory",
      "Randomely Access Memory",
      "Run Aceapt Memory",
      "None of these"
    ]
  },
  {
    id: 7,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 8,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },
  {
    id: 9,
    question: "Which of the following property is used to set the background color of an element?",
    answer: "background-color",
    options: [
      "background-color",
      "background-repeat",
      "background-position",
      "None of these"
    ]
  },
  {
    id: 10,
    question: "Which of the following property is used to add or subtract space between the words of a sentence?",
    answer: "text-indent",
    options: [
      "text-indent",
      "text-align",
      "text-decoration",
      "None of these"
    ]
  },
  {
    id: 11,
    question: "How to declare variable in JS ?",
    answer: "var",
    options: [
      "varr",
      "variable",
      "int",
      "var"
    ]
  }

];
function submitForm(e){
    if(document.getElementById)
    e.preventDefault();
    window.location="quiz.html";
}
let question_count=0;
let score=0;
function next(){
    var right=document.getElementById("Correct");
        right.style.display="none";
        var wrong=document.getElementById("wrong");
        wrong.style.display="none";
    question_count++;
    show(question_count);
var sub=document.getElementById("btn-submit");
    sub.style.display="block";
    var next=document.getElementById("btn-next");
    next.style.display="none";
    if(question_count>9)
    {
        window.location="./answers.html";
        
    }
}
function queSub(){
    var ele = document.getElementsByName('op'); 
            var x;
            var z=true;
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
                {
                    x=ele[i].value; 
                    z=false;
                }
            }
    if(z)
    {
        alert("select any option");
    }
    else
    {
    var sub=document.getElementById("btn-submit");
    sub.style.display="none";
    var next=document.getElementById("btn-next");
    next.style.display="block";
    if(x==questions[question_count].answer)
    {
        var right=document.getElementById("Correct");
        right.style.display="block";
        score++;
    }
    else
    {
        var wrong=document.getElementById("wrong");
        wrong.style.display="block";
    }
    sessionStorage.setItem("score",score);
    var input=document.getElementsByName("op");
    for(var i=0;i<input.length;i++)
    {
        input[i].disabled=true;
    }
    }
}
function show(count){
    let question=document.getElementById("questions");
    //question.innerHTML="<h2>"+questions[count].question+"</h2>";
    question.innerHTML=`<h2>${questions[count].question}</h2>
    <ul class="option_group">
                        <li class="option"><input type="radio" name="op" value="${questions[count].options[0]}">${questions[count].options[0]}</li>
                        <li class="option"><input type="radio" name="op" value="${questions[count].options[1]}">${questions[count].options[1]}</li>
                        <li class="option"><input type="radio" name="op" value="${questions[count].options[2]}">${questions[count].options[2]}</li>
                        <li class="option"><input type="radio" name="op" value="${questions[count].options[3]}">${questions[count].options[3]}</li>
                    </ul>
    `;
}
function disAns(){
    var score1=document.getElementById("scoreDisplay");
    score1.innerHTML="Score : "+parseInt(sessionStorage.getItem("score"));
    var ansBlock=document.getElementById("ans");
    var z="<ul>";
    for(var i=0;i<questions.length;i++)
    {
        z+="<li style='margin:10px'>"+questions[i].question+" - <span style='background-color:green'>"+questions[i].answer+"</span></li>";
    }
    z+="</ul>";
    ansBlock.innerHTML=z;
}