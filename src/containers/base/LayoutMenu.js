import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Menu } from 'antd';
import { connect } from 'react-redux';
import MenuData from '../../config/Menu';

const SubMenu = Menu.SubMenu;
const keyLinkMap = [];
MenuData.forEach((item) => {
    if (item.subMenu) {
        item.subMenu.forEach((i) => {
            keyLinkMap.push({ key: i.key, link: i.link });
        });
    } else {
        keyLinkMap.push({ key: item.key, link: item.link });
    }
});

class LayoutMenu extends Component {
    _html = MenuData.map((item) => {
        const { key, icon, content } = item;
        if (item.subMenu) { // 有子菜单
            return (
                <SubMenu
                    key={key}
                    title={<span><Icon type={icon} /><span>{content}</span></span>}
                >
                    { 
                        item.subMenu.map(item => {
                            if (item.link) {
                                return (
                                    <Menu.Item key={item.key}><Link key={item.link} to={item.link}>{item.content}</Link></Menu.Item>
                                );
                            }
                            return (<Menu.Item key={item.key}>{item.content}</Menu.Item>);
                        })
                     }
                </SubMenu>
            );
        }
        return (
            <Menu.Item key={key}>
                {
                    item.link ?
                    <Link to={item.link}>
                        <Icon type={icon} />
                        <span>{content}</span>
                    </Link> :
                    [
                        <Icon key={icon} type={icon} />,
                        <span key={content}>{content}</span>
                    ]
                }
            </Menu.Item>
        );
    });

    render() {
        let defaultKey;
        const filterKeys = keyLinkMap.filter(kl => this.props.path.indexOf(kl.link) > -1);
        if (filterKeys && filterKeys.length > 0) {
            defaultKey = filterKeys[0].key;
        }
        return (
            <Menu theme="dark" mode="inline" selectedKeys={[defaultKey]}>
                {this._html}
            </Menu>
        );
    }
}

const mapStateToProps = state => ({
    path: state.common.path
});

export default connect(mapStateToProps)(LayoutMenu);
