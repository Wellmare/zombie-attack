const attackBtnNode = document.querySelector('#attack-btn');

class Game {
	isStopped = false;
	constructor() {}
	static start = () => {
		if (!this.isStopped) {
			const zombie = new Entity(50, 10, 30, 'Zombie', {
				healthNodeSelector: '#zombie-health',
				attackWrapperNodeSelector: '#zombie-attack',
				attackSizeNodeSelector: '#zombie-attack-count'
			});
			const human = new Entity(150, 10, 20, 'You', {
				healthNodeSelector: '#your-health',
				attackWrapperNodeSelector: '#your-attack',
				attackSizeNodeSelector: '#your-attack-count'
			});

			console.log(zombie);
			console.log(human);

			zombie.enemy = human;
			human.enemy = zombie;

			zombie.renderEntity();
			human.renderEntity();

			attackBtnNode.addEventListener('click', () => {
				attackBtnNode.classList.add('disabled')
				human.attack();
				setTimeout(() => {
					zombie.attack();
					attackBtnNode.classList.remove('disabled')
				}, 2000);
			});
		}

		// while (isStopped) {
		//     setTimeout(console.log, 3000)
		// }
	};

	static stop = () => {};

	static win = (sideWin) => {
		console.log(sideWin + ' win');
		// attackBtnNode.classList.add('disabled')
	};
}
