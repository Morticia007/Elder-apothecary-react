import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className='App'>
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
      </div>
    );
  }
}

export default App;
