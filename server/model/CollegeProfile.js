/**
 * Contains relevant information regarding a college profile.
 */
class CollegeProfile {
    #collegeId = 0;
    #name = 0;
    #city = "";
    #state = "";
    #description = "";
    #usNewsRanking = 0;
    #numStudents = 0;
    #admissionDeadline = "";
    #acceptanceRate = 0.0;
    #averageCost = 0.0;
    #applicationSite = "";
    #imgPath = "";

    /**
     * Instantiates a detailed profile of a college.
     * @param {Integer} pCollegeId The matching college id.
     * @param {String} pName The name of the college.
     * @param {String} pCity The city in which the college is located.
     * @param {String} pState The state in which the college is located.
     * @param {String} pDescription A basic description of the college.
     * @param {Integer} pUsNewsRanking The college's US News Ranking.
     * @param {Integer} pNumStudents The number of students attending the college.
     * @param {String} pAdmissionDeadline The admission deadline, in the format MM/DD/YYYY
     * @param {Number} pAcceptanceRate The college's annual acceptance rate.
     * @param {Number} pAverageCost The average annual cost of attending the college.
     * @param {String} pApplicationSite A link to the college's application site.
     * @param {String} pImgPath The image path of the college.
     */
    constructor (
        pCollegeId,
        pName,
        pCity,
        pState,
        pDescription,
        pUsNewsRanking,
        pNumStudents,
        pAdmissionDeadline,
        pAcceptanceRate,
        pAverageCost,
        pApplicationSite,
        pImgPath){
            this.#collegeId = pCollegeId;
            this.#name = pName;
            this.#city = pCity;
            this.#state = pState;
            this.#description = pDescription;
            this.#usNewsRanking = pUsNewsRanking;
            this.#numStudents = pNumStudents;
            this.#admissionDeadline = pAdmissionDeadline;
            this.#acceptanceRate = pAcceptanceRate;
            this.#averageCost = pAverageCost;
            this.#applicationSite = pApplicationSite;
            this.#imgPath = pImgPath;
    }

    /**
     * @returns The college id that matches this college's profile.
     */
    getCollegeId(){
        return this.#collegeId;
    }

    /**
     * @returns The name of the college.
     */
    getCollegeName(){
        return this.#name;
    }

    /**
     * @returns The city in which the college is located.
     */
    getCity() {
        return this.#city;
    }

    /**
     * @returns The state in which the college is located.
     */
    getState(){
        return this.#state;
    }

    /**
     * @returns A brief description of the college.
     */
    getDescription(){
        return this.#description;
    }

    /**
     * @returns This college's USNews Ranking.
     */
    getUSNewsRanking(){
        return this.#usNewsRanking;
    }

    /**
     * 
     * @returns The number of students attending this college.
     */
    getNumberOfStudents(){
        return this.#numStudents;
    }

    /**
     * @returns The admissions deadline of the college.
     */
    getAdmissionDeadline(){
        return this.#admissionDeadline;
    }

    /**
     * @returns The acceptance rate of the college.
     */
    getAcceptanceRate(){
        return this.#acceptanceRate;
    }

    /**
     * @returns The average student's cost of attendance.
     */
    getAverageCost(){
        return this.#averageCost;
    }

    /**
     * @returns A link to this college's application site.
     */
    getApplicationSite(){
        return this.#applicationSite;
    }

    /**
     * @returns The image path for this college.
     */
    getImgPath(){
        return this.#imgPath;
    }
}