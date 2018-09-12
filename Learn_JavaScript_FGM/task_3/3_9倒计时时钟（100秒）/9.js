var btn = document.getElementsByTagName("button")[0];
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var time = parseInt(seconds.value);
var min = parseInt(minutes.value);
var flag;
function go() {
	if (time > 0) {
		time = time - 1;
		seconds.value = time;
	} else if (time == 0 && min > 0) {
		min = min - 1;
		time = time + 59;
		minutes.value = min;
		seconds.value = time;
	} else {
		return false;
	}
}
btn.onclick = function() {
	if (btn.innerText == "开始") {
		btn.innerText = "取消";
		flag = setInterval(go,100);
	} else {
		btn.innerText = "开始";
		clearTimeout(flag);
	}
}
