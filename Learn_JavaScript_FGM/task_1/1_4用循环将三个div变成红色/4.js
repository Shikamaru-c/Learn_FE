var btn = document.querySelector("button");
var list = document.querySelectorAll("li");
btn.onclick = function() {
	for (var i = 0; i < list.length; i++) {
		list[i].style.backgroundColor = "red";
	}
}

// 以上是原生js

// $("button:eq(0)").click(function() {
// 	$("li").each(function() {
// 		$(this).css("backgroundColor","red");
// 	})
// })

// // 以上是jquery