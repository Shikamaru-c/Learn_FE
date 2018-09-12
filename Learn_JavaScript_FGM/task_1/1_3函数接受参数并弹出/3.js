window.onload = function() {
	var btn = document.querySelector("button");
	var input = document.querySelectorAll("input");
	btn.onclick = function() {
		for (var i=0; i < input.length; i++) {
			alert(input[i].value);
		}
	}
}

// 以上是原生js

// $("button:eq(0)").click(function() {
// 	$("input").each(function() {
// 		alert($(this).val());
// 	})
// })

// 以上是jquery