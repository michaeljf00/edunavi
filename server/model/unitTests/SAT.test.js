const SAT = require("../SAT");

/**
 * Tests to ensure SAT implementation is correct.
 */
test('SATResults', async () => {
    
        var examExample = new SAT(650, 700);

        expect(examExample.getCumulativeScore()).toBe(650+700);
        expect(examExample.getMathScore()).toBe(650);
        expect(examExample.getReadingScore()).toBe(700);
        expect(examExample.getName()).toBe("SAT");
        expect(examExample.isInternational()).toBe(false);
        expect(examExample.isPostGraduate()).toBe(false);
});