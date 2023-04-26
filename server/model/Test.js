/**
 * Defines all behavior expected for tests. 
 * 
 * NOTE: This is meant to function as an interface. Since there
 * isn't an "inheritence" part of JavaScript, this class mimics
 * an inheritence by throwing an error if its base class is called.
 */
class Test {
    constructor(){}
    getCumulativeScore(){throw 'Not Implemented'}
    getTopScore() {throw 'Not Implemented'}
    getName() {throw 'Not Implemented'}
    isPostGraduate() {throw 'Not Implemented'}
    isIntenational() {throw 'Not Implemented'}
}
module.exports = Test;