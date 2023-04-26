/**
 * Contains relevant information regarding a college profile.
 */
class Course {
    #collegeID = 0;
    #courseID = 0;
    #programType = 0;
    #courseTitle = "";
    #about = "";
    #outcome = "";
    #admissionURL = "";

    /**
     * Creates an instance of a Course
     * @param {Integer} pCollegeID The id of the college associated with the course.
     * @param {Integer} pCourseID The id of the course.
     * @param {Integer} pProgramType The type of program of the course (1=undergraduate, 2=graduate, 3=PhD.)
     * @param {String} pCourseTitle The name of the course.
     * @param {String} pAbout A brief description about the course.
     * @param {String} pOutcome A brief description about the outcome of the course.
     * @param {String} pAdmissionURL A link to the course-specific admission site.
     */
    constructor(
        pCollegeID,
        pCourseID,
        pProgramType,
        pCourseTitle,
        pAbout,
        pOutcome,
        pAdmissionURL
    ){
        this.#collegeID = pCollegeID;
        this.#courseID = pCourseID;
        this.#programType = pProgramType;
        this.#courseTitle = pCourseTitle;
        this.#about = pAbout;
        this.#outcome = pOutcome;
        this.#admissionURL = pAdmissionURL;
    }

    /**
     * @returns The id of the college associated with the course.
     */
    getCollegeId(){
        return this.#collegeID;
    }

    /**
     * @returns The id of the course.
     */
    getCourseId(){
        return this.#courseID;
    }

    /**
     * @returns The type of program of the course (1=undergraduate, 2=graduate, 3=PhD.)
     */
    getProgramType(){
        return this.#programType;
    }

    /**
     * @returns The name of the course.
     */
    getCourseTitle(){
        return this.#courseTitle;
    }

    /**
     * @returns A brief description about the course.
     */
    getAboutSection(){
        return this.#about;
    }

    /**
     * @returns A brief description about the outcome of the course.
     */
    getOutcomeSection(){
        return this.#outcome;
    }

    /**
     * @returns A link to the course-specific admission site.
     */
    getAdmissionURL(){
        return this.#admissionURL;
    }

}

module.exports = Course;