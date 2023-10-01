const renderListMarker = () => {
	const markupDetail = document.querySelector('#markupDetail');
	const detailData = document.querySelector('#detailData');
	const listTitle = detailData.querySelectorAll('h3');
	listTitle.forEach((item, idx) => {
		item.setAttribute('id', `markup_level_${idx}`);
		item.classList.add('scroll-padding-top');
		const relativeLink = document.createElement('a');
		relativeLink.href = `#markup_level_${idx}`;
		relativeLink.innerHTML = `${item.innerText}`;
		relativeLink.className = 'text-16px text-md-18px font-semibold text-black mb-3 d-block text-decoration-none';
		markupDetail.appendChild(relativeLink);
	});
};
renderListMarker();
