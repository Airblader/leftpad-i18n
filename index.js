'use strict';

const toStr = input => '' + input;
const defaultTo = (input, value) => input === null || input === undefined ? value : input;

module.exports = (input, len, char = ' ', rtl = false) => {
    const strInput = toStr(input);
    const pad = toStr(defaultTo(char, ' ')).repeat(Math.max(0, len - strInput.length));
    return rtl
        ? strInput + pad
        : pad + strInput;
};
