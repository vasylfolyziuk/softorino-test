import { Alert, Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { useAuth } from './hooks';
import { Link, Navigate } from 'react-router-dom';
import NavBar from '../Navbar/NavBar';
import { AppContext } from '../../AppContextProvider';

function Login() {
  const {login} = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const {isAuth, setIsAuth, setUser} = useContext(AppContext);

  const loginUser = async () => {
    setError('');

    const res = await login(email, password);

    if (res.token) {
      setIsAuth(true);
      setUser(res);
      localStorage.setItem('token', res.token);
    } else {
      setError(res.error.message);
      setIsAuth(false);
      setUser({});
    }
  }

  if (isAuth) {
    return <Navigate replace to="/" />;
  }

  return (
    <div className="container mx-auto px-4">
      <NavBar />
      <form
        className="auth-container flex max-w-md flex-col gap-4"
      >
        <h1>Sign In</h1>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="name@flowbite.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && (
          <Alert color="failure">
            {error}
          </Alert>
        )}

        <div className='text-right'>
          Not authorized?
          <Link to='/auth' className='text-blue-600'>
            Register
          </Link>
        </div>
        
        <Button type="button" onClick={loginUser}>Submit</Button>
      </form>
    </div>
  );
}

export default Login;
