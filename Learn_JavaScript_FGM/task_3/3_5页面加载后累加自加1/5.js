// var div = document.getElementsByTagName("div")[0];
// var num = parseInt(div.innerText);
// function time() {
// 	num += 1;
// 	div.innerText = num;
// 	setTimeout(time,1000);
// }
// time()

// 以上是原生js的实现方法

var num = parseInt($("div:eq(0)").text());
function time() {
	num += 1;
	$("div:eq(0)").text(num);
	setTimeout(time,1000);
}
window.onload = function() {
	time();
}

// 以上是jquery的实现方法