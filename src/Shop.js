import React from "react"
import Promo from "./components/Promo"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Filter from "./components/Filter"
import FeaturedShop from "./components/FeaturedShop"
import Footer from "./components/Footer/Footer"

function Shop () {
    return (
        <div>
            <Promo/>
            <Navbar/>
            <Hero />
            <Filter />
            <FeaturedShop />
            <Footer />
        </div>
    )
}

export default Shop