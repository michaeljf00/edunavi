const GRE = require("../GRE");

/**
 * Tests to ensure SAT implementation is correct.
 */
test('GREResults', async () => {
    
        var examExample = new GRE(90, 80, 10);

        expect(examExample.getCumulativeScore()).toBe(90+80+10);
        expect(examExample.getQuantitativeScore()).toBe(90);
        expect(examExample.getVerbalScore()).toBe(80);
        expect(examExample.getWritingScore()).toBe(10);
        expect(examExample.getName()).toBe("GRE");
        expect(examExample.isInternational()).toBe(false);
        expect(examExample.isPostGraduate()).toBe(true);
});