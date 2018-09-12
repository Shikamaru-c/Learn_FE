// function rightI() {
// 	var text = document.getElementById("input");
// 	var num = parseInt(text.value);
// 	var ul = document.getElementById("list");
// 	if (num && num == text.value) {
// 		var li = document.createElement("li");
// 		li.innerHTML = num;
// 		ul.appendChild(li);
// 		// text.value = null;
// 	}else {
// 		// text.value = null;	
// 		alert("请输入一个数字")
// 	}
// }

// function leftI() {
// 	var text = document.getElementById("input");
// 	var num = parseInt(text.value);
// 	var ul = document.getElementById("list");
// 	if (num && num == text.value) {
// 		var li = document.createElement("li");
// 		var firstLi = ul.getElementsByTagName("li")[0];
// 		li.innerHTML = num;
// 		ul.insertBefore(li, firstLi);
// 		// text.value = null;		
// 	}else {
// 		// text.value = null;		
// 		alert("请输入一个数字")
// 	}
// }

// function rightO() {
// 	var list = document.getElementById("list");
// 	var rightChild = list.lastChild;
// 	list.removeChild(rightChild);
// 	alert("你删除了：" + rightChild.firstChild.nodeValue);
// }

// function leftO() {
// 	var list = document.getElementById("list");
// 	var leftChild = list.firstChild;
// 	list.removeChild(leftChild);
// 	alert("你删除了：" + leftChild.firstChild.nodeValue);
// }

var btnRI = document.getElementById("rightInput");
btnRI.onclick = function() {
	input("right");
};
var btnLI = document.getElementById("leftInput");
btnLI.onclick = function() {
	input("left");
}
var btnRO = document.getElementById("rightOutput");
btnRO.onclick = function() {
	output("right");
}
var btnLO = document.getElementById("leftOutput");
btnLO.onclick = function() {
	output("left");
}




function input(position) {
	var text = document.getElementById("input");
	var num = parseInt(text.value);
	var ul = document.getElementById("list");
	if (num && num == text.value) {
		var li = document.createElement("li");
		li.innerHTML = num;
		if (position == "right") {
			ul.appendChild(li);
		}
		if (position == "left") {
			var firstLi = ul.getElementsByTagName("li")[0];
			ul.insertBefore(li, firstLi);
		}
	}else {
		alert("请输入一个数字")
	}
}

function output(position) {
	var list = document.getElementById("list");
	if (position == "right") {
		var delLi = list.lastChild;
	}
	if (position == "left") {
		var delLi = list.firstChild;
	}
	list.removeChild(delLi);
	alert("你删除了：" + delLi.firstChild.nodeValue);
}