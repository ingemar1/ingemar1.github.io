function carousel(carouselSelector, carouselTrackSelector, carouselItemSelector, prevSelector, nextSelector, btnInactiveClassName, navigationDotsSelector, navigationDotSelector, navigationActiveDotClassName){
	let slideIndex = 0,
		navigationDotsArray = [],
		widthCarousel = 0,
		widthItem = 0;
	const carouselEl = document.querySelector(carouselSelector)
		itemsTrackEl = document.querySelector(carouselTrackSelector),
		itemsEls = itemsTrackEl.querySelectorAll(carouselItemSelector),
		prevEl = document.querySelector(prevSelector),
		nextEl = document.querySelector(nextSelector),
		navigationDotsEl = document.querySelector(navigationDotsSelector);
	
	function initCarousel() {
		widthCarousel = carouselEl.clientWidth;
		const navigationActiveDotEl = document.querySelector("." + navigationActiveDotClassName),
			styleSlide = itemsTrackEl.currentStyle || window.getComputedStyle(itemsTrackEl),
			gapSlide = styleSlide.gridColumnGap.split("px");
		widthItem = widthCarousel + parseInt(gapSlide[0]);
		if (window.innerWidth < 576) {
			itemsTrackEl.style.gridTemplateColumns = `repeat(${itemsEls.length - 2}, ${widthCarousel}px)`;
			rollSlides(navigationDotsArray.indexOf(navigationActiveDotEl));
		}else{
			itemsTrackEl.style.gridTemplateColumns = '';
			itemsTrackEl.style.transform = '';
		}
	}

	function updateArrows(slideIndex){
		if (slideIndex === 0) {
			prevEl.disabled = true;
			prevEl.classList.add(btnInactiveClassName);
			nextEl.disabled = false;
			nextEl.classList.remove(btnInactiveClassName);
		}
		if (slideIndex > 0 && slideIndex < itemsEls.length-3){
			prevEl.disabled = false;
			prevEl.classList.remove(btnInactiveClassName);
			nextEl.disabled = false;
			nextEl.classList.remove(btnInactiveClassName);
		}
		if (slideIndex === itemsEls.length-3) {
			nextEl.disabled = true;
			nextEl.classList.add(btnInactiveClassName);
			prevEl.disabled = false;
			prevEl.classList.remove(btnInactiveClassName);
		}
	}
	function rollSlides(slideIndex) {
		itemsTrackEl.style.transform = `translate(-${slideIndex * widthItem}px, 0)`;
	}
	function createNavigationDots(){
		for (let i = 0; i < itemsEls.length - 2; i++){
			const dot = document.createElement("li");
			dot.classList.add("carousel__navigation__dot");
			navigationDotsEl.appendChild(dot);
			navigationDotsArray.push(dot);
		}
		navigationDotsArray[0].classList.add(navigationActiveDotClassName);
	}
	function removeActiveDot(slideIndex){
		navigationDotsArray[slideIndex].classList.remove(navigationActiveDotClassName);
	}
	function addActiveDot(slideIndex) {
		navigationDotsArray[slideIndex].classList.add(navigationActiveDotClassName);
	}
	prevEl.addEventListener("click", () => {
		if (slideIndex > 0) {
			removeActiveDot(slideIndex);
			slideIndex -= 1;
			addActiveDot(slideIndex);
			updateArrows(slideIndex);
			rollSlides(slideIndex);
		}
	});
	nextEl.addEventListener("click", () => {
		if (slideIndex < itemsEls.length - 3) {
			removeActiveDot(slideIndex);
			slideIndex += 1;
			addActiveDot(slideIndex);
			updateArrows(slideIndex);
			rollSlides(slideIndex);
		}
	});
	navigationDotsEl.addEventListener("click", (event) => {
		const target = event.target;
		if (target && target.closest(navigationDotSelector)) {
			removeActiveDot(slideIndex);
			slideIndex = navigationDotsArray.indexOf(target);
			addActiveDot(slideIndex);
			updateArrows(slideIndex);
			rollSlides(slideIndex);
		}
	});
	updateArrows(slideIndex);
	createNavigationDots();	
	window.addEventListener("resize", initCarousel);
	initCarousel();
}

function scrollPage(id){
	const linkEl = document.querySelector(`[href='#${id}']`);
	const blockEl = document.getElementById(id);
	linkEl.addEventListener("click", (event) => {
		if (event.target) {
			event.preventDefault();
		}
		window.scrollTo({ top: blockEl.offsetTop, left: 0, behavior: "smooth" });
	});
}

function automaticLoopedCarousel(carouselSelector, carouselTrackSelector, carouselItemSelector, prevSelector, nextSelector, currentSlideSelector, totalSlidesSelector) {
	let slideIndex = 0,
		numberVisibleElements = 0,
		numberOfSlides = 0,
		widthCarousel = 0,
		intervalId = 0,
		numberOfLeftSlides = 0;
	const carouselEl = document.querySelector(carouselSelector),
		itemsTrackEl = document.querySelector(carouselTrackSelector),
		itemsEls = itemsTrackEl.querySelectorAll(carouselItemSelector),
		prevEl = document.querySelector(prevSelector),
		nextEl = document.querySelector(nextSelector),
		currentSlideEl = document.querySelector(currentSlideSelector),
		totalSlidesEl = document.querySelector(totalSlidesSelector);
	function init() {
		if (window.innerWidth > 768) {
			numberVisibleElements = 3;
		}
		if (window.innerWidth < 768 && window.innerWidth > 576) {
			numberVisibleElements = 2;
		}
		if (window.innerWidth < 576) {
			numberVisibleElements = 1;
		}
		numberOfSlides = Math.ceil(itemsEls.length / numberVisibleElements);
		totalSlidesEl.textContent = itemsEls.length;
		widthCarousel = carouselEl.clientWidth;
		itemsTrackEl.style.width = widthCarousel * numberOfSlides + "px";
		const styleSlide = itemsTrackEl.currentStyle || window.getComputedStyle(itemsTrackEl),
			gapSlide = styleSlide.gap.split("px");
		itemsEls.forEach(element => {
			element.style.width = (widthCarousel / numberVisibleElements - parseInt(gapSlide[0])) + "px";
		});
		showSlides(slideIndex);
		setAutomaticSlideChange();
	}
	function rollSlides(slideIndex) {
		itemsTrackEl.style.transform = `translate(-${slideIndex * widthCarousel}px, 0)`;
	}
	function printCurrentSlide(slideIndex) {
		numberOfLeftSlides = itemsEls.length % numberVisibleElements;
		if (numberOfLeftSlides == 0 || (numberOfLeftSlides != 0 && slideIndex !== numberOfSlides - 1)){
			currentSlideEl.textContent = (numberVisibleElements * (slideIndex + 1));
		}
		if (numberOfLeftSlides != 0 && slideIndex === numberOfSlides - 1) {
			currentSlideEl.textContent = (numberVisibleElements * slideIndex) + numberOfLeftSlides;
		}
	}
	function showSlides(index){
		if (index < 0) {
			slideIndex = numberOfSlides - 1;
		}
		if (index > numberOfSlides - 1) {
			slideIndex = 0;
		}
		rollSlides(slideIndex);
		printCurrentSlide(slideIndex);
	}
	function setAutomaticSlideChange(){
		clearInterval(intervalId);
		intervalId = setInterval(() => {
			slideIndex += 1;
			showSlides(slideIndex);
		}, 4000);
	}
	prevEl.addEventListener("click", () => {
		slideIndex -= 1;
		showSlides(slideIndex);
		setAutomaticSlideChange();
	});
	nextEl.addEventListener("click", () => {
		slideIndex += 1;
		showSlides(slideIndex);
		setAutomaticSlideChange();
	});
	window.addEventListener("resize", init);
	init();
}


document.addEventListener('DOMContentLoaded', () => {
	carousel(".stages__carousel", ".stages__carousel__items", ".stages__carousel__item", ".stages__carousel__btn-l", ".stages__carousel__btn-r", "carousel__navigation__btn-inactive", ".stages__carousel-navigation .carousel__navigation__dots", ".stages__carousel-navigation .carousel__navigation__dot", "carousel__navigation__dot-active");
	scrollPage("support");
	scrollPage("moreDetailed");
	automaticLoopedCarousel(".participants__carousel", ".participants__carousel__items", ".participants__carousel__item", ".participants__carousel__btn-l", ".participants__carousel__btn-r", ".participants__carousel-navigation .carousel__navigation__active", ".participants__carousel-navigation .carousel__navigation__total");
});