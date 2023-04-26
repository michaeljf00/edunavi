const DataController = require('../DataController')

/**
 * Ensures the DataController can find a college.
 */
test('DataController Get College Test', async () => {
    value = await DataController.findCollege(1);
    expect(value.College_ID).toBe(1);
});

/**
 * Ensures the DataController can find a list of colleges from MongoDB.
 */
test('DataController Get Colleges Test', async () => {
    value = await DataController.findColleges("Rensselaer Polytechnic Institute");
    expect(value.colleges.length).toBe(1);
});

/**
 * Ensures the DataController can find a course.
 */
test('DataController Get Course Test', async () => {
    value = await DataController.getCourse(1);
    expect(value.Course_ID).toBe(1);
});

/**
 * Ensures the DataController can find a list of courses.
 */
test('DataController Get Courses Test', async () => {
    value = await DataController.getCourses(1, 1);
    expect(value.courses.length).toBeGreaterThan(0);
});