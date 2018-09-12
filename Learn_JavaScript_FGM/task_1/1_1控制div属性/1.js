// var square = document.getElementsByClassName("square")[0];
// var toW = document.getElementById("toW");
// var toH = document.getElementById("toH");
// var toC = document.getElementById("toC");
// var toHidden = document.getElementById("toHidden");
// var reset = document.getElementById("reset");
// toW.onclick = function() {
// 	square.style.width = "200px";
// }
// toH.onclick = function() {
// 	square.style.height = "200px";
// }
// toC.onclick = function() {
// 	square.style.backgroundColor = "red";
// }
// toHidden.onclick = function() {
// 	square.style.display = "none";
// }
// reset.onclick = function() {
// 	square.setAttribute("style","width: 100px;height: 100px;color: black;diplay: block");
// }
 
// 以上是原生js直接设置样式部分 测试成功

// var square = document.getElementsByClassName("square")[0];
// var defaultStyle = window.getComputedStyle(square,"");
// var toW = document.getElementById("toW");
// var toH = document.getElementById("toH");
// var toC = document.getElementById("toC");
// var toHidden = document.getElementById("toHidden");
// var reset = document.getElementById("reset");
// toW.onclick = function() {
// 	var cssW = parseInt(defaultStyle.width);
// 	square.style.width = cssW*2 + "px";
// }
// toH.onclick = function() {
// 	var cssH = parseInt(defaultStyle.height);
// 	square.style.height = cssH*2 + "px";
// }

// 以上是原生js 可以无限扩展 并且可以进行抽象

// var $square = $(".square:eq(0)");
// $("#toW").click(function() {
// 	$square.css("width","200px");
// });
// $("#toH").click(function() {
// 	$square.css("height","200px");
// })
// $("#toC").click(function() {
// 	$square.css("backgroundColor","red");
// })
// $("#toHidden").click(function() {
// 	$square.css("visibility","hidden");
// })
// $("#reset").click(function() {
// 	$square.css({"width":"100px","height":"100px","backgroundColor":"black","visibility":"visible"});
// })

// 以上是jquery方法

// var square = document.getElementsByClassName("square")[0];
// var toW = document.getElementById("toW");
// var toH = document.getElementById("toH");
// var toC = document.getElementById("toC");
// var toHidden = document.getElementById("toHidden");
// var reset = document.getElementById("reset");
// toW.onclick = function() {
// 	square.classList.add("toW");
// }
// toH.onclick = function() {
// 	square.classList.add("toH");
// }
// toC.onclick = function() {
// 	square.classList.add("toC");
// }
// toHidden.onclick = function() {
// 	square.classList.add("toHidden");
// }
// reset.onclick = function() {
// 	square.className = "square";
// }

// 以上是通过原生js技术 进行 样式行为分离


// var $square = $(".square:eq(0)");
// $("#toW").click(function() {
// 	$square.addClass("toW");
// })
// $("#toH").click(function() {
// 	$square.addClass("toH");
// })
// $("#toC").click(function() {
// 	$square.addClass("toC");
// })
// $("#toHidden").click(function() {
// 	$square.addClass("toHidden");
// })
// $("#reset").click(function() {
// 	var square = $square[0];
// 	square.className = "square";
// })

// 以上是通过jquery 进行 样式行为分离

function change(element, attr, val) {
	element.style[attr] = val;
}
var btns = document.querySelectorAll("button");
var attrs = ["width", "height", "backgroundColor", "display", "display"];
var vals = ["200px", "200px", "red", "none", "block"];
var square = document.querySelector(".square");
for (var i = 0; i < btns.length; i++) {
	btns[i].index = i;
	btns[i].onclick = function() {
		this.index == btns.length - 1 && (square.style.cssText = ""); // 其实就是一句if语句
		change(square, attrs[this.index], vals[this.index]);
	}
}

// 看源代码后的版本 学习到了 存储i