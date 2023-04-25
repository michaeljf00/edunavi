
module.exports = {
    /**
     * Calculates the student's probability of being admitted 
     * to a college.
     * @returns The probability (0-1) of a student being accepted
     */
    rateMyChance : async function() {
        // TODO: Improve this awesome algorithm.
        var percent = Math.random();
        return percent;
    },

    /**
     * The updated version of the rateMyChance calculator, which calculates 
     * the student's probability of being admitted to a college.
     * @param {Double} collegeAdmissionRate The acceptance rate of the college in question.
     * @param {Double} gpa The student's GPA.
     * @param {Number} testScore The student's submitted test score.
     * @param {Number} topTestScore The highest test score possible for the submitted test.
     * @returns The probability (0-1) of a student being accepted
     */
    rateMyChanceV2 : async function(collegeAdmissionRate, gpa, testScore, topTestScore){
        convertedAcceptanceRate = collegeAdmissionRate/100;
        gpaRating = gpa/4;
        testRating = testScore/topTestScore;
        finalResult = convertedAcceptanceRate * gpaRating * testRating;
        // If the probability of the student being accepted to a school is 
        // greater than 1, then just return 1 (the student is definitely going 
        // to be accepted to this school).
        if (finalResult > 1){
            return 1;
        }
        return convertedAcceptanceRate * gpaRating * testRating;
    }

    /**
     * Possible future v3 calculator: Would involve adding the average accepted student
     * GPA, test scores, and acceptance rate, so more information about the college
     * would need to be added to the database and reflected in the data models.
     */
}