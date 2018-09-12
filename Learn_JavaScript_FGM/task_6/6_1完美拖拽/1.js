var h1 = document.querySelector("h1");
var div = document.querySelector("div");
var drag = false;
var span = document.querySelectorAll("span");
var a = document.querySelector("a");
var pos = [{x:div.offsetLeft, y:div.offsetTop}];
var mover;
h1.onmousedown = function(e) {
	clearInterval(mover);
	var actX = e.pageX - div.offsetLeft;
	var actY = e.pageY - div.offsetTop;
	h1.onmousemove = function(e) {
		drag = true;
		var posX = e.pageX;
		var posY = e.pageY;
		div.style.left = posX - actX + "px";
		div.style.top = posY - actY + "px";
		f5();
		pos.push({x:div.offsetLeft, y:div.offsetTop})
		return false;
	}
	return false;
}
h1.onmouseup = function() {
	h1.onmousemove = null;
	drag = false;
	f5();
}
a.onclick = function() {
	mover = setInterval(function() {
		var moveX = pos.pop().x;
		var moveY = pos.pop().y;
		div.style.left = moveX + "px";
		div.style.top = moveY + "px";
		f5();
		if (pos.length == 0) {
			clearInterval(mover);
		}
	}, 30)
	return false;
}
a.onmousedown = function(e) {
	e.stopPropagation();
}

function f5() {
	span[0].innerHTML = drag;
	span[1].innerHTML = div.offsetTop;
	span[2].innerHTML = div.offsetLeft;
}
f5();
