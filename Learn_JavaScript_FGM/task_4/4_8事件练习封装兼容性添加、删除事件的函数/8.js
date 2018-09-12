var btnN = document.getElementById("btnN");
var btnA = document.getElementById("btnA");
var btnR = document.getElementById("btnR");
btnA.onclick = function() {
	btnN.innerText = "我可以点击了";
	btnN.onclick = function() {
		alert("事件绑定成功！");
	}
}
btnR.onclick = function() {
	btnN.innerText = "毫无用处的按钮";
	btnN.onclick = function() {
	}
}