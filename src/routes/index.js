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
            <Route element={<PrivateRoutes/>}>
                <Route path='/home' element={<Home/>}/>
                <Route path='/perfil' element={<Perfil/>}/>
            </Route>
            <Route element={<PublicRoutes/>}>
                <Route path='/' element={<SignIn/>}/>
                <Route path='/signup' element={<SignUp/>}/>
            </Route>
            <Route path='*' element={<Error/>}/>
        </Routes>
    )
}