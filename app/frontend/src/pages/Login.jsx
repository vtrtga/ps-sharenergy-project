/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { postMethod } from '../services/usersAndCustomers';
import Input from '../components/Input';

function Login() {
  const navigate = useNavigate();
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const requestLogin = async () => {
    try {
      const { token } = await postMethod('/login', { username, password });
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
      setInvalidCredentials(false);
      navigate('/home');
    } catch (e) {
      setInvalidCredentials(true);
      console.log(e);
    }
  };

  // eslint-disable-next-line no-unused-expressions
  useEffect(() => {
    isChecked ? localStorage.setItem('userInfos', JSON.stringify({ username, password })) : localStorage.removeItem('userInfos');
  }, [isChecked]);
  return (
    <section className="h-screen md:justify-center">
      <div className="md: flex text-gray-800 xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
        <form className="md: border-double border-2 rounded-2xl p-8">
          <div className="blockflex-row items-center justify-center lg:justify-start md:content-center">
            <p className="text-lg text-center mb-5 mr-4 m-2">Login</p>
            <Input
              onChange={ ({ target: { value } }) => { setUsername(value); } }
              text="Username"
              value={ username }
            />
            <Input
              onChange={ ({ target: { value } }) => { setPassword(value); } }
              value={ password }
              text="Password"
              type="password"
            />
            <label className="m-3" htmlFor="checkbox">
              <input type="checkbox" checked={ isChecked } readOnly onClick={ () => setIsChecked(!isChecked) } className="m-1" />
              Remember me
            </label>
            {
              invalidCredentials ? (<p className="text-center m-2 text-red-600 font-serif">Invalid username or password.</p>) : null
            }
            <Button text="Submit" onClick={ requestLogin } />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
