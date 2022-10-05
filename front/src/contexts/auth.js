import { useState, createContext, useEffect } from "react";
import api from '../services/api';
import { toast } from "react-toastify";


export const AuthContext = createContext({});


function AuthProvider({ children }){
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        function loadStorage(){
            const storageUser = localStorage.getItem('SistemaUser');
            if(storageUser){
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
    
            setLoading(false);
        }

        loadStorage();

    },[])


    //Fazendo login do usuario
    async function signIn(email, password){
        setLoadingAuth(true);

        await api.post('/sessions',{
            email: email,
            password: password
        })
        .then(async (response) => {
            console.log(response.data);
            
            if(response.data !== false){
                setUser(response.data);
                storageUser(response.data);
                setLoadingAuth(false);
                toast.success('Bem vindo a plataforma!');
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

    async function signUp(name, lastname, email, password, access_level=2){
        setLoading(true)

        await api.post('/users',{
            name,
            lastname,
            email,
            password,
            access_level
        })
        .then(async (response) => {
            
            if(response.data !== false){
                setLoadingAuth(false);
                toast.success('Cadastro efetuado com Sucesso!');
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


    function storageUser(data){
        localStorage.setItem('SistemaUser', JSON.stringify(data));
    }


    function signOut(){
        localStorage.removeItem('SistemaUser');
        setUser(null);
    }


    return(
        <AuthContext.Provider 
        value={{ signed: !!user, 
                user, 
                loading, 
                signIn, 
                signUp,
                signOut,
                loadingAuth,
                setUser,
                storageUser}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;