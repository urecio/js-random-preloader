document.addEventListener("DOMContentLoaded", function() {

	var total = 0;
	var loaded = false;
	var checkingInterval;

	var loader = document.getElementById('loader');
	loader.innerHTML = '<div id="progress"><span id="number">0</span><span>%</span></div><div id="line"></div>';
	var number = document.getElementById('number');
	var line = document.getElementById('line');
	var content = document.getElementById('content');

	function getRandomArbitrary(min, max) {
		return Math.random() * (max - min) + min;
	}

	function checkIfWindowIsLoaded() {
		if (loaded) {
			line.style.width = '100%';
			number.innerHTML = 100;
			loader.style.opacity = '0';
			content.style.opacity = '1';
			clearInterval(checkingInterval);
		} else {
			total += total < 30 ? getRandomArbitrary(0, 10) : total < 50 ? getRandomArbitrary(0, 3) : total < 70 ? getRandomArbitrary(0, 2) : total < 99 ? getRandomArbitrary(0, 1) : 0;
			total = Math.floor(total);
			number.innerHTML = total;
			line.style.width = total + '%';
			checkingInterval = setInterval(checkIfWindowIsLoaded, getRandomArbitrary(500, 3000));
		}
	}

	window.onload = function() {
		loaded = true;
	};

	checkIfWindowIsLoaded();

});
