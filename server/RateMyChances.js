
module.exports = {
    // TODO: expand this to include all undergraduate
    rateMyChance : async function(gpa, gre, toefl, acceptanceRate) {
        var a = (8.66) * (Math.pow(10, -5));
    
        var x = gpa * gre;
    
        var percent = (a/difficultyRate()) * (x*x);
    
        if (percent > 100) {
            percent = 100;
        }
        console.log(percent);
    }
}