var APIController = require("../APIController");

/**
 * Ensures a chance is generated for a simple case.
 */
test('APIController RateMyChance Test', async () => {
    value = await APIController.getMyChance();
    expect(value.chance).toBeLessThan(1);
});

/**
 * Ensures the APIController can find a college.
 */
test('APIController Get College Test', async () => {
    value = await APIController.getCollege(1);
    expect(value.College_ID).toBe(1);
});