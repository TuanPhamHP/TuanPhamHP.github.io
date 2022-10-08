let debounceCallbackRef = 0;

const debounceCallback = (callback = () => {}, times = 1000) => {
	if (debounceCallbackRef) {
		clearTimeout(debounceCallbackRef);
	}
	debounceCallbackRef = setTimeout(callback, times);
};
const relieveBtnScrollTop = () => {
	const target = document.querySelector('#btnScrollToTop');
	const currentCs = window.pageYOffset;
	if (!target) {
		return;
	}
	currentCs > 250
		? (() => {
				target.classList.remove('btn-scroll-to-top--on-hiding');
		  })()
		: (() => {
				target.classList.add('btn-scroll-to-top--on-hiding');
		  })();
};
const handleStickTopBlock = () => {
	const currentCs = window.pageYOffset;
	const target = document.querySelector('#headerTopWr');
	if (!target) {
		return;
	}
	target.classList.add('on-sticky-top');
	// currentCs > 0
	// 	? (() => {
	// 			target.classList.add('on-sticky-top');
	// 	  })()
	// 	: (() => {
	// 			target.classList.remove('on-sticky-top');
	// 	  })();
};
document.addEventListener('DOMContentLoaded', function () {
	window.addEventListener('scroll', () => {
		relieveBtnScrollTop();
		handleStickTopBlock();
	});
	document.querySelector('#btnScrollToTop').addEventListener('click', () => {
		window.scrollTo(0, 0);
	});
	document.querySelector('#btnToggleHeaderNavigator').addEventListener('click', () => {
		document.querySelector('#menuSidebar').classList.add('menu-side-bar-show');
	});
	document.querySelector('#menuSidebar').addEventListener('click', () => {
		document.querySelector('#menuSidebar').classList.remove('menu-side-bar-show');
	});
	document.querySelector('#toggleSearchBtn').addEventListener('click', () => {
		document.querySelector('#navigatorSearchBar').classList.toggle('mobile-show-search-bar');
	});
	document.querySelector('#menuSidebarContent').addEventListener('click', e => {
		e.stopPropagation();
	});
});
// $(document).ready(function () {
// 	$(document).ready(function () {
// 		$('[data-toggle="tooltip"]').tooltip();
// 	});
// 	$('#menuSidebar').click(function (e) {
// 		$('#menuSidebar').classList.remove('menu-side-bar-show');
// 	});
// 	$('#menuSidebarContent').click(function (e) {
// 		e.stopPropagation();
// 	});
// 	$('#btnToggleHeaderNavigator').click(function (e) {
// 		$('#menuSidebar').classList.add('menu-side-bar-show');
// 	});
// 	$('#btnScrollToTop').click(function (e) {
// 		$(window).scrollTop(0);
// 	});
// 	$('#toggleExpandSub').click(function (e) {
// 		$('#toggleExpandSub').toggleClass('rotate-z-180deg');
// 		$('#subMenuCharator').toggleClass('sub-menu-shown');
// 		$('#menuOwnExpand').toggleClass('each-navigator-on-active');
// 		$('#aTagSub').toggleClass('navigator-active');
// 	});
// });
