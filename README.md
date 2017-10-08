Class versus Functions versus Babel performances
====


Using [Masala Parser](https://github.com/d-plaindoux/masala-parser), we are creating tons of functions to parse your texts. We could do this by using functions (as factories)
  or ES 2015 classes.
Obvisouly the fastest is probably the best for this kind of project.



Here are the codes tested

Function
----


        function letterAscii(char) {
            return char < 127;
        }
        
        function letterUft8(char) {
            return char < 554;
        }
        
        function letterFactory(ascii) {
            return ascii ? letterAscii : letterUft8;
        }


Class
----

        class Letter {
        
            constructor(ascii) {
                this.ascii = ascii;
            }
        
            letter(char) {
                return this.ascii ? char <127 : char < 554;
            }
        }

My original bet was that `Letter.letter()` bytecode would be hard to be cached by the VM because of fetching this.ascii out 
  of the scope. I was pretty sure that V8 would be OK with plain ES 2015, but very slow with Babel code.
  
Babel
----


        var _createClass = function () { function defineProperties(target, props) { for ....
        
        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { ... }
        
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


Results
----

        #function x 22,600,277 ops/sec ±0.41% (92 runs sampled)
        #class x 31,489,898 ops/sec ±0.33% (89 runs sampled)
        #babel x 21,939,452 ops/sec ±0.73% (90 runs sampled)
        Fastest is #class

Surprizingly, classes are fastest, and much more surprizingly, babel transtyping is very close of functions.




