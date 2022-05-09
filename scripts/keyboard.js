/* eslint-disable*/
class Keyboard {
    constructor(lang) {
        this.lang = lang;
        this.keys = [];
        this.isCaps = false;
        this.isShift = false;
        this.isCtrl = false;
        this.init();
        this.flags = {
            isShiftPressed: false, // TODO remove
            isCapsPressed: false,
        };
    }

    init() {
        this.elems = {
            keyboard: document.querySelector('.keyboard'),
            getCapsLock: function () { return document.getElementById('CapsLock') },
            getKeys: function () {
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
            this.keys.push(new Key(keysArr[key], this.lang, this.checkUppercase()))
        }
    }

    showKeys(type = 'all') {
        if (type === 'all') {
            this.keys.forEach(key => document.querySelector('.keyboard').insertAdjacentHTML('beforeend', key.getHtml()))
        }
        if (type === 'standart') {
            this.keys.forEach(key => {
                if (key.type === 'standart') {
                    document.querySelector('.keyboard').insertAdjacentHTML('beforeend', key.getHtml())
                }
            })
        }
    }
    redrawValues(type) {
        if (type === 'extraValue') {
            // console.log('extra')
            this.keys.forEach(key => {
                if (key.type === 'standart') {
                    document.getElementById(key.code).classList.add('shift--pressed')
                }
            })
        }
        if (type === 'mainValue') {
            // console.log('main')
            this.keys.forEach(key => {
                if (key.type === 'standart') {
                    document.getElementById(key.code).classList.remove('shift--pressed')
                }
            })
        }

    }


    removeKeys() {
        document.querySelectorAll('.keyboard *').forEach(i => i.remove())
    }

    checkUppercase() {
        return this.isCtrl || this.isShift
    }

    isPressed(i){
        return document.getElementById(i).classList.contains('pressed')
    }

    addEvents() {

        document.addEventListener('keydown', (event) => {
            // console.log('keydown',event.code)
            if (!document.getElementById(event.code).classList.contains('pressed') && event.code !== 'CapsLock') { // all keys: processing for style(.pressed)
                document.getElementById(event.code).classList.toggle('pressed');
            }
            if (event.code === 'CapsLock' && !this.elems.getCapsLock().classList.contains('pressed')) {
                
                console.log('1')
                this.redrawValues('extraValue');
            }
            if (event.code === 'CapsLock' && this.elems.getCapsLock().classList.contains('pressed')) {
                
                console.log('2')
                this.redrawValues('mainValue');
            }
            if (!(event.code === 'ShiftLeft') && this.elems.getCapsLock().classList.contains('pressed')) {
                // this.redrawValues('extraValue')
            }
        })

        document.addEventListener('keyup', (event) => {
            // console.log('keyUP',event.code)
            if (event.code !== 'CapsLock') {
                document.getElementById(event.code).classList.toggle('pressed')
            }
            if (event.code === 'CapsLock') {
                this.elems.getCapsLock().classList.toggle('pressed')
            }
        })

        // =============== Test ===============
        document.addEventListener('keydown', (event) => {
            // console.log('keypress',event.code)
            if (event.code === 'ShiftLeft') {
                // console.log('ShiftLeft')
            }

            if (event.code === 'CapsLock') {
                // console.log('caps')
            }
        })
        // =============== shift ===============

        document.addEventListener('keydown', (event) => {
            if (event.code === 'ShiftLeft' && !this.elems.getCapsLock().classList.contains('pressed')) {
                // console.log('ShiftDown')
                this.redrawValues('extraValue');
            } // work!!!
            if (event.code === 'ShiftLeft' && this.elems.getCapsLock().classList.contains('pressed')) {
                this.redrawValues('mainValue');
            }
            if(this.isPressed('ShiftLeft') &&  this.isPressed('ControlLeft')){
                console.log('switchLang') // TODO switch lang here!
            }
        })

        document.addEventListener('keyup', (event) => {
            if (event.code === 'ShiftLeft' && !this.elems.getCapsLock().classList.contains('pressed')) {
                // console.log('ShiftUP')
                this.redrawValues('mainValue');
            } // work!!!
            if (event.code === 'ShiftLeft' && this.elems.getCapsLock().classList.contains('pressed')) {
                this.redrawValues('extraValue');
            }
        })

    }
}

