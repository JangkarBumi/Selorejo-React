import React from "react"
import Promo from "./components/Promo"
import Navbar from "./components/Navbar"
import Path from "./components/Path"
import Footer from "./components/Footer"
import ProductSection from "./components/ProductSection"
import ProductDesc from "./components/ProductDesc"
import AsSeenIg  from "./components/seenIG"
import Review from "./components/Review"
import ProductShop from "./components/ProductShop"

function Product () {
    return (
        <div>
<Promo/>
<Navbar />
<Path />
<ProductSection />
<ProductDesc />
<AsSeenIg  />
<Review />
<ProductShop />
<Footer />

        </div>
    )
}

export default Product