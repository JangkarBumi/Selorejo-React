import React from "react"


function Footer () {
    return(
        <div>

<section className="footer">
    <div className="wrapper">
        <div className="flex">
        <div className="upside">
    <h1 className="footer-title">Categories</h1>
<ul className="footer-margin">
    <li>About us</li>
    <li>Tesimonials</li>
    <li>Contact</li>
    <li>Journal</li>
    <li>Privacy Policy</li>
</ul>
</div>

<div className="upside">
<h1 className="footer-title">Partners</h1>
<ul className="footer-margin">
    <li>Support</li>
    <li>Shipping & Returns</li>
    <li>Size Guide</li>
    <li>Product Care</li>
</ul>
</div>

<div className="upside">
<h1 className="footer-title">Contact Us</h1>
<ul className="footer-margin">
    <li>S6A Pagoda St, TANGS,</li>
    <li>Singapore, 058187</li>
    <li className="telp">+65 6221 5462</li>
</ul>
</div>

<div className="upside">
<p className="footer-title">Subscribe to newsletter</p>

<input className="footer-margin email-input" type="text" placeholder="ENTER YOUR EMAIL"></input>
</div>

<button className="footer-subs">SUBSCRIBE</button>

</div>
</div>
</section>

<p className="center copy">Copyright Matter PTE LTD 2017</p>
        </div>
    )
}


export default Footer