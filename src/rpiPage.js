import React, { useState } from "react";
import edunavilogo from "./Edunavi/img/NaviLogo.png";
import user from "./EduNavi/img/Usr.png";
import rpiPhoto from "./EduNavi/img/RPIphoto.png";
import rpi from "./EduNavi/img/RPI.png";
import websiteLogo from "./EduNavi/img/Websitelogo.png";
import "./rpiPage.css";


export const rpiPage = () => {
    $(document).ready(function() {
        function showPanel(panelId) {
            let panelSource = '';

            switch (panelId) {
                case 'panel-1':
                    panelSource = panel1Source;
                    break;
                case 'panel-2':
                    panelSource = panel2Source;
                    break;
                case 'panel-3':
                    panelSource = panel3Source;
                    break;
                default:
                    panelSource = '未找到面板';
            }

            $('#panel-container').html(panelSource);
        }
    });
        showPanel('panel-1');
    
        const majorData = {
            CS: {
                name: 'Computer Science',
                description: 'Computer Science is a good.'
            },
            math: {
                name: 'Mathematics',
                description: 'Mathematics is a fantastic.'
            },
            info: {
                name: 'Information Management & System',
                description: 'Information Management & System is an excellent.'
            },
            HCI: {
                name: 'Human-Computer Interaction',
                description: 'Human-Computer Interaction is an excellent.'
            }
        };

        function displayMajorInfo(majorId) {
            const major = majorData[majorId];
                if (major) {
                    $('#major-name').text(major.name);
                    $('#major-description').text(major.description);
                }
            }
            $('#panel-container').on('click', '.major', function() {
                const majorId = $(this).data('major-id');
                displayMajorInfo(majorId);
            });

            $('#panel-container').on('click', '.clickable-div', function() {
                $('.clicked').removeClass('clicked');
                $(this).addClass('clicked');
                $('#info-div').html('Hello, CS');
            });

            $('#panel-container').on('click', '.clickable-div2', function() {
                $('.clicked2').removeClass('clicked2');
                $(this).addClass('clicked2');
            });

            // $('.major').click(function() {
                //     const majorId = $(this).data('major-id');
                //     displayMajorInfo(majorId);
                // });

                // $('.clickable-div').click(function() {
                //     $('.clicked').removeClass('clicked');
                //     $(this).addClass('clicked');
                //     $('#info-div').html('Hello, CS');
                // });
                // $('.clickable-div2').click(function() {
                //     $('.clicked2').removeClass('clicked2');
                //     $(this).addClass('clicked2');
                // });

                $('.show-panel').on('click', function () {
                    const panelId = $(this).data('panel');
                    let panelSource = '';

                    switch (panelId) {
                        case 'panel-1':
                            panelSource = panel1Source;
                            break;
                        case 'panel-2':
                            panelSource = panel2Source;
                            break;
                        case 'panel-3':
                            panelSource = panel3Source;
                            break;
                        case 'panel-4':
                            panelSource = panel4Source;
                            break;
                }

                $('#panel-container').html(panelSource);
                
                });

    return (
    <div className="rpiPage">
        <head>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Bootstrap 101 Template</title>

            <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" />
    
            <script src="https://cdn.jsdelivr.cn/npm/html5shiv@3.7.3/dist/html5shiv.min.js"></script>
            <script src="https://cdn.jsdelivr.cn/npm/respond.js@1.4.2/dest/respond.min.js"></script>

        </head>
        <body>
       
            <nav class="navbar navbar-default">
                <div class="container">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">
                        <img src={ edunavilogo } alt="Logo" height="30" />
                        </a>
                    </div>
        
                    <div class="collapse navbar-collapse">

                        <ul class="nav navbar-nav navbar-right">
                            <li>
                                <a href="#">
                                <img src={ user } alt="User Avatar" width="30" class="img-circle" />
                                </a>
                            </li>
                        </ul>

                        <form class="navbar-form navbar-right" role="search">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Search" style= {{'width': '400px;'}} />
                            </div>
                        </form>
                
                    </div>
                </div>
            </nav>

            <section>
                <div class="container banner">
                    <div class="row">
                        <div class="col">
                            <img class="img-rounded"src={ rpiPhoto } alt="" id="RPI" />
                        </div>
                    </div>
                </div>
            </section>
            <img src={ rpi } alt="Logo" class="logo-overlay" />

            <section>
                <div class="container intro " style={{'box-shadow' : '0 4px 6px rgba(0, 0, 0, 0.1);', 'border-radius' : '10px;' }}>
                    <div class="row content-section">
                        <div class="col" style= {{ 'max-width' : '1050px;'}}>
                            <h3 style="font-weight: bold;">Introduction</h3>
                            <p>
                                Rensselaer Polytechnic Institute was founded on the principles of bringing science to everyday life, and that ethos is still prevalent today. About a quarter of students are involved in Greek L.I.F.E., as the fraternity and sorority scene is known at the school, which stresses Leadership, Innovation, Fortitude and Evolution. More students – more than 80 percent – play sports at the varsity, club or intramural level. True to the school’s mission, the varsity athletes are known as the Engineers, and compete in the Eastern College Athletic Conference and the Liberty League. There are also more than 200 student organizations. Freshmen must live on campus, usually in dormitories that only house first-year students. RPI’s campus, in Troy, N.Y., is nestled in an ideal location for nature lovers. The school overlooks the Hudson River, where waterfront activities abound, and is close to Grafton Lakes State Park, Lake George and the Adirondack Mountains. For an urban experience, Albany is 9 miles away.
                            </p>
                        </div>
                    </div>

                    <div class="row content-section">
                        <div class="col" style={{ 'max-width' : '1050px;'}}>

                        </div>
                    </div>
            
                    <div class="row content-section" >
                        <div class="col-md-3">
                            <h3 style={{ 'font-size': '18px'}}>Current Student</h3>
                            <p class="schoolattribute" style={{'color' : '#337AB7;', 'font-weight' : 'bold;'}}>7,616</p>
                        </div>
                        
                        <div class="col-md-3">
                            <h3 style={{ 'font-size' : '18px;'}}>Admission Deadline</h3>
                            <p class="schoolattribute" style={{ 'color' : '#337AB7;', 'font-weight': 'bold;'}}>Jan 15th</p>
                        </div>
                        <div class="col-md-3 text-center">
                            <h3 style={{'font-size' : '18px;'}}>Annual Cost</h3>
                            <p class="schoolattribute" style={{ 'color': '#337AB7;', 'font-weight': 'bold;'}}>$40,661</p>
                        </div>
                
                        <div class="col-md-3 text-center" >
                            <a href="https://www.rpi.edu" target="_blank" class="btn btn-primary btn-lg ">
                                <img src={ websiteLogo } alt="Icon" style= {{ 'height' : '20px;', 'margin-right' : '5px;'}} />
                                School Website
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <br>

            <section>
                <div class="container">
                    <div class="row">
                        <div class="col"><h3 style={{ 'font-size': '18px;', 'font-weight' : 'bold;' }}>School & Programs</h3></div>
                </div>

                <div class="row" style={{ 'margin-top' : '10px;' }}>
                    <div class="col-md-2"><button class="btn-custom btn-transparent btn-border-white btn-hover clickable-div2 clicked2 show-panel" data-panel="panel-1">Undergraduate</button></div>
                    <div class="col-md-2"><button class="btn-custom btn-transparent btn-border-white btn-hover clickable-div2 show-panel" data-panel="panel-2">Graduate</button></div>
                    <div class="col-md-2"><button class="btn-custom btn-transparent btn-border-white btn-hover clickable-div2 show-panel" data-panel="panel-3">Ph.D</button></div>
                    <div class="col-md-2"><button class="btn-custom btn-transparent btn-border-white btn-hover clickable-div2 show-panel" data-panel="panel-4">Transfer</button></div>
                </div>

                <div id="panel-container"></div>
            </div>
        </section>
        </br>

        <script src="./bootstrap/js/templates.js"></script>
        <script src="js/jquery-3.5.1.js" ></script>
        <script src="bootstrap/js/bootstrap.min.js" ></script>
        
        </body>
    </div>
  );
}