import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    // <nav className="navbar">
    //     <div className='logo'>
    //       <img height="50px" src="/images/logo.png" ></img>
    //     </div>
      
    //   <ul className="nav-links">
    //     <li><a href="#">Home</a></li>
    //     <li><a href="#">About</a></li>
    //     <li><a href="#">Contact</a></li>
    //   </ul>
    //   <div className="burger">
    //   <img height="50px" src="/images/Burger Menu.svg" ></img>
    //   </div>
    // </nav>
    
    <nav class="navbar navbar-expand-lg px-3">
  <div class="container-fluid">
       <img height="50px"  src="/images/logo.png" ></img>
    
      {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul> */}
      <div class="d-flex">
        <img height="17px" width="44px" src="/images/Burger Menu.svg" ></img>
      </div>
    
  </div>
</nav>

    
  );
}

export default Navbar;
