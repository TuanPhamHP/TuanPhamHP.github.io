document.addEventListener('DOMContentLoaded', () => {
	const buttonToggleMenu = document.querySelector('#buttonToggleMenu');
	const navBarMain = document.querySelector('#navBarMain');
	const navCloak = document.querySelector('#navCloak');
	if (buttonToggleMenu && navBarMain) {
		buttonToggleMenu.addEventListener('click', () => {
			navBarMain.classList.toggle('show');
		});
		navCloak.addEventListener('click', () => {
			navBarMain.classList.remove('show');
		});
	}
});
