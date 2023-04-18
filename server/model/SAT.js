/**
 * Contains test-related information specific to 
 * the SAT test.
 */
class SAT extends Test {
    #mathScore = 0;
    #readingScore = 0;

    /**
     * Creates a new SAT instance with the specified math
     * and reading scores.
     * @param {Integer} pMathScore : 
     * @param {Integer} pReadingScore
     */
    constructor(pMathScore, pReadingScore){
        this.#mathScore = pMathScore;
        this.#readingScore = pReadingScore;
    }

    /**
     * @returns The math score assigned to this SAT instance.
     */
    getMathScore(){
        return this.#mathScore;
    }

    /**
     * @returns The reading score assigned to this SAT instance.
     */
    getWritingScore() {
        return this.#readingScore;
    }

    /**
     * @returns The cumulative SAT score, out of 1600
     */
    getCumulativeScore() {
        return this.#mathScore + this.#readingScore;
    }

    /**
     * @returns The maximum possible SAT score.
     */
    getTopScore() {
        return 1600;
    }

    /**
     * @returns The abbreviated name of the SAT test.
     */
    getName() {
        return "SAT";
    }

    /**
     * @returns True if the test is required for applying to postgraduate
     * schools. False otherwise.
     */
    isPostGraduate(){
        return false;
    }

    /**
     * @returns True if the test is required for international students.
     * False otherwise.
     */
    isInternational(){
        return false;
    }

}