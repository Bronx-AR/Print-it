const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Appel balises HTML
const boutonG = document.getElementById("fleche_gauche");
const boutonD = document.getElementById("fleche_droite");
const imageItem = document.querySelector('.banner-img');
const tagLine = document.querySelector("p");
const dots = document.querySelector('.dots');
const dotElements = document.getElementsByClassName("dot");
let indexSlides = 0;
const baseUrlImage = "assets/images/slideshow";

//Lestener flèche de gauche et droite

function main() {
	createDots();
	clickPrevSlide();
	clickNextSlide();
}

main();

function clickPrevSlide() {
	boutonG.addEventListener("click", function() {
		if (indexSlides <= 0) {
			indexSlides = slides.length - 1;
		} else {
			indexSlides = indexSlides - 1;
		}
		setActiveDot();
		updateContentSlide();
		console.log("clique gauche")
	});
}

function clickNextSlide() {
	boutonD.addEventListener("click", function() {
		indexSlides++;
		if (indexSlides >= slides.length) {
			indexSlides = 0;
		}
		setActiveDot();
		updateContentSlide();
	});
}

function updateContentSlide() {
	imageItem.src = baseUrlImage + slides[indexSlides].image;
	tagLine.innerHTML = slides[indexSlides].tagLine;
}

function createDots() {
	for (let i = 0; i < slides.length; i++) {
		let div = document.createElement("div");
		div.classList.add("dot");
		dots.appendChild(div);
		if (i == indexSlides) div.classList.add("dot_selected");
	}
}

function setActiveDot() {
	document.querySelector("dot_selected").classList.remove("dot_selected");
	dotElements[indexSlides].classList.add("dot_selected");
}
