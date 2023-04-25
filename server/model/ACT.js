/**
 * Contains test-related information specific to 
 * the ACT test.
 */
class ACT extends Test {
    #scaledScore = 0;
    #math = 0;
    #english = 0;
    #reading = 0;
    #science = 0;
    #writing = 0.0;

    /**
     * Creates a new ACT instance with the specified scores.
     * @param {Integer} pScaledScore the cumulative scaled score.
     * @param {Integer} pMath 
     * @param {Integer} pEnglish 
     * @param {Integer} pReading 
     * @param {Integer} pScience 
     * @param {Number} pWriting 
     */
    constructor(pScaledScore, 
        pMath,
        pEnglish,
        pReading,
        pScience,
        pWriting){
            this.#scaledScore = pScaledScore;
            this.#math = pMath;
            this.#english = pEnglish;
            this.#reading = pReading;
            this.#science = pScience;
            this.#writing = pWriting;
    }

    /**
     * @returns The scaled cumulative ACT score.
     */
    getScaledScore() {
        return this.#scaledScore;
    }

    /**
     * @returns The math section score.
     */
    getMathScore() {
        return this.#math;
    }

    /**
     * @returns The English section score.
     */
    getEnglishScore() {
        return this.#english;
    }

    /**
     * @returns The reading section score.
     */
    getReadingScore(){
        return this.#reading;
    }

    /**
     * @returns The science section score.
     */
    getScienceScore() {
        return this.#science;
    }

    /**
     * @returns The writing section score.
     */
    getWritingScore() {
        return this.#writing;
    }

    /**
     * @returns The cumulative score of this instance.
     */
    getCumulativeScore() {
        return this.#scaledScore;
    }

    /**
     * @returns The maximum possible score of the ACT
     */
    getTopScore() {
        return 36;
    }

    /**
     * @returns The abbreviated name of the ACT test.
     */
    getName(){
        return "ACT";
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