let container1 = document.querySelector(".container1");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 1000);

btn.onclick = function () {
	container1.style.transform = "rotate(" + number + "deg)";
	number += Math.ceil(Math.random() * 1000);
}