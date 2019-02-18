import React from 'react';

import './shopnow.css'

const productsData = [
    {
        id:1,
      title: "Sarin Mathews Womens Off The Shoulder Short Sleeve High Low Cocktail Skater Dress",
      price: 25.99,
      photo: "https://cdn.tobi.com/img/scheduled/image/20190204/20190204_hp_m_02.jpg",
      url : "http://127.0.0.1:5500/product.html"
    },
    {
        id:2,
        title: "MISSMAY Women's Vintage Floral Lace V-Neck Cocktail Formal Swing Dress",
        price: 39.99,
        photo: "https://cdn.tobi.com/img/scheduled/image/20190204/20190204_hp_m_02.jpg",
        url : "http://127.0.0.1:5500/product.html"
      },
      {
        id:3,
        title: "InsNova Women's Cold Shoulder Little Cocktail Party A-line Skater Dress",
        price: 28.99,
        photo: "https://cdn.tobi.com/img/scheduled/image/20190204/20190204_hp_m_02.jpg",
         url : "http://127.0.0.1:5500/product.html"
      }
      ,
      {
        id:4,
        title: "InsNova Women's Cold Shoulder Little Cocktail Party A-line Skater Dress",
        price: 28.99,
        photo: "https://cdn.tobi.com/img/scheduled/image/20190204/20190204_hp_m_02.jpg",
      url : "http://127.0.0.1:5500/product.html"
      }
    ]

const shopList = productsData.map( product => (
    <ul key={product.id}>
             <img className="featured-img" src={product.photo} alt=""/>
         </ul>
) )


const ShopNow = () => {
    return (  
        <div>
            <h1 style={{textAlign:'center',paddingTop:'50px'}}>Shop</h1>
            <div className="product-grid">
            {shopList}
            </div>
        </div>
    );
}
 
export default ShopNow
