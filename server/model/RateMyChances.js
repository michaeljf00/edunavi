
module.exports = {
    
    rateMyChance : async function(gpa, gre, toefl, acceptanceRate) {
        var percent = Math.random();
        return { chance: percent }
    }
}