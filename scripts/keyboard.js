/* eslint-disable*/
import Key from './keys.js';
import { keysArr } from './keys.js';
export default class Keyboard {
    constructor(lang) {
        this.lang = lang;
        this.keys = [];
        this.isCaps = false;
        this.isShift = false;
        this.isCtrl = false;
        this.init();
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

            this.keys.forEach(key => {
                if (key.type === 'standart') {
                    document.getElementById(key.code).classList.add('shift--pressed');
                }
            });
        }
        if (type === 'mainValue') {

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

            if (event.code !== 'CapsLock') {
                document.getElementById(event.code).classList.toggle('pressed');
            }
            if (event.code === 'CapsLock') {
                this.elems.getCapsLock().classList.toggle('pressed');
            }
        });

        // =============== Test ===============
        document.addEventListener('keydown', (event) => {

            if (event.code === 'ShiftLeft') {

            }

            if (event.code !== 'CapsLock') {

            }
        });
        // =============== shift ===============

        document.addEventListener('keydown', (event) => {
            if (event.code === 'ShiftLeft' && !this.elems.getCapsLock().classList.contains('pressed')) {
                this.redrawSymbols('extraValue');
            }
            if (event.code === 'ShiftLeft' && this.elems.getCapsLock().classList.contains('pressed')) {
                this.redrawSymbols('mainValue');
            }
            if (this.isPressed('ShiftLeft') && this.isPressed('ControlLeft')) {
                this.switchLang();
            }
        });

        document.addEventListener('keyup', (event) => {
            if (event.code === 'ShiftLeft' && !this.elems.getCapsLock().classList.contains('pressed')) {

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
                if (temp.id === 'CapsLock' && (!this.isPressed('CapsLock'))) {
                    temp.classList.add('pressed');

                    this.redrawSymbols('extraValue');
                } else if (temp.id === 'CapsLock' && (this.isPressed('CapsLock'))) {
                    temp.classList.remove('pressed');
                    this.redrawSymbols('mainValue');
                }
            } catch (e) { }
        });
    }
}
