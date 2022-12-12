// const zombieHealthNode = document.querySelector('#zombie-health');
// const yourHealthNode = document.querySelector('#zombie-health');

// const attackBtnNode = document.querySelector('#attack-btn');

// const zombieAttackNode = document.querySelector('zombie-attack-count');
// const yourAttackNode = document.querySelector('your-attack-count');

// const setAttack = (attackNode, attackValue) => {
// 	attackNode.textContent = attackValue;
// };

// const setHealth = (healthNode, healthValue) => {
// 	healthNode.textContent = healthValue;
// };

// let step = 0;
// // 0 - zombie 1 - you
// let currentSide = 1;

// const yourStep = () => {
// 	console.log('My step');

// 	currentSide = 0;
// };
// const zombieStep = () => {
// 	console.log('Zombie step');

// 	currentSide = 1;
// };

// attackBtnNode.addEventListener('click', () => {
// 	if (currentSide === 1) {
// 		yourStep();
//         setTimeout(zombieStep, 2000)
// 	}

// 	step++;
// });

Game.start();

// document.body.innerHTML = `
//     <div class="modal fade" tabindex="-1" id="modal">
//         <div class="modal-dialog">
//             <div class="modal-content">
//                 <div class="modal-header">
//                     <h5 class="modal-title">Ты выйграл</h5>
//                 </div>
//                 <div class="modal-body">
//                     <p>Начать заново?</p>
//                 </div>
//                 <div class="modal-footer">
//                     <!-- <button
//                             type="button"
//                             class="btn btn-secondary"
//                             data-bs-dismiss="modal"
//                         >
//                             Close
//                         </button> -->
//                     <button type="button" class="btn btn-primary">
//                         Да
//                     </button>
//                 </div>
//             </div>
//         </div>
//     </div>

//     <button class="btn btn-primary px-5" id="attack-btn">
// 					Attack
// 				</button>
// `

// const btn = document.querySelector('#attack-btn');

// const modal = new bootstrap.Modal(document.querySelector('#modal'), {
//     keyboard: false,
//     focus: true,
//     backdrop: 'static'
// });

// btn.addEventListener('click', () => {
//     modal.show()
// })