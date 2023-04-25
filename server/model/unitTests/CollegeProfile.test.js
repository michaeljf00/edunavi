const CollegeProfile = require("../CollegeProfile");

/**
 * Tests to ensure the college profile is used correctly.
 */
test('College Profile Results', async () => {

    var profile = new CollegeProfile(
        1,
        "Rensselaer Polytechnic Institute",
        "Troy",
        "NY",
        "Why not change the world?",
        50,
        7000,
        "09/22/2023",
        53,
        30000,
        "https//rpi.edu",
        null
    );

    expect(profile.getCollegeId()).toBe(1);
    expect(profile.getCollegeName()).toBe("Rensselaer Polytechnic Institute");
    expect(profile.getCity()).toBe("Troy");
    expect(profile.getState()).toBe("NY");
    expect(profile.getDescription()).toBe("Why not change the world?");
    expect(profile.getUSNewsRanking()).toBe(50);
    expect(profile.getNumberOfStudents()).toBe(7000);
    expect(profile.getAdmissionDeadline()).toBe("09/22/2023");
    expect(profile.getAcceptanceRate()).toBe(53);
    expect(profile.getAverageCost()).toBe(30000);
    expect(profile.getApplicationSite()).toBe("https//rpi.edu");
    expect(profile.getImgPath()).toBe(null);
});