var btn = document.getElementsByTagName("button")[0];
var input = document.getElementsByTagName("input")[0];
input.onkeydown = function(event) {
	if (!((event.keyCode > 48 && event.keyCode < 57) || event.keyCode == 188)) {
		return false;
	}
}
btn.onclick = function() {
	var val = input.value;
	var numList = val.split(",");
	var sum = 0;
	for (var i = 0; i < numList.length; i++) {
		sum += parseInt(numList[i]);
	}
	alert(sum);
}