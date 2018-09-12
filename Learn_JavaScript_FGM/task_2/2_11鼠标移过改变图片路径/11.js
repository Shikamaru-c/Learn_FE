var ul = document.getElementsByTagName("ul")[0];
var li = ul.getElementsByTagName("li");
var big = li[0].getElementsByTagName("img")[0];
for (var i = 1; i < li.length; i++) {
	li[i].index = i;
	li[i].onmouseover = function() {
		var url = "images/big_" + this.index + ".jpg";
		big.src = url;
	}
}

// 以上是原生js的方法

// $("ul li:not(:first)").each(function(index) {
// 	$(this).mouseover(function() {
// 		var url = "images/big_" + (index + 1) + ".jpg";
// 		$("ul:eq(0) li:first img").attr("src",url);
// 	})
// })

// 以上是jquery的实现方法 已实现