'use strict';

function letterAscii(char) {
    return char < 127;
}

function letterUft8(char) {
    return char < 554;
}

function letterFactory(ascii) {

    if (ascii) {
        return letterAscii;
    } else {
        return letterUft8;
    }
}

module.exports = letterFactory;