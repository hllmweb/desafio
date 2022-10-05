import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import './header.css';
import { IoSearch, IoChevronDownSharp, IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';



export default function Header(){
    const { user, signOut } = useContext(AuthContext);
    
    return(
        <div className="header">
            <div className="grid">
                <div className="logo flex">
                    <Link to="/dashboard">
                        <img src={process.env.PUBLIC_URL+`/images/logo.png`} />
                        <h2>Gerenciamento de <strong>Usuários</strong></h2>
                    </Link>
                </div>

                <div className="search">
                    <div className="research">
                        {/* <input type="text" placeholder="Pesquisar..." />
                        <IoSearch color="#021732" size={20}/> */}
                    </div>

                    <div className="filter">
                        
                    </div>
                </div>
                

                <div className="user">
                    <span>Olá, <strong>{user["user"].name} {user["user"].lastname}</strong></span>
                    <Link to="#" onClick={() => signOut()}><IoClose color="#FFFFFF" size={20} /></Link>
                </div>
            </div>
        </div>
    );
}