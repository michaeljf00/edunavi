const ACT = require("../ACT");

/**
 * Tests to ensure ACT implementation is correct.
 */
test('ACTResults', async () => {
    
        var examExample = new ACT(20, 20, 20, 20, 10, 10);

        expect(examExample.getCumulativeScore()).toBe(20);
        expect(examExample.getEnglishScore()).toBe(20);
        expect(examExample.getMathScore()).toBe(20);
        expect(examExample.getReadingScore()).toBe(20);
        expect(examExample.getWritingScore()).toBe(10);
        expect(examExample.getName()).toBe("ACT");
});