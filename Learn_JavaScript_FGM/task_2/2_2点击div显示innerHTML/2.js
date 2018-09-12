var divList = document.getElementsByTagName("div");
for (var i=0,len=divList.length; i < len; i++) {
	divList[i].onclick = function() {
		alert(this.innerHTML);
	}
}

// 以上是原生js的解决方法

// $("div").each(function() {
// 	$(this).click(function() {
// 		alert($(this).html());
// 	})
// })

// 以上是jquery的解决方法