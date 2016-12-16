const panels = document.querySelectorAll('.panels__panel');

function togglePanelOpen() {
	this.classList.toggle('panels__panel--open');
}

function togglePanelActive(e) {
	if (e.propertyName.includes('flex')) {
		this.classList.toggle('panels__panel--active');
	}
}

panels.forEach(panel => panel.addEventListener('click', togglePanelOpen));
panels.forEach(panel => panel.addEventListener('transitionend', togglePanelActive));