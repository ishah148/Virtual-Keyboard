/* eslint-disable*/
class Key {
    constructor(obj,lang,uppercase = 'g') {
        this.obj = obj;
        this.lang = lang;
        this.code = this.obj.code;
        this.size = this.obj.size;
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

    checkUppecase(){
        return this.isUppercase === true?'shift--pressed':''
    }
    checkPressed(){
        return this.isPressed === true?'pressed':''
    }
}






let keysArr = [
    {
        order: 0,
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
        order: 1,
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
        order: 2,
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
        order: 1,
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
        order: 1,
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
        order: 1,
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
        order: 1,
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
];
