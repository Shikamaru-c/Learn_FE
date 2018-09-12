var nav = document.getElementById("nav");
var navList = nav.getElementsByTagName("li");
navList[0].style.backgroundColor = "#ccc";
var contentList = document.getElementsByClassName("content")[0];
var content = contentList.getElementsByTagName("ul");
content[0].style.display = "block";
for (var i = 0; i < navList.length; i++) {
	navList[i].index = i;
	navList[i].onmouseover = function() {
		for (var n = 0; n < navList.length; n++) {
			navList[n].style.backgroundColor = "black";
		}
		this.style.backgroundColor = "#ccc";
		for ( var n = 0; n < content.length; n++) {
			content[n].style.display = "none";
		}
		content[this.index].style.display = "block";
	}
}


// 以上是原生js的实现方法

// $("#nav li:first").css("backgroundColor","#ccc");
// $(".content ul:first").siblings().hide();
// $("#nav li").each(function(index) {
// 	var $content = $(".content ul").eq(index);
// 	$(this).mouseover(function() {
// 		$(this).css("backgroundColor","#ccc").siblings().css("backgroundColor","");
// 		$content.show().siblings().hide();
// 	})
// })

// 以上是jquery的实现方法