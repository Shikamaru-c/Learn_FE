var div = document.querySelectorAll("div");
var tmpDiv = document.createElement("div");
for (var i = 0; i < div.length; i++) {
	div[i].onmousedown = function(e) {
		var tmpX = this.offsetLeft;
		var tmpY = this.offsetTop;
		var difX = e.pageX - this.offsetLeft;
		var difY = e.pageY - this.offsetTop;
		this.onmousemove = function(e) {
			this.parentNode.insertBefore(tmpDiv,this);
			tmpDiv.style.left = tmpX + "px";
			tmpDiv.style.top = tmpY + "px";
			this.style.opacity = 0.3;
			this.style.left = e.pageX - difX + "px";
			this.style.top = e.pageY - difY + "px";
			return false;
		}
		this.onmouseup = function() {
			this.parentNode.removeChild(tmpDiv);
			this.onmousemove = null;
			this.style.opacity = 1;
		}
		return false;
	}
}