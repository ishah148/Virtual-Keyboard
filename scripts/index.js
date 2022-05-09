/* eslint-disable*/
// document.addEventListener('keyup',showThis)
// document.addEventListener('keydown',showThis) // for Shift,CTRL
// document.addEventListener('keypress',showThis) // for symbols




// const global = {
//     isShift:false,
//     isCtrl:false,
//     language:"ru",
// }


const keyboard = new Keyboard(localStorage.getItem('Lang') || 'en')

localStorage.getItem('keyboardLang') || 'en';