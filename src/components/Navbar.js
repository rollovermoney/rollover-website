import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (


    <nav className="navbar navbar-expand-lg px-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
        <img height="50px" src="/images/Logo.svg" className='logosvg'></img>

        </a>
      

        {/* <div className="d-flex">
        <img height="17px" width="44px" src="/images/Burger Menu.svg" ></img>
      </div> */}

      </div>
    </nav>


  );
}

export default Navbar;
