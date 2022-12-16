var question;
var count = 1;
var choice = 0
var right = 'You are correct!\n\n(click to continue)'
var wrong = 'You are wrong! \n\n (click to continue)'
var score = 0;


//settings for start and label
var start_scene = document.getElementById('start')
var label = document.getElementById('label')
label.style.opacity = 0

//settings for question and answer
var first_question = 'What letter makes the sound "ow"?'
var second_question = 'What letter makes the sound "ah"?'
var third_question = 'What letter makes the sound "yo"?'
var fourth_question = 'What letter makes the sound "ma"?'
var fifth_question = 'What letter makes the sound "es"?'

var q = document.createElement('p')//for questions
var a1 = document.createElement('p')//for multiple answers
var a2 = document.createElement('p')//for multiple answers
var a3 = document.createElement('p')//for multiple answers
var a4 = document.createElement('p')//for multiple answers

//accesing element from the html and storing it here
var first_answer = document.getElementById('ans1')
var second_answer = document.getElementById('ans2')
var third_answer = document.getElementById('ans3')
var fourth_answer = document.getElementById('ans4')
first_answer.style.opacity = '0'
second_answer.style.opacity = '0'
third_answer.style.opacity = '0'
fourth_answer.style.opacity = '0'


//for result
var result = document.createElement('div')
var result_text = document.createElement('p')
result.setAttribute('id', 'result')
result.style.opacity = '0'




function settingQuestion(){
    //checking for code in line 14 where we set question to first or send or ect question
    if(count == 1){
        question = first_question
    }else if(count == 2){
        question = second_question
    }
    else if(count == 3){
        question = third_question
    }
    else if(count == 4){
        question = fourth_question
    }
    else if(count == 5){
        question = fifth_question
    }else{
        return;
    }
    q.innerText = question
    label.append(q)
}


function settingAnswer(){
//setting for what shows up in the multiple answer
if(count == 1){
a1.innerText = 'Aa'
a2.innerText = 'Bb'
a3.innerText = 'Oo'
a4 .innerText= 'Zz'
}else if(count == 2){
    a1.innerText = 'Ww'
    a2.innerText = 'Kk'
    a3.innerText = 'Mm'
    a4.innerText = 'Aa'
}else if(count == 3){
    a1.innerText = 'Ll'
    a2.innerText = 'Uu'
    a3.innerText = 'Xx'
    a4.innerText = 'Ee'
}
else if(count == 4){
    a1.innerText = 'Mm'
    a2.innerText = 'Zz'
    a3.innerText = 'Bb'
    a4.innerText = 'Pp'
}
else if(count == 5){
    a1.innerText = 'Yy'
    a2.innerText = 'Rr'
    a3.innerText = 'Bb'
    a4.innerText = 'Ss'
}


//setting up
first_answer.append(a1)
second_answer.append(a2)
third_answer.append(a3)
fourth_answer.append(a4)
}


//exucutes every next question
function startingAnswer(){
    setTimeout(function(){
        first_answer.style.animation = 'fade-in 0.5s'
    }, 500)
    setTimeout(function(){
        second_answer.style.animation = 'fade-in 0.5s'
    }, 700)
    setTimeout(function(){
        third_answer.style.animation = 'fade-in 0.5s'
    }, 800)
    setTimeout(function(){
        fourth_answer.style.animation = 'fade-in 0.5s'
    }, 900)

setTimeout(function(){
first_answer.style.opacity = '100'
second_answer.style.opacity = '100'
third_answer.style.opacity = '100'
fourth_answer.style.opacity = '100'
}, 1000)
}



function pressingStart(){
    //execute when u press start
    start_scene.style.animation = 'fade-out 0.5s'
    setTimeout(function(){
        start_scene.remove()
    }, 400)
}


function startingQuestion(){
    //setting opening animation for label
    setTimeout(function(){
        label.style.animation = 'fade-in 0.5s'
    }, 600)
    //saving opening animation for label
    setTimeout(function(){
        label.style.opacity = '100'
    }, 700)
    console.log(count)
}


//checks if answer is correct or not
function checkingAnswer(){
    if(count == 1 && choice == 3){
        result.style.backgroundColor = 'green'
        result_text.innerText = right
        ++score
    }else if(count == 2 && choice == 4){
        result.style.backgroundColor = 'green'
        result_text.innerText = right
        ++score
    }
    else if(count == 3 && choice == 2){
        result.style.backgroundColor = 'green'
        result_text.innerText = right
        ++score
    }
    else if(count == 4 && choice == 1){
        result.style.backgroundColor = 'green'
        result_text.innerText = right
        ++score
    }
    else if(count == 5 && choice == 4){
        result.style.backgroundColor = 'green'
        result_text.innerText = right
        ++score
    }else{
        result_text.innerText = wrong
        result.style.backgroundColor = 'orange'
    }
        result.append(result_text)
        container.append(result)
}


//exuctes if there is no more question
function endingQuiz(){
    if(count == 6){
        Home.style.visibility = 'visible'
        result_text.innerText = 'Quiz done! \n\n Your score is: '+score+'/5'
        result.removeEventListener('click', closingAnswer)
 result.removeEventListener('click', startingQuestion)
 result.removeEventListener('click', settingQuestion)
 result.removeEventListener('click', settingAnswer)
 result.removeEventListener('click', startingAnswer)
    }
    result.append(result_text)
    container.append(result)
}


//for showing result
function showingAnswer(){
    setTimeout(function(){
    result.style.animation = 'fade-in 0.5s'
}, 400)
setTimeout(function(){
    result.style.opacity = '100'   
}, 500)
setTimeout(function(){
    result.style.animation = null   
}, 600)

}

//closes the result after u click the result
function closingAnswer(){
        result.style.animation = 'fade-out 0.5s'
    setTimeout(function(){
        result.remove()
    }, 400)
    setTimeout(function(){
        result.style.opacity = '0'
    }, 500)
    setTimeout(function(){
        result.style.animation = null   
    }, 600)
    console.log('this happened')
    
}

//ralated to the multiple choices
function choice1(){
   choice = 1
}
function choice2(){
    choice = 2
}
function choice3(){
    choice = 3
 }
 function choice4(){
    choice = 4
 }


 //for clicking start quiz
start_scene.addEventListener('click', pressingStart)
start_scene.addEventListener('click', startingQuestion)
start_scene.addEventListener('click', settingQuestion)
start_scene.addEventListener('click', settingAnswer)
start_scene.addEventListener('click', startingAnswer)
start_scene.addEventListener('click', console.log(question))


//for first option
first_answer.addEventListener('click', choice1)
first_answer.addEventListener('click', checkingAnswer)
first_answer.addEventListener('click', e =>{
    count += 1
})
first_answer.addEventListener('click', showingAnswer)


//for second option
second_answer.addEventListener('click', choice2)
second_answer.addEventListener('click', checkingAnswer)
second_answer.addEventListener('click', e =>{
    count += 1
})
second_answer.addEventListener('click', showingAnswer)


//for third option
third_answer.addEventListener('click', choice3)
third_answer.addEventListener('click', checkingAnswer)
third_answer.addEventListener('click', e =>{
    count += 1
})
third_answer.addEventListener('click', showingAnswer)


//for fourth option
fourth_answer.addEventListener('click', choice4)
fourth_answer.addEventListener('click', checkingAnswer)
fourth_answer.addEventListener('click', e =>{
    count += 1
})
fourth_answer.addEventListener('click', showingAnswer)


//for clicking the result
result.addEventListener('click', endingQuiz)
result.addEventListener('click', closingAnswer)
result.addEventListener('click', startingQuestion)
result.addEventListener('click', settingQuestion)
result.addEventListener('click', settingAnswer)
result.addEventListener('click', startingAnswer)

