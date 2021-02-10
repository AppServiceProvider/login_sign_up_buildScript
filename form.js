function loginBtn(e) {
	const num = document.getElementById('myInput').value;

	if (num === '') {
		setTimeout(function show() {
			let snd = new Audio(
				'https://drive.google.com/file/d/19qZ2Hxr_9zh7a2XSFHuJQUL-9RXVFGiH/view?usp=sharing'
			);
			snd.play();
		}, 1000);
		alert('Please enter 8 digit password');
	} else if (num < 0) {
		alert('Please enter positive password');
	}
}

submit.addEventListener('click', loginBtn);

function myFunction() {
	var x = document.getElementById('myInput');
	if (x.type === 'password') {
		x.type = 'text';
	} else {
		x.type = 'password';
	}
}

function upperCaseF(a) {
	setTimeout(function () {
		a.value = a.value.toUpperCase();
	}, 1);
}
