var img = document.getElementsByTagName("img");
for (var i = 0; i < img.length; i++) {
	img[i].onmousemove = function(e) {
		var body = document.getElementsByTagName("body")[0];
		if (document.getElementsByClassName("big")[0]) {
			del = document.getElementsByClassName("big")[0];
			body.removeChild(del);
		}
		var src = this.getAttribute("src");
		var imgN = document.createElement("img");
		imgN.setAttribute("src",src);
		imgN.className = "big";
		body.appendChild(imgN);
		imgN.style.left = (e.pageX + 20) + "px";
		imgN.style.top = (e.pageY + 20) + "px";
	}
	img[i].onmouseout = function() {
		var body = document.getElementsByTagName("body")[0];
		if (document.getElementsByClassName("big")[0]) {
			del = document.getElementsByClassName("big")[0];
			body.removeChild(del);
		}
	}
}