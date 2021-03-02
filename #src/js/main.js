// if you need slick slider uncomment this cat


$(document).ready(function () {
	$(".slider-apply").slick({
		slideToSHow: 1,
		adaptiveHeight: true,
		dots: true,
		arrows: false,
		infinite: false,
		easing: 'linear',
		lazyLoad: 'ondemand',
		draggable: false,
		// fade: true,
	});
});

let headerNav = document.querySelector('.header__nav');
let headerBurger = document.querySelector('.header__burger');
let bodyLock = document.querySelector('body');
let headerItem = document.querySelector('.header__link');

headerBurger.addEventListener('click', function(e) {
	e.preventDefault();

	headerNav.classList.toggle('header-active');
	headerBurger.classList.toggle('header-active');
	bodyLock.classList.toggle('lock');
});

//======================================================================================================================================
// SLick  ==============================================================================================================================
//======================================================================================================================================

@@include('slick.min.js')
