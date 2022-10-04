import { useState, useContext } from 'react';

import { AuthContext } from '../../contexts/auth'
import { Link } from 'react-router-dom';
import './signin.css';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn, loadingAuth } = useContext(AuthContext);


    const handleSubmit = (e) => {
      e.preventDefault();
      
      if(email !== '' && password !== ''){
        signIn(email, password);
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
                        <h2>Login</h2>
                        <input type="text" placeholder="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <button type="submit">{loadingAuth ? 'Carregando...' : 'Acessar'}</button>
                        <Link to="/signup">Cadastre-se</Link>
                    </form>
                </div>
            </div>




        </div>
      </div>
    );
  }
  
  export default SignIn;