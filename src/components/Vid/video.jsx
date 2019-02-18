import React from 'react';
import './video.css'

const Video = () => {
    return ( 
        <div>
<section className="rec-video"> 
        <h1 className="center recommended-section-title">Recommended Videos</h1>
                <div className="rec-product">
                        <ul>
                                <li>
                                    <img className="video-thumb" src="https://github.com/JangkarBumi/Selorejo/blob/master/images/video.png?raw=true" alt=""/>
                                    <span className="video-title">Jamdani</span>
                                </li>
                    
                             <li>
                                <img className="video-thumb" src="https://github.com/JangkarBumi/Selorejo/blob/master/images/video.png?raw=true" alt=""/>
                                <span className="video-title">Lorem ipsum dolor sit amet</span>
                                </li>
                    
                             <li>
                                    <img className="video-thumb" src="https://github.com/JangkarBumi/Selorejo/blob/master/images/video.png?raw=true" alt=""/> 
                                <span className="video-title">Lorem ipsum dolor sit amet</span>
                                </li>     
                        </ul>             
                </div>
            <div className="show-more">SHOW MORE</div>
        </section>

        </div>
     );
}
 
export default Video;
