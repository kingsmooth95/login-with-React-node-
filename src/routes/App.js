import React, {Component} from 'react';


// import Route from "react-router-dom/Route";
import logo from '../logo.svg';
// import LoginPage from '../Login-Page';
// import ReactDOM from './react-dom';
import '../App.css';
// import 
  // {Link}
  // BrowserRouter as Router
//  from "react-router";
class App extends Component {
  // state = {
  //   state : "ture"
  // }
  // setLogin = () => {
  //   this.state.state = "login";
  //   alert('ok');
  // }
  // setSignup = () => {
  //   this.state.state = "signup";
  // }
  // gotopage = () => {
    
  //   if(this.state.state === "login"){
  //     // <React.Fragment>
  //     //   <Router>
  //         console.log(<div className="body"><LoginPage /></div>);
  //     //   </Router>
  //     // </React.Fragment>
  //   }
  // }
  render() {
    
    return (
      // <React.Fragment>
      //   <Router>
          <div className="App">
            <div className="App-header">
              <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
              <h2>Welcome to Homepage!</h2>
              <div className="navbar-header">
                <ul className="nav navbar-nav">
                  <li>
                    <a href={"/login"}><b>Log-in</b></a>
                  </li>
                  <li>
                    <a href={"/signup"}><b>Sign-Up</b></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      //   </Router>
      // </React.Fragment>
    );
  }

}

export default App;
// ReactDOM.render(
//   <LoginPage />,
//   document.getElementById('body')
// );

