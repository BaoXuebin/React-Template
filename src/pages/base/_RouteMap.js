import React from 'react';
import { Route, Switch } from "react-router-dom";
import Loadable from 'react-loadable';

import Loader from '../../components/common/Loader';
import AuthRoute from '../../components/common/AuthRoute';

const Module1 = Loadable({
    loader: () => import('../auth/Module1'),
    loading: Loader
});
const Sub1 = Loadable({
    loader: () => import('../auth/Module2/Sub1'),
    loading: Loader
});
const Sub2 = Loadable({
    loader: () => import('../auth/Module2/Sub2'),
    loading: Loader
});
const Table = Loadable({
    loader: () => import('../auth/table'),
    loading: Loader
});
const Login = Loadable({
    loader: () => import('../Login'),
    loading: Loader
});
const NoFound = Loadable({
    loader: () => import('../auth/404'),
    loading: Loader
});

const RouteMap = () => (
    <React.Fragment>
        <Switch>
            <Route path="/login" component={Login} />
            <AuthRoute exact path="/" component={Module1} />
            <AuthRoute path="/module1" component={Module1} />
            <AuthRoute path="/module2/sub1" component={Sub1} />
            <AuthRoute path="/module2/sub2" component={Sub2} />
            <AuthRoute path="/table" component={Table} />
            <AuthRoute component={NoFound} />
        </Switch>
        
    </React.Fragment>
);

export default RouteMap;
