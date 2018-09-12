var input = document.getElementsByTagName("input")[0];
var ul = document.getElementsByTagName("ul")[0];
var body = document.getElementsByTagName("body")[0];
ul.style.display = "none";
input.onclick = function() {
	input.disabled = true;
	if (ul.style.display == "none") {
		ul.style.display = "";
	} else {
		ul.style.display = "none";
	}
	return false;
}
body.onclick = function(){
	ul.style.display = "none";
	return false;
}
var li = ul.getElementsByTagName("li");
for (var i=0; i < li.length; i++) {
	li[i].onclick = function() {
		ul.style.display = "none";
		var txt = this.innerText;
		input.value = txt;
		input.disabled = false;
	}
}
