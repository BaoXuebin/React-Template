import React, { Component } from 'react';
import { Layout, Icon, Col, Row, Menu, Dropdown } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import '../styles/LayoutWrapper.css';
import LayoutMenu from './LayoutMenu';
import Breadcrumb from '../../components/common/Breadcrumb';
import { toggleSliderStatus } from '../../redux/actions/CommonAction';
import Config from '../../config/Config';
import { reload } from '../../api/Req';

const { Header, Sider, Content, Footer } = Layout;

class LayoutWrapper extends Component {
    toggle = () => {
        this.props.toggleSliderStatus();
    }

    handleLogout = () => {
        reload();
    };

    render() {
        const { user, collapsed } = this.props;
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
                <Layout className="layout" style={{ marginLeft: this.props.collapsed ? 80 : 200, minHeight: '100vh' }}>
                    <Header className="header">
                        <Row>
                            <Col span={12}>
                                <Icon
                                    className="trigger"
                                    type={collapsed ? 'menu-unfold' : 'menu-fold'}
                                    onClick={this.toggle}
                                />
                                <span style={{ fontSize: '16px', fontWeight: 'bolder' }}>{Config.title}</span>
                            </Col>
                            <Col span={12} style={{ textAlign: 'right', paddingRight: '2rem' }}>
                                {user &&
                                    <Dropdown overlay={
                                        <Menu>
                                            <Menu.Item onClick={this.handleLogout}>
                                                退出登录
                                            </Menu.Item>
                                        </Menu>
                                    }>
                                        <span style={{ cursor: "pointer" }}>
                                            {user.userName} <Icon type="down" />
                                        </span>
                                    </Dropdown>
                                }
                            </Col>
                        </Row>
                    </Header>
                    <div style={{ margin: '12px 16px', padding: 8 }}>
                        <Breadcrumb />
                    </div>
                    <Content className="content">
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
    collapsed: state.common.collapsed,
    user: state.common.user
});

const mapDispatchToProps = dispatch => ({
    toggleSliderStatus: bindActionCreators(toggleSliderStatus, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(LayoutWrapper);