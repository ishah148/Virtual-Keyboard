/* eslint-disable*/
class Key {
    constructor(value, size, lang ,obj) {
        this.code = value;
        this.size = size;
        this.html = this.getHtml();
        this.obj = obj;
        this.init();
    }

    init() {
        this.checkLang()
    }

    checkLang() {
        // TODO add lang <- 
        
    }

    getHtml() {
        return `
        <div class="key ${this.size}"> 
             <span class="extra-symbol">!</span>
             <span class="main-symbol">1</span>
        </div>
       `
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
            extraValue: '!',
            mainValue: '2'
        },
        ru: {
            extraValue: '!',
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
];
