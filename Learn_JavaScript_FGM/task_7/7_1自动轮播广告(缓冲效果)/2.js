var wrapper = document.querySelector(".wrapper");
var imgList = document.querySelectorAll(".images li");
var navList = document.querySelectorAll(".nav li");
var img = document.querySelector(".images")
navList[0].style.backgroundColor = "orange";
imgList[0].style.opacity = 1;
var play,timer;
var index = 0;
var direction = true;

wrapper.onmouseover = function() {
	clearInterval(play);
}
wrapper.onmouseout = function() {
	autoPlay();
}
for (var i = 0; i < navList.length; i++) {
	navList[i].index = i;
	navList[i].onmouseover = function() {
		index = this.index;
		show();
	}
}
function autoPlay() {
	play = setInterval(function() {
		if (index == 4) {
			direction = false;
		} else if (index == 0) {
			direction = true;
		}
		if (direction) {
			index++;
		} else {
			index --
		}
		show();
	}, 2000)
}
autoPlay();
function show() {
	for (var i = 0; i < navList.length; i++) {
		navList[i].style.backgroundColor = "";
	}
	navList[index].style.backgroundColor = "orange";
	startMove(-index * 170);
}
function startMove(target) {
	clearInterval(timer);
	timer = setInterval(function() {
		doMove(target)
	}, 30)
}
function doMove(target) {
	var speed = (target - img.offsetTop) / 10;
	speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
	if (img.offsetTop == target) {
		clearInterval(timer);
	} else {
		img.style.top = img.offsetTop + speed + "px";
	}
}