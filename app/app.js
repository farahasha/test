
'use strict';


const reatingForm= document.getElementById('Form');
const orders = document.getElementById('orders');

let rate=0;


function Star(name,prefctuerName,rview){
  this.name = name;
  this.prefctuerName = prefctuerName;
   this.rate=0;
  this.rview= rview;
  

  
  Star.globalarr.push(this);
  saveToLs();
}




Star.globalarr = [];

reatingForm.addEventListener('submit', handleClick);
function handleClick(event){
  event.preventDefault();
  console.log(event.target);

  
  const newName = event.target.name.value;
  const prefctuerName = event.target.prefctuerName.value;
  const rate=0;
  const rview = event.target.rview.value;
  

  new Star(newName, prefctuerName, rview,rate);

  console.log(Star.globalarr);
 
  renderOrders();
}

// let rate = 0;
 
// function submitRate(){
// 	let name=document.getElementById('name').value;
//     let prefctuerName=document.getElementById('prefctuerName').value;
// 	let rview=document.getElementById('rview').value;
// 	if(rate != 0 && name !="" && rview !="" && prefctuerName !=""){
// 		let html=
// 		"<h4>name: <label class='text-primary'>" + name + "</label></h4>"
//         +"<h4>prefctuerName: <label class='text-primary'>" + prefctuerName + "</label></h4>"
// 		+"<h4>rate: <label class='text-primary'>" + rate + "</label></h4>"
// 		+"<h4>rview</h4>"
// 		+"<p>"+rview+"</p>"
// 		+"<hr style='border-top:1px solid #000;'/>";
// 		document.getElementById('result').innerHTML+=html;
//         document.getElementById('prefctuerName').value="";
// 		document.getElementById('name').value="";
// 		document.getElementById('rview').value="";
// 	}
// }

// submitRate();

// function startRating(){
// 	rate=item.id[0];
// 	sessionStorage.star = rate;
// 	for(var i=0;i<5;i++){
// 		if(i<rate){
// 			document.getElementById((i+1)).style.color="yellow";
// 		}
// 		else{
// 			document.getElementById((i+1)).style.color="white";
// 		}
// 	}
// }

function saveToLs(){

  
  const convertedArr = JSON.stringify(Star.globalarr);
  
  localStorage.setItem('Order', convertedArr);
  
  
}

function getFromLs(){
  const data = localStorage.getItem('Order');
  console.log(data); 
  const parsedOrder = JSON.parse(data); 
  console.log(parsedOrder); 
  if(parsedOrder){   

    Star.globalarr = parsedOrder;
    
    renderOrders();
  }
}
  


 function renderOrders(){
  let input=document.createElement('li');
//   orders.textContent = '';
                        
   for(let i = 0; i < Star.globalarr.length; i++){
//     // const drinkLI = document.createElement('li');
//     // let temp;
//     // if(Coffee.drinks[i].isHot === 'on'){
//     //   temp = 'cold';
//     // } else{
//     //   temp = 'hot';
//     // }
//     // orders.appendChild(input);
    input.textContent = `${Star.globalarr[i].name}  ${Star.globalarr[i].prefctuerName} ${Star.globalarr[i].rview} ${Star.globalarr[i].rate} `;
  }

 }

let count = 0;
 
function result(){
	if(count != 0){
		document.getElementById('result').innerHTML = 
		"<h4>Rating: <label class='text-primary'>" + count + "</label></h4>"
		+ "<h4>Review</h4>"
		+ "<p>"+document.getElementById("review").value+"</p>";
	}else{
 
	}
}

this.rate = count;
function startRating(item){
	count=item.id[0];
	sessionStorage.star = count;
	for(let i=0;i<5;i++){
		if(i < count){
			document.getElementById((i+1)).style.color="yellow";
		}
		else{
			document.getElementById((i+1)).style.color="black";
		}
       
    }
}


getFromLs();


