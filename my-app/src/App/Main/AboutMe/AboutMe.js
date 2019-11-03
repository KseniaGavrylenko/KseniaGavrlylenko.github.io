import React from 'react';
import './AboutMe.css'

const AboutMe = () =>{
    return(
                <section className="about_me">
                <div className="container">
                    <div className="row">
                            <div className="col-md-6">
                                <img src="images/light-man.png" alt="" className="about_me__img"/>
                            </div>
                        <div className="col-md-6">
                            <div className="quote_wrap">
                                <p className="description">About me</p>
                                <h3>Nullam id dolor id nibh ultricies vehicula elit. </h3>
                        </div>
                    </div>
                </div>
                        <div className="quote">
                            <p className="quote_text">
                                “Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor”
                            </p>
                            <p className="description">Peru, 2018</p>
                            <a href="/" className="storypage_btn">Full story <span>➝</span></a>
                        </div>
                    </div>
                </section>
        
     )
}

export default AboutMe