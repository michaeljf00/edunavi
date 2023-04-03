import React, { useState } from "react";
import navilogo from './Assets/NaviLogo.png';
import usnews from './Assets/USNews.png';
import qsworld from './Assets/QSworld.png';
import times from './Assets/Times.png';
import { ProfileSettings } from './ProfileSettings';
import { Login } from './Login';
import "./Home.css";

export const Home = () => {
    const [goToProfileSettings, setGoToProfileSettings] = React.useState(false)
    const [goToLogin, setGoToLogin] = React.useState(false)

    if (goToProfileSettings) {
        return <ProfileSettings />;
    } else if (goToLogin) {
        return <Login />;
    }

    return (
    <div className="Home">
    <head>
        <title>Document</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <link rel="stylesheet" type="text/css" href="./Home.css"/>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </head>
    
    <body>
        <div class="bg">
            <div class="container">
                <section id="Logo">
                    <div class="col-md-12">
                        <img src={ navilogo } alt="Logo of EduNavi" class="img-fluid mx-auto d-block"
                            style= {{ 'width' : '300px' }}/>
                    </div>
                </section>

                <section style={{ 'margin-bottom' : '10px;'}} id="search-bar">
                    <div class="h-search-form" style={{'padding-bottom' : '50px'}} />
                        <form action="#">
                            <input type="search" name="search" placeholder="learn about your dream school now" />
                            <button><ion-icon name="search-outline"></ion-icon></button>
                        </form>
                    <div/>
                </section>

                <section style={{ 'margin-top' : '5px;' }} id="Ranking-Cards">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card text-center" style={{'backgrond' : '#114D6D;'}}>
                                <img src={ usnews } class="card-img-top" alt="USNews" />
                                <div class="card-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Cras justo odd
                                        </li>
                                        <li class="list-group-item">
                                            Dapibus ac facilisis in
                                        </li>
                                        <li class="list-group-item">
                                            Vestibulum at eros
                                        </li>
                                        <li class="list-group-item">
                                            Vestibulum at eros
                                        </li>
                                        <li class="list-group-item">
                                            Vestibulum at eros
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card text-center" style={{'background' : '#114D6D;'}}>
                                <img src={ qsworld } class="card-img-top" alt="QSWorld" />
                                <div class="card-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Cras justo odi</li>
                                        <li class="list-group-item">Dapibus ac facilisis in</li>
                                        <li class="list-group-item">Vestibulum at eros</li>
                                        <li class="list-group-item">Vestibulum at eros</li>
                                        <li class="list-group-item">Vestibulum at eros</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card text-center" style={{'background' : '#114D6D;'}}>
                                <img src={ times } class="card-img-top" alt="Times" />
                                <div class="card-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Cras justo odio</li>
                                        <li class="list-group-item">Dapibus ac facilisis in</li>
                                        <li class="list-group-item">Vestibulum at eros</li>
                                        <li class="list-group-item">Cras justo odio</li>
                                        <li class="list-group-item">Dapibus ac facilisis in</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <button className="profile-settings-btn" onClick={() => { setGoToProfileSettings(true); }}>Profile Settings.</button> 
            <button className="log-out-btn" onClick={() => { setGoToLogin(true); }}>Log Out.</button> 
        </div>
        
    </body>
    
    </div>
    );
}

