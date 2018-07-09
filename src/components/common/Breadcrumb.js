import React from 'react';
import { connect } from 'react-redux';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const pathMap = {
    'module1': '模块一',
    'module2': '模块二',
    'module3': '模块三',
    'sub1': '子模块一',
    'sub2': '子模块二',
    'sub3': '子模块三'
};

const itemRender = (route, params, routes, paths) => {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? <span>{route.breadcrumbName}</span> : <Link to={`/${paths.join('/')}`}>{route.breadcrumbName}</Link>;
};

const mapStateToProps = state => ({
    path: state.common.path
});

export default connect(mapStateToProps, null)(({ path }) => {
    const paths = path.split('/').filter(s => s);
    const routes = paths.map(p => ({ path: p, breadcrumbName: pathMap[p] || p }));
    return (
        <Breadcrumb itemRender={itemRender} routes={routes}/>
    );
}); 

