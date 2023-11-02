
import { Navbar } from 'flowbite-react';
import React from 'react';

function NavBar() {
  return (
    <Navbar fluid rounded className='pt-5 pb-5 bg-slate-300'>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Projects
        </Navbar.Link>
        <Navbar.Link href="#">
          Login
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;



