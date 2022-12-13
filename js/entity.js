class Entity {
	// isDead = false;

	constructor({
		initialHealth,
		minAttack,
		maxAttack,
		sideName,
		nodes,
		animationSide
	}) {
		const {
			healthNodeSelector,
			attackWrapperNodeSelector,
			attackSizeNodeSelector,
			entityNodeSelector
		} = nodes;
		this.healthNode = document.querySelector(healthNodeSelector);
		this.attackWrapperNode = document.querySelector(
			attackWrapperNodeSelector
		);
		this.attackSizeNode = document.querySelector(attackSizeNodeSelector);
		this.entityNode = document.querySelector(entityNodeSelector);
		this.animationSide = animationSide;

		// console.log(this.healthNode);

		this.currentHealth = initialHealth;

		this.minAttack = minAttack;
		this.maxAttack = maxAttack;
		this.currentAttackSize = null;

		this.enemy;

		this.sideName = sideName;
	}

	attack = () => {
		this.currentAttackSize = getRandomNumber(
			this.minAttack,
			this.maxAttack
		);
		// console.log(this.currentAttackSize);
		this.enemy.takeDamage(this.currentAttackSize);

		this.renderEntity();
	};

	takeDamage = (damageSize) => {
		this.currentHealth -= damageSize;
		this.entityNode.classList.add(
			this.animationSide === animationSideEnum.left
				? 'damaged-left'
				: 'damaged-right'
		);

		setTimeout(() => {
			this.entityNode.classList.remove(
				this.animationSide === animationSideEnum.left
					? 'damaged-left'
					: 'damaged-right'
			);
		}, 1000)

		if (this.currentHealth <= 0) {
			// this.isDead = true;
			// Game.stop()
			this.renderEntity();
			Game.win(this.enemy.sideName);
		}
		this.renderEntity();
		
	};

	renderEntity = () => {
		if (this.currentAttackSize !== null) {
			console.log('render');
			this.enemy.attackWrapperNode.classList.add('hide');
			this.attackWrapperNode.classList.remove('hide');
			this.attackSizeNode.textContent = this.currentAttackSize;
		}
		this.healthNode.textContent =
			this.currentHealth <= 0 ? 'Dead' : this.currentHealth;
	};
}
