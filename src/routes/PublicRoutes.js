import React, { useContext } from 'react';
import { Navigate, Outlet} from "react-router-dom";
import { AuthContext } from "../contexts/auth";


export default function PublicRoutes(){

    const {signed, loading} = useContext(AuthContext);

    if(loading){
        return(
            <div>
                <h1>Carregando...</h1>
            </div>
        )
    }
    
    return !signed ? <Outlet/> : <Navigate to="/dashboard"/>

}