import React, { useContext } from 'react';
import { Navigate, Outlet} from "react-router-dom";
import { AuthContext } from "../contexts/auth";

export default function PublicRoutes(){
    const {signed } = useContext(AuthContext);
    return !signed ? <Outlet/> : <Navigate to="/home"/>
}