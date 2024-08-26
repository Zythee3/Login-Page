import React, { useState , useEffect } from 'react'
import axios from 'axios'

const TelaLogin = () => {
  const [usuariosList, setUsuariosList] = useState()

    useEffect(() => {
        const fetchUsuario = async () => {
            const {data:Usuario} = await axios.get("http://localhost:3000/")
            setUsuariosList(Usuario)
            console.log(usuariosList)
        }
        
        fetchUsuario();
    }, []);
    
  
    return (
    <div className="DivPai">
        <div className="DivCadastrar">

        </div>
        
        <div className="DivExibirUsuarios">
            <h1>Lista dos Usuarios cadastrados</h1>
            {Array.isArray(usuariosList) && usuariosList.map((usuarioAtual, index) => (
          <p key={index}>{index + 1} - {usuarioAtual.name}</p>
        ))}

        </div>
    </div>
  )
}

export default TelaLogin