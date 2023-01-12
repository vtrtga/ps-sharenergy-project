/* eslint-disable max-len */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

function Nav() {
  const username = localStorage.getItem('username');
  const navigate = useNavigate();
  const handleOnLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <nav className="md: flex flex-wrap relative items-center justify-between bg-stone-800 shadow-xl text-white w-full text-sm">
      <span className="md: hidden">
        Logged as
        {' '}
        { username }
      </span>
      <div className="block m-auto justify-between items-center text-grey-700 font-mono">
        <ul className="flex items-center pr-10 text-base font-semibold">
          <li className="hover:bg-gray-200 py-4 px-6 cursor-pointer">
            <button onClick={ () => navigate('/home') } type="button">Home</button>
          </li>
          <li className="hover:bg-gray-200 py-4 px-6 cursor-pointer">
            <button onClick={ () => navigate('/customers') } type="button">Customers</button>
          </li>
          <li className="hover:bg-gray-200 py-4 px-6 cursor-pointer">
            <button type="button" onClick={ () => navigate('/http-cat') }>Http Cats</button>
          </li>
          <li>
            <Button text="Logout" onClick={ handleOnLogout } />
          </li>
        </ul>
      </div>

    </nav>
  );
}

export default Nav;
