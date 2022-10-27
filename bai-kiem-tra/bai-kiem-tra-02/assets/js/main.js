function toggleSidebar() {
	// b1 tro den phan tu can thao tac

	const sidebar = document.querySelector('#mainSidebar');
	const cloak = document.querySelector('.cloak-mini');

	// b2 tro den object classList de thao tac

	if (sidebar) {
		sidebar.classList.toggle('mini-sized');
		cloak.classList.toggle('show');
		// them - add
		// xoa - remove
		// toggle
	}
}

const listBtn = document.querySelectorAll('.item-group-nav');

listBtn.forEach(function (button) {
	button.addEventListener('click', function () {
		const listBtnActive = document.querySelectorAll('.item-group-nav.active');
		listBtnActive.forEach(function (item) {
			item.classList.remove('active');
		});

		button.classList.add('active');
	});
});
