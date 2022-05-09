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
            isCapsPressed: false
        };
    }

    init() {
        this.elems = {
            keyboard: document.querySelector('.keyboard'),
            getCapsLock: function () { return document.getElementById('CapsLock'); },
            getKeys: function () {
                return document.querySelectorAll('.keyboard .key');
            }
        };
        this.initKeys();
        this.showKeys();
        this.addEvents();
        this.textarea = document.querySelector('textarea');
        this.systemKeys = ['CapsLock', 'Shift', 'Control', 'Meta', 'Alt', 'Ctrl'];
        // console.log(this.isCtrl)
        // console.log(this.isShift)
    }

    initKeys() {
        for (let key in keysArr) {
            this.keys.push(new Key(keysArr[key], this.lang, this.checkUppercase()));
        }
    }

    showKeys(type = 'all') {
        if (type === 'all') {
            this.keys.forEach(key => document.querySelector('.keyboard').insertAdjacentHTML('beforeend', key.getHtml()));
        }
        if (type === 'standart') {
            this.keys.forEach(key => {
                if (key.type === 'standart') {
                    document.querySelector('.keyboard').insertAdjacentHTML('beforeend', key.getHtml());
                }
            });
        }
    }

    redrawSymbols(type) {
        if (type === 'extraValue') {
            // console.log('extra')
            this.keys.forEach(key => {
                if (key.type === 'standart') {
                    document.getElementById(key.code).classList.add('shift--pressed');
                }
            });
        }
        if (type === 'mainValue') {
            // console.log('main')
            this.keys.forEach(key => {
                if (key.type === 'standart') {
                    document.getElementById(key.code).classList.remove('shift--pressed');
                }
            });
        }
    }

    removeKeys() {
        document.querySelectorAll('.keyboard *').forEach(i => i.remove());
    }

    checkUppercase() {
        return this.isCtrl || this.isShift;
    }

    isPressed(i) {
        return document.getElementById(i).classList.contains('pressed');
    }

    enterText(text) {
        if (text === 'Enter') { text = '\n'; }
        if (text === 'Tab') {
            text = '\t';
            document.getElementById('Tab').focus();
            this.textarea.focus();
            this.textarea.blur();
        }
        if (text === 'Backspace') {
            let temp = this.textarea.textContent;
            temp = temp.slice(0, temp.length - 1);
            this.textarea.textContent = temp;
            return;
        }
        if (text === 'Space') { text = ' '; }
        if (this.systemKeys.includes(text)) { text = ''; }
        if (text === 'ArrowLeft') { text = '◄'; }
        if (text === 'ArrowRight') { text = '►'; }
        if (text === 'ArrowUp') { text = '▲'; }
        if (text === 'ArrowDown') { text = '▼'; }
        this.textarea.textContent += text;
    }

    switchLang() {
        if (this.lang === 'ru') {
            this.lang = 'en';
        } else if (this.lang === 'en') {
            this.lang = 'ru';
        }
        localStorage.setItem('Lang',this.lang)
        this.removeKeys();
        this.keys = [];
        this.initKeys();
        this.keys.forEach(key => {
            document.querySelector('.keyboard').insertAdjacentHTML('beforeend', key.getHtml());
        });
        setTimeout(() => {
            this.elems.getKeys().forEach(key => key.classList.remove('pressed'));
        }, 215);
    }

    addEvents() {
        document.addEventListener('keydown', (event) => {
            // this.enterText(event.key) //TODO remove
            this.enterText(document.getElementById(event.code).innerText);
            // console.log(document.getElementById(event.code).innerText)
            if (!document.getElementById(event.code).classList.contains('pressed') && event.code !== 'CapsLock') { // all keys: processing for style(.pressed)
                document.getElementById(event.code).classList.toggle('pressed');
            }
            if (event.code === 'CapsLock' && !this.elems.getCapsLock().classList.contains('pressed')) {
                this.redrawSymbols('extraValue');
            }
            if (event.code === 'CapsLock' && this.elems.getCapsLock().classList.contains('pressed')) {
                this.redrawSymbols('mainValue');
            }
            if (!(event.code === 'ShiftLeft') && this.elems.getCapsLock().classList.contains('pressed')) {
                // this.redrawSymbols('extraValue')
            }
        });

        document.addEventListener('keyup', (event) => {
            // console.log('keyUP',event.code)
            if (event.code !== 'CapsLock') {
                document.getElementById(event.code).classList.toggle('pressed');
            }
            if (event.code === 'CapsLock') {
                this.elems.getCapsLock().classList.toggle('pressed');
            }
        });

        // =============== Test ===============
        document.addEventListener('keydown', (event) => {
            // console.log('keypress',event.code)
            if (event.code === 'ShiftLeft') {
                // console.log('ShiftLeft')
            }

            if (event.code !== 'CapsLock') {
                // console.log('caps')
            }
        });
        // =============== shift ===============

        document.addEventListener('keydown', (event) => {
            if (event.code === 'ShiftLeft' && !this.elems.getCapsLock().classList.contains('pressed')) {
                // console.log('ShiftDown')
                this.redrawSymbols('extraValue');
            } // work!!!
            if (event.code === 'ShiftLeft' && this.elems.getCapsLock().classList.contains('pressed')) {
                this.redrawSymbols('mainValue');
            }
            if (this.isPressed('ShiftLeft') && this.isPressed('ControlLeft')) {
                console.log('switchLang'); // TODO switch lang here!
                this.switchLang();
            }
        });

        document.addEventListener('keyup', (event) => {
            if (event.code === 'ShiftLeft' && !this.elems.getCapsLock().classList.contains('pressed')) {
                // console.log('ShiftUP')
                this.redrawSymbols('mainValue');
            } // work!!!
            if (event.code === 'ShiftLeft' && this.elems.getCapsLock().classList.contains('pressed')) {
                this.redrawSymbols('extraValue');
            }
        });

        // =============== click ===============
        this.elems.keyboard.addEventListener('click', (event) => {
            let temp = event.path.filter(i => i.id)[0];
            try {
                this.enterText(temp.innerText);
                if (temp.id !== 'CapsLock') {
                    temp.classList.add('pressed');
                    temp.addEventListener('transitionend', () => {
                        temp.classList.remove('pressed');
                    });
                }
                // console.log(temp.id)

                if (temp.id === 'CapsLock' && (!this.isPressed('CapsLock'))) {
                    temp.classList.add('pressed');
                    console.log(666);
                    this.redrawSymbols('extraValue');
                } else if (temp.id === 'CapsLock' && (this.isPressed('CapsLock'))) {
                    console.log(6166);
                    temp.classList.remove('pressed');
                    this.redrawSymbols('mainValue');
                }
            } catch (e) { }
        });
    }
}
