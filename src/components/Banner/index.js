import React from 'react'
import Img from '../../assets/banner.svg'
import './style.css'

const Banner = () => {
    return(
        <div className="main">
            <div>
                <h1>RoteirosTrip</h1>
                <p>Os melhores roteiros preparados pra você.</p>
                <p> Simbora conhecer o mundo ?</p>
            </div>

            <img src={Img} alt="Ilustração da página" />
        </div>
            
    )
}

export default Banner