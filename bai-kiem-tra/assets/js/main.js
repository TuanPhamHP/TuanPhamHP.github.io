function checkAuth() {
	console.log('?');
	let person = prompt('Please enter your code', '');
	if (person !== 'ppz12d') {
		setTimeout(() => {
			document.head.innerHTML = `
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Bài tập số 01</title>`;
			document.body.innerHTML = '<h1>Code không đúng, refresh để nhập lại</h1>';
		}, 10);
	}
}
checkAuth();
