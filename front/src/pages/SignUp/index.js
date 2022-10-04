import { useState, useContext } from 'react';

import { AuthContext } from '../../contexts/auth'
import { Link } from 'react-router-dom';
import './signup.css';

function SignUp() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const { signIn, loadingAuth } = useContext(AuthContext);


    const handleSubmit = (e) => {
      e.preventDefault();
      
      if(login !== '' && password !== ''){
        signIn(login, password);
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
                        <div class="flex space">
                            <h2>Cadastre-se</h2>
                            <Link to="">Voltar</Link>
                        </div>


                        <div className="form-group">
                            <div className="col-2">
                                <input type="text" placeholder="Nome" />
                            </div>
                            <div className="col-2">
                                <input type="text" placeholder="Sobrenome" />
                            </div>
                        </div>

                        <input type="text" placeholder="E-Mail" value={login} onChange={(e) => setLogin(e.target.value)}/>
                        <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <button type="submit">{loadingAuth ? 'Carregando...' : 'Cadastrar'}</button>
                        
                    </form>
                </div>
            </div>




        </div>
      </div>
    );
  }
  
  export default SignUp;