import React from 'react'
import Linkedin from '../../assets/linkedin.webp'
import Youtube from '../../assets/youtube.webp'
import Instagram from '../../assets/insta.webp'
import Facebook from '../../assets/facebook.webp'

import './style.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="redes">
                <img classname="tube" src={Youtube} alt="Youtube"/>   
                <img className="in" src={Linkedin} alt="Linkedin"/>   
                <img className="insta" src={Instagram} alt="Instagram"/> 
                <img className="face" src={Facebook} alt="Facebook"/>    
            </div>
        </div>
        
    )
  
    }

export default Footer
