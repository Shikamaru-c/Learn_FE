var btn = document.getElementsByTagName("button")[0];
var list = document.getElementsByTagName("ul")[0];
list.style.visibility = "hidden";
btn.onclick = function() {
	// if (list.style.visibility == "hidden") {
	// 	list.style.visibility = "visible";
	// } else if (list.style.visibility == "visible") {
	// 	list.style.visibility = "hidden";
	// }
	list.style.visibility = list.style.visibility == "hidden" ? "visible" : "hidden";
	// 改写后的三元操作符
}
var li = document.getElementsByTagName("li");
li[li.length-1].onclick = function() {  //选取最后一个li
	list.style.visibility = "hidden";
}

// 以上是原生js的实现方法

// var $list = $("ul:eq(0)");
// $list.hide();
// $("button:eq(0)").click(function() {
// 	if ($list.is(":hidden")) {
// 		$list.show();
// 	} else if ($list.is(":visible")) {
// 		$list.hide();
// 	}
// })
// var $li = $("li:last-child");
// $li.click(function() {
// 	$list.hide();
// })

// 以上是jquery的实现方法