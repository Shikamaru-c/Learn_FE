var btn = document.querySelector("div");
btn.onclick = function() {
	var i = 0;
	clearTimeout(go);
	var go = setInterval(function() {
		i++;
		btn.style.display = (i % 2 == 0) ? "block" : "none";
		if (i > 5) {
			clearTimeout(go);
		} 
	}, 80)
}