import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'


function notFound () {
    return (
        <div>
            <Navbar />
            <h1>404 Not Found</h1>
            <Footer />
        </div>
    )
}

export default notFound