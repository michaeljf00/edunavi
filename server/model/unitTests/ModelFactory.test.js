const ModelFactory = require('../ModelFactory');
const Test = require('../Test');

/**
 * Ensures the ModelFactory creates the test properly.
 */
test('Create Test', async () => {
    var modelFactory = new ModelFactory();

    const attributes = new Map([
        ["Math", 700],
        ["Reading", 600]
    ]);
    var test = modelFactory.createTest(
        "SAT",
        attributes
    )

    expect(test.getCumulativeScore()).toBe(700+600);
});

/**
 * Ensures the ModelFactory creates a student properly.
 */
test('Create Student', async () => {
    var modelFactory = new ModelFactory();

    const attributes = new Map([
        ["Math", 700],
        ["Reading", 600]
    ]);
    var test = modelFactory.createTest(
        "SAT",
        attributes
    )

    var student = modelFactory.createStudent(
        "example@gmail.com",
        "Tester One",
        3.5,
        [test]
    );

    expect(student.getFullName()).toBe("Tester One");
});