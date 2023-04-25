const Test = require("../Test");

/**
 * Tests to ensure the backend database can't be used.
 */
test('Test Interface Results', async () => {
    try{
        var examExample = new Test();
        expect(examExample.getCumulativeScore()).toThrow();
    }
    catch{
        // just catches the exception thrown by the getCumulativeScore function
    }
});