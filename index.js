'use strict';

const toStr = input => '' + input;

module.exports = (input, len, char = ' ', rtl = false) => {
    const strInput = toStr(input);
    const pad = toStr(char || ' ').repeat(Math.max(0, len - strInput.length));
    return rtl
        ? strInput + pad
        : pad + strInput;
};
