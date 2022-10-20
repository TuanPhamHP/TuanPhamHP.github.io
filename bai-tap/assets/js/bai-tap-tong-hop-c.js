const btnToggle = document.querySelector('#btnToggleSidebar');

if (btnToggle) {
	btnToggle.addEventListener('click', function () {
		const target = document.querySelector('#mainSideBar');
		if (target) {
			target.classList.toggle('mini-sized');
		}
	});
}

// phần này để thay đổi phần tử active ở sidebar
// logic là khi click vào 1 item ở sidebar ta làm 2 việc
// B1: xóa toàn bộ class active hiện đang có - mục đích để tránh việc có nhiều hơn 1 phần tử được active
// B2: Thêm class 'active' vào phần tử được click, do sau bước 1 ta đã xóa hết phần tử active nên giờ ta chỉ cần thêm mới phần tử được tác động là được

function activeSidebar(event) {
	// event là 1 object được cung cấp sẵn có chứa thông tin sự kiện
	const element = event.target; // event.target luôn trả ra target (đối tượng nhận) sự kiện - ở đây ta hiểu là bản thân thẻ có sự kiện onclick
	// element ở đây đóng vai trò là thẻ được 'click'
	if (element) {
		// lấy danh sách các item đang có class active thành mảng
		const listItemActive = [...document.querySelectorAll('#mainSideBar .item-vac.active')];
		// lặp qua mảng để xóa class active
		listItemActive.forEach(function (item) {
			// item ở đây đại diện cho từng phần tử trong mảng các thẻ con của #mainSideBar có class 'active'
			item.classList.remove('active');
		});
		// Đã xóa toàn bộ class active đang có => xong B1
		// Thêm class active vào thẻ được 'click' => xong B2
		element.classList.add('active');
	}
}

// => giờ chỉ cần khi click vào nút của sidebar thì chạy function activeSideBar là được
