import React, { useContext } from 'react';
import { useParams, useHistory  } from "react-router-dom";
import api from '../../services/api';
import Header from "../../components/Header";
import Title from "../../components/Title";
import { IoPersonOutline } from "react-icons/io5";
import './user.css';
import { toast } from "react-toastify";
import { AuthContext } from '../../contexts/auth';


function UserDel(){
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const history = useHistory();
    

   
      

    async function handleUserDel(e){
        e.preventDefault();


       await api.get(`/users/del/${id}`)
        .then((response) => {
            console.log(response.data)
            history.push("/dashboard");
            toast.success('Deletado com Sucesso!');
            
        }).catch((error)=>{
            console.log(error);
        })

    }



    const cancelUser = () =>{
        history.push("/dashboard");
    }
    

    return(
        <div className="main-center">
            <Header />
            <div className="content">
                <Title name="Deletar Usuário">
                    <IoPersonOutline color="#111111" size={20}/>
                </Title>

                <div className="container">
                    <h4>Você tem certeza que deseja deletar # {id}?</h4>
 
                        
                    
                        <div className="form-group-2">
                            <div className="grid-col-2">
                                <div className="s-col-2">
                                    <button onClick={handleUserDel} className="del">Sim</button>
                                    <button onClick={cancelUser} className="del">Não</button>
                                </div>


                            </div>
                        </div>

                       






                </div>
            </div>
        </div>
    );
}

export default UserDel;