
module.exports = {
    /**
     * Calculates the student's probability of being admitted 
     * to a college.
     * @param {Number} The student's GPA
     * @param {Number} The student's cumulative GRE score
     * @param {Number} The student's cumulative TOEFL score
     * @param {Number} The college's acceptance rate.
     * @returns The probability (0-1) of a student being accepted
     */
    rateMyChance : async function(gpa, gre, toefl, acceptanceRate) {
        // TODO: Improve this awesome algorithm.
        var percent = Math.random();
        return { chance: percent }
    }
}