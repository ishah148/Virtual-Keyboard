/* eslint-disable*/
export default class Key {
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


export let keysArr = [
    {
        type: 'standart',
        code: 'Backquote',
        size: 'standart-key',
        en: {
            extraValue: '~',
            mainValue: '`'
        },
        ru: {
            extraValue: 'Ё',
            mainValue: 'ё'
        },
    },
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
        code: 'keydown Minus',
        size: 'standart-key',
        en: {
            extraValue: '_',
            mainValue: '-'
        },
        ru: {
            extraValue: '_',
            mainValue: '-'
        },
    },
    {
        type: 'standart',
        code: 'keydown Equal',
        size: 'standart-key',
        en: {
            extraValue: '+',
            mainValue: '='
        },
        ru: {
            extraValue: '+',
            mainValue: '='
        },
    },
    {
        type: 'standart',
        code: 'Backspace',
        size: 'shift',
        en: {
            extraValue: 'Backspace',
            mainValue: 'Backspace'
        },
        ru: {
            extraValue: 'Backspace',
            mainValue: 'Backspace'
        },
    },


    // row2 =============== row2 ===============
    {
        type: 'standart',
        code: 'Tab',
        size: 'shift',
        en: {
            extraValue: 'Tab',
            mainValue: 'Tab'
        },
        ru: {
            extraValue: 'Tab',
            mainValue: 'Tab'
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
        type: 'standart',
        code: 'KeyW',
        size: 'standart-key',
        en: {
            extraValue: 'W',
            mainValue: 'w'
        },
        ru: {
            extraValue: 'Ц',
            mainValue: 'ц'
        },
    },
    {
        type: 'standart',
        code: 'KeyE',
        size: 'standart-key',
        en: {
            extraValue: 'E',
            mainValue: 'e'
        },
        ru: {
            extraValue: 'У',
            mainValue: 'у'
        },
    },
    {
        type: 'standart',
        code: 'KeyR',
        size: 'standart-key',
        en: {
            extraValue: 'R',
            mainValue: 'r'
        },
        ru: {
            extraValue: 'К',
            mainValue: 'к'
        },
    },
    {
        type: 'standart',
        code: 'KeyT',
        size: 'standart-key',
        en: {
            extraValue: 'T',
            mainValue: 't'
        },
        ru: {
            extraValue: 'Е',
            mainValue: 'е'
        },
    },
    {
        type: 'standart',
        code: 'KeyY',
        size: 'standart-key',
        en: {
            extraValue: 'Y',
            mainValue: 'y'
        },
        ru: {
            extraValue: 'Н',
            mainValue: 'н'
        },
    },
    {
        type: 'standart',
        code: 'KeyU',
        size: 'standart-key',
        en: {
            extraValue: 'U',
            mainValue: 'u'
        },
        ru: {
            extraValue: 'Г',
            mainValue: 'г'
        },
    },
    {
        type: 'standart',
        code: 'KeyI',
        size: 'standart-key',
        en: {
            extraValue: 'I',
            mainValue: 'i'
        },
        ru: {
            extraValue: 'Ш',
            mainValue: 'ш'
        },
    },
    {
        type: 'standart',
        code: 'KeyO',
        size: 'standart-key',
        en: {
            extraValue: 'O',
            mainValue: 'o'
        },
        ru: {
            extraValue: 'Щ',
            mainValue: 'щ'
        },
    },
    {
        type: 'standart',
        code: 'KeyP',
        size: 'standart-key',
        en: {
            extraValue: 'P',
            mainValue: 'p'
        },
        ru: {
            extraValue: 'З',
            mainValue: 'з'
        },
    },
    {
        type: 'standart',
        code: 'BracketLeft',
        size: 'standart-key',
        en: {
            extraValue: '{',
            mainValue: '['
        },
        ru: {
            extraValue: 'Х',
            mainValue: 'х'
        },
    },
    {
        type: 'standart',
        code: 'BracketRight',
        size: 'standart-key',
        en: {
            extraValue: '}',
            mainValue: ']'
        },
        ru: {
            extraValue: 'Ъ',
            mainValue: 'ъ'
        },
    },
    {
        type: 'standart',
        code: 'Backslash',
        size: 'standart-key',
        en: {
            extraValue: '|',
            mainValue: '\\'
        },
        ru: {
            extraValue: '/',
            mainValue: '\\'
        },
    },
    // =============== Row 3 ===============
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
        type: 'standart',
        code: 'KeyA',
        size: 'standart-key',
        en: {
            extraValue: 'A',
            mainValue: 'a'
        },
        ru: {
            extraValue: 'Ф',
            mainValue: 'ф'
        },
    },
    {
        type: 'standart',
        code: 'KeyS',
        size: 'standart-key',
        en: {
            extraValue: 'S',
            mainValue: 's'
        },
        ru: {
            extraValue: 'Ы',
            mainValue: 'ы'
        },
    },
    {
        type: 'standart',
        code: 'KeyD',
        size: 'standart-key',
        en: {
            extraValue: 'D',
            mainValue: 'd'
        },
        ru: {
            extraValue: 'В',
            mainValue: 'в'
        },
    },
    {
        type: 'standart',
        code: 'KeyF',
        size: 'standart-key',
        en: {
            extraValue: 'F',
            mainValue: 'f'
        },
        ru: {
            extraValue: 'А',
            mainValue: 'а'
        },
    },
    {
        type: 'standart',
        code: 'KeyG',
        size: 'standart-key',
        en: {
            extraValue: 'G',
            mainValue: 'g'
        },
        ru: {
            extraValue: 'П',
            mainValue: 'п'
        },
    },
    {
        type: 'standart',
        code: 'KeyH',
        size: 'standart-key',
        en: {
            extraValue: 'H',
            mainValue: 'h'
        },
        ru: {
            extraValue: 'Р',
            mainValue: 'р'
        },
    },
    {
        type: 'standart',
        code: 'KeyJ',
        size: 'standart-key',
        en: {
            extraValue: 'J',
            mainValue: 'j'
        },
        ru: {
            extraValue: 'О',
            mainValue: 'о'
        },
    },
    {
        type: 'standart',
        code: 'KeyK',
        size: 'standart-key',
        en: {
            extraValue: 'K',
            mainValue: 'k'
        },
        ru: {
            extraValue: 'Л',
            mainValue: 'л'
        },
    },
    {
        type: 'standart',
        code: 'KeyL',
        size: 'standart-key',
        en: {
            extraValue: 'L',
            mainValue: 'l'
        },
        ru: {
            extraValue: 'Д',
            mainValue: 'д'
        },
    },
    {
        type: 'standart',
        code: 'Semicolon',
        size: 'standart-key',
        en: {
            extraValue: ':',
            mainValue: ';'
        },
        ru: {
            extraValue: 'Ж',
            mainValue: 'ж'
        },
    },
    {
        type: 'standart',
        code: 'Quote',
        size: 'standart-key',
        en: {
            extraValue: '"',
            mainValue: '\''
        },
        ru: {
            extraValue: 'Э',
            mainValue: 'э'
        },
    },
    {
        type: 'standart',
        code: 'Enter',
        size: 'shift',
        en: {
            extraValue: 'Enter',
            mainValue: 'Enter'
        },
        ru: {
            extraValue: 'Enter',
            mainValue: 'Enter'
        },
    },
    // =============== ROW 4 ===============
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
        type: 'standart',
        code: 'KeyZ',
        size: 'standart-key',
        en: {
            extraValue: 'Z',
            mainValue: 'z'
        },
        ru: {
            extraValue: 'Я',
            mainValue: 'я'
        },
    },
    {
        type: 'standart',
        code: 'KeyX',
        size: 'standart-key',
        en: {
            extraValue: 'X',
            mainValue: 'x'
        },
        ru: {
            extraValue: 'Ч',
            mainValue: 'ч'
        },
    },
    {
        type: 'standart',
        code: 'KeyC',
        size: 'standart-key',
        en: {
            extraValue: 'C',
            mainValue: 'c'
        },
        ru: {
            extraValue: 'С',
            mainValue: 'с'
        },
    },
    {
        type: 'standart',
        code: 'KeyV',
        size: 'standart-key',
        en: {
            extraValue: 'V',
            mainValue: 'v'
        },
        ru: {
            extraValue: 'М',
            mainValue: 'м'
        },
    },
    {
        type: 'standart',
        code: 'KeyB',
        size: 'standart-key',
        en: {
            extraValue: 'B',
            mainValue: 'b'
        },
        ru: {
            extraValue: 'И',
            mainValue: 'и'
        },
    },
    {
        type: 'standart',
        code: 'KeyN',
        size: 'standart-key',
        en: {
            extraValue: 'N',
            mainValue: 'n'
        },
        ru: {
            extraValue: 'Т',
            mainValue: 'т'
        },
    },
    {
        type: 'standart',
        code: 'KeyM',
        size: 'standart-key',
        en: {
            extraValue: 'M',
            mainValue: 'm'
        },
        ru: {
            extraValue: 'Ь',
            mainValue: 'ь'
        },
    },
    {
        type: 'standart',
        code: 'Comma',
        size: 'standart-key',
        en: {
            extraValue: '<',
            mainValue: ','
        },
        ru: {
            extraValue: 'Б',
            mainValue: 'б'
        },
    },
    {
        type: 'standart',
        code: 'Period',
        size: 'standart-key',
        en: {
            extraValue: '>',
            mainValue: '.'
        },
        ru: {
            extraValue: 'Ю',
            mainValue: 'ю'
        },
    },
    {
        type: 'standart',
        code: 'Slash',
        size: 'standart-key',
        en: {
            extraValue: '?',
            mainValue: '/'
        },
        ru: {
            extraValue: ',',
            mainValue: '.'
        },
    },
    {
        type: 'system',
        code: 'ArrowUp',
        size: 'standart-key',
        en: {
            extraValue: '▲',
            mainValue: '▲'
        },
        ru: {
            extraValue: '▲',
            mainValue: '▲'
        },
    },
    {
        type: 'system',
        code: 'ShiftRight',
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
    // =============== Row 5 ===============
    {
        type: 'system',
        code: 'ControlLeft',
        size: 'shift',
        en: {
            extraValue: 'Ctrl',
            mainValue: 'Ctrl'
        },
        ru: {
            extraValue: 'Ctrl',
            mainValue: 'Ctrl'
        },
    },
    {
        type: 'system',
        code: 'MetaLeft',
        size: 'standart-key',
        en: {
            extraValue: 'Win',
            mainValue: 'Win'
        },
        ru: {
            extraValue: 'Win',
            mainValue: 'Win'
        },
    },
    {
        type: 'system',
        code: 'AltLeft',
        size: 'standart-key',
        en: {
            extraValue: 'Alt',
            mainValue: 'Alt'
        },
        ru: {
            extraValue: 'Alt',
            mainValue: 'Alt'
        },
    },
    {
        type: 'standart',
        code: 'Space',
        size: 'space',
        en: {
            extraValue: 'Space',
            mainValue: 'Space'
        },
        ru: {
            extraValue: 'Space',
            mainValue: 'Space'
        },
    },
    {
        type: 'system',
        code: 'AltRight',
        size: 'standart-key',
        en: {
            extraValue: 'Alt',
            mainValue: 'Alt'
        },
        ru: {
            extraValue: 'Alt',
            mainValue: 'Alt'
        },
    },
    {
        type: 'system',
        code: 'ContextMenu',
        size: 'standart-key',
        en: {
            extraValue: 'Menu',
            mainValue: 'Menu'
        },
        ru: {
            extraValue: 'Menu',
            mainValue: 'Menu'
        },
    },
    {
        type: 'standart',
        code: 'ArrowLeft',
        size: 'standart-key',
        en: {
            extraValue: '◄',
            mainValue: '◄'
        },
        ru: {
            extraValue: '◄',
            mainValue: '◄'
        },
    },
    {
        type: 'standart',
        code: 'ArrowDown',
        size: 'standart-key',
        en: {
            extraValue: '▼',
            mainValue: '▼'
        },
        ru: {
            extraValue: '▼',
            mainValue: '▼'
        },
    },
    {
        type: 'standart',
        code: 'ArrowRight',
        size: 'standart-key',
        en: {
            extraValue: '►',
            mainValue: '►'
        },
        ru: {
            extraValue: '►',
            mainValue: '►'
        },
    },
    {
        type: 'system',
        code: 'ControlRight',
        size: 'shift',
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

