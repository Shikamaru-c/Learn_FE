var div = document.getElementsByTagName("div")[0];
window.onkeydown = function(e) {
	div.innerText = e.keyCode;
	return false;
}