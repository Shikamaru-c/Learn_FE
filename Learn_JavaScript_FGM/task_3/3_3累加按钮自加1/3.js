// var btn = document.getElementsByTagName("button")[0];
// btn.onclick = function() {
// 	var value = parseInt(btn.firstChild.nodeValue);
// 	alert(value + 1);
// 	btn.innerHTML = value + 1;
// }

// 以上是原生js的解决方法
var $btn = $("button:eq(0)");
$btn.click(function() {
	var value = parseInt($btn.html());
	alert(value + 1);
	$btn.html(value + 1);
})

// 以上是jquery的解决方法