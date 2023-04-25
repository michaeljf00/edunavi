const DataController = require('../DataController')

/**
 * Ensures the DataController can find a college.
 */
test('DataController Get College Test', async () => {
    value = await DataController.getCollege(1);
    expect(value.College_ID).toBe(1);
});