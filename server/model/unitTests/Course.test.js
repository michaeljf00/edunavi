const Course = require("../Course");

/**
 * Tests to ensure the course is created correctly.
 */
test('Course Creation', async () => {

    var course = new Course(
        1,
        1,
        1, 
        "Computer Science",
        "It's about computers...",
        "You become a computer scientist",
        "https://rpi.edu"
    );

    expect(course.getCollegeId()).toBe(1);
    expect(course.getCourseId()).toBe(1);
    expect(course.getProgramType()).toBe(1);
    expect(course.getCourseTitle()).toBe("Computer Science");
    expect(course.getAboutSection()).toBe("It's about computers...");
    expect(course.getOutcomeSection()).toBe("You become a computer scientist");
    expect(course.getAdmissionURL()).toBe("https://rpi.edu");
});