import React, { Component } from 'react';
import './login.scss';
import { Form, Input, Button, message } from 'antd';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { loginAction } from './actionCreate';
import axios from 'axios';
import '../../mock/mock';
import { bindActionCreators } from 'redux';
import { request } from '../http/api';

//页面布局
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    // componentDidMount(){
    //     console.log('+++++++++++++');
    //     request('login.php',{},'GET').then((res)=>{
    //         console.log(res)
    //     })
    // }
    //查询登陆
    login = (username, password) => {
        request('login.php', {type:'login',username:username,password:password}, 'POST').then((res) => {
            console.log(res);
            if(res === true){
                this.props.history.push('/');
                this.props.loginAction(username);
            }else{
                message.error('密码或用户名错误', 2)
            }
        })
    }

    //提交失败
    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    //模拟接口
    submit = (values) => {
        this.login(values.username,values.password);

    }
    render() {
        return (
            <div className="login">
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.submit}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input placeholder="用户名：admin" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password placeholder="密码：123" />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Link to='/' className="back">暂不登陆</Link>
                    </Form.Item>

                </Form>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        loginAction: bindActionCreators(loginAction, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Login);