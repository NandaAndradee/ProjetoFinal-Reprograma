import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const Form = () => {
    return (
        <div className="box">
            <div>
                <h3 className="title-form">Quer saber mais informações ??</h3>
                <p className="texto-form">Registre o seu email e em breve entraremos em contato!</p>
            </div>
            <form className="form">
                <label for="nome">Nome:</label>
                <input id="nome" type="text" />
                <label for="email">E-mail:</label>
                <input id="email" type="type" />
                <label for="telefone">Telefone:</label>
                <input id="telefone" type="type" />
                <textarea placeholder="Digite aqui seu comentário."></textarea>
                <button id="botao">Enviar</button>
            </form>
        </div>
    )
}

export default Form
