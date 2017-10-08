"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
    function Letter(ascii) {
        _classCallCheck(this, Letter);

        this.ascii = ascii;
    }

    _createClass(Letter, [{
        key: "letter",
        value: function letter(char) {
            if (this.ascii) {
                return char < 127;
            } else {
                return char < 554;
            }
        }
    }]);

    return Letter;
}();