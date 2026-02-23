/*
let interList=[33,6];
let rejectList=[4,6];
let total = document.getElementById('head-total')
let inter = document.getElementById('head-int')
let reject = document.getElementById('head-reject')
const allCards=document.getElementById('all-card')

 /*console.log(total.innerText =allCards.children.length)
  console.log( inter.innerText=interList.length)
 console.log(reject.innerText=rejectList.length)

  function headerCalculation(){
  total.innerText =allCards.children.length
  inter.innerText=interList.length
reject.innerText=rejectList.length
 } */
let total = document.getElementById('head-total')
let inter = document.getElementById('head-int')
let reject = document.getElementById('head-reject')
const allCard =document.getElementById('all-card')
const allCards = allCard.children;
let reduceJob=document.getElementById('Avail');

// console.log(allCards);
 function headerCalculate(){
     iCount = 0;
    rCount = 0;
    for(let i =0;i<allCards.length;i++){
        if(allCards[i].classList.contains("INTERVIEW")){
            iCount++;
        }
        if(allCards[i].classList.contains("REJECTED")){
            rCount++;
        }
        
    }
    total.innerText =allCards.length;
    reduceJob.innerText=allCards.length +" jobs";
    inter.innerText=iCount;
    reject.innerText=rCount;
 }
  headerCalculate();
//   card ar interview button event add
let cardInterview = document.getElementsByClassName('card-btn-interview');
// console.log(cardInterview[0].innerText);
for(let i=0;i<cardInterview.length;i++)
{
    cardInterview[i].addEventListener('click',function(e){
        let si =e.target.parentElement.parentElement;
        si.classList.remove('REJECTED');
        si.classList.add('INTERVIEW');
        headerCalculate();
    
    });
}
//   card ar reject button event add
let cardReject = document.getElementsByClassName('card-btn-reject');
// console.log(cardReject[0].innerText);
for(let i=0; i<cardReject.length; i++)
{
    cardReject[i].addEventListener('click',function(e){
        let ri =e.target.parentElement.parentElement;
        ri.classList.remove('INTERVIEW');
        ri.classList.add('REJECTED');
        headerCalculate();
    
    });
}
// delete icon
let delIcon=document.getElementsByClassName('del')
for(let i=0; i<delIcon.length; i++)
{
    delIcon[i].addEventListener('click',function(e){
        let de =e.target.parentElement.parentElement.parentElement;
        de.remove();
        headerCalculate();
    
    });
}
    
    
