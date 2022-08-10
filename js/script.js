const quizQuestions=[
    {
        question:"HTML full form !",
        a:"Hyper text mark up laguage",
        b:"Hppps",
        c:"None of the above",
        d:"ALL",
        rigthAns:"ans1"
    },
    {
        question:"Which are higth level programing languages !",
        a:"Java",
        b:"Python",
        c:"All of the above",
        d:"None of the above",
        rigthAns:"ans3"
    },
    {
        question:"Wich Web Developer is necessary !",
        a:"Nobe",
        b:"Begginer",
        c:"Intermeiated",
        d:"Experienced",
        rigthAns:"ans4"
    }
]

const question = document.querySelector(".question")
const option1 = document.querySelector("#option1")
const option2 = document.querySelector("#option2")
const option3 = document.querySelector("#option3")
const option4 = document.querySelector("#option4")
const answers = document.querySelectorAll(".answer")


const submit = document.querySelector("#submit")
const showScore = document.querySelector("#showScore")
let questionCount = 0;
let score = 0;


const loadQuestion = () =>{
    let list = quizQuestions[questionCount]
    question.innerText = list.question;
    option1.innerText = list.a;
    option2.innerText = list.b;
    option3.innerText = list.c;
    option4.innerText = list.d;
}

const getCheckedAnswer = ()=>{
    let ans; 
    answers.forEach((i)=>{
        if(i.checked){
            ans = i.id;
        }
    })
    return ans;
}

const unCheckAnswers = ()=>{
    answers.forEach((i)=>{
        i.checked = false;
    })
}

submit.addEventListener("click", ()=>{
    const x = getCheckedAnswer();
    if(x === quizQuestions[questionCount].rigthAns){
        score++
    }
    questionCount++
    unCheckAnswers()
    if(questionCount<quizQuestions.length){
        loadQuestion()
    }else{
        showScore.innerHTML = `<h3 class='h3'>Your Score is ${score}/${quizQuestions.length}</h3>
        <button class='btn' onClick='location.reload()'>Play again!</button>
        `
        showScore.classList.remove("score")
    }
})

loadQuestion();



