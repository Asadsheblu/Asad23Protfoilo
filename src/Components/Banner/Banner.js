import React from 'react';
import sheblu from "../../images/sheblu.png"
const Banner = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>

                </div>
                <div className='col-md-6'>
                    <img src={sheblu} width={300} className='img-fluid p-3'/>
                </div>

            </div>
            
        </div>
    );
};

export default Banner;