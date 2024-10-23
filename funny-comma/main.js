const lang = [
	{ text: 'Nếu biết trước rằng sẽ mãi xa nhau ', time: 3100 },
	{ text: '...', time: 900 },
	{ text: 'Nếu biết trước rằng sẽ mang thương đau ngày sau', time: 4400 },
	{ text: '...', time: 400 },
	{ text: 'Sao không níu lấy', time: 1800 },
	{ text: '...', time: 500 },
	{ text: 'Đôi tay ... thật lâu', time: 1900 },
	{ text: '...', time: 1100 },
	{ text: 'Để lời yêu thương nhạt màu', time: 3200 },
	{ text: 'Nếu biết trước đường đời rẽ ngang đôi ta ...', time: 3100 },
	{ text: '...', time: 800 },
	{ text: 'Nếu biết trước lời hẹn ước sẽ ...', time: 2200 },
	{ text: 'Trôi xa ... đi mất', time: 2400 },
];
const magazine24hRap = [
	{
		text: 'Vì anh yêu em nhất',
		time: 1000,
	},
	{
		text: 'Nên tất cả mọi thứ về em anh đem cất  ',
		time: 1200,
	},
	{
		text: 'Bởi vì    ',
		time: 1000,
	},
	{
		text: 'Không thể mang đem cân   ',
		time: 1000,
	},
	{
		text: 'em phải lấy vì sao trong đêm ra đem nhân ',
		time: 1350,
	},
	{
		text: 'Thích ai?',
		time: 800,
	},
	{
		text: 'Vì anh vẫn thích chờ   ',
		time: 1000,
	},
	{
		text: 'em chính là thứ mà anh luyến tiếc nhất    ',
		time: 1500,
	},
	{
		text: 'Không phải vì đâu vì ai mà nhạt phai   ',
		time: 1800,
	},
	{
		text: 'mà vì anh còn chờ ai, chắc em phải biết nhất     ',
		time: 1600,
	},
	{
		text: 'Còn yêu anh không? Anh biết em nói "Có"     ',
		time: 1600,
	},
	{
		text: 'Dẫu qua bao năm vẫn nhớ câu nói đó   ',
		time: 1600,
	},
	{
		text: 'Buổi tối hôm đó không về cùng tới ngõ   ',
		time: 1700,
	},
	{
		text: 'Hai đứa khoé mi rơi đi ngược hai lối nhỏ     ',
		time: 2100,
	},
	{
		text: 'Có ai mà khóc lúc được ở bên đâu?   ',
		time: 1600,
	},
	{
		text: 'Sao chuyện mình đơn độc cứ nhớ khắc tên lâu   ',
		time: 1500,
	},
	{
		text: 'Vì đau vậy sau này anh có nên dấu   ',
		time: 1500,
	},
	{
		text: 'Hay cứ để đủ lâu sẽ tự quên tên nhau?   ',
		time: 1700,
	},
	{
		text: ' ',
		time: 10,
	},
	{
		text: 'Băng qua vạn trùng   dạt dào một đời chứa   ',
		time: 1700,
	},
	{
		text: 'Giữ những giấc mơ   không giữ được lời hứa   ',
		time: 1700,
	},
	{
		text: 'Có lúc chọn phải bước đi hoặc bỏ những thói quen   ',
		time: 1200,
	},
	{
		text: 'Nhưng anh vẫn chưa quên nên chọn cách ngồi giữa   ',
		time: 1700,
	},
	{
		text: 'Ngày mai cả hai lập gia đình đã chọn riêng		',
		time: 1650,
	},
	{
		text: 'Tóc mình bạc đi theo năm tháng không trọn duyên		',
		time: 1650,
	},
	{
		text: 'Kì lạ chuyện hôm qua cứ như là mới gặp bồi hồi cảm xúc chưa quên vẫn còn nguyên		',
		time: 3200,
	},
	{
		text: '      (❁´◡`❁)     ',
		time: 3000,
	},
];

const prinLyrics = (string, time) => {
	return new Promise(resolve => {
		let index = 0;
		const avgSpeed = Math.floor(time / string.length);
		const interval = setInterval(() => {
			if (index < string.length) {
				process.stdout.write(string[index]);
				index++;
			} else {
				clearInterval(interval);
				console.log();
				resolve();
			}
		}, avgSpeed);
	});
};

const demo = async song => {
	for (let index = 0; index < song.length; index++) {
		let time = song[index].time;
		await prinLyrics(song[index].text, time);
	}
};
demo(magazine24hRap);
