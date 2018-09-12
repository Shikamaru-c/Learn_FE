var btnA = document.getElementById("btnA");
var btnR = document.getElementById("reverse");
var form = document.getElementsByTagName("form")[0];
var checkbox = form.getElementsByTagName("input");
var strong = document.getElementsByTagName("strong")[0];
btnA.onclick = function() {
	if (strong.innerText == "全选") {
		strong.innerText = "全不选";
		for (var i = 0; i < checkbox.length; i++) {
			checkbox[i].checked = "true";
		}
	} else if (strong.innerText == "全不选") {
		strong.innerText = "全选";
		for (var i = 0; i < checkbox.length; i++) {
			checkbox[i].checked = "";
		}
	}
}
for (var i = 0; i < checkbox.length; i++) {
	checkbox[i].onclick = function() {
		var nocheck = [];
		for (var i = 0; i <checkbox.length; i++) {
			if (checkbox[i].checked == "") {
				btnA.checked = "";
				strong.innerText = "全选";
				nocheck.push(checkbox[i]);
			} else if (nocheck.length == 0) {
				btnA.checked = "true";
				strong.innerText = "全不选";
			}
		}
	}
}
btnR.onclick = function() {
	for (var i = 0; i < checkbox.length; i++) {
		if (checkbox[i].checked == "") {
			checkbox[i].checked = "true";
		} else {
			checkbox[i].checked = "";
		}
	}
}

// 以上是原生js的实现方法

// var $strong = $("strong:eq(0)");
// var $checkbox = $("form:eq(0) input");
// $("#btnA").click(function() {
// 	if ($strong.text == "全选") {
// 		$strong.text = "全不选";
		
// 	}
// })