window.onload = function() {
	touxiangtexiao();
	guangbotexiao();
	kuaijiejian();
	code();
	del();
}
var picList = document.querySelectorAll(".pic img");
var clicking = picList[0];
function touxiangtexiao() {
	for (var i=0; i < picList.length; i++) {
		picList[i].onmouseover = function() {
			this.className = "selec";
		}
		picList[i].onmouseout = function() {
			if (this != clicking) {
				this.className = "";
			}
		}
		picList[i].onclick = function() {
			for (var j = 0; j < picList.length; j++) {
				picList[j].className = "";
			}
			this.className = "selec";
			clicking = this;  // 为了让this不在移出时效果消失
		}
	}
}

// 以上是头像部分的特效
function guangbotexiao() {
	var btn = document.querySelector("button");
	btn.onclick = (function() {
				var inputID = document.querySelector("input");
				var id = inputID.value;
				var h2 = document.querySelector(".btn h2");
				if (id.length == 0) {
					alert("请输入你的名字");
				} else if(!(id.length >= 2 && id.length <= 8)) {
					alert("姓名由2-8位字母、数字、下划线、汉字组成!");
				} else if(h2.firstChild.nodeValue == "已超出") {
					alert("您输入的内容已超出限制，请检查！")
				} else {
					guangbo();
				}
			})
}
// 广播内容
function guangbo() {
	var contentList = document.querySelector(".content");
	var inputID = document.querySelector("input");
	var id = inputID.value;
	var inputContent = document.querySelector("textarea");
	var content = inputContent.value;
	var picSelec = document.querySelector(".selec");
	var li = document.createElement("li");
	var img = document.createElement("img");
	var h3 = document.createElement("h3");
	var p = document.createElement("p");
	var pTime = document.createElement("p");
	var h4 = document.createElement("h4");
	img.src = picSelec.src;
	h3.innerHTML = id + ":";
	p.innerHTML = content;
	pTime.innerHTML = timing();
	pTime.className = "time";
	h4.innerHTML = "删除";
	li.appendChild(img);
	li.appendChild(h3);
	li.appendChild(p);
	li.appendChild(pTime);
	li.appendChild(h4);
	contentList.insertBefore(li,contentList.firstChild);
	li.style.height = 0;
	timer = setInterval(function() {
		
	},30)
	(function clear() {
		inputID.value = "";
		inputContent.value = "";
		clicking.className = "";
		picList[0].className = "selec";
		clicking = picList[0];	
	})();
}

// 刷新时间
function timing() {
	var now = new Date();
	var month = now.getMonth()+1;
	var date = now.getDate();
	var h = now.getHours();
	var m = now.getMinutes();
	var nowTime = month + "月" + date + "日 " + h + ":" + m;
	return nowTime;
}


//ctrl+enter 触发广播特效
function kuaijiejian() {
	window.onkeydown = function(e) {
		if (e.keyCode == 13 && e.ctrlKey) {
			guangbo();
			return false;
		}
	}
}

//字符检测加刷新剩余字符
function code() {
	var content = document.querySelector("textarea");
	var surplusDom = document.querySelector(".surplus");
	var h2 = document.querySelector(".btn h2");
	content.onkeyup = function() {
		var contentValue = content.value;
		var len = 140;
		for (var i = 0; i < contentValue.length; i++) {
			if (contentValue.charCodeAt(i) > 128) {
				len --;
			} else {
				len -= 0.5;
			}
		}
		if (len >= 0) {
			surplusDom.innerHTML = parseInt(len+0.5);
			h2.firstChild.nodeValue = "我还能输入";
			h2.style.color = "";
		} else {
			surplusDom.innerHTML = parseInt(-len+0.5);
			h2.firstChild.nodeValue = "已超出";
			h2.style.color = "red";
		}
	}
}

var timer;
//删除广播内容
function del() {
	var ul = document.querySelector(".content");
	ul.onmouseover = function() {
		var liList = document.querySelectorAll(".content li");
		for (var i = 0; i < liList.length; i++) {
			liList[i].onmouseover = function() {
				var that = this;
				var delH4 = this.getElementsByTagName("h4")[0];
				delH4.style.display = "block";
				delH4.onclick = function() {
					//需要加入删除的动画
					var alpha = 1;
					timer = setInterval(function() {
						alpha -= 0.1;
						that.style.opacity = alpha;
						if (that.style.opacity < 0) {
							clearInterval(timer);
							var height = 80;
							timer = setInterval(function() {
								height -= 10;
								that.style.height = height + "px";
								if (parseInt(that.style.height) == 0) {
									clearInterval(timer);
									that.parentNode.removeChild(that);
								}
							}, 30)
						}
					}, 30)
				}
			}
			liList[i].onmouseout = function() {
				var delH4 = this.querySelector("h4");
				delH4.style.display = "";
			}
		}
	}
}

