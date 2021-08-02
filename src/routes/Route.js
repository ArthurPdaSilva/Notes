import { Route, Redirect } from "react-router";

export default function RouterWrapper({
    component: Component,
    isPrivate,
    ...rest
}){
    const signed = false;
    const loading = false;

    if(loading){
        <div>Carregando</div>
    }

    // Se ele não ta logado e tenta acessar uma página privada
    if(!signed && isPrivate){
        return <Redirect to='/'/>
    }

    // Se ele tá logado e tenta acessar uma página não privada
    if(signed && !isPrivate){
        return <Redirect to='/home'/>
    }

    return(
        <Route {...rest} render={props => (<Component {...props}/>)}/>
    )
}