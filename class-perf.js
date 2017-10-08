'use strict';

module.exports = class Letter {

    constructor(ascii) {
        this.ascii = ascii;
    }

    letter(char) {
        if (this.ascii) {
            return char <127;
        }else{
            return char < 554;
        }
    }

}
