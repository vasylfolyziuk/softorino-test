
import { Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar fluid rounded className='pt-5 pb-5 bg-slate-300'>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          <Link to='/' className='text-blue-600'>
            Projects
          </Link>
        </Navbar.Link>
        <Navbar.Link href="#">
          Login
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;



