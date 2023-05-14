import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (


    <nav class="navbar navbar-expand-lg px-3">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
        <img height="50px" src="/images/Logo.svg" className='logosvg'></img>

        </a>
      

        {/* <div class="d-flex">
        <img height="17px" width="44px" src="/images/Burger Menu.svg" ></img>
      </div> */}

      </div>
    </nav>


  );
}

export default Navbar;
