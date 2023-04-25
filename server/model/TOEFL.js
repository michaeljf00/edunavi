/**
 * Contains test-related information specific to 
 * the TOEFL test.
 */
class TOEFL extends Test {
    #readingScore = 0;
    #writingScore = 0;
    #listeningScore = 0;
    #speakingScore = 0;

    /**
     * Creates a new instance of a TOEFL exam
     * @param {Integer} pReadingScore The reading section score.
     * @param {*} pWritingScore The writing section score.
     * @param {*} pListeningScore The listening section score.
     * @param {*} pSpeakingScore The speaking section score.
     */
    constructor(
        pReadingScore, 
        pWritingScore, 
        pListeningScore, 
        pSpeakingScore){
        readingScore = pReadingScore;
        writingScore = pWritingScore;
        listeningScore = pListeningScore;
        speakingScore = pSpeakingScore;
    }

    /**
     * @returns The reading score assigned to this TOEFL instance.
     */
    getReadingScore(){
        return this.#readingScore;
    }

    /**
     * @returns The writing score assigned to this TOEFL instance.
     */
    getWritingScore(){
        return this.#writingScore;
    }

    /**
     * @returns The listening score assigned to this TOEFL instance.
     */
    getListeningScore(){
        return this.#listeningScore;
    }

    /**
     * @returns The speaking score assigned to this TOEFL instance.
     */
    getSpeakingScore(){
        return this.#speakingScore;
    }

    /**
     * @returns The cumulative score assigned to this TOEFL instance, out of 120.
     */
    getCumulativeScore(){
        return this.#readingScore + this.#writingScore + this.#listeningScore + this.#speakingScore;
    }

    /**
     * @returns The highest possible score on the TOEFL.
     */
    getTopScore(){
        return 120;
    }

    /**
     * @returns The abbreviated name of the TOEFL test.
     */
    getName(){
        return "TOEFL";
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
        return true;
    }
}