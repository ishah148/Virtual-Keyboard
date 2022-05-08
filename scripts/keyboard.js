/* eslint-disable*/
class Keyboard {
    constructor(lang) {
        this.lang = lang;
        this.keys = [];
        this.isShift = true;
        this.isCtrl = true;
        this.init();
    }

    init() {
        this.elems = {
            keyboard: document.querySelector('.keyboard'),
            getKeys: function (){
                return document.querySelectorAll('.keyboard .key')
            },
        }

        this.initKeys()
        this.showKeys()
        this.addEvents()
        // console.log(this.isCtrl)
        // console.log(this.isShift)
    }

    initKeys() {
        for (let key in keysArr) {
            this.keys.push(new Key(keysArr[key], this.lang,this.checkUppercase()))
        }
    }
    
    showKeys() {
        this.keys.forEach(key => document.querySelector('.keyboard').insertAdjacentHTML('beforeend', key.getHtml()))
    }

    removeKeys() {
        document.querySelectorAll('.keyboard *').forEach(i => i.remove())
    }

    checkUppercase(){
        return this.isCtrl || this.isShift
    }

    addEvents() {

        document.addEventListener('keydown',(event) =>{
            if(!document.getElementById(event.code).classList.contains('pressed')){
                document.getElementById(event.code).classList.toggle('pressed')
            }
        })
        document.addEventListener('keyup',(event) =>{
            document.getElementById(event.code).classList.toggle('pressed')
        })
    }
}

