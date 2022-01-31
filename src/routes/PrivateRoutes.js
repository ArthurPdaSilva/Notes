import React, { useContext } from 'react';
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth";

export default function PrivateRoutes({children}){
    const {signed } = useContext(AuthContext);
    return signed ? children : <Navigate to="/"/>

}