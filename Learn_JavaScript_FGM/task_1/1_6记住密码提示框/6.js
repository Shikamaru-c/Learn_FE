var label = document.querySelector("label");
var wrapper = document.querySelector(".wrapper");
var para = document.createElement("p");
para.setAttribute("id","info");
para.innerHTML = label.title;
wrapper.appendChild(para);
label.onmouseover = function() {
	para.style.display = "block";
	label.removeAttribute("title") //为了让默认的title不显示
}
label.onmouseout = function() {
	para.style.display = "none";
}

// 用原生js生成内容并且控制css

// $(function() {
// 	$para = $("<p id='info'>为了您的信息安全，请不要在网吧或公共电脑上使用此功能！</p>")
// 	$(".wrapper:eq(0)").append($para);
// 	$("label:eq(0)").hover(function() {
// 		$("#info").show();
// 		$("label:eq(0)").removeAttr("title"); //为了让默认的title不显示
// 	},function() {
// 		$("#info").hide();
// 	});
// })

//用jquery生成内容 并且控制css 
