const swiper = new Swiper('.customers-block__swiper', {
	slidesPerView: 'auto',
	centeredSlides: true,
	initialSlide: 1,
	spaceBetween: 20,
	allowTouchMove: true,
	breakpoints: {
		1024: {
			allowTouchMove: false,
		},

		1510: {
			spaceBetween: 30,
		}
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	}
});