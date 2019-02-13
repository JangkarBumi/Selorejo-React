import React from 'react';
import Promo from './components/Promo'
import Nav from './components/Navbar'
import Filter from './components/Filter'
import Footer from './components/Footer/Footer'
import JournalExplore from './components/JournalExplore'

function Journal () {
    return(
        <div>
<Promo />
<Nav />
<Filter />
<JournalExplore />
<Footer />
        </div>
    )
}

export default Journal