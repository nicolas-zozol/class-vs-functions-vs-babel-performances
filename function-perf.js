'use strict';

function letterAscii(char) {
    return char < 127;
}

function letterUft8(char) {
    return char < 554;
}

function letterFactory(ascii) {
    return ascii ? letterAscii : letterUft8;
}

module.exports = letterFactory;