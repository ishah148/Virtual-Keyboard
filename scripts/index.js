/* eslint-disable*/
import Keyboard from "./keyboard";

const keyboard = new Keyboard(localStorage.getItem('Lang') || 'en')

localStorage.getItem('keyboardLang') || 'en';