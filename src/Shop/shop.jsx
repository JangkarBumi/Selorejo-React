import React from 'react';
import './shop.css'
import Navbar from '../components/Navbar/navbar'
import Footer from "../components/Footer/Footer.jsx";
import Featured from "../components/Featured/featured"

const Shop = () => {
    return ( 
        <div>
         <Navbar />
         <Featured />
         <Footer />
        </div>
     );
}
 
export default Shop;