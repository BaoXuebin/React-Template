import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";

import LayoutWrapper from './containers/base/LayoutWrapper';
import RouteMap from './pages/base/_RouteMap';

const RouterApp = ({ user }) => (
    <Router>
        { user ? <LayoutWrapper><RouteMap /></LayoutWrapper> : <RouteMap /> }
    </Router>
);

const mapStateToProps = state => ({
    user: state.common.user
});

export default connect(mapStateToProps, null)(RouterApp);