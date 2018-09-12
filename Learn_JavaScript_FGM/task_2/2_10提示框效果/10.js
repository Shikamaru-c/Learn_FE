var li = document.getElementsByTagName("li");
var img = document.getElementsByTagName("img");
for (var i = 0; i < li.length; i++) {
	img[i].style.display = "none";
}
for (var i = 0; i < li.length; i++) {	
	li[i].onmouseover = function() {
		var img = this.getElementsByTagName("img")[0];
		img.style.display = "block";
	};
	li[i].onmouseout = function() {
		var img = this.getElementsByTagName("img")[0];
		img.style.display = "none";
	}
}

// 以上是原生js的实现方法

// $("img").hide();
// $("li").each(function() {
// 	$(this).hover(function() {
// 		$(this).children("img").toggle();
// 	},function() {
// 		$(this).children("img").toggle();
// 	})
// })

// 以上是jquery的实现方法