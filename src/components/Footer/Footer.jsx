import React from "react";

import './Footer.css'

function Footer() {
  return (
    <div>
     <ul className="container-ul">
<div className="footer-item1">
<h3>Categories</h3>
<li>About us</li>
<li>Testimonials</li>
<li>Contact</li>
<li>Journal</li>
<li>Privacy Policy</li>
</div>

<div className="footer-item2">
<h3>Partners</h3>
<li>Support</li>
<li>Shipping & Returns</li>
<li>Size Guide</li>
<li>Product Care</li>
</div>

<div className="footer-item3">
<h3>Contact us</h3>
<li>26A Pagoda St, TANGS,</li>
<li>Singapore, 058187</li>
<li> </li>
<li>+62 6221 5462</li>
</div>

<div className="footer-item4">
<h3>Subscribe to newsletter</h3>
<input className="email-input" type="text" placeholder="ENTER YOUR EMAIL"/>

</div>

<div className="footer-item4">
<button className="subs-btn">SUBSCRIBE</button>
</div>

<p style={{margin:'0 auto'}}>Copyright Matter PTE LTD 2017</p>
     </ul>
    </div>
  );
}

export default Footer;
