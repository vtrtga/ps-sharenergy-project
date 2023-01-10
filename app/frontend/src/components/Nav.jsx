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
    <nav className="flex flex-wrap items-center justify-between bg-stone-800 text-white md: w-full shadow">
      <span className="md: hidden">
        Logged as
        {' '}
        { username }
      </span>
      <div className="container m-auto flex justify-between items-center text-grey-700">
        <ul className="md: flex items-center pr-10 text-base font-semibold">
          <li className="hover:bg-gray-200 py-4 px-6 cursor-pointer">
            <button onClick={ () => navigate('/home') } type="button">Home</button>
          </li>
          <li className="hover:bg-gray-200 py-4 px-6 cursor-pointer">
            <button onClick={ () => navigate('/customers') } type="button">Customers</button>
          </li>
          <li className="hover:bg-gray-200 py-4 px-6 cursor-pointer">
            <button type="button">Page</button>
          </li>
        </ul>
      </div>
      <Button text="Logout" onClick={ handleOnLogout } />
    </nav>
  );
}

export default Nav;
