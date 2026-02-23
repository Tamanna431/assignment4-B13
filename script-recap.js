// // // const ttt=document.querySelector('#tem')
// // // console.log(ttt);
// // const dev = document.querySelectorAll('.ttt')
// // console.log(dev[1].innerHTML);
// //  dev += dev[1].innerHTML("<h1>hello</h1>")
// // for(d of dev)
// // {
// //     console.log(d);
// // }
//  const tta=document.getElementsByClassName('tem');
//  console.log(tta.innerText[0]);
 
// tta.innerHTML="<h2>Hello</h2>"
// console.log(tta);
/* let dey = document.getElementById('tt')
  dey = document.createElement('div')
  let name = 'Saima';
dey.innerHTML=`<button>all</button><p>my name is ${name}</p>`
 console.log(dey)
 tt.appendChild(dey);
 dey.addEventListener('click',function(){
  
    dey.classList.add('color')
    
    console.log("clicked");
 })
    */
let container = document.getElementById("container");

container.addEventListener("click", function(e) {
  if (e.target.tagName === "BUTTON") {
    alert(e.target.innerText);
  }
});

// New button add
let btn = document.createElement("button");
btn.innerText = "New Button";
container.appendChild(btn);

const lit = document.getElementById('list')
lit.addEventListener('click',function(event){
    if(event.target.tagName==='LI'){
event.target.remove('LI')}
})
let news=document.createElement('li')
news.innerText='add'
lit.appendChild(news);
let col=document.getElementById('colors')
col.addEventListener('click',function(e){
    if(e.target.innerText==='red')
    {
        document.body.style.background='red'
    }
    else if(e.target.innerText==='green'){
    document.body.style.background='green'

    }
    else{
    document.body.style.background='blue'

    }

    
})
let task = document.getElementById('task')
let ad = document.getElementById('add')
let lis = document.getElementById('list')
ad.addEventListener('click',function(e){
    let value=task.value
    if(value!==''){
        let li = document.createElement('li')
        li.innerText=value;
        lis.appendChild(li);
        task.value='';
    }
})
lis.addEventListener('click',function(e){
            if(e.target.tagName=='LI')
            {
                e.target.remove();
            }
        })
