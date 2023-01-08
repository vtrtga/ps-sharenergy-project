/* eslint-disable max-len */
import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const requestLogin = () => {
  //   try {
  //     postMethod()
  //   }
  // }
  return (
    <section className="h-screen md:justify-center">
      <div className="flex px-6 text-gray-800 xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
        <form className="border-double border-2 rounded-2xl">
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
            <Button text="Submit" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
