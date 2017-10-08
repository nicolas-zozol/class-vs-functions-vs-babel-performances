'use strict';

const Benchmark = require('benchmark');
const letterFactory = require('./function-perf');
const Letter = require('./class-perf');
const BabelLetter = require('./babel-perf');




const suite = new Benchmark.Suite;


function asciiRandom(){
    return  Math.random() < 0.5;
}

function charRandom(){
    return Math.round(Math.random()*1000) + 1
}


// add tests
suite.add('#function', function () {

    letterFactory(asciiRandom())(charRandom());
})
    .add('#class', function () {
        new Letter(asciiRandom()).letter(charRandom());
    })
    .add('#babel', function () {
        new BabelLetter(asciiRandom()).letter(charRandom())
    })
    // add listeners
    .on('cycle', function (event) {
       // console.log(event);
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({'async': true});