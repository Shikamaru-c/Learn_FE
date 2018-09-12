var divM = document.getElementsByClassName("month")[0];
var contentM = divM.innerText;
var month = contentM.split(",");

var btnD1 = document.getElementById("btnD1");
btnD1.onclick = function() {
	if (btnD1.innerText == "删除January(1)") {
		btnD1.innerText = "添加January(1)"
		month.shift();
		divM.innerText = month.join();
	} else {
		btnD1.innerText = "删除January(1)";
		month.unshift("January(1)");
		divM.innerText = month.join();
	}
}

var btnD12 = document.getElementById("btnD12");
btnD12.onclick = function() {
	if (btnD12.innerText == "删除December(12)") {
		btnD12.innerText = "添加December(12)";
		month.pop()
		divM.innerText = month.join();
	} else {
		btnD12.innerText = "删除December(12)";
		month.push("December(12)");
		divM.innerText = month.join();
	}
}

var divN = document.getElementsByClassName("number")[0];
var btnC = document.getElementById("btnC");
btnC.onclick = function() {
	var contentN = divN.innerText;
	var number = contentN.split(",");
	var n = number.concat(number.slice(0));
	divN.innerText = n.join();
}

var divNtxt = divN.innerText;
var btnR = document.getElementById("btnR");
btnR.onclick = function() {
	divN.innerText = divNtxt;
}

var divC = document.getElementsByClassName("color")[0];

var btnR2 = document.getElementById("btnR2");
var content = divC.innerText;
btnR2.onclick = function() {
	divC.innerText = content;
}

var btnD3 = document.getElementById("btnD3");
btnD3.onclick = function() {
	var content = divC.innerText;
	var color = content.split(",");
	color.splice(0,3);
	divC.innerText = color.join();
}

var btnD23 = document.getElementById("btnD23");
btnD23.onclick = function() {
	var content = divC.innerText;
	var color = content.split(",");
	color.splice(1,2);
	divC.innerText = color.join();
}

var btnS2 = document.getElementById("btnS2");
btnS2.onclick = function() {
	var content = divC.innerText;
	var color = content.split(",");
	color.splice(2,0,"orange","purple")
	divC.innerText = color.join();
}

var btnR23 = document.getElementById("btnR23");
btnR23.onclick = function() {
	var content = divC.innerText;
	var color = content.split(",");
	color.splice(1,2,"good","job");
	divC.innerText = color.join();
}