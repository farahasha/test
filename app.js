var rate = 0;
 
function submitRate(){
	var user=document.getElementById('user').value;
	var review=document.getElementById('review').value;
	if(rate != 0 && user !="" && review !=""){
		var html=
		"<h4>User: <label class='text-primary'>" + user + "</label></h4>"
		+"<h4>Rating: <label class='text-primary'>" + rate + "</label></h4>"
		+"<h4>Review</h4>"
		+"<p>"+review+"</p>"
		+"<hr style='border-top:1px solid #000;'/>";
		document.getElementById('result').innerHTML+=html;
 
		document.getElementById('user').value="";
		document.getElementById('review').value="";
	}
}
 
function startRating(item){
	rate=item.id[0];
	sessionStorage.star = rate;
	for(var i=0;i<5;i++){
		if(i<rate){
			document.getElementById((i+1)).style.color="yellow";
		}
		else{
			document.getElementById((i+1)).style.color="white";
		}
	}
}

function saveTols(){
    const convertedArr=JSON.stringify(submitRate);

    console.log('lenght'+convertedArr.length);
    localStorage.setItem('Rate',convertedArr);

}

function getStorage(){
    const dat=localStorage.getItem('Rate');

    const convertedArr2=JSON.parse(dat);
    if(convertedArr2){
        new submitRate(convertedArr2.user,convertedArr2.review)
        console.log('........');
        console.log(submitRate);
        submitRate = convertedArr2;

    console.log('length:'+convertedArr2.length)
    localStorage.setItem('main',convertedArr2);

}

}
function getLocalStorage(){
    const dat=localStorage.getItem('main');
    const convertedArr2 = JSON.parse(dat);
    if (convertedArr2){
        new submitRate(convertedArr2.user,convertedArr2.review)
    console.log('');
    console.log(submitRate);
    submitRate=convertedArr2;

      
    const add=JSON.parse(dat);
    console.log(add);
    if(add){
      submitRate = add;

        renderThreeImages();
    }

}
}