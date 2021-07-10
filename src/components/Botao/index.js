import React, {useState} from 'react'

const Botao = () => {
    const [valorAtual, setValor ] = useState(0)

    function somaCurtidas() {
        setValor(valorAtual+1)
    }
    return (
        <>
            <p>{valorAtual}</p>
            <button onClick={somaCurtidas}> ❤️ </button>
        </>
    )
}

export default Botao