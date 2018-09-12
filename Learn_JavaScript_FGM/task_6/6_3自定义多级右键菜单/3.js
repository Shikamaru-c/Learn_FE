var one = document.querySelector(".one");
window.oncontextmenu = function(e) {
	one.style.display = "block";
	one.style.top = e.pageY + "px";
	one.style.left = e.pageX + "px";
	return false;
}
var timer;
var li = document.querySelectorAll("li");
for (var i = 0; i < li.length; i++) {
	li[i].onmouseover = function() {
		this.className = "hover";
		var two = this.querySelector("ul");
		two.style.display = "block";
	}
	li[i].onmouseout = function() {
		this.className = "";
		var two = this.querySelector("ul");
		two.style.display = "";
	}
}
var ul = document.querySelectorAll(".one ul");
for (var i = 0; i < ul.length; i++) {
	ul[i].onmouseout
}
window.onclick = function() {
	one.style.display = "none";
}