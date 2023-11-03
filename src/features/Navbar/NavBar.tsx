
import { Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../AppContextProvider';
import { useAuth } from '../Auth/hooks';

function NavBar() {
  const {isAuth, setIsAuth, setUser} = useContext(AppContext);
  const {logout} = useAuth();

  const logoutUser = async () => {
    const res = await logout();

    if (!res.error) {
      setIsAuth(false);
      setUser({});
      localStorage.removeItem('token');
    }
  }

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
          {isAuth ? (
            <Navbar.Link href="#" active onClick={logoutUser}>
              Logout
            </Navbar.Link>
          ) : (
            <Link to='/login' className='text-blue-600'>
              Login
            </Link>
          )}
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;



