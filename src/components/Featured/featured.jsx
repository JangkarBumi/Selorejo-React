import React, { Component } from 'react';
import './featured.css'

const productsData = [
    {
        id:1,
      title: "Sarin Mathews Womens Off The Shoulder Short Sleeve High Low Cocktail Skater Dress",
      price: 25.99,
      photo: "https://raw.githubusercontent.com/JangkarBumi/Selorejo/master/images/Product_Card.png",
      url : "http://127.0.0.1:5500/product.html"
    },
    {
        id:2,
        title: "MISSMAY Women's Vintage Floral Lace V-Neck Cocktail Formal Swing Dress",
        price: 39.99,
        photo: "https://raw.githubusercontent.com/JangkarBumi/Selorejo/master/images/Product_Card.png",
        url : "http://127.0.0.1:5500/product.html"
      },
      {
        id:3,
        title: "InsNova Women's Cold Shoulder Little Cocktail Party A-line Skater Dress",
        price: 28.99,
        photo: "https://raw.githubusercontent.com/JangkarBumi/Selorejo/master/images/Product_Card.png",
         url : "http://127.0.0.1:5500/product.html"
      }
      ,
      {
        id:4,
        title: "InsNova Women's Cold Shoulder Little Cocktail Party A-line Skater Dress",
        price: 28.99,
        photo: "https://raw.githubusercontent.com/JangkarBumi/Selorejo/master/images/Product_Card.png",
      url : "http://127.0.0.1:5500/product.html"
      }
      ,
      {
        id:5,
        title: "InsNova Women's Cold Shoulder Little Cocktail Party A-line Skater Dress",
        price: 28.99,
        photo: "https://raw.githubusercontent.com/JangkarBumi/Selorejo/master/images/Product_Card.png",
        url : "http://127.0.0.1:5500/product.html"
      }
      ,
      {
        id:6,
        title: "InsNova Women's Cold Shoulder Little Cocktail Party A-line Skater Dress",
        price: 28.99,
        photo: "https://raw.githubusercontent.com/JangkarBumi/Selorejo/master/images/Product_Card.png",
        url : "http://127.0.0.1:5500/product.html"
      }
      ,
      {
        id:7,
        title: "InsNova Women's Cold Shoulder Little Cocktail Party A-line Skater Dress",
        price: 28.99,
        photo: "https://raw.githubusercontent.com/JangkarBumi/Selorejo/master/images/Product_Card.png",
        url : "http://127.0.0.1:5500/product.html"
      }
      ,
      {
        id:8,
        title: "InsNova Women's Cold Shoulder Little Cocktail Party A-line Skater Dress",
        price: 28.99,
        photo: "https://raw.githubusercontent.com/JangkarBumi/Selorejo/master/images/Product_Card.png",
        url : "http://127.0.0.1:5500/product.html"
      }
      ,
      {
        id:9,
        title: "InsNova Women's Cold Shoulder Little Cocktail Party A-line Skater Dress",
        price: 28.99,
        photo: "https://raw.githubusercontent.com/JangkarBumi/Selorejo/master/images/Product_Card.png",
        url : "http://127.0.0.1:5500/product.html"
      }
      ,
      {
        id:10,
        title: "InsNova Women's Cold Shoulder Little Cocktail Party A-line Skater Dress",
        price: 28.99,
        photo: "https://raw.githubusercontent.com/JangkarBumi/Selorejo/master/images/Product_Card.png",
        url : "http://127.0.0.1:5500/product.html"
      }
      ,
      {
        id:11,
        title: "InsNova Women's Cold Shoulder Little Cocktail Party A-line Skater Dress",
        price: 28.99,
        photo: "https://raw.githubusercontent.com/JangkarBumi/Selorejo/master/images/Product_Card.png",
        url : "http://127.0.0.1:5500/product.html"
      }
      ,
      {
        id:12,
        title: "InsNova Women's Cold Shoulder Little Cocktail Party A-line Skater Dress",
        price: 28.99,
        photo: "https://raw.githubusercontent.com/JangkarBumi/Selorejo/master/images/Product_Card.png",
        url : "http://127.0.0.1:5500/product.html"
      }
  ];
  


class Featured extends Component {
    state = {  }
    render() { 
        const productList = productsData.map(product =>
            (
         <ul key={product.id}>
             <li> <a href={product.url}>{product.title}</a></li>
             <li>{product.price}</li>
             <img className="featured-img" src={product.photo} alt=""/>
         </ul>
             ))

                                return (  
            <div >
            <h1 className="featured-title">Featured</h1>
            <div className="product-grid">
            {productList}
            </div>

            </div>
           
        );
    }
}
 
export default Featured;