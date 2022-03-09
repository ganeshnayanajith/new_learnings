import React from 'react';
import logo from '../../assets/logo.png';

let NavBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <div className="container">

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fa fa-gear" /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fa fa-bell" /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fa fa-message" /></a>
              </li>
            </ul>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <img src={logo} alt="Logo" height={30}
                     style={{ backgroundColor: 'white', height: '40px' }} />
              </li>
            </ul>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Ganesh Nayanajith <i className="fa fa-user" /></a>
              </li>
            </ul>
          </div>


        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;