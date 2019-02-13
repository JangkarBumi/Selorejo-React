import React from 'react';
import Promo from './components/Promo'
import Navbar from './components/Navbar'
import Footer from './components/Footer/Footer';
import UpperArticle from './components/UpperArticle';
import LowerArticle from './components/LowerArticle';


function Articles () {
    return(
        <div>
<Promo />
<Navbar />
<UpperArticle />
<LowerArticle />
<Footer />
        </div>
    )
}

export default Articles