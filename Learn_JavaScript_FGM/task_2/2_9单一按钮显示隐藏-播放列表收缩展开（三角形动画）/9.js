var h1 = document.getElementsByTagName("h1")[0];
var wrapper = document.getElementsByClassName("wrapper")[0];
h1.onclick = function() {
	if (window.getComputedStyle(wrapper,"").height == "30px") {
		wrapper.style.height = "auto";
	} else {
		wrapper.style.height = "30px";
	}
}
