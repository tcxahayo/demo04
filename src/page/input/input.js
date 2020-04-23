import React, { Component } from 'react';
import { Input, Button } from 'antd';
import "./input.scss";
import { connect } from 'react-redux';
import { valueAction, addAction } from '../list/actionCreate';
import { bindActionCreators } from 'redux';
import {request} from '../http/api';

class InputBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { value, addAction, valueAction } = this.props;
    return (
      <div className="inputBox">
        <Input placeholder="请输入待办事项" className="input" value={value} onChange={valueAction} />
        <Button type="primary" shape="round" onClick={addAction}  >确定</Button>
        {/* <Button onClick={this.demo}>ok</Button> */}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //获取输入框的值
    valueAction: bindActionCreators(valueAction, dispatch),
    //确定添加
    addAction: bindActionCreators(addAction, dispatch)
  }
}

export default connect(state => state.listRecuder, mapDispatchToProps)(InputBox);