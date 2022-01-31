import { Routes, Route} from "react-router";

// Pages
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Perfil from "../pages/Perfil";
import Error from '../pages/Error';

//Rotas
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

export default function Rotas(){
    return(
        <Routes>
            <Route path='/home' element={
                <PrivateRoutes>
                    <Home/>
                </PrivateRoutes>
            }/>
            <Route path='/perfil' element={
                <PrivateRoutes>
                    <Perfil/>
                </PrivateRoutes>
            }/>
            <Route path='/' element={
                <PublicRoutes>
                    <SignIn/>
                </PublicRoutes>
            }/>
            <Route path='/signup' element={
                <PublicRoutes>
                    <SignUp/>
                </PublicRoutes>
            }/>
            <Route path='*' element={<Error/>}/>
        </Routes>
    )
}