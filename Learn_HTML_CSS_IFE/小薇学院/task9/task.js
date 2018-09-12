var change = function() {
	var btnChange = document.querySelector(".change1 h1");
	btnChange.onclick = function() {
		var buy= document.querySelector("#buy");
		var sale= document.querySelector("#sale");
		var tmp = buy.selectedIndex;
		buy.selectedIndex = sale.selectedIndex;
		sale.selectedIndex = tmp;
	}
}
var border = function() {
	var btnPre = document.querySelector("#pre");
	var btnNex = document.querySelector("#nex");
	var chengjiao = document.querySelectorAll(".chengjiao");
	chengjiao[0].classList.add("borderChange");
	btnNex.onclick = function() {
		for (var i = 0; i < chengjiao.length; i++) {
			if (chengjiao[i].classList.contains("borderChange")) {
				chengjiao[i].classList.remove("borderChange");
				if (chengjiao[i] == chengjiao[chengjiao.length-1]) {
					chengjiao[0].classList.add("borderChange");
				} else {
					chengjiao[i+1].classList.add("borderChange");	
				}	
				break;
			}
		}
	}
	btnPre.onclick = function() {
		for (var i = 0; i < chengjiao.length; i++) {
			if (chengjiao[i].classList.contains("borderChange")) {
				chengjiao[i].classList.remove("borderChange");
				if (chengjiao[i] == chengjiao[0]) {
					chengjiao[chengjiao.length-1].classList.add("borderChange");
				} else {
					chengjiao[i-1].classList.add("borderChange");
				}
				break;
			}
		}
	}
}
var number = function() {
	var num = document.querySelectorAll(".sec5R tbody .col3");
	var numList = [];
	var sum = 0;
	for (var i = 0; i < num.length; i++) {
		var IntNum = parseInt(num[i].innerText);
		numList.push(IntNum);
		sum += IntNum;
	}
	var planWidthList = [];
	for (var i = 0; i < numList.length; i++) {
		planWidthList.push(parseInt(numList[i] / sum * 200));
	}
	var plan = document.querySelectorAll(".sec5R tbody .plan");
	for (var i = 0; i < plan.length; i++) {
		planWidth = planWidthList[i];
		plan[i].style.width = planWidth + "px";
	}

}
var threeList = function() {
	var twoList = document.querySelectorAll(".nav ul");
	for (var i = 0; i < twoList.length; i++) {
		twoList[i].style.display = "none";
	}
	var oneList = document.querySelectorAll(".nav li>h2");
	for (var i = 0; i < oneList.length; i++) {
		oneList[i].onclick = function () {
			if (!this.nextElementSibling) return false;
			var twoEle = this.nextElementSibling
			twoEle.style.display = (twoEle.style.display == "none") ? "" : "none";
		}
	}
}
window.onload = function() {
	change();
	border();
	number();
	threeList();
}