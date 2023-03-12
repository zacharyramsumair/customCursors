let cursor = document.getElementById("cursor");
let circle = document.querySelector("#circle path");
let triangle = document.querySelector("#triangle path");
let square = document.querySelector("#square path");
let cube = document.querySelector("#cube path");
let hiddenText = document.getElementById("Text");

document.addEventListener("mousemove", function (e) {
	let x = e.clientX;
	let y = e.clientY;
	cursor.style.left = x + "px";
	cursor.style.top = y + "px";

	hiddenText.style.left = x + "px";
	hiddenText.style.top = y + "px";
});

circle.addEventListener("mouseover", () => {
	cursor.classList.toggle("big");
	hiddenText.classList.toggle("appear");
	hiddenText.textContent = "Circle";
});

circle.addEventListener("mouseleave", () => {
	cursor.classList.toggle("big");
	hiddenText.classList.toggle("appear");
});

triangle.addEventListener("mouseover", () => {
	cursor.classList.toggle("big");
	hiddenText.classList.toggle("appear");
	hiddenText.textContent = "Triangle";
});

triangle.addEventListener("mouseleave", () => {
	cursor.classList.toggle("big");
	hiddenText.classList.toggle("appear");
});

cube.addEventListener("mouseover", () => {
	cursor.classList.toggle("big");
	hiddenText.classList.toggle("appear");
	hiddenText.textContent = "Cube";
});

cube.addEventListener("mouseleave", () => {
	cursor.classList.toggle("big");
	hiddenText.classList.toggle("appear");
});

square.addEventListener("mouseover", () => {
	cursor.classList.toggle("big");
	hiddenText.classList.toggle("appear");
	hiddenText.textContent = "Square";
});

square.addEventListener("mouseleave", () => {
	cursor.classList.toggle("big");
	hiddenText.classList.toggle("appear");
});
