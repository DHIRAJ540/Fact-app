



const newScore = document.getElementById("new");
const fact1 = document.getElementById("a");
const fact2 = document.getElementById("b");
const fact3 = document.getElementById("c");
const fact4 = document.getElementById("d");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const facts = document.querySelector(".facts");
const facts1 = document.querySelectorAll(".facts li");

let score = 0;
let index=0; 
let array = Array.from(facts1);

function loadQuestion(){

  if(index < data.length - 1){
    next.classList.remove('disable');
  }
  if(index > 0) {
    prev.classList.remove('disable');
  }

    removeClasses();
    fact1.innerText = data[index].a;
    fact2.innerText = data[index].b;
    fact3.innerText = data[index].c;
    fact4.innerText = data[index].d;

}

loadQuestion();

function setNextQuestion(){
  
  
  if(index + 1 > data.length - 1) {
    next.classList.add('disable');
  } else {
    index++;
    loadQuestion(index);
   
  }
  }

function setPrevQuestion(){
    
    
    if(index  < 0){
      prev.classList.add('disable');
    } else {
     
      index--;
      loadQuestion(index);
      
    }
    }

function check(e) {
  
    if(e.target.classList.contains('fact')){
      if(e.target.id === data[index].answer) {
        if(e.target.classList.contains('correct')||e.target.classList.contains('wrong')){

        } else {
          //console.log('correct');
          if(data[index].checked === false){
            score++;
          }
          data[index].checked = true;
          
          setScore(score);
          showCorrect(data[index.answer]);
        }
        
      } else {
        //console.log("wrong");
        data[index].checked = true;
        showWrong(e.target.id);
      }
    }
  
    
}  

function showCorrect() {
  
  array.forEach(function (item) {
     if(item.id === data[index].answer) {
       item.classList.add('correct');
     }
  });
}



function showWrong(option) {
  
  let f = 0;

  array.forEach(function(item) {
    if(item.classList.contains("wrong")){
      f = 1;
    }
  })

  array.forEach(function(item) {

    if(item.id === option && f === 0) {
      item.classList.add('wrong');
    }
    if(item.id === data[index].answer){
      item.classList.add('correct');
    }

  });
}

function removeClasses(){
 
  array.forEach(function(item) {
    if(item.classList.contains("wrong")){
      item.classList.remove("wrong")
    }
    if(item.classList.contains("correct")){
      item.classList.remove("correct")
    }
    
  })

}



function setScore(score) {
  newScore.innerText = score;
}

next.addEventListener('click', setNextQuestion);
prev.addEventListener('click', setPrevQuestion);

//console.log(facts);

facts.addEventListener('click', check);
//console.log(facts1)

// Modals

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.querySelector('.overlay');

const openModalButtonsArray = Array.from(openModalButtons);
const closeModalButtonsArray = Array.from(closeModalButtons);

//console.log(closeModalButtonsArray)

openModalButtonsArray.forEach((button) => {
  button.addEventListener('click', () => {
 
    const modal = document.querySelector(button.dataset.modalTarget);
    
    openModal(modal);
  });
});

closeModalButtonsArray.forEach((button) => {
  button.addEventListener('click', () =>{
    const modal = button.closest('.modal');
    console.log(modal);
    closeModal(modal);
  });
});

overlay.addEventListener('click', () =>{
  const modals = document.querySelectorAll('.modal.active');
  const modalsArray = Array.from(modals);
  modalsArray.forEach((modal) => {
    closeModal(modal);
  })
})

function openModal(modal) {
  if (modal === null) return
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal === null) return
  modal.classList.remove('active');
  overlay.classList.remove('active');
}




//console.log(data.length);