/* eslint-disable*/
// document.addEventListener('keyup',showThis)
// document.addEventListener('keydown',showThis) // for Shift,CTRL
// document.addEventListener('keypress',showThis) // for symbols




// const global = {
//     isShift:false,
//     isCtrl:false,
//     language:"ru",
// }

const elems = {
    keyboard: document.querySelector('.keyboard'),
    getKeys: function (){
        return document.querySelectorAll('.keyboard *')
    },
}

const keyboard = new Keyboard('en')

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