const secondHand = document.querySelector('.clock__hand--second');
const minuteHand = document.querySelector('.clock__hand--minute');
const hourHand = document.querySelector('.clock__hand--hour');

function setDate() {
	const now = new Date();

	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds / 60) * 360 + 90);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

	const minutes = now.getMinutes();
	const minutesDegrees = ((minutes / 60) * 360 + 90);
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

	const hours = now.getHours();
	const hoursDegrees = ((hours / 12) * 360 + 90);
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();