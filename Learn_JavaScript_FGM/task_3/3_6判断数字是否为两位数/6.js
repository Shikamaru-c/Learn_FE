var btn = document.getElementsByTagName("button")[0];
var input = document.getElementsByTagName("input")[0];
btn.onclick = function() {
	var num = parseInt(input.value);
	var len = (num + "").length;
	if (!num) {
		alert("请输入数字")
	} else if (len == 2) {
		alert("√这是一个2位数")
	} else {
		alert("这是一个" + len + "位数")
	}
}

// 这是原生js的实现方法 为了检测num的长度 把num转换成了字符串