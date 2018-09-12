window.onload = function() {
	var big = document.querySelector("#big");
	var maskL = document.querySelector(".maskL");
	var maskR = document.querySelector(".maskR");
	var btnL = document.querySelector(".btnL");
	var btnR = document.querySelector(".btnR");
	var title = document.querySelector(".title");
	var span = document.querySelector("span");
	var index = 0;
	var data = [
		{"imgSrc" : "http://img1.gtimg.com/news/pics/hv1/106/238/825/53706421.jpg",
			"title" : "7月26日，吊车将事故现场的车头残片吊至大型运输车辆上。"
		},
		{"imgSrc" : "http://img1.gtimg.com/news/pics/hv1/105/238/825/53706420.jpg",
			"title" : "7月26日，一辆大卡车准备驶离事故现场。"
		},
		{"imgSrc" : "http://img1.gtimg.com/news/pics/hv1/101/238/825/53706416.jpg",
			 "title" : "7月26日，工人在给最后一节车厢盖上彩条布，准备运离现场。"
		},
		{"imgSrc" : "http://img1.gtimg.com/news/pics/hv1/100/238/825/53706415.jpg",
			"title" : "7月26日，工人在给最后一节车厢盖上彩条布，准备运离现场。"
		}
	];
	maskL.onmouseover = btnL.onmouseover = function() {
		startMove(btnL, "opacity", 100);
	}
	maskR.onmouseover = btnR.onmouseover = function() {
		startMove(btnR, "opacity", 100);
	}
	maskL.onmouseout = btnL.onmouseout = function() {
		startMove(btnL, "opacity", 0);
	}
	maskR.onmouseout = btnR.onmouseout = function() {
		startMove(btnR, "opacity", 0);
	}
	function startMove(obj, attr, target, fnEnd) {
		clearInterval(obj.timer);
		obj.timer = setInterval(function() {
			doMove(obj, attr, target, fnEnd);
		}, 30)
	}
	function doMove(obj, attr, target, fnEnd) {
		var cur = parseFloat(window.getComputedStyle(obj)[attr]);
		if (attr == "opacity") {
			cur = parseInt(cur * 100);
		}
		var speed = (target - cur) / 5;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if (target == cur) {
			clearInterval(obj.timer);
			fnEnd && fnEnd();
		}
		else {
			if (attr == "opacity") {
				obj.style.opacity = (cur + speed) / 100;
			}
			else {
				obj.style[attr] = cur + speed + "px";
			}
		}
	}
	btnL.onclick = function() {
		if (index == 0) {
			alert("前面没有图片了");
			return;
		}
		index--;
		loadImg();
	}
	btnR.onclick = function() {
		if (index == data.length -1) {
			alert("这是最后一张图片了！")
			return;
		}
		index++;
		loadImg();
	}

	loadImg();
	function loadImg() {
		big.className = "loading";
		span.style.opacity = title.style.height = 0;
		var img = big.getElementsByTagName("img");
		img[0] && big.removeChild(img[0]);
		var temp = document.createElement("img");
		var newImg = new Image();
		newImg.src = data[index].imgSrc;
		newImg.onload = function() {
			big.className = "";
			temp.src = this.src;
			big.appendChild(temp);
			temp.style.width = (temp.offsetWidth > 800 ? 800 : temp.offsetWidth) + "px";
			big.style.height = temp.style.height = temp.offsetHeight * temp.offsetWidth
								/ temp.offsetWidth + "px";
			span.innerHTML = data[index].title;
			startMove(title, "height", 50, function() {
				startMove(span, "opacity", 100);
			})
		};
	}
}