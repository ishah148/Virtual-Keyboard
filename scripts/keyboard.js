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
            console.log('extra')
            this.keys.forEach(key => {
                if (key.type === 'standart') {
                    document.getElementById(key.code).classList.add('shift--pressed')
                }
            })
        }
        if (type === 'mainValue') {
            console.log('main')
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

    addEvents() {

        document.addEventListener('keydown', (event) => {
            // console.log('keydown',event.code)
            if (!document.getElementById(event.code).classList.contains('pressed') && event.code !== 'CapsLock') { // all keys: processing for style(.pressed)
                document.getElementById(event.code).classList.toggle('pressed');
            }
            if (event.code === 'CapsLock') {
                // document.getElementById('CapsLock').classList.remove('pressed')
                this.redrawValues('extraValue');
            }
            // if (document.getElementById('ShiftLeft').classList.contains('pressed')) { // only for shift: switch value(extraValue,mainValue)
            //     this.isShift = true;
            //     this.redrawValues('extraValue');
            // } // moved to keyup
            if (!document.getElementById('ShiftLeft').classList.contains('pressed')/*  && this.elems.getCapsLock().classList.contains('pressed') */) { // cancel : "only for shift: switch value(extraValue,mainValue)"
                this.isShift = false;
                this.redrawValues('mainValue')
            } // moved
            if (!(event.code === 'ShiftLeft') && this.elems.getCapsLock().classList.contains('pressed')) {
                // this.redrawValues('extraValue')
            }
        })

        document.addEventListener('keyup', (event) => {
            // console.log('keyUP',event.code)
            if (event.code !== 'CapsLock') {
                document.getElementById(event.code).classList.toggle('pressed')
            }
            if (!document.getElementById('ShiftLeft').classList.contains('pressed')/*  && this.elems.getCapsLock().classList.contains('pressed') */) { // cancel : "only for shift: switch value(extraValue,mainValue)"
                this.isShift = false;
                this.redrawValues('extraValue')
            }//moved from keydown

            // if (!document.getElementById('ShiftLeft').classList.contains('pressed')/*  && this.elems.getCapsLock().classList.contains('pressed') */) { // cancel : "only for shift: switch value(extraValue,mainValue)"
            //     this.isShift = false;
            //     this.redrawValues('mainValue')
            // } // move to keydown
            if (event.code === 'CapsLock') {
                this.elems.getCapsLock().classList.toggle('pressed')
            }
        })


        document.addEventListener('keydown', (event) => {
            // console.log('keypress',event.code)
            if (event.code === 'ShiftLeft') {
                // console.log('ShiftLeft')
            }
            if (event.code === 'ShiftLeft' && this.elems.getCapsLock().classList.contains('pressed')) {
                this.redrawValues('mainValue')
            }
            if (event.code === 'CapsLock') {
                // console.log('caps')
            }
        })

        document.addEventListener('keydown', (event) => {
            // console.log('keypress',event.code)
            if (event.code === 'ShiftLeft') {
                console.log('ShiftDown')
            }
        })

        document.addEventListener('keyup', (event) => {
            // console.log('keypress',event.code)
            if (event.code === 'ShiftLeft') {
                console.log('ShiftUP')
            }
        })

    }
}

