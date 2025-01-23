const question=[{
    'que':'Which of the followingn is a markup language? ',
    'a':'HTML',
    'b':'CSS',
    'c':'JS',
    'd':'PHP',
    'correct':'a'
},
{'que':'What year was javascript launched?',
'a':'1996',
    'b':'1995',
    'c':'1994',
    'd':'none of the above',
    'correct':'b'
},
{'que':'What done CSS stans for?',
'a':'hypertext markup language',
    'b':'cascading style sheet',
    'c':'Jason object notation',
    'd':'helicopters teminals motorboats lamborginis',
    'correct':'b'
}
]
// console.log(question)
let index = 0;
let total=question.length;
let right=0;
let wrong=0;
const quebox=document.getElementById('quebox');
const optionInput=document.querySelectorAll('.input_op');
// console.log(optionInput);

const loadquestion=()=>{
    reset();
    if(total===index){
return end ()
    }
const data=question[index]
// console.log(data)
quebox.innerText=`${index+1})${data.que}`;
optionInput[0].nextElementSibling.innerText=data.a;
optionInput[1].nextElementSibling.innerText=data.b;
optionInput[2].nextElementSibling.innerText=data.c;
optionInput[3].nextElementSibling.innerText=data.d;

}

const submetquiz=()=>{

    const data=question[index];  
const ans=getAnswer()
if(ans===data.correct){
    right++
     // Change color of the correct option
     document.querySelector(`input[value="${data.correct}"]`).nextElementSibling.style.backgroundColor = "#28a745"; // Green for correct
     document.querySelector(`input[value="${data.correct}"]`).nextElementSibling.style.color = "#fff";
}else{
    wrong++
     // Change color of the wrong selected option
     if (ans) {
        document.querySelector(`input[value="${ans}"]`).nextElementSibling.style.backgroundColor = "#dc3545"; // Red for wrong
        document.querySelector(`input[value="${ans}"]`).nextElementSibling.style.color = "#fff";
    }
    // Change color of the correct option (if a wrong answer was selected)
    document.querySelector(`input[value="${data.correct}"]`).nextElementSibling.style.backgroundColor = "#28a745"; // Green for correct
    document.querySelector(`input[value="${data.correct}"]`).nextElementSibling.style.color = "#fff";
}
// Disable further selection after submitting
// optionInput.forEach(input => {
//     input.disabled = true;
// });

// Move to the next question after a delay
setTimeout(() => {
    index++;
    loadquestion();
}, 1000); // Wait 1 second before loading the next question
// index++;
// loadquestion();

return;
}
// Go to the previous question
const prevQuestion = () => {
    if (index > 0) {
        index--; // Decrement the index
        loadquestion();
    }
};

// Go to the next question
const nextQuestion = () => {
    if (index < total - 1) {
        index++; // Increment the index
        loadquestion();
    }
};
const getAnswer=()=>{
    let answer;
    optionInput.forEach ((input)=>{
    if(input.checked){
      answer= input.value ;
    
    }
    
    }

)
return answer ;
}
const reset=()=>{
    optionInput.forEach ((input)=>{
       input.checked=false
          // Reset background and text color for each label
          input.nextElementSibling.style.backgroundColor = ""; // Clear the custom background
          input.nextElementSibling.style.color = ""; // Clear the custom text color
      
        } 
    )
}
const end=()=>{
    document.getElementById("box").innerHTML =`
    <h2> Thank You ....</h2>
    <h1> ${right}/${wrong} are correct </h1>`
}

loadquestion();

