var festival = document.getElementsByClassName("festival")[0];
festival.style.display = "none";
var info = document.createElement("li");
info.setAttribute("class","info");
var calendar = document.getElementsByClassName("calendar")[0];
calendar.appendChild(info);
var cList = calendar.getElementsByTagName("li");
var fList = festival.getElementsByTagName("li");
info.innerHTML = fList[5].innerHTML;
for (var i = 0; i < cList.length - 1; i++) {
	cList[i].index = i;	
	cList[i].onmouseover = function() {
		var text = fList[this.index].innerHTML;
		info.innerHTML = text;
	}
}

// 以上是原生js 还未实现 作用域的问题

// var $festival = $(".festival:eq(0)");
// $festival.hide();
// var $info = $("<li class='info'></li>");
// $(".calendar:eq(0)").append($info);
// var $cList = $(".calendar:eq(0) li:not(:last)");
// var $fList = $(".festival:eq(0) li");
// $info.html($fList.eq(5).html());
// $cList.each(function(index) {
// 	$(this).mouseover(function() {
// 		var $text = $fList.eq(index).html();
// 		$info.html($text);
// 	})
// })

// 以上是jquery的实现方法 已成功