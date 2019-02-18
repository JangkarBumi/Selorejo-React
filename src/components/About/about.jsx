import React from 'react';
import './about.css'

const About = () => {
    return (  
        <div className="about-wrapper">
            <img
              src="https://raw.githubusercontent.com/JangkarBumi/Selorejo/master/images/Background.png"
              alt=""
              className="about-img"
            />

            <div className="">
              <span className="">
                Our mission is threefold - to foster designer-artisan
                collaborations, inspire consumers to value provenance and
                process, and pioneer industry change and sustainability for
                rural textile communities.
              </span>

              <span className="">Artisan Employment Days Created</span>
              <span className="">123456</span>
              <span className="">Countries Involved To Date</span>
              <ul className="">
                <li>India</li>
                <li>China</li>
                <li>Sri Lanka</li>
              </ul>

              <span className="">#MatterTribe </span>

              <ul className="">
                <li>12 designers</li>
                <li>12 Factories</li>
              </ul>
            </div>
        </div>
    );
}
 
export default About;