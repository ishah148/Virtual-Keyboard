/* eslint-disable*/
// document.addEventListener('keyup',showThis)
// document.addEventListener('keydown',showThis) // for symbols
document.addEventListener('keypress',showThis) // for Shift,CTRL




const global = {
    isShift:false,
    isCtrl:false,
    language:"ru",
}

const elems = {
    keyboard: document.querySelector('.keyboard'),
    getKeys: function (){
        return document.querySelectorAll('.keyboard *')
    },
}

const keyboard = new Keyboard('en')

// const temp11 = new Key('Digit1', 'standart-key', {
//     order: 0,
//     code: 'Digit1',
//     en: {
//         extraValue: '!',
//         mainValue: '1'
//     },
//     ru: {
//         extraValue: '!',
//         mainValue: '1'
//     },
//     size: 'standart-key'
// })

function showThis(event){
    console.log(event.code);
}

function removeKeys(){
    elems.getKeys().forEach(i => i.remove())
}

// keys.

function redrawKeyboard(){
    removeKeys()
    // TODO drawKeyboard() or init()
}