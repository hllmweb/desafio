import { useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import './signup.css';

function SignUp() {
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loadingAuth, setLoadingAuth] = useState(false);
 


    async function handleSubmit(e) {
      e.preventDefault();
      

      if(name !== '' && lastname !== '' && email !== '' && password !== ''){
    
        await api.post('/users',{
          name,
          lastname,
          email,
          password,
          access_level: 2
        })
        .then(async (response) => {
            
            if(response.data !== false){

                setLoadingAuth(false);
                toast.success('Cadastro efetuado com Sucesso!');
                setName('');
                setLastName('');
                setEmail('');
                setPassword('');

          
            }else{
                toast.error('Ops, algo deu errado!');
                setLoadingAuth(false);
            }


        })
        .catch((error)=>{
            console.log(error);
            toast.error('Ops, algo deu errado!');
            setLoadingAuth(false);
        })



      }

    }

    return (
      <div className="container-center">
        <div className="login">
          <div className="logo-area"></div>
            
            <div className="flex">
                <div className="wrapper">
                    <img src={process.env.PUBLIC_URL+`/images/logo.png`} />
                    <span className="slogan-title">Gerenciamento de <strong>Usuários</strong></span>
                </div>

                <div className="wrapper">
                    <form onSubmit={handleSubmit}>
                        <div className="flex space">
                            <h2>Cadastre-se</h2>
                            <Link to="">Voltar</Link>
                        </div>


                        <div className="form-group">
                            <div className="col-2">
                                <input type="text" placeholder="Nome" 
                                          value={name} 
                                          onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="col-2">
                                <input type="text" placeholder="Sobrenome" 
                                          value={lastname}
                                          onChange={(e) => setLastName(e.target.value)}/>
                            </div>
                        </div>

                        <input type="text" placeholder="E-Mail" 
                                          value={email} 
                                          onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" placeholder="Senha" 
                                          value={password} 
                                          onChange={(e) => setPassword(e.target.value)}/>


                        <button type="submit">{loadingAuth ? 'Carregando...' : 'Cadastrar'}</button>
                        
                    </form>
                </div>
            </div>




        </div>
      </div>
    );
  }
  
  export default SignUp;