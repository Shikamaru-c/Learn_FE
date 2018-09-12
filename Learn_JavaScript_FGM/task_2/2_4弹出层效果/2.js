var popup = document.querySelector(".popup");
var mask = document.querySelector(".mask");
var close = document.querySelector("span");
var btn = document.querySelector("button");
btn.onclick = function() {
	popup.style.display = "block";
	mask.style.display = "block";
}
close.onclick = function() {
	popup.style.display = "none";
	mask.style.display = "none";
}