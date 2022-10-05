import React, {  useState, useContext } from 'react';
import Header from "../../components/Header";
import Title from "../../components/Title";
import { IoPersonOutline, IoChevronDownSharp } from "react-icons/io5";
import './user.css';
import api from '../../services/api';
import { toast } from "react-toastify";
import { AuthContext } from '../../contexts/auth';

function UserAdd(){
    const { user } = useContext(AuthContext);

    const [name, setName] = useState();
    const [lastname, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [access_level, setAccess_Level] = useState();
    const [loadingAuth, setLoadingAuth] = useState(false);

    async function handleUserSave(e){
        setLoadingAuth(true);
        e.preventDefault();
        const params = { 
            name: name,
            lastname: lastname,
            email: email,
            password: password,
            access_level: access_level
        };



        await api.post('/users', params, { 
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${user["token"]}`
            }
            
        })
        .then((response) => {
            setLoadingAuth(false);
            setName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setAccess_Level('');
            
            toast.success('Cadastrado com Sucesso!');
            
        }).catch((error)=>{
            setLoadingAuth(false);
            console.log(error);
        })


    }
    

    return(
        <div className="main-center">
            <Header />
            <div className="content">
                <Title name="Adicionar Usuário">
                    <IoPersonOutline color="#111111" size={20}/>
                </Title>

                <div className="container">
                    <form className="form" onSubmit={handleUserSave}>
                        
                        <div className="form-group-2">
                            <div className="grid-col-2">
                                <div className="s-col-2">
                                    <label for="name">Nome</label>
                                    <input type="text" name="name" id="name" 
                                            value={name}
                                            onChange={(e)=>setName(e.target.value)} />
                                </div>
                                <div className="s-col-2">
                                    <label for="lastname">Sobrenome</label>
                                    <input type="text" name="lastname" id="lastname" 
                                            value={lastname}
                                            onChange={(e)=>setLastName(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <div className="form-group-2">
                            <div className="grid-col-2">
                                <div className="s-col-2">
                                    <label for="email">E-Mail</label>
                                    <input type="text" name="email" id="email" 
                                            value={email} 
                                            onChange={(e)=>setEmail(e.target.value)} />
                                </div>

                                <div className="s-col-2">
                                    <label for="password">Senha</label>
                                    <input type="password" name="password" id="password" 
                                            value={password}
                                            onChange={(e)=>setPassword(e.target.value)}/>
                                </div>

                            </div>
                        </div>

                        <div className="form-group-2">
                            <div className="row">
                                <div className="s-col-2">
                                    <label for="access_level">Nível de Acesso</label>
                                    <select name="access_level" id="access_level" 
                                                    value={access_level}
                                                    onChange={(e)=>setAccess_Level(e.target.value)}>
                                        
                                        <option value="0"></option>
                                        <option value="1">Administrador</option>
                                        <option value="2">Usuário</option>
                                    </select>

                                    <IoChevronDownSharp color="#021732" size={20} />
                                </div>
                            </div>
                        </div>


                        <button>{loadingAuth ? 'Carregando...' : 'Cadastrar'}</button>



                    </form>
                </div>
            </div>
        </div>
    );
}

export default UserAdd;