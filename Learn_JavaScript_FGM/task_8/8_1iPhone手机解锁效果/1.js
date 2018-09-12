var btn = document.querySelector("img");
var div = document.querySelector("div");
btn.onmousedown = function(e) {
	var min = parseInt(window.getComputedStyle(btn).left);
	var max = 296;
	var tempX = e.pageX;
	document.onmousemove = function(e) {
		var moveX = e.pageX - tempX;
		var nowX = parseInt(window.getComputedStyle(btn).left);
		var goX = moveX + nowX;
		if (goX >= min && goX < max) {
			btn.style.left = goX + "px";
		}
		else if (goX == max) {
			change();
		}
		tempX = e.pageX;
		return false;
	}
	btn.onmouseup = function() {
		document.onmousemove = null;
		var nowX = parseInt(window.getComputedStyle(btn).left);
		var middleX = (max - min) / 2;
		if (nowX < middleX) {
			startMove(this, min);
		} else {
			startMove(this, max, change)
		}
	}
	return false;
}
function change() {
	div.style.background = "url(images/2.jpg)";
	div.removeChild(btn);
}
function startMove(obj, target, callback) {
	obj.timer = setInterval(function() {
		var nowX = parseInt(window.getComputedStyle(obj).left);
		var speed = (target - nowX) / 5;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		obj.style.left = nowX + speed + "px";
		if (nowX == target) {
			clearInterval(obj.timer);
			callback && callback();
		}
	}, 30)
}