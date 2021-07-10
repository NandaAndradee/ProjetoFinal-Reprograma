import React from 'react'
import ImgRecife from '../../assets/recife.jpg'
import ImgRio from '../../assets/riodejaneiro.jpg'
import ImgNovaYork from '../../assets/newYork2.jpg'


import './styles.css'

const Card = () => {   
    return(
        <div className='card-um'> 
            <article className="article">
                <div className="img-box">
                    <img src={ImgRecife} alt="Imagem da cidade de Recife" />
                </div>
                <div>
                    <h1 className="titulo-card"><a className="title-a" href="https://drive.google.com/file/d/1waK33gg4jLY23AN_DbLW84tHrhc_FvvC/view?usp=sharing">Recife-PE</a></h1>
                    <p className="texto">
                        Recife, conhecida como a Veneza brasileira. Com lindas praias, custo baixo e muita história registrada na cidade. Recife é um destino completo para quem gosta de cultura, praia e diversão.
                    </p>
                    <button className="botao" type="button">❤️</button>
                </div>
            </article>
            <article className="article">
                <div className="img-box">
                    <img src={ImgNovaYork} alt="Imagem da cidade de Nova York" />
                </div>
                <div>
                    <h1 className="titulo-card"><a className="title-a" href="https://drive.google.com/file/d/1O-oTOkf0oGIZYvslskifDNDfmQRyRqNO/view?usp=sharing">Nova York</a></h1>
                    <p className="texto">
                        Nova York, a Big Apple. A cidade que nunca dorme, cenário de famosas séries e filmes. Quem não sonha em conhecer a Estátua da Liberdade ou a avenida mais luminosa e agitada como a Time Square?
                    </p>
                    <button className="botao" type="button" >❤️</button>
                </div>
            </article>
            <article className="article">
                <div className="img-box">
                    <img src={ImgRio} alt="Imagem da cidade do Rio de Janeiro" />
                </div>
                <div>
                    <h1 className="titulo-card"><a className="title-a" href="https://drive.google.com/file/d/1JF7iIiz1buTibYqypDz98CNoLNz8NPnC/view?usp=sharing">Rio de Janeiro-RJ</a></h1>
                    <p className="texto">
                        Rio de Janeiro, a cidade maravilhosa. Com lugares incríveis para conhecer, a cidade possui praias famosas. E a noite carioca é imperdível. Verdadeiramente a cidade toda é um cartão postal.
                    </p>
                    <button className="botao" type="button" >❤️</button>
                </div>
            </article>
            
        </div>
        
    )
}

export default Card