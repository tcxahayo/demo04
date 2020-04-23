import React, { Component } from 'react';
import './App.scss';
import InputBox from './input/input';
import ListBox from './list/list';
import { Link, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { getListAction } from '../page/list/actionCreate';
import {bindActionCreators} from 'redux';
import axios from 'axios';
import '../mock/mock';
import {request} from './http/api';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    // request('api/list','').then((res)=>{console.log(res)});
    // axios('api/list').then((res)=>{console.log(res)});
    // request('http://localhost/index.php','').then((res)=>{console.log(res)});
    // this.props.geAxios();
  }

  render() {
    const { username,list} = this.props
    return (
      <div className="App">
        <div className="content">
          <div className="title">To-Do-List
          {
              (username && (
                <span className="loginTxt">你好 {username}</span>
              )) || (!username && (
                <Link to='/login' className="loginTxt">【登陆】</Link>
              ))
            }
          </div>
            <InputBox />
            <ListBox />
          <div>
          {/* <div className="btu">
            <Link to='/inputBox' className="btu1">输入</Link>
            <Link to='/listBox' className="btu1">结果</Link>
          </div>
            <div className="btuContent">
              <Route path='/inputBox' component={InputBox} />
              <Route path='/listBox' component={ListBox} />
            </div> */}
            <div>
              {/* <ul>
                {
                  list.map((item,index)=>{
                    return (
                    <li key={index+item}>{item}</li>
                    )
                  })
                }
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//将store里面的值映射为props
const mapStateToProps = (state) => {
  return {
    username: state.username,
    list:state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    geAxios:bindActionCreators(getListAction,dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
