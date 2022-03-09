import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

let NavBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <div className="container">
          <Link to={'/settings'} className="nav-link"><i className="fa fa-gear" /></Link>
          <Link to={'/notifications'} className="nav-link"><i className="fa fa-bell" /></Link>
          <Link to={'/messages'} className="nav-link"><i className="fa fa-message" /></Link>
          <Link to={'/home'} className="nav-link"><img src={logo} alt="Logo" height={30}
                                                       style={{ backgroundColor: 'white', height: '40px' }} /></Link>
          <Link to={'/profile'} className="nav-link">Ganesh Nayanajith <i className="fa fa-user" /></Link>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;