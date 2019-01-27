import React from "react"

function seenInstagram () {
return(
    <div>
        <section className="recommended"> 
    <h1 className="center recommended-section-title">As Seen On Instagram</h1>
        <div className="wrapper">
            <div className="product-rec-product">
                    <ul>
                            <li>
                                <img className="video-ig" src={require("../images/ig1.png")} alt=""/>
                            </li>
                
                         <li>
                            <img className="video-ig" src={require("../images/ig2.png")} alt=""/> 
                            </li>
                
                         <li>
                                <img className="video-ig" src={require("../images/ig3.png")} alt=""/> 
                            </li>                  
                         
                            <li>
                                <img className="video-ig" src={require("../images/ig4.png")} alt=""/> 
                            </li>     
                            </ul>
            </div>
        </div>
    </section>
    </div>
)
}

export default seenInstagram 