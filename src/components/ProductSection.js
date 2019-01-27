import React from "react"

function ProductSection () {
    return (
        <div>
<section className="product-section">
<ul>
    <li><img className="thumbnail" src={require("../images/group5.png")} alt=""/></li>
    <li><img className="thumbnail" src={require("../images/group5.png")} alt=""/></li>
    <li><img className="thumbnail" src={require("../images/group5.png")} alt=""/></li>
    <li><img className="thumbnail" src={require("../images/group5.png")} alt=""/></li>
    <li><img className="thumbnail" src={require("../images/group5.png")} alt=""/></li>
</ul>

<img className="main-product-img" src={require("../images/product-img.png")} alt=""/>

<div className="desc-text">
    <span className="product-title">The Sideswept Dhoti + Bottom Line Grey (Silk)</span>
    <span className="product-price">SGD 139.90 </span>
    <img className="top-rating" src="./images/Rating.png" alt=""/>
    <span className="product-desc-name">Description</span>
    <span className="desc-content">Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere from South Asia to the Horn of Africa and southern Arabian pen… </span>
    <span className="see-more">SEE MORE</span>
    <div className="key-value">
    <ul>
        <hr/>
        <li>Artisan Employment <span className="value">54 jobs</span></li>
        <hr/>
        <li>Partnership <span className="value">Randall Armstrong</span></li>
        <hr/>
        <li>In Collab <span className="value">Augusta Mendoza</span></li>
        <hr/>
    </ul>
    <p>SIZES</p>
            <div className="select-size">
            <p className="size-box">1</p>
            <p className="size-box">2</p>
            <p className="size-box">3</p>
            <p className="size-box">4</p>
            <p className="size-guide">Size Guidelines</p>
        </div>
        <p>Model is a US Size 2-4, wears Matter Size 1. 175 cm tall.</p>

    <div className="expand accordion">Features</div>
    <div className="panel">
        <ul>
            <li>Gently curved waistband</li>
            <li>Long self fabric waist belt</li>
            <li>Seamless side profile</li>
            <li>Back welt pocket with button</li>        
        </ul>
    </div>

    <div className="expand accordion">Fabric Care</div>
    <div className="panel">
            <p>Fabric Notes</p>
            <p>Hand block printed with azo-free dyes. 90% Cotton 10% linen.</p>
            <p>Care Instructions</p>
            <p>Keep this garment separate in the first few washes to prevent colour runs. When washed garment runs clear, you can throw it into the machine with other like-coloured clothing. Always use delicate machine wash with cold water, or handwash cold for best results. Do not tumble dry. Line dry inside out. Iron inside out using a low-temperature setting. </p>
        </div>
</div>
</div>

<div className="description">

</div>

</section>
        </div>
    )
}

export default ProductSection