var div = document.querySelector("div");
div.onmouseover = function() {
	div.classList.add("div1");
};
div.onmouseout = function() {
	div.classList.remove("div1");
}

// 以上是原生js的实现方案

// $("div:eq(0)").hover(function() {
// 	$(this).addClass("div1");
// },function() {
// 	$(this).removeClass("div1");
// })

// //以上是jquery的实现方案