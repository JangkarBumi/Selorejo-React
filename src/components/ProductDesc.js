import React from "react"

function ProductDesc() {
return(
    <div>
        <section className="product-desc">
    <img className="middle-product-img" src={require("../images/product-desc-img.png")} alt=""/>
    <div className="middle-desc">
    <span>I have taste grilled meats around the world. Before i will guide you to the various technologies (gas barbecues, charcoal barbecues, Mongolian, sauces, recipes ) i will tell you about the Greek way.</span>
</div>
<div className="middle-desc">
    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
</div>
    <div className="wrapper">
                <div className="product-rec-product">
                        <ul>
                                <li>
                                    <img className="product-video-thumb" src={require("../images/3-img-article-1.png")} alt=""/>
                                    <span className="video-title">Lorem ipsum dolor sit amet</span>
                                </li>
                    
                             <li>
                                <img className="product-video-thumb" src={require("../images/3-img-article-2.png")} alt=""/> 
                                <span className="video-title">Lorem ipsum dolor sit amet</span>
                                </li>
                    
                             <li>
                                    <img className="product-video-thumb" src={require("../images/3-img-article-3.png")} alt=""/> 
                                <span className="video-title">Lorem ipsum dolor sit amet</span>
                                </li>        
                                </ul> 
                </div>
            </div>

            <section>
                <div className="middle-desc">
                <span >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
            </div>
            </section>            
</section>
    </div>
)
}

export default ProductDesc

