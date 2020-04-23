import React,{Component} from 'react';
import './login.scss';
import { Form, Input, Button , message} from 'antd';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { loginAction } from '../../store/actionCreate';
import axios from 'axios';
import '../../mock/mock';
import {bindActionCreators} from 'redux';

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

    //提交失败
    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    //模拟接口
    submit = (values)=>{
        axios('api/user').then((res)=>{
            if(res.data.user.username === values.username && res.data.user.password === values.password){
                this.props.onFinish(values);
                this.props.history.push('/')
            }else{
                message.error('密码或用户名错误',2)
            }
        }).catch((error)=>{
            console.log(error)
        })

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
        onFinish:bindActionCreators(loginAction,dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Login);