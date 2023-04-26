const Student = require("../Student");
const SAT = require("../SAT");

/**
 * Tests to ensure SAT implementation is correct.
 */
test('Student Results', async () => {

    var tests = [];
    var sat = new SAT(700, 750);
    tests.push(sat);
    var student = new Student("example@gmail.com", "Tester One", 3.5, tests);

    expect(student.getEmail()).toBe("example@gmail.com");
    expect(student.getFullName()).toBe("Tester One");
    expect(student.getGPA()).toBe(3.5);
    expect(student.isInternational()).toBe(false);
    expect(student.isPostGraduate()).toBe(false);
});