const time = document.getElementById('time'),
	greeting =document.getElementById('greeting'),
	name =document.getElementById('name'),
	focus =document.getElementById('focus'); //grabbing element that's interactive

//show time
function showTime() {
	let today = new Date(),
		hours = today.getHours(),
		min = today.getMinutes(),
		sec = today.getSeconds();
	//set am  or pm
	const amPm = hours >= 12 ? 'PM' : 'AM';

	//12h format
	hours = hours % 12 || 12;

	//Output time
	time.textContent = `${hours}:${addZero(min)}:${addZero(sec)} ${amPm}`;

	setTimeout(showTime, 1000);
}

function addZero(n) {
	return(parseInt(n, 10) < 10 ? '0' : '') +n;
}

//display Image
function greeT(){
	let today = new Date(),
		hours = today.getHours();

	if (hours < 12) {
		//morning
		document.body.style.backgroundImage = "url(../img/morning.jpg)";
		greeting.textContent = 'Good Morning';
	} else if(hours < 18){
		//afternoon
		document.body.style.backgroundImage = "url(../img/afternoon.jpg)";
		greeting.textContent = 'Good Afternoon';
	}else{
		//evening
		document.body.style.backgroundImage = "url(img/evening.jpg)";
		greeting.textContent = 'Good Evening';
		document.body.style.color = 'white';
	}
}

//set name
function setName(e) {
	if (e.type === 'keypress') {
		if (e.which === 13|| e.keyCode === 13) {
		localStorage.setItem('name', e.target.innerText);
		name.blur();			
		} else {}

	} else {
		localStorage.setItem('name', e.target.innerText);
	}
}
//set focus
function setFocus(e) {
	if (e.type === 'keypress') {
		if (e.which === 13|| e.keyCode === 13) {
		localStorage.setItem('focus', e.target.innerText);
		focus.blur();			
		} else {}

	} else {
		localStorage.setItem('focus', e.target.innerText);
	}
}

//get name
function getName() {
	if (localStorage.getItem('name') === null) {
		name.textContent = '[Enter Name]';
	} else {
		name.textContent = localStorage.getItem('name');
	}
}

//event listener
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
//get focus
function getFocus() {
	if (localStorage.getItem('focus') === null) {
		focus.textContent = '[Enter Focus]';
	} else {
		focus.textContent = localStorage.getItem('focus');
	}
}

//run
showTime();
greeT();
getName();
getFocus();