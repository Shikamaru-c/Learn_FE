var body = document.getElementsByTagName("body")[0];
var ul = document.createElement("ul");
var li1 = document.createElement("li");
li1.innerText = "剪切";
var li2 = document.createElement("li");
var txt2 = document.createTextNode("复制");
li2.appendChild(txt2);
var li3 = document.createElement("li");
li3.innerText = "粘贴";
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
window.oncontextmenu = function(e) {
	body.appendChild(ul);
	ul.style.left = e.pageX - 40 + "px";
	ul.style.top = e.pageY - 10 + "px";
	return false;
}
window.onclick = function() {
	body.removeChild(ul);
}