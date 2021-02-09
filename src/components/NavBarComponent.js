import React, { Component } from 'react';
import '../App.css';//put your own css stylesheet in later
import { Navbar, NavbarBrand } from 'reactstrap';


class EaNavBar extends Component {
  render() {
    return(
      <Navbar dark color='success'>
  <div className='container'>
    <NavbarBrand className='mr-auto' href='/'>
      Elder Apothecary <br></br>
      <img
        src='/assets/images/ElderApothecary_v1light.png'
        height='30'
        width='30'
        alt='ElderApothecary Logo'
      />
    </NavbarBrand>
  </div>
</Navbar>
    );
  }
}

export default EaNavBar;


