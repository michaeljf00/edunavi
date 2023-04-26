const TOEFL = require("../TOEFL");

/**
 * Tests to ensure TOEFL implementation is correct.
 */
test('TOEFLResults', async () => {
    
        var examExample = new TOEFL(60, 59, 48, 50);

        expect(examExample.getCumulativeScore()).toBe(60+59+48+50);
        expect(examExample.getListeningScore()).toBe(48);
        expect(examExample.getReadingScore()).toBe(60);
        expect(examExample.getSpeakingScore()).toBe(50);
        expect(examExample.getWritingScore()).toBe(59);
        expect(examExample.getName()).toBe("TOEFL");
        expect(examExample.isInternational()).toBe(true);
        expect(examExample.isPostGraduate()).toBe(false);
});