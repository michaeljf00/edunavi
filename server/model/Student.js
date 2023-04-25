/**
 * A data module representing a Student (main type of user).
 */
class Student {
    #email = "";
    #fullName = "";
    #gpa = 0.0;
    #tests = [];

    /**
     * Creates a new instance of a student.
     * @param {String} pEmail 
     * @param {String} pFullName 
     * @param {Double} pGPA 
     * @param {List<Test>} pTests 
     */
    constructor(
        pEmail,
        pFullName,
        pGPA,
        pTests
    ) {
        email = pEmail;
        fullName = pFullName;
        gpa = pGPA;
        tests = JSON.parse(JSON.stringify(pTests));
    }

    /**
     * @returns The email address of the student.
     */
    getEmail(){
        return this.#email;
    }
    
    /**
     * @returns The full name of the student.
     */
    getFullName(){
        return this.#fullName;
    }

    /**
     * @returns The GPA of the student.
     */
    getGPA() {
        return this.#gpa;
    }

    /**
     * @returns A copy of a list containing all the tests the student
     * has taken.
     */
    getTests(){
        return JSON.parse(JSON.stringify(this.#tests));
    }

    /**
     * @returns A boolean value indicating whether a student has taken
     * the required tests to be apply as a postgraduate.
     */
    isPostGraduate(){
        for (let i=0; i < this.#tests.length; i++){
            if (tests[i].isPostGraduate()){
                return true;
            }
        }
        return false;
    }

    /**
     * @returns A boolean value indicating whether a student has taken
     * the required tests to be apply as an international student.
     */
    isInternational(){
        for (let i=0; i < this.#tests.length; i++){
            if (tests[i].isInternational()){
                return true;
            }
        }
        return false;
    }
    
}