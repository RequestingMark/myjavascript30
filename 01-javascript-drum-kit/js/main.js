function playSound(e) {
	console.log('keydown');
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.drum-kit__key[data-key="${e.keyCode}"]`);

	if (!audio) return;

	console.log('there is audio');

	audio.currentTime = 0;
	audio.play();

	key.classList.add('drum-kit__key--playing');
}

function removeTransition(e) {
	if (e.propertyName !== 'transform') return;
	e.target.classList.remove('drum-kit__key--playing');
}

const keys = document.querySelectorAll('.drum-kit__key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);