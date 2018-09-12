window.onclick = function(e) {
	var x = e.pageX;
	var y = e.pageY;
	var output = "坐标：[" + x + "," + y + "]";
	alert(output);
}

// e.pageX,e.pageY是firefox上的;e.x,e.y是ie上的 jquery上是page