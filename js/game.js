const attackBtnNode = document.querySelector('#attack-btn');

class Game {
	isStopped = false;
	attackBtnHandler;
	constructor() {}
	static start = () => {
		if (!this.isStopped) {
			const zombie = new Entity(50, 20, 40, 'Zombie', {
				healthNodeSelector: '#zombie-health',
				attackWrapperNodeSelector: '#zombie-attack',
				attackSizeNodeSelector: '#zombie-attack-count'
			});
			const human = new Entity(150, 10, 30, 'You', {
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

			attackBtnNode.classList.remove('disabled');
			console.log('remove disabled');

			this.attackBtnHandler = () => {
				if (!this.isStopped) {
					attackBtnNode.classList.add('disabled');
					human.attack();
					setTimeout(() => {
						if (!this.isStopped) {
							zombie.attack();
							attackBtnNode.classList.remove('disabled');
						}
					}, 2000);
				}
			};

			attackBtnNode.addEventListener('click', this.attackBtnHandler);
		}

		// while (isStopped) {
		//     setTimeout(console.log, 3000)
		// }
	};

	static stop = () => {
		this.isStopped = true;
		removeEventListener('click', this.attackBtnHandler);
		attackBtnNode.classList.add('disabled');
	};

	static win = (sideWin) => {
		this.stop();
		console.log(sideWin + ' win');
		// attackBtnNode.classList.add('disabled')

		const submitHandler = (e) => {
			disposeModal();
			this.isStopped = false
			Game.start();
		};

		const { closeModal, openModal, disposeModal, modal } = Game.createModal(
			// 'body',
			submitHandler,
			'win',
			`${sideWin} победил!`,
			'Начать заново?',
			'Да'
		);
		openModal();
	};

	static createModal = (
		// containerSelector,
		submitHandler,
		modalId,
		modalTitle,
		modalBody,
		buttonSubmitText
	) => {
		// const containerNode = document.querySelector(containerSelector);

		// const modalNode = document.createElement('div');
		// modalNode.className = 'modal fade';
		// modalNode.id = modalId;
		// modalNode.setAttribute('tabindex', '-1');

		// modalNode.innerHTML = `
		// 	<div class="modal-dialog">
		//         <div class="modal-content">
		//             <div class="modal-header">
		//                 <h5 class="modal-title">${modalTitle}</h5>
		//             </div>
		//             <div class="modal-body">
		//                 <p>${modalBody}</p>
		//             </div>
		//             <div class="modal-footer">
		//                 <button type="button" class="btn btn-primary" id="button-submit">
		//                     ${buttonSubmitText}
		//                 </button>
		//             </div>
		//         </div>
		//     </div>
		// `;

		document.body.innerHTML += `
			<div class="modal fade" tabindex="-1" id="${modalId}">
				<div class="modal-dialog">
			        <div class="modal-content">
			            <div class="modal-header">
			                <h5 class="modal-title">${modalTitle}</h5>
			            </div>
			            <div class="modal-body">
			                <p>${modalBody}</p>
			            </div>
			            <div class="modal-footer">
			                <button type="button" class="btn btn-primary" id="button-submit">
			                    ${buttonSubmitText}
			                </button>
			            </div>
			        </div>
			    </div>
			</div>
		`;

		const modalNode = document.querySelector(`#${modalId}`);
		console.log(modalNode);

		// containerNode.insertAdjacentElement('afterend', modalNode);

		const modalBootstrap = new bootstrap.Modal(
			document.querySelector(`#${modalId}`),
			{
				keyboard: false,
				focus: true,
				backdrop: 'static'
			}
		);

		modalNode
			.querySelector('#button-submit')
			.addEventListener('click', submitHandler);

		return {
			closeModal: () => modalBootstrap.hide(),
			openModal: () => modalBootstrap.show(),
			disposeModal: () => {
				modalBootstrap.dispose();
				modalNode.remove();
			},
			modal: modalBootstrap
		};
	};
}
