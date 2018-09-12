var btn1 = document.querySelectorAll("button")[0];
var btn2 = document.querySelectorAll("button")[1];
var btn = document.querySelectorAll("button");
var h1 = document.querySelector("h1");
var img = document.querySelector("img");
var div = document.querySelector("div");
btn1.onclick = function(e) {
	e.stopPropagation();
	clearEvent();
	btn1.innerHTML += "（已激活）";
	h1.innerHTML = "鼠标点击页面，任务将移动至鼠标位置！";
	document.onclick = function(e) {
		img.src = "images/2.gif";
		startMove(div,{"x" : e.pageX,
						"y" : e.pageY},
						function() {
							img.src = "images/1.gif";
						});
	}
}
btn2.onclick = function(e) {
	e.stopPropagation();
	clearEvent();
	btn2.innerHTML += "（已激活）";
	h1.innerHTML = "按住鼠标左键，在页面划动，人物将按照鼠标轨迹移动。";
	var pos = [{x:div.offsetLeft, y:div.offsetTop}];
	document.onmousedown = function(e) {
		pos.push({x:e.pageX, y:e.pageY});
		document.onmousemove = function(e) {
			pos.push({x:e.pageX, y:e.pageY});
			return false;
		}
	}
	document.onmouseup = function() {
		document.onmousemove = null;
		img.src = "images/2.gif";
		var timer = setInterval(function() {
			if (pos.length == 0) {
				clearInterval(timer);
				img.src = "images/1.gif";
				return;
			}
			div.style.left = pos[0].x + "px";
			div.style.top = pos[0].y + "px";
			pos.shift();
		}, 30);
	}

}
function clearEvent() {
	document.onclick = null;
	document.onmousedown = null;
	document.onmousemove = null;
	document.onmouseup = null;
	for (var i = 0; i < btn.length; i++) {
		btn[i].innerHTML = btn[i].innerHTML.replace("（已激活）", "");
		btn[i].onmousedown = btn[i].onmouseup = function(e) {
			e.stopPropagation();
		}
	}
}
function startMove(obj, target, fnEnd) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		doMove(obj, target, fnEnd);
	}, 30)
}
function doMove(obj, target, fnEnd) {
	var x = (target.x - obj.offsetLeft) / 5;
	var y = (target.y - obj.offsetTop) / 5;
	x = x > 0 ? Math.ceil(x) : Math.floor(x);
	y = y > 0 ? Math.ceil(y) : Math.floor(y);
	if (target.x == obj.offsetLeft && target.y == obj.offsetTop) {
		clearInterval(obj.timer);
		fnEnd && fnEnd();
	}
	else {
		obj.style.left = obj.offsetLeft + x + "px";
		obj.style.top = obj.offsetTop + y + "px";
	}
}