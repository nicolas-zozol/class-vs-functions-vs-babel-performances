'use strict';

module.exports = class Letter {

    constructor(ascii) {
        this.ascii = ascii;
    }

    letter(char) {
        return this.ascii ? char <127 : char < 554;
    }
}
