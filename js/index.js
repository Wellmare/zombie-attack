const zombieHealthNode = document.querySelector('#zombie-health');
const yourHealthNode = document.querySelector('#zombie-health');

const attackBtnNode = document.querySelector('#attack-btn');

const zombieAttackNode = document.querySelector('zombie-attack-count');
const yourAttackNode = document.querySelector('your-attack-count');

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

	currentSide = 0;
};
const zombieStep = () => {
	console.log('Zombie step');

	currentSide = 1;
};

attackBtnNode.addEventListener('click', () => {
	if (currentSide === 1) {
		yourStep();
        setTimeout(zombieStep, 2000)
	}

	step++;
});
