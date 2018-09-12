var btnC = document.getElementById("btnC");
var btnR = document.getElementById("btnR");
var square = document.getElementsByClassName("square")[0];
function change(ele, attr, val) {
	ele.style[attr] = val;
}
btnC.onclick = function() {
	var valueK = document.getElementById("key").value;
	var valueV = document.getElementById("value").value;
	// var oldRule = square.style.cssText; // 获得旧的style
	// var newRule = valueK + ":" + valueV + ";"; // 拼接新的style
	// var rule = oldRule + newRule; // 把旧的放在前面，新的层叠上去
	// square.style.cssText = rule; // 设置style
	change(square, valueK, valueV);
}
btnR.onclick = function() {
	// square.style.cssText = ""; // 清零
	square.removeAttribute("style");
}

// 以上是原生js的解决方案

// var $square = $(".square:eq(0)");
// $("#btnC").click(function(){
// 	var $valueK = $("#key").val();
// 	var $valueV = $("#value").val();
// 	$square.css($valueK, $valueV);
// })
// $("#btnR").click(function() {
// 	var square = $square[0];
// 	square.style.cssText = "";
// })

// 以上是jquery的解决方案