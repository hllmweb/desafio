import React, { useEffect, useState, useContext } from 'react';
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { IoPersonOutline, IoChevronDownSharp } from "react-icons/io5";
import './user.css';
import api from '../../services/api';
import { toast } from "react-toastify";
import { AuthContext } from '../../contexts/auth';


function User(){
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    
    const [name, setName] = useState();
    const [lastname, setLastName] = useState();
    const [email, setEmail] = useState();
    const [access_level, setAccess_Level] = useState();


    useEffect(() => {
        async function handleUserId(){
            await api.get(`/users/${id}`,{ 
                headers: {
                  'Authorization': `Bearer ${user["token"]}`
                }
            })
            .then((response) => {
                setName(response.data.name);
                setLastName(response.data.lastname);
                setEmail(response.data.email);
                setAccess_Level(response.data.access_level);
                
            })
        }

        handleUserId();

    },[id]);

    //corrigir o user
    async function handleUserSave(e){
        e.preventDefault();
        const params = { 
            name: name,
            lastname: lastname,
            email: email
        };


        await api.put(`/users`,{ 
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${user["token"]}`
            },params
        })
        .then((response) => {
            toast.success('Atualizado com Sucesso!')
        }).catch((error)=>{
            console.log(error);
        })


    }

    return(
        <div className="main-center">
            <Header />
            <div className="content">
                <Title name="Editar Usuário">
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
                                    <input type="password" name="password" id="password" readOnly disabled/>
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
                                        {access_level === 1 && <option value="1" selected>Administrador</option>}
                                        {access_level === 2 && <option value="2">Usuário</option>}

                                        <option value="1">Administrador</option>
                                        <option value="2">Usuário</option>
                                    </select>

                                    <IoChevronDownSharp color="#021732" size={20} />
                                </div>
                            </div>
                        </div>


                        <button>Atualizar</button>



                    </form>
                </div>
            </div>
        </div>
    );
}

export default User;