import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Error404 from './views/Error404';
import {routes} from './Utils/routeUtils.js'

export default () => {
    return (
        <Switch>
            {routes.map(route=>
                <Route key={route.name} path={route.path} exact component={route.component}></Route>
            )}
           
            <Route path='/Erro404' exact component={Error404}></Route>
            <Redirect path='/home' to='/'/>
            <Redirect path='/Dashboard' to='/'/>
            <Redirect path='*' to='/Erro404'/>
        </Switch>
    );
}