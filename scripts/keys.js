/* eslint-disable*/
class Key {
    constructor(obj, lang, uppercase = 'g') {
        this.obj = obj;
        this.lang = lang;
        this.code = this.obj.code;
        this.size = this.obj.size;
        this.type = this.obj.type;
        this.isUppercase = uppercase;
        this.isPressed = false;
        this.html = this.getHtml();
        this.init();
    }

    init() {

    }

    getHtml() {
        return `
        <div class="key ${this.size} ${this.checkUppecase()}" id ="${this.code}"> 
             <span class="extra-symbol">${this.obj[this.lang].extraValue}</span>
             <span class="main-symbol">${this.obj[this.lang].mainValue}</span>
        </div>
       `
    }

    checkUppecase() {
        return this.isUppercase === true ? 'shift--pressed' : ''
    }
    checkPressed() {
        return this.isPressed === true ? 'pressed' : ''
    }
}






let keysArr = [
    {
        type: 'standart',
        code: 'Digit1',
        size: 'standart-key',
        en: {
            extraValue: '!',
            mainValue: '1'
        },
        ru: {
            extraValue: '!',
            mainValue: '1'
        },
    },
    {
        type: 'standart',
        code: 'Digit2',
        size: 'standart-key',
        en: {
            extraValue: '@',
            mainValue: '2'
        },
        ru: {
            extraValue: '"',
            mainValue: '2'
        },
    },
    {
        type: 'standart',
        code: 'Digit3',
        size: 'standart-key',
        en: {
            extraValue: '#',
            mainValue: '3'
        },
        ru: {
            extraValue: '№',
            mainValue: '3'
        },
    },
    {
        type: 'standart',
        code: 'Digit4',
        size: 'standart-key',
        en: {
            extraValue: '$',
            mainValue: '4'
        },
        ru: {
            extraValue: ';',
            mainValue: '4'
        },
    },
    {
        type: 'standart',
        code: 'Digit5',
        size: 'standart-key',
        en: {
            extraValue: '%',
            mainValue: '5'
        },
        ru: {
            extraValue: '%',
            mainValue: '5'
        },
    },
    {
        type: 'standart',
        code: 'Digit6',
        size: 'standart-key',
        en: {
            extraValue: '^',
            mainValue: '6'
        },
        ru: {
            extraValue: ':',
            mainValue: '6'
        },
    },
    {
        type: 'standart',
        code: 'Digit7',
        size: 'standart-key',
        en: {
            extraValue: '&',
            mainValue: '7'
        },
        ru: {
            extraValue: '?',
            mainValue: '7'
        },
    },
    {
        type: 'standart',
        code: 'Digit8',
        size: 'standart-key',
        en: {
            extraValue: '*',
            mainValue: '8'
        },
        ru: {
            extraValue: '*',
            mainValue: '8'
        },
    },
    {
        type: 'standart',
        code: 'Digit9',
        size: 'standart-key',
        en: {
            extraValue: '(',
            mainValue: '9'
        },
        ru: {
            extraValue: '(',
            mainValue: '9'
        },
    },
    {
        type: 'standart',
        code: 'Digit0',
        size: 'standart-key',
        en: {
            extraValue: ')',
            mainValue: '0'
        },
        ru: {
            extraValue: ')',
            mainValue: '0'
        },
    },
    {
        type: 'standart',
        code: 'KeyQ',
        size: 'standart-key',
        en: {
            extraValue: 'Q',
            mainValue: 'q'
        },
        ru: {
            extraValue: 'Й',
            mainValue: 'й'
        },
    },
    {
        type: 'system',
        code: 'ShiftLeft',
        size: 'shift',
        en: {
            extraValue: 'Shift',
            mainValue: 'Shift'
        },
        ru: {
            extraValue: 'Shift',
            mainValue: 'Shift'
        },
    },
    {
        type: 'system',
        code: 'CapsLock',
        size: 'shift',
        en: {
            extraValue: 'CapsLock',
            mainValue: 'CapsLock'
        },
        ru: {
            extraValue: 'CapsLock',
            mainValue: 'CapsLock'
        },
    },
    {
        type: 'system',
        code: 'ControlLeft',
        size: 'standart-key',
        en: {
            extraValue: 'Ctrl',
            mainValue: 'Ctrl'
        },
        ru: {
            extraValue: 'Ctrl',
            mainValue: 'Ctrl'
        },
    },
];
