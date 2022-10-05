import api from '../../services/api';
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';
import Header from "../../components/Header";
import Title from "../../components/Title";
import { IoCreateOutline, IoTrashOutline, IoMenuOutline, IoAddOutline } from "react-icons/io5";
import { AuthContext } from '../../contexts/auth';

function Dashboard(){
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function handleUser(){
            await api.get('/users',{ 
                headers: {
                  'Authorization': `Bearer ${user["token"]}`
                }
            })
            .then((response) => {
                setData(response.data)
            })
        }

        handleUser();

    }, [])

    return(
        <div className="main-center">
            <Header /> 
            <div className="content">
                <div className="header-group">
                    <Title name="Lista de Usuários">
                        <IoMenuOutline color="#111111" size={20}/>
                    </Title>
                    <Link to="/user/add">Adicionar <IoAddOutline color="002D04" size={20} /> </Link>
                </div>

                <table className="table">
                    <tr>
                        <th>Nome e Sobrenome</th>
                        <th>Email</th>
                        <th>Nível de Acesso</th>
                        <th></th>
                    </tr>

                    {data.map((item, index) => {
                        return(
                            <tr key={index}>
                                <td>{item.name} {item.lastname}</td>
                                <td>{item.email}</td>
                                <td>{item.access_level == 1 && 'Administrador'}
                                    {item.access_level == 2 && 'Usuário'}
                                </td>
                                <td>
                                    <Link to={{pathname:`/user/edit/${item.id}`}}><IoCreateOutline color="#021732" size={20} /></Link>
                                    <Link to={{pathname:`/user/del/${item.id}`}}><IoTrashOutline color="#021732" size={20} /></Link>
                                </td>
                            </tr>
                        )   
                    })}

                </table>
            </div>
        </div>
    );
}

export default Dashboard;