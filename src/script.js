// import {
// 	alert,
// 	notice,
// 	info,
// 	success,
// 	error,
// 	defaultModules,
// } from '@pnotify/core/dist/PNotify.js'

// import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js'

// import '@pnotify/core/dist/BrightTheme.css'

// import '@pnotify/core/dist/PNotify.css'

// import '@pnotify/mobile/dist/PNotifyMobile.css'
// error({
// 	title: 'Oh No!',
// 	text: 'Something terrible happened.',
// })
//chart bibliotecka

// const data = {
// 	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],

// 	datasets: [
// 		{
// 			label: 'Temperature',

// 			data: [12, 14, 16, 18, 20, 22, 24],

// 			fill: false,

// 			backgroundColor: [
// 				'rgb(255, 99, 132)',
// 				'rgb(75, 192, 192)',
// 				'rgb(255, 205, 86)',
// 				'rgb(201, 203, 207)',
// 				'rgb(54, 162, 235)',
// 			],

// 			tension: 0.1,
// 		},
// 	],
// }

// const config = {
// 	type: 'polarArea',

// 	data: data,

// 	options: {},
// }

// const canvaRef = document.querySelector('#myChart')

// const myChart = new Chart(canvaRef, config)
//HOMEWORK-------------------------------------------------------------------------------------------------------
// import Chart from 'chart.js/auto'
// const chartData = {
// 	labels: [
// 		'1',
// 		'2',
// 		'3',
// 		'4',
// 		'5',
// 		'6',
// 		'7',
// 		'8',
// 		'9',
// 		'10',
// 		'11',
// 		'12',
// 		'13',
// 		'14',
// 		'15',
// 		'16',
// 		'17',
// 		'18',
// 		'19',
// 		'20',
// 		'21',
// 		'22',
// 		'23',
// 		'24',
// 		'25',
// 		'26',
// 		'27',
// 		'28',
// 		'29',
// 		'30',
// 	],
// 	datasets: [
// 		{
// 			label: 'Продажі за останній місяць',
// 			data: [
// 				150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550,
// 				600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
// 				1250, 1300, 1350,
// 			],
// 			backgroundColor: '#2196f3',
// 			borderColor: '#2196f3',
// 			borderWidth: 1,
// 		},
// 	],
// }

// const config = {
// 	type: 'line',

// 	data: chartData,
// }

// const canvaRef = document.querySelector('#sales-chart')

// const salesChart = new Chart(canvaRef, config)
//basiclightboxxxx for modal-----------------------------------------------------------------------------------------------------------
// import * as basicLightbox from 'basiclightbox'

// import 'basiclightbox/dist/basicLightbox.min.css'
// const instance = basicLightbox.create(`
//          <div class="backdrop is-hidden" data-modal>
//         <div class="modal">
//           <h2 class="modal__title">Залиште свої дані, ми вам передзвонимо</h2>
//           <form class="modal__form">
//             <div class="modal__box">
//               <label class="modal__label" for="name"
//                 >Ім'я
//                 <input type="text" class="modal__input" id="name" required />
//                 <svg class="modal__icon">
//                   <use href="./img/symbol-defs.svg#icon-person-modal"></use>
//                 </svg>
//               </label>
//             </div>
//             <div class="modal__box">
//               <label class="modal__label" for="tel"
//                 >Телефон
//                 <input
//                   type="tel"
//                   class="modal__input"
//                   id="tel"
//                   required
//                   pattern="^(\+?38)?0\d{9}$"
//                   placeholder="+380501234567" />

//                 <svg class="modal__icon">
//                   <use href="./img/symbol-defs.svg#icon-phone-modal"></use>
//                 </svg>
//               </label>
//             </div>
//             <div class="modal__box">
//               <label class="modal__label" for="post"
//                 >Пошта
//                 <input type="email" class="modal__input" id="post" required />

//                 <svg class="modal__icon">
//                   <use href="./img/symbol-defs.svg#icon-icon-emeil-modal"></use>
//                 </svg>
//               </label>
//             </div>
//             <label class="modal__label" for="coment"
//               >Коментар
//               <textarea
//                 name="feedback"
//                 placeholder="Введіть текст"
//                 class="modal__coment"
//                 id="coment"
//                 required></textarea>
//             </label>
//             <div class="modal__wrap">
//               <label class="modal__checked" for="check">
//                 <input type="checkbox" class="modal__check" id="check" required />
//                 <span class="modal__span">Погоджуюся з розсилкою та приймаю</span>
//                 <a href="/" class="modal__link"> Умови договору</a>
//               </label>

//             </div>
//             <button type="submit" class="modal__btn">Відправити</button>
//             <button type="button" class="btn__close" data-modal-close>
//               <svg class="form__close">
//                 <use href="./img/symbol-defs.svg#icon-close"></use>
//               </svg>
//             </button>
//           </form>
//         </div>
//       </div>
// `)
// const btn = document.querySelector('button')
// btn.addEventListener('click', () => {
// 	instance.show()
// })
//homework 2-----------------------------------------------------------------
import {
	alert,
	notice,
	info,
	success,
	error,
	defaultModules,
} from '@pnotify/core/dist/PNotify.js'
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js'
import '@pnotify/core/dist/PNotify.css'
import '@pnotify/mobile/dist/PNotifyMobile.css'
import '@pnotify/core/dist/BrightTheme.css'
defaultModules.set(PNotifyMobile, {})

const boxEl = document.querySelector('.box')
const letters = [
	'q',
	'w',
	'e',
	'r',
	't',
	'y',
	'u',
	'i',
	'o',
	'p',
	'a',
	's',
	'd',
	'f',
	'g',
	'h',
	'j',
	'k',
	'l',
	'z',
	'x',
	'c',
	'v',
	'b',
	'n',
	'm',
]
let currentKeyIndex = 0

boxEl.textContent = letters[currentKeyIndex]

window.addEventListener('keydown', event => {
	if (letters[currentKeyIndex] === event.key) {
		currentKeyIndex = Math.floor(Math.random() * (letters.length - 1) + 1)

		boxEl.textContent = letters[currentKeyIndex]
		success({
			title: 'YEY',

			delay: 500,
		})
	} else {
		error({
			title: 'false',

			delay: 500,
		})
	}
})
//--------------------------------------------------------------------
import Chart from 'chart.js/auto'
const chartData = {
	labels: [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'17',
		'18',
		'19',
		'20',
		'21',
		'22',
		'23',
		'24',
		'25',
		'26',
		'27',
		'28',
		'29',
		'30',
	],
	datasets: [
		{
			label: 'Продажі за останній місяць',
			data: [
				150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550,
				600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
				1250, 1300, 1350,
			],
			backgroundColor: '#2196f3',
			borderColor: '#2196f3',
			borderWidth: 1,
		},
	],
}

const config = {
	type: 'line',

	data: chartData,
}

const canvaRef = document.querySelector('#sales-chart')

const salesChart = new Chart(canvaRef, config)
