import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/teste.jpg'

import './styles.css'

const Menu = () => {
    return (
        <div>
            <ul className="menu">
                <img className="logo" src={Logo} alt="Logomarca" />
                <li>
                    <Link className="link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="link" to="/sobre">Sobre</Link>
                </li>
                <li>
                    <Link ClassName="link" to="/Roteiros">Roteiros</Link>
                </li>
                <li>
                    <Link ClassName="link" to="/Contato">Contato</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu