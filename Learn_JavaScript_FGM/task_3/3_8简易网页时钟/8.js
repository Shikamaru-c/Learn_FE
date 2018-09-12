var hour = document.getElementById("hour");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
function time() {
	var now = new Date();
	var h = now.getHours();
	var m = now.getMinutes();
	var s = now.getSeconds();
	hour.value = h;
	minutes.value = m;
	seconds.value = s;
}
window.onload = function() {
	setInterval(time,1000);
}