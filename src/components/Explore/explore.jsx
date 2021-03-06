import React from 'react';
import './explore.css'

const Explore = () => {
    return (
        <div className="explore-wrapper">
         <section className="explore">
        <h1 className="center explore-section-title">Explore</h1>
    <div className="wrapper">
    <div className="explore-container">

       <div className="second-piece">
        <div className="line-one"></div>   
       FIELDTESTED . JANUARY 19, 2017
        <div className="explore-title">Connected Clothing: Raye Padit</div>
        <div className="explore-content">As a voice for conscious fashion, Raye Padit is motivated by the belief that one person’s actions, no matter how small, holds great impact. This core ideal has driven him to start his three passion projects: Connected Threads Asia, PeyaR, and Swagalls. </div>
        <img src="https://raw.githubusercontent.com/JangkarBumi/Selorejo/master/images/rect1.png" alt="" className="explore-img"></img>
    </div>

       <div className="first-piece">
        <div className="line-two"></div>   
        FIELDTESTED . JANUARY 19, 2017
        <div className="explore-title-mini">
                Kérastase: A Collaboration
        </div>
        <img className ="small-bag" src="https://raw.githubusercontent.com/JangkarBumi/Selorejo/master/images/task2.png" alt=""></img>

        <div className="line-middle-two"></div> 
        <div>FIELDTESTED . JANUARY 19, 2017</div>  
        <div className="explore-title-mini">Remarkable Resilience: Grace Kim</div>
        <div className="explore-content-mini">A woman in my life who has shown remarkable resilience is my best friend Grace. Since she was a kid, she struggled with general anxiety disorder and panic disorder.</div>
    </div>


       <div className="first-piece">
            <div className="line-two"></div>    
            FIELDTESTED . JANUARY 19, 2017
            <div className="explore-title-mini">
                    Jaclynn Seah
            </div>
            <div className="explore-content-mini">
                    Jaclynn’s wandering spirit has brought her from the lush greenery of South America to the craters of Indonesia.
            </div>
            <div className="line-middle-two"></div> 
            <div>FIELDTESTED . JANUARY 19, 2017</div>
            <div className="explore-title-mini">How To Wear The Lounge Lunghi</div>
            <img src="https://raw.githubusercontent.com/JangkarBumi/Selorejo/master/images/task3.png" alt="" className="task3"></img>
        </div>
    
        </div>
    </div>
        <div className="see-journal">SEE THE JOURNAL</div>
</section>

        </div>
      );
}
 
export default Explore;