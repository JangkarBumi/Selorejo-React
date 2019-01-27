import React from 'react';

function Accordion () {
    return (
        <div>
           <h1 className="accordion">Apparels</h1>
           <div className="panel">
            <ul>
                <li className="accordion">PANTS</li>
                <div className="panel">
                <ul>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                </ul>
            </div>
                <li className="accordion">JUMPSUITS</li>
                <div className="panel">
                <ul>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                </ul>
            </div>
            <li className="accordion">SHORTS</li>
            <div className="panel">
            <ul>
                <li>A</li>
                <li>B</li>
                <li>C</li>
            </ul>
        </div>
        <li className="accordion">TOPS</li>
        <div className="panel">
        <ul>
            <li>A</li>
            <li>B</li>
            <li>C</li>
        </ul>
        </div> 
            </ul> 
            <h1 className="accordion">Accessories</h1>
            <div className="panel">
                    <ul>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                    </ul>
            </div>
            <h1 className="accordion">Houseware</h1>
            <div className="panel">
                    <ul>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                    </ul>
            </div>
            <h1 className="accordion">Others</h1>
            <div className="panel">
                    <ul>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                    </ul>
            </div>
            <h1 className="accordion">Techniques</h1>
            <div className="panel">
                    <ul>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                    </ul>
            </div>
            <h1 className="accordion">Styles</h1>
            <div className="panel">
                <p className="accordion">BOLD</p>
                <div className="panel">
                <ul>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                    </ul>
                </div>
                <p className="accordion">MONOCHROME</p>
                <div className="panel">
                        <ul>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                            </ul>
                        </div>
                <p className="accordion">NEUTRALS</p>
                <div className="panel">
                        <ul>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                            </ul>
                        </div>
                    
            </div>
            <p>SIZES</p>
            <div className="select-size">
            <p className="size-box">1</p>
            <p className="size-box">2</p>
            <p className="size-box">3</p>
            <p className="size-box">4</p>
        </div>
        <p>see our Sizing Guide</p>
        </div>
   
        </div>
    )
}

export default Accordion