// Struture
import { Switch } from "react-router";
import Route from './Route';

// Pages
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Error from '../pages/Error';


export default function Routes(){
    return(
        <Switch>
            <Route exact path='/' component={SignIn}/>
            <Route exact path='/signup' component={SignUp}/>
            <Route exact path='/home' component={Home} isPrivate/>
            <Route exact path='*' component={Error}/>
        </Switch>
    )
}