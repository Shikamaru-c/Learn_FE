// var btn = document.getElementsByTagName("button")[0];
// var input = document.getElementsByTagName("input");
// var span = document.getElementsByTagName("span")[0];
// btn.onclick = function() {
// 	span.innerHTML = parseInt(input[0].value)
// 	+ parseInt(input[1].value);
// }

// 以上是原生js的实现方法

$("button:eq(0)").click(function() {
	var num1 = parseInt($("input:eq(0)").val());
	var num2 = parseInt($("input:eq(1)").val());
	if (num1 && num2) {
		$("span:eq(0)").html(num1 + num2);
	} else {
		alert("请输入数字");
	}
})

// 以上是jquery的实现方法