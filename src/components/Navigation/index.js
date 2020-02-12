import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);
const NavigationAuth = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item">
      <Link className="nav-link" to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={ROUTES.HOME}>Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={ROUTES.ADMIN}>Admin</Link>
    </li>
    <li className="nav-item">
      <SignOutButton />
    </li>
    </ul>
    </div>
  </nav>
  
    
  
);
const NavigationNonAuth = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
      <Link className="nav-link" to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
    </ul>
    </div>
    </nav>
  
);
export default Navigation;