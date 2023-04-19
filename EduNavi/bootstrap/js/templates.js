
const panel1Source = `
<div class="row rounded" style="border:solid 1px #d3d3d3; margin-top: 20px;border-radius: 10px;">
<div class="col-md-4" style="border-right: 1px solid #d3d3d3;">
    <div class="row" style="border-bottom: 1px solid #d3d3d3;">
        <form class=" " role="search">
            <div class="form-group" style="padding: 10px;">
              <input type="text" class="form-control" placeholder="Search" style="width: 200px;">
            </div>
        </form>
    </div>
    <div class="row majorlist clickable-div clicked major" style="border-bottom: 1px solid #d3d3d3;" data-major-id="CS">
        <h6 style="font-weight: bolder;">Computer Science</h6>
        <p><small>The Department of Computer Science at Rensselaer Polytechnic Institute, in Troy, NY, is aggressively growing in all areas of computer science and its myriad applications.</small></p>
    </div>
    <div class="row majorlist clickable-div major" style="border-bottom: 1px solid #d3d3d3;" data-major-id="math">
        <h6 style="font-weight: bolder;">Mathematics</h6>
        <p><small>The Department of Computer Science at Rensselaer Polytechnic Institute, in Troy, NY, is aggressively growing in all areas of computer science and its myriad applications.</small></p>
    </div>
    <div class="row majorlist clickable-div major" style="border-bottom: 1px solid #d3d3d3;" data-major-id="info">
        <h6 style="font-weight: bolder;">Information Management & System</h6>
        <p><small>The Department of Computer Science at Rensselaer Polytechnic Institute, in Troy, NY, is aggressively growing in all areas of computer science and its myriad applications.</small></p>
    </div>
    <div class="row majorlist clickable-div major" style="border-bottom: 1px solid #d3d3d3;" data-major-id="HCI" >
        <h6 style="font-weight: bolder;">Human-Computer Interaction</h6>
        <p><small>The Department of Computer Science at Rensselaer Polytechnic Institute, in Troy, NY, is aggressively growing in all areas of computer science and its myriad applications.</small></p>
    </div>
</div>

<div class="col-md-8" >
    <div class="row">
        <div class="col-md-8" style="padding-left: 30px; padding-top: 30px;">
            <h3 style="font-weight: bold;" id="major-name">Computer Science</h3>
        </div>
        <div class="col-md-4">
            <a href="#" >
                <img src="" alt="">
            </a>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6" style="padding-left: 30px; padding-top: 20px;">
            <h4 style="font-weight: bold;">Introduction</h3>
        </div>         
    </div>
    <div class="row" style="padding-left: 30px; padding-right: 40px;">
            <p>Earning a Rensselaer undergraduate degree in computer science prepares students to solve real-world problems and carry out fundamental research. Our students have distinguished themselves by founding companies while still in school, landing high-income and socially engaging jobs at a broad range of companies, and going on to prominent graduate schools. Given our strengths and successes, over the last six years, the incoming freshman class has consistently been the largest across all majors. In 2018, we became the largest major on campus and currently have over 1400 undergraduates. As the largest major (and most popular dual major), our flexible degree requirements allow students to focus on specific topics within computer science and also provide unique opportunities for open source software development and involvement in faculty-sponsored undergraduate research.</p>
    </div>
    <div class="row">
        <div class="col-md-6" style="padding-left: 30px; padding-top: 20px;">
            <h4 style="font-weight: bold;">Admission Requirements</h3>
        </div>
    </div>
    <div class="row" style="padding-left: 30px;">
        <p> High School Transcript<br>
            Letter of Recommendation<br>
            Test Scores<br>
            Essay<br>
            Application Fee<br>
            Portfolio (if required)<br>
            Early Decision Agreement Form (if required)<br>
            Requirements for International Students<br>
        </p>
    </div>
    <div class="row" style="padding-left: 70px; padding-top: 20px;">
        <div class="col-md-6">
            <a href="#" target="_blank" class="btn btn-primary btn-lg ">
                <img src="./img/star.png" alt="Icon" style="height: 20px; margin-right: 5px;">
                Check My Chance
            </a>
        </div>
        <div class="col-md-6">
            <a href="#" target="_blank" class="btn btn-primary btn-lg ">
                <img src="./img/Scale.png" alt="Icon" style="height: 20px; margin-right: 5px;">
                Add to Compare
            </a>
        </div>
    </div>
</div>
</div>
`;

const panel2Source = `
<div class="row rounded" style="border:solid 1px #d3d3d3; margin-top: 20px;border-radius: 10px;">
                <div class="col-md-4" style="border-right: 1px solid #d3d3d3;">
                    <div class="row" style="border-bottom: 1px solid #d3d3d3;">
                        <form class=" " role="search">
                            <div class="form-group" style="padding: 10px;">
                              <input type="text" class="form-control" placeholder="Search" style="width: 200px;">
                            </div>
                        </form>
                    </div>
                    <div class="row majorlist clickable-div clicked major" style="border-bottom: 1px solid #d3d3d3;" data-major-id="CS">
                        <h6 style="font-weight: bolder;">HCI</h6>
                        <p><small>The Department of Computer Science at Rensselaer Polytechnic Institute, in Troy, NY, is aggressively growing in all areas of computer science and its myriad applications.</small></p>
                    </div>
                    <div class="row majorlist clickable-div major" style="border-bottom: 1px solid #d3d3d3;" data-major-id="math">
                        <h6 style="font-weight: bolder;">Chemistry</h6>
                        <p><small>The Department of Computer Science at Rensselaer Polytechnic Institute, in Troy, NY, is aggressively growing in all areas of computer science and its myriad applications.</small></p>
                    </div>
                    <div class="row majorlist clickable-div major" style="border-bottom: 1px solid #d3d3d3;" data-major-id="info">
                        <h6 style="font-weight: bolder;">XXXXXXXXXX</h6>
                        <p><small>The Department of Computer Science at Rensselaer Polytechnic Institute, in Troy, NY, is aggressively growing in all areas of computer science and its myriad applications.</small></p>
                    </div>
                    <div class="row majorlist clickable-div major" style="border-bottom: 1px solid #d3d3d3;" data-major-id="HCI" >
                        <h6 style="font-weight: bolder;">LOLOLOLOLOLOL</h6>
                        <p><small>The Department of Computer Science at Rensselaer Polytechnic Institute, in Troy, NY, is aggressively growing in all areas of computer science and its myriad applications.</small></p>
                    </div>
                </div>
                
                <div class="col-md-8" >
                    <div class="row">
                        <div class="col-md-8" style="padding-left: 30px; padding-top: 30px;">
                            <h3 style="font-weight: bold;" id="major-name">Computer Science</h3>
                        </div>
                        <div class="col-md-4">
                            <a href="#" >
                                <img src="" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6" style="padding-left: 30px; padding-top: 20px;">
                            <h4 style="font-weight: bold;">Introduction</h3>
                        </div>         
                    </div>
                    <div class="row" style="padding-left: 30px; padding-right: 40px;">
                            <p>Earning a Rensselaer undergraduate degree in computer science prepares students to solve real-world problems and carry out fundamental research. Our students have distinguished themselves by founding companies while still in school, landing high-income and socially engaging jobs at a broad range of companies, and going on to prominent graduate schools. Given our strengths and successes, over the last six years, the incoming freshman class has consistently been the largest across all majors. In 2018, we became the largest major on campus and currently have over 1400 undergraduates. As the largest major (and most popular dual major), our flexible degree requirements allow students to focus on specific topics within computer science and also provide unique opportunities for open source software development and involvement in faculty-sponsored undergraduate research.</p>
                    </div>
                    <div class="row">
                        <div class="col-md-6" style="padding-left: 30px; padding-top: 20px;">
                            <h4 style="font-weight: bold;">Admission Requirements</h3>
                        </div>
                    </div>
                    <div class="row" style="padding-left: 30px;">
                        <p> High School Transcript<br>
                            Letter of Recommendation<br>
                            Test Scores<br>
                            Essay<br>
                            Application Fee<br>
                            Portfolio (if required)<br>
                            Early Decision Agreement Form (if required)<br>
                            Requirements for International Students<br>
                        </p>
                    </div>
                    <div class="row" style="padding-left: 70px; padding-top: 20px;">
                        <div class="col-md-6">
                            <a href="#" target="_blank" class="btn btn-primary btn-lg ">
                                <img src="./img/star.png" alt="Icon" style="height: 20px; margin-right: 5px;">
                                Check My Chance
                            </a>
                        </div>
                        <div class="col-md-6">
                            <a href="#" target="_blank" class="btn btn-primary btn-lg ">
                                <img src="./img/Scale.png" alt="Icon" style="height: 20px; margin-right: 5px;">
                                Add to Compare
                            </a>
                        </div>
                    </div>
                </div>
            </div>
`;

