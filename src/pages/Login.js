import React, { Component, Fragment } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './styles/Login.less';
import { initUser } from '../redux/actions/CommonAction';
import Config from '../config/Config';

const FormItem = Form.Item;

class NormalLoginForm extends Component {
    state = {
        loading: false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const { userName, password } = values;
                this.setState({ loading: true }, () => {
                    setTimeout(() => {
                        if (userName === 'Leo' && password === '123456') {
                            this.props.initUser({ username: 'Leo' });
                            this.props.history.push('/');
                        } else {
                            message.error('用户名或密码错误');
                        }
                        this.setState({ loading: false });
                    }, 2000);
                });
            }
        });
    }

    render() {
        const { loading } = this.state;
        const { getFieldDecorator } = this.props.form;
        return (
            <Fragment>
                <div key="login-bg" className="bg">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem className="title">
                            { Config.title }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('userName', {
                                    rules: [{ required: true, message: '请输入用户名' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Leo" autoComplete="username" />
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="123456" autoComplete="current-password" />
                                )
                            }
                        </FormItem>
                        <FormItem>
                            <a>Forgot password</a> Or <a>register now!</a>
                            <Button type="primary" htmlType="submit" loading={loading} className="login-form-button">
                                Log in
                            </Button>
                            
                        </FormItem>
                    </Form>
                </div>
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    initUser: bindActionCreators(initUser, dispatch)
});

const mapStateToProps = state => ({
    user: state.common.user
});

const WrappedNormalLoginForm = Form.create()(connect(mapStateToProps, mapDispatchToProps)(NormalLoginForm));

export default WrappedNormalLoginForm;