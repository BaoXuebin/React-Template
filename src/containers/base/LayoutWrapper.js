import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import '../styles/LayoutWrapper.css';
import LayoutMenu from './LayoutMenu';
import Breadcrumb from '../../components/common/Breadcrumb';
import { toggleSliderStatus } from '../../redux/actions/CommonAction';
import Config from '../../config/Config';

const { Header, Sider, Content, Footer } = Layout;

class LayoutWrapper extends Component {
    toggle = () => {
        this.props.toggleSliderStatus();
    }

    render() {
        return (
            <Layout id="layout-container">
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.props.collapsed}
                    style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, zIndex: 100 }}
                >
                    <div className="logo" />
                    <LayoutMenu collapsed={this.props.collapsed} />
                </Sider>
                <Layout style={{ marginLeft: this.props.collapsed ? 80 : 200, minHeight: '100vh' }}>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                        <span style={{ fontSize: '16px', fontWeight: 'bolder' }}>{Config.title}</span>
                    </Header>
                    <div style={{ margin: '12px 16px', padding: 8 }}>
                        <Breadcrumb />
                    </div>
                    <Content style={{ margin: '0 16px 24px 16px', padding: '0 24px', minHeight: 280 }}>
                        {this.props.children}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        {Config.copyright}
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

const mapStateToProps = state => ({
    collapsed: state.common.collapsed
});

const mapDispatchToProps = dispatch => ({
    toggleSliderStatus: bindActionCreators(toggleSliderStatus, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(LayoutWrapper);