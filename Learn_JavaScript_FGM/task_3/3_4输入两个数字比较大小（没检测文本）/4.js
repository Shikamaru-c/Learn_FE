var btn = document.getElementsByTagName("button")[0];
var input = document.getElementsByTagName("input");
var span = document.getElementsByTagName("span")[0];
btn.onclick = function() {
	var num1 = parseFloat(input[0].value);
	var num2 = parseFloat(input[1].value);
	// var a = num1 - num2;
	if (isNaN(num1) || isNaN(num2)) {
		alert("请输入数字");
	}
	// else if (a >= 0) {
	// 	span.innerHTML = num1;
	// } else {
	// 	span.innerHTML = num2;
	// }
	else {
		span.innerHTML = Math.max(num1,num2);
	}
}

// 以上是原生js的实现方法

// var $btn = $("button:eq(0)");
// var $span = $("span:eq(0)");
// $btn.click(function() {
// 	var num1 = parseFloat($("input:eq(0)").val());
// 	var num2 = parseFloat($("input:eq(1)").val());
// 	var a = num1 - num2;
// 	if (isNaN(num1) || isNaN(num2)) {
// 		alert("请输入数字");
// 	} else if (a >= 0) {
// 		$span.html(num1);
// 	} else {
// 		$span.html(num2);
// 	}
// })
