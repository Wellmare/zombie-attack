const zombieHealthNode = document.querySelector('#zombie-health');
const yourHealthNode = document.querySelector('#your-health');

const attackBtnNode = document.querySelector('#attack-btn');

const zombieAttackNode = document.querySelector('#zombie-attack-count');
const yourAttackNode = document.querySelector('#your-attack-count');

const setAttack = (attackNode, attackValue) => {
	attackNode.textContent = attackValue;
};

const setHealth = (healthNode, healthValue) => {
	healthNode.textContent = healthValue;
};

let step = 0;
// 0 - zombie 1 - you
let currentSide = 1;

const yourStep = () => {
	console.log('My step');
	const attackSize = getRandomAttackSize(10, 30);
	console.log(attackSize);

	document.querySelector('#your-attack').classList.remove('hide');
	document.querySelector('#zombie-attack').classList.add('hide');

	yourAttackNode.textContent = attackSize;
	zombieHealthNode.textContent = +zombieHealthNode.textContent - attackSize;

	currentSide = 0;

	if (+zombieHealthNode.textContent <= 0) {
		yourWin();
	}
};
const zombieStep = () => {
	console.log('Zombie step');
	const attackSize = getRandomAttackSize(10, 40);
	console.log(attackSize);

	document.querySelector('#zombie-attack').classList.remove('hide');
	document.querySelector('#your-attack').classList.add('hide');

	zombieAttackNode.textContent = attackSize;
	yourHealthNode.textContent = +yourHealthNode.textContent - attackSize;

	currentSide = 1;

	if (+yourHealthNode.textContent <= 0) {
		zombieWin();
	}
};

attackBtnNode.addEventListener('click', () => {
	if (currentSide === 1) {
		yourStep();
		attackBtnNode.classList.add('disabled');
		setTimeout(() => {
			zombieStep();
			attackBtnNode.classList.remove('disabled');
		}, 2000);
	}

	step++;
});

function getRandomAttackSize(min, max) {
	return Math.floor(Math.random() * max) + min;
}

function zombieWin() {
	win('Зомби');
}

function yourWin() {
	win('Ты');
}

function win(sideWin) {
	const html = `
		<div class="modal" tabindex="-1">
			<div class="modal-dialog">
			  <div class="modal-content">
				<div class="modal-header">
				  <h5 class="modal-title">${sideWin} выйграл!</h5>
				  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
				  <p>Хочешь начать заново?</p>
				</div>
				<div class="modal-footer">
				  <button type="button" class="btn btn-primary" id="replay" data-bs-dismiss="modal">Заново</button>
				</div>
			  </div>
			</div>
		<div>
	`;
	document.body.insertAdjacentHTML('beforeend', html);

	// document.querySelector('#modal-wrapper').innerHTML = `
	// 	<div class="modal" tabindex="-1">
	// 		<div class="modal-dialog">
	// 		  <div class="modal-content">
	// 			<div class="modal-header">
	// 			  <h5 class="modal-title">${sideWin} выйграл!</h5>
	// 			  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
	// 			</div>
	// 			<div class="modal-body">
	// 			  <p>Хочешь начать заново?</p>
	// 			</div>
	// 			<div class="modal-footer">
	// 			  <button type="button" class="btn btn-primary" id="replay" data-bs-dismiss="modal">Заново</button>
	// 			</div>
	// 		  </div>
	// 		</div>
  	// 	<div>
	// `;
}
