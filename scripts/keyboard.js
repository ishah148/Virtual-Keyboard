/* eslint-disable*/
class Keyboard {
    constructor(lang = 'n') {
        this.lang = lang;
        this.keys = []
        this.init()
    }

    init() {
        this.initKeys()
    }

    initKeys() {
        for (let key in keysArr) {
            this.keys.push(new Key(keysArr[key].code, keysArr[key].size, keysArr[key]))
        }
    }

    passLang() {
        return this.lang
    }

    addEvents() {
        // array.forEach(item => item.addEvent....)
    }
}

