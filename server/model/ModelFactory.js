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
        }

    }
}
