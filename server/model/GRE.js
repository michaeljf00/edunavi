const Test = require('./Test');
/**
 * Contains test-related information specific to 
 * the GRE exam.
 */
class GRE extends Test {
    #quantitativeScore = 0;
    #verbalScore = 0;
    #writingScore = 0.0;

    /**
     * Creates a new GRE instance with the specified scores.
     * @param {Integer} pQuantitativeScore 
     * @param {Integer} pVerbalScore 
     * @param {Integer} pWritingScore 
     */
    constructor(
        pQuantitativeScore,
        pVerbalScore,
        pWritingScore
    ){
        super();
        this.#quantitativeScore = pQuantitativeScore;
        this.#verbalScore = pVerbalScore;
        this.#writingScore = pWritingScore;
    }

    /**
     * @returns The Math score for this instance.
     */
    getQuantitativeScore(){
        return this.#quantitativeScore;
    }

    /**
     * @returns The Verbal score for this instance.
     */
    getVerbalScore(){
        return this.#verbalScore;
    }

    /**
     * @returns The Writing score for this instance.
     */
    getWritingScore(){
        return this.#writingScore;
    }

    /**
     * @returns The cumulative score of this instance.
     */
    getCumulativeScore(){
        return this.#quantitativeScore + this.#verbalScore + this.#writingScore;
    }

    /**
     * @returns The maximum possible score of the GRE
     */
    getTopScore(){
        return 170;
    }

    /**
     * @returns The abbreviated name of the GRE exam.
     */
    getName(){
        return "GRE";
    }

    /**
     * @returns True if the test is required for applying to postgraduate
     * schools. False otherwise.
     */
    isPostGraduate(){
        return true;
    }

    /**
     * @returns True if the test is required for international students.
     * False otherwise.
     */
    isInternational(){
        return false;
    }
}

module.exports = GRE;