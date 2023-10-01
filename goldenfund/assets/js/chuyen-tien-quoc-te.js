var newsSwiper = new Swiper('.news-swiper', {
	slidesPerView: 1,
	spaceBetween: 20,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.custom-swiper-button-next',
		prevEl: '.custom-swiper-button-prev',
	},
	breakpoints: {
		640: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
});

var casesSwiper = new Swiper('.cases-swiper', {
	slidesPerView: 1,
	spaceBetween: 20,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.custom-swiper-button-next',
		prevEl: '.custom-swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		640: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 50,
		},
	},
});
