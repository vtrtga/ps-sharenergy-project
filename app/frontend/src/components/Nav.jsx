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
    <nav className="flex flex-wrap items-center justify-between navbar bg-stone-800 text-white">
      <span>
        Logged as
        {' '}
        { username }
      </span>
      <Button text="Page2" />
      <Button text="Page3" />
      <Button text="Logout" onClick={ handleOnLogout } />
    </nav>
  );
}

export default Nav;
