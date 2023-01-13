/* eslint-disable max-len */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

function Nav() {
  const navigate = useNavigate();
  const handleOnLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <nav className="shadow-md flex justify-between lg:justify-center">
      <div className="hidden lg:block">
        <ul className="flex justify-around">
          <li className="hover:bg-gray-200 py-4 px-6 cursor-pointer">
            <button onClick={ () => navigate('/home') } type="button">Home</button>
          </li>
          <li className="hover:bg-gray-200 py-4 px-6 cursor-pointer">
            <button onClick={ () => navigate('/customers') } type="button">Customers</button>
          </li>
          <li className="hover:bg-gray-200 py-4 px-6 cursor-pointer">
            <button type="button" onClick={ () => navigate('/http-cat') }>Http Cats</button>
          </li>
          <li className="hover:bg-gray-200 py-4 px-6 cursor-pointer">
            <button type="button" onClick={ () => navigate('/random-dog') }>Random Dog</button>
          </li>
        </ul>
      </div>
      <div className="flex justify-center lg:hidden border-solid h-8 w-10 border rounded-md m-3 shadow-lg">
        <div className="space-y-2">
          <span className="block w-8 h-1 mx-auto my-1 bg-gray-600" />
          <span className="block w-8 h-1 mx-auto my-1 bg-gray-600" />
          <span className="block w-8 h-1 mx-auto my-1 bg-gray-600" />
        </div>
      </div>

      <Button text="Logout" onClick={ handleOnLogout } />
    </nav>
  );
}

export default Nav;
