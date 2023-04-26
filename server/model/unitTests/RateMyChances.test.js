var RateMyChances = require("../RateMyChances");

/**
 * Ensures a chance is generated for a simple case.
 */
test('Simple RateMyChance Test', async () => {
    value = await RateMyChances.rateMyChance();
    expect(value).toBeLessThan(1);
});

/**
 * Makes sure a student gets 100% chance of entering school which accepts
 * all students with perfect GPAs and SAT scores.
 */
test('Strict RateMyChance Test Perfect Student', async () => {
    value = await RateMyChances.rateMyChanceV2(100, 4, 1600, 1600);
    expect(value).toBe(1);
});

/**
 * Checks for a consistent chance.
 */
test('Strict RateMyChance Test RPI Admission', async () => {
    value = await RateMyChances.rateMyChanceV2(56, 4, 1400, 1600);
    expect(value).toBe(0.49000000000000005);
});
