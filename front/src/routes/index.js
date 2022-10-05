import { Switch } from 'react-router-dom';
import Route from './Route'

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import User from '../pages/User/index';
import UserAdd from '../pages/User/add';
import UserDel from '../pages/User/del';

export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={SignIn}/>            
            <Route exact path="/signup" component={SignUp}/>

            <Route exact path="/dashboard" component={Dashboard} isPrivate/>
            <Route exact path="/user/add" component={UserAdd} isPrivate/>
            <Route exact path="/user/edit/:id" component={User} isPrivate/>
            <Route exact path="/user/del/:id" component={UserDel} isPrivate/>
         
        </Switch>
    )
}