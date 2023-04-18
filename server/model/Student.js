/**
 * A data module representing a Student (main type of user).
 */
class Student {
    #email = "";
    #fullName = "";
    #gpa = 0.0;
    #tests = [];

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

    getEmail(){
        return this.#email;
    }
    
    getFullName(){
        return this.#fullName;
    }

    getGPA() {
        return this.#gpa;
    }

    getTests(){
        return JSON.parse(JSON.stringify(this.#tests));
    }

    isPostGraduate(){

    }

    isInternational(){
        
    }
}