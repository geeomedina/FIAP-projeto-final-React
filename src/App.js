import React from "react";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import { auth } from "./firebase";
import Login from "./components/Login";
import SignUp from "./components/SignUp"
import Home from "./components/Home";
import About from "./components/About";
import Routes from "./Routes";

import { LoginProvider } from "./providers/LoginProvider";

import icon_home from "./assets/icon_home.png"
import icon_about from "./assets/icon_about.png"
import icon_logout from "./assets/icon_logout.png"
import { NavBar, NavDiv, NavOptions } from "./components/styled";
import './App.css';

const App = () => {
  
  const user = window.localStorage.getItem("user");

  function logOutHandler() {
    auth.signOut();
  }

  return (
    <div className="App">
      <NavBar>
        <NavDiv id="navbarMenu">
          <NavOptions href="/" className="nav-item nav-link">
            <img className="app__icon" src={icon_home} alt="Home" title="Home" />
          </NavOptions>
          <NavOptions href="/about" className="nav-item nav-link">
            <img className="app__icon" src={icon_about} alt="Sobre" title="Sobre" />
          </NavOptions>
          { user && 
            (<NavOptions href="/" className="nav-item nav-link" onClick={logOutHandler}>
              <img className="app__icon" src={icon_logout} alt="Logout" title="Logout" />
            </NavOptions>)
          }
        </NavDiv>
      </NavBar>
      <LoginProvider>
        <Router>
            <div>
                <Routes exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path="/about" component={About}/>
            </div>
        </Router>
      </LoginProvider>
    </div>
  );
}

export default App;
