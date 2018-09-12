var wrapper = document.querySelector(".wrapper");
var imgList = document.querySelectorAll(".images li");
var navList = document.querySelectorAll(".nav li");
navList[0].style.backgroundColor = "orange";
imgList[0].style.opacity = 1;
var play,timer;
var index = 0;
var direction = true;

for (var i = 0; i < navList.length; i++) {
	navList[i].index = i;
	navList[i].onmouseover = function() {
		show(this.index);
	}
}
wrapper.onmouseover = function() {
	clearInterval(play);
}
wrapper.onmouseout = function() {
	autoPlay();
}
function autoPlay() {
	play = setInterval(function() {
		if (index == imgList.length-1) direction = false;
		else if (index == 0) direction = true;
		direction ? index++ : index--;
		show(index);
	}, 2000)
}
autoPlay();

function show(a) {
	index = a;
	clearInterval(timer);
	for (var i = 0; i < navList.length; i++) {
		navList[i].style.backgroundColor = "";
	}
	navList[index].style.backgroundColor = "orange";
	for (var i = 0; i < imgList.length; i++) {
		imgList[i].style.opacity = 0;
	}
	var alpha = 0;
	timer = setInterval(function() {
		alpha += 2;
		imgList[index].style.opacity = alpha/100;
	}, 20)
}