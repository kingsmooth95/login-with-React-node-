import React, { Component } from 'react';
import Route from "react-router-dom/Route";
import logo from './logo.svg';
import LoginPage from './Login-Page';
import ReactDOM from 'react-dom';
import './App.css';
import {
  Link,
  BrowserRouter as Router
} from "react-router-dom";
class App extends Component {
  state = {
    state : "ture"
  }
  setLogin = () => {
    this.state.state = "login";
    this.gotopage();
  }
  setSignup = () => {
    this.state.state = "signup";
  }
  gotopage = () => {
    
    if(this.state.state === "login"){
          return <div className="body"><LoginPage /></div>
    }
  }
  render() {
    
    return (
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to Homepage!</h2>
              <div className="navbar-header">
                <ul className="nav navbar-nav">
                  <li>
                    <button onClick={this.setLogin} class="btn btn-info"><b>Log in</b></button>
                  </li>
                  <li>
                    <button onClick={this.setSignup} class="btn btn-info"><b>Sign Up</b></button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
    );
  }

}

export default App;
// ReactDOM.render(
//   <LoginPage />,
//   document.getElementById('body')
// );

