import React, { useState } from 'react'
import axios from 'axios'
import './TelaRegistrar.css'
import CheckMark from '../components/checkmark'


function SistemaLogin() {
    // Cria as variaveis que vão ser usadas para o cadastramento 
    const [name, setName] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState("Enviar")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailInvalido, setEmailInvalido] = useState(false)
    const [userInvalido, setUserInvalido] = useState(false)
    const [dadosIncompletos, setDadosIncompletos] = useState(false)

    // funções para preencher as variaveis
    const handleNameChange = (event) =>{
        setName(event.target.value);
    }

    const handleEmailChange = (event) =>{
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) =>{
        setPassword(event.target.value);
    }

    const validaEmail = (email) =>{
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(String(email))
    }

    async function verificarUsuarioExiste(nomeUsuario) {
       
        const {data:response} = await axios.post('http://localhost:3000/verificar-usuario', {
            nomeUsuario : nomeUsuario
        })
        
        if (response == true){
            return true
        }
        return false
    }
    

    // função para adicionar os dados das variaveis em apenas uma chamado novo usuario
    const handleSubmit = async () =>{
        if(name != "" && email != "" && password != ""){
            setDadosIncompletos(false)
            
            if(validaEmail(email)){
                setEmailInvalido(false)
                
                if ( await verificarUsuarioExiste(name) == true){
                    setUserInvalido(true)
                }
                
                else {
                    
                    const newUser = {
                        name: name,
                        email: email,
                        password: password
                    };
                    
                    axios.post('http://localhost:3000/', newUser).then(response =>{
                         console.log("usuario adicionado com sucesso ", response.data);
                     })
                    
                    .catch(error =>{
                         console.error("erro ao adicionar o usuario", error);
                    });
                    
                    setIsLoggedIn(<CheckMark/>)
                }
                

            }
            else{
               
                setEmailInvalido(true)
            }
        }
        else{
            setDadosIncompletos(true)
            console.log("dados incompletos")
        }
        }
        
        
        return (
            <div className='DivPai'>
        <div className='Titulo'>
            <h2>Registrar-se</h2>
            <div className='TituloUnderline'></div>
        </div>
        <div className='DivFormulario'>
            
                <div className='DivInput'>
                    
                    <input 
                        placeholder='Nome'
                        type="text" 
                        value={name} 
                        onChange={handleNameChange} 
                        />
                    <div className='IconInput'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="white" stroke-width="1.5"><path stroke-linejoin="round" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/><circle cx="12" cy="7" r="3"/></g></svg>   
                    </div>
                </div>
                {userInvalido && (<div className='mensagemInvalido'><span>Este nome de usuário já possui cadastro!</span></div>)}
                <div className='DivInput'>
                    
                    <input
                        placeholder='Email' 
                        type="email" 
                        value={email} 
                        onChange={handleEmailChange} 
                        />
                    <div className="IconInput"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"/></svg></div>
                </div>
                {emailInvalido && (<div className="mensagemInvalido"><span>Email inválido!</span></div>)}
                
                <div className='DivInput'>
                    
                    <input
                        placeholder='Senha' 
                        type="password" 
                        value={password} 
                        onChange={handlePasswordChange} 
                        />
                        <div className="IconInput"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10zm0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3"/></svg></div>
                </div>
                {dadosIncompletos && (<div className="mensagemInvalido"><span>Preencha todos os campos de resposta!</span></div>)}
            
        </div>
                <div className='botao'>
                    <button type="button" onClick={handleSubmit}>{isLoggedIn}</button>
                    
                </div>

        
    </div>
  )
}

export default SistemaLogin