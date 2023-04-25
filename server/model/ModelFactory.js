const Test = require('./Test');
const ACT = require('./ACT');
const SAT = require('./SAT');
const TOEFL = require('./TOEFL');
const GRE = require('./GRE');
const Student = require('./Student');
/**
 * The ModelFactory is responsible for creating all instances of 
 * data module objects. 
 */
class ModelFactory {
    constructor(){}

    /**
     * Creates an instance of Student.js, given any
     * relevant information regarding the student.
     * @param 
     */
    createStudent(email, fullName, gpa, tests){
        return new Student(
            email,
            fullName,
            gpa, 
            tests
        );
    }

    /**
     * Creates an instance of a test.
     * @param {String} name of the test
     * @param {Map<String, Double>} attributes associated with the exam.
     */
    createTest(name, attributes){
        switch(name) {
            case "ACT":
                return new ACT (
                    attributes.get("Scaled Score"),
                    attributes.get("Math"),
                    attributes.get("English"),
                    attributes.get("Reading"),
                    attributes.get("Science"),
                    attributes.get("Writing")
                );
                break;
            case "SAT":
                return new SAT (
                    attributes.get("Math"),
                    attributes.get("Reading")
                );
                break;
            case "GRE":
                return new GRE (
                    attributes.get("Quantitative"),
                    attributes.get("Verbal"),
                    attributes.get("Writing")
                );
                break;
            case "TOEFL":
                return new TOEFL (
                    attributes.get("Reading"),
                    attributes.get("Writing"),
                    attributes.get("Listening"),
                    attributes.get("Speaking")
                );
                break;
            default:
                return null;
        }

    }
}

module.exports=ModelFactory;
