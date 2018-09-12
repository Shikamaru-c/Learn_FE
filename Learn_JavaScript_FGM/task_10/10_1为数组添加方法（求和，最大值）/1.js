Array.prototype.sum = function() {
	return this.reduce(function(a,b,c,d) {
		return a + b;
	})
}
var list = [1,2,3,4];
Array.prototype.max = function() {
	return Math.max(...this);
}
alert(list.sum());
alert(list.max());