// var btnG = document.getElementById("btnG");
// var btnS = document.getElementById("btnS");
// var btnR = document.getElementById("btnR");
// var div = document.getElementsByClassName("wrapper")[0];
// var btn = document.getElementsByTagName("button");
// var style = window.getComputedStyle(div,null);
// var divW = style.width;
// var divH = style.height;
// var divC = style.backgroundColor;
// btnG.onclick = function() {
// 	var l1 = "width:" + divW + "\n";
// 	var l2 = "height:" + divH + "\n";
// 	var l3 = "background-color:" + divC + "\n";
// 	alert(l1+l2+l3)
// }
// btnS.onclick = function() {
// 	div.style.width = "250px";
// 	div.style.height = "100px";
// 	div.style.backgroundColor = "#0cc"
// 	for (var i = 0; i < btn.length; i++) {
// 		btn[i].style.backgroundColor = "#07c";
// 	}
// }
// btnR.onclick = function() {
// 	div.setAttribute("style","");
// 	for (var i = 0; i < btn.length; i++) {
// 		btn[i].setAttribute("style","");
// 	}
// }

// 以上是原生js的实现方法
var $div = $(".wrapper:eq(0)");
var $divW = $div.css("width");
var $divH = $div.css("height");
var $divC = $div.css("backgroundColor");
$("#btnG").click(function() {
	var $l1 = "width:" + $divW + "\n";
	var $l2 = "height:" + $divH + "\n";
	var $l3 = "background-color:" + $divC + "\n";
	alert($l1 + $l2 + $l3);
})
$("#btnS").click(function()  {
	$div.css({"width":"250px","height":"100px","backgroundColor":"#0cc"});
	$("button").each(function() {
		$(this).css("backgroundColor","#07c");
	})
})
$("#btnR").click(function() {
	$div.attr("style","");
	$("button").each(function() {
		$(this).attr("style","");
	})
})