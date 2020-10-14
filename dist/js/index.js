//creating neon effect button
const neonBtn = document.querySelectorAll('.neon-btn');
for (let i = 0; i < neonBtn.length; i++) {
	for (let j = 0; j < 4; j++) {
		let span = document.createElement('span');
		neonBtn[i].append(span);
	}
}

const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
	card.addEventListener('click', function () {
		card.classList.toggle('is-flipped');
	});
});
