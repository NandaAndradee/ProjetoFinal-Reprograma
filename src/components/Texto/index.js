import React from 'react'
import ImagemUm from '../../assets/banner_sobre.jpg'

import './style.css'


import './style.css'

const Texto = () => {
    return (
        <div className="texto-sobre">
            <div>
                <h3 className="titulo">Sobre nós...</h3>
                <p>Somos um site a serviço dos apaixonados por viagens.</p>
                <p>
                    Viajar é viver experiências, conhecer culturas, colecionar histórias, fotografias, caminhos e roteiros.
                </p>
                <p>
                    E nós que amamos viajar por esse brasilzão e mundão a fora, criamos o RoteirosTrip, para poder ajudar você que ama viajar, mas não sabe bem como organizar o roteiro ou por onde começar ou para aqueles que estão iniciando seus primeiros passos como viajante.
                </p>
                <p>
                    Somos um site totalmente informativo, mas também interativo com os nossos clientes, queremos a sua opnião, suas dicas e sua experiência de viajante.
                    Queremos trocar experiências e agregar o conteúdo do site com vocês.
                </p>
                <p>
                    Qual seu próximo destino? Vem conosco !!
                </p>

            </div>

            <img className="img-sobre" src={ImagemUm} alt="Imagens ilustrativa de um mapa" />
        </div>
    )
}

export default Texto