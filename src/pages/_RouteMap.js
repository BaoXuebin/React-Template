import React from 'react';
import { Route } from "react-router-dom";
import Loadable from 'react-loadable';

import Loader from '../components/common/Loader';

const Module1 = Loadable({
    loader: () => import('./Module1'),
    loading: Loader
});
const Sub1 = Loadable({
    loader: () => import('./Module2/Sub1'),
    loading: Loader
});
const Sub2 = Loadable({
    loader: () => import('./Module2/Sub2'),
    loading: Loader
});
const Sub3 = Loadable({
    loader: () => import('./Module2/Sub3'),
    loading: Loader
});
const Module3 = Loadable({
    loader: () => import('./Module3'),
    loading: Loader
});

const RouteMap = () => (
    <React.Fragment>
        <Route exact path="/" component={Module1} />
        <Route path="/module1" component={Module1} />
        <Route path="/module2/sub1" component={Sub1} />
        <Route path="/module2/sub2" component={Sub2} />
        <Route path="/module2/sub3" component={Sub3} />
        <Route path="/module3" component={Module3} />
    </React.Fragment>
);

export default RouteMap;
