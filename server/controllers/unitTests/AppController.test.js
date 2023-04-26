const AppController = require("../AppController");

/**
 * Ensures a chance is generated for a simple case.
 */
test('AppController RateMyChance Test', async () => {
    value = await AppController.getMyChance();
    expect(value).toBeLessThan(1);
});

/**
 * Ensures the AppController can find a college.
 */
test('AppController Get College Test', async () => {
    value = await AppController.getCollege(1);
    expect(value.College_ID).toBe(1);
});

/**
 * Ensures the AppController can find a college.
 */
test('AppController Get College Test', async () => {
    value = await AppController.getCollege(1);
    expect(value.College_ID).toBe(1);
});

