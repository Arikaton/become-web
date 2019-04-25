var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/home1.jpeg') {
		myImage.setAttribute('src', 'images/home2.png');
	} else {
		myImage.setAttribute('src', 'images/home1.jpeg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Do you wanna buy really big home, ' + myName;
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Do you wanna buy really big home, ', storedName;
}

myButton.onclick = function () {
	setUserName();
}