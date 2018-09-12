var square = document.querySelector(".square");
var bTop = bRight = bBottom = bLeft = false;
window.onkeydown = function(e) {
	if (e.ctrlKey) {
		var nowStyle = window.getComputedStyle(square);
		var nowTop = parseInt(nowStyle.top);
		var nowLeft = parseInt(nowStyle.left);
		var nowWidth = parseInt(nowStyle.width);
		var nowHeight = parseInt(nowStyle.height);
		switch (e.keyCode) {
			case 49:
		 		square.style.backgroundColor = "green";
		 		break;
		 	case 50:
		 		square.style.backgroundColor = "yellow";
		 		break;
		 	case 51:
		 		square.style.backgroundColor = "blue";
		 		break;
		 	case 38:
		 		square.style.width = nowWidth * 1.2 + "px";
		 		square.style.height = nowHeight * 1.2 + "px";
		 		square.style.left = nowLeft - nowWidth * 0.1 + "px";
		 		square.style.top = nowTop - nowHeight * 0.1 + "px";
		 		break;
		 	case 40:
			 	square.style.width = nowWidth / 1.2 + "px";
			 	square.style.height = nowHeight / 1.2 + "px";
			 	square.style.left = nowLeft + nowWidth * 0.1 + "px";
			 	square.style.top = nowTop + nowHeight * 0.1 + "px";
		 		break;
		}
		return false;
	} else {
		switch (e.keyCode) {
			case 38:
				bTop = true;
				break;
			case 39:
				bRight = true;
				break;
			case 40:
				bBottom = true;
				break;
			case 37:
				bLeft = true;
				break;
		}
	}
}
window.onkeyup = function(e) {
	switch (e.keyCode) {
		case 38:
			bTop = false;
			break;
		case 39:
			bRight = false;
			break;
		case 40:
			bBottom = false;
			break;
		case 37:
			bLeft = false;
			break;
	}
}
function border() {
	var maxRight = document.documentElement.clientWidth;
	var maxBottom = document.documentElement.clientHeight;
	var nowStyle = window.getComputedStyle(square);
	if (parseInt(nowStyle.top) < 0) {
		square.style.top = 0;
	}
	if (parseInt(nowStyle.left) > maxRight - 100) {
		square.style.left = maxRight + "px";
	}
	if (parseInt(nowStyle.top) > maxBottom - 100) {
		square.style.top = maxBottom + "px";
	}
	if (parseInt(nowStyle.left) < 0) {
		square.style.left = 0;
	}
}
setInterval(function() {
	var nowStyle = window.getComputedStyle(square);
	var nowTop = parseInt(nowStyle.top);
	var nowLeft = parseInt(nowStyle.left);
	if (bTop) {
		square.style.top = nowTop - 10 + "px";
	} else if (bBottom) {
		square.style.top = nowTop + 10 + "px";
	}
	if (bRight) {
		square.style.left = nowLeft + 10 + "px";
	} else if (bLeft) {
		square.style.left = nowLeft - 10 + "px";
	}
	border();
},30)