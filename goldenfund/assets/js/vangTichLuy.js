var goldTradeSwiper = new Swiper('.gold-trade-swiper', {
	slidesPerView: 1,
	spaceBetween: 20,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	// pagination: {
	// 	el: '.swiper-pagination',
	// 	clickable: true,
	// },
	navigation: {
		nextEl: '.custom-swiper-button-next',
		prevEl: '.custom-swiper-button-prev',
	},
});
var swiper2 = new Swiper('.news-swiper', {
	slidesPerView: 1,
	spaceBetween: 20,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	// pagination: {
	// 	el: '.swiper-pagination',
	// 	clickable: true,
	// },
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
