const formatNumber = number => {
	return Intl.NumberFormat('en-US', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(number);
};
const formatCurrency = (number, prefix = true) => {
	const str = formatNumber(number);
	const rs = number < 0 ? `${str.replaceAll('-', '')}` : `${str}`;
	return prefix ? rs.split('.')[0] : rs.split('.').pop();
};
const counters = document.querySelectorAll('.value');

const animate = counter => {
	if (!counter) {
		return;
	}
	const value = +counter.getAttribute('count-to');
	const data = +counter.innerText.replaceAll(',', '');
	const speed = +counter.getAttribute('speed') || 200;

	const time = value / speed;
	if (data < value) {
		counter.innerText = formatCurrency(Math.ceil(data + time));
		setTimeout(() => {
			animate(counter);
		}, 1);
	} else {
		counter.innerText = formatCurrency(value).replaceAll(',', '.');
	}
};
counters.forEach(counter => {
	onVisible(counter, () => {
		console.log(counter);
		if (counter) {
			animate(counter);
		}
	});
	// animate(counter);
});

function onVisible(element, callback) {
	new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.intersectionRatio > 0) {
				callback(element);
				observer.disconnect();
			}
		});
	}).observe(element);
	if (!callback) return new Promise(r => (callback = r));
}

var swiper1 = new Swiper('.client-comments-swiper', {
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
			slidesPerView: 4,
			spaceBetween: 30,
		},
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
