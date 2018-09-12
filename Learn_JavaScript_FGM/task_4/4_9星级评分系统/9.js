var li = document.getElementsByTagName("li");
for (var i = 0; i < li.length; i++) {
	li[i].onmouseover = function() {
		for (var i = 0; i < li.length; i++) {
			if (li[i] == this) {
				for (var j = 0; j < i+1; j++) {
					li[j].className = "star";
				}
			}
		}
	}
	li[i].onmouseout = function() {
		for (var i = 0; i < li.length; i++) {
			if (li[i] == this) {
				for (var j = i; j < li.length; j++) {
					li[j].className = "";
				}
			}
		}
	}
}
var ul = document.getElementsByTagName("ul")[0];
ul.onmouseout = function() {
	for (var i = 0; i < li.length; i++) {
		li[i].className = "";
	}
}