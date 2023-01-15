/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

function Nav() {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);

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
            <button
              onClick={
                () => navigate('/customers')
              }
              type="button"
            >
              Customers

            </button>
          </li>
          <li className="hover:bg-gray-200 py-4 px-6 cursor-pointer">
            <button
              type="button"
              onClick={ () => navigate('/http-cat') }
            >
              Http Cats

            </button>
          </li>
          <li className="hover:bg-gray-200 py-4 px-6 cursor-pointer">
            <button
              type="button"
              onClick={ () => navigate('/random-dog') }
            >
              Random Dog

            </button>
          </li>
        </ul>
      </div>
      <div
        className="flex
        justify-center lg:hidden border-solid h-8 w-10 border rounded-md m-3 shadow-lg"
      >
        <button type="button" onClick={ () => setIsNavOpen(true) } className="space-y-2">
          <span className="block w-8 h-1 mx-auto my-1 bg-gray-600" />
          <span className="block w-8 h-1 mx-auto my-1 bg-gray-600" />
          <span className="block w-8 h-1 mx-auto my-1 bg-gray-600" />
        </button>
      </div>
      <div className={ isNavOpen ? 'absolute z-10 w-2/5 h-4/5 bg-white' : 'hidden' }>
        <button
          onClick={ () => setIsNavOpen(false) }
          type="button"
          className="bg-close bg-white rounded-full bg-cover w-7 h-7 absolute mx-48"
        />
        <ul className="inline-block font-mono text-center w-full">
          <li
            onClick={ () => navigate('/home') }
            className="p-6 hover:bg-slate-500 cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={ () => navigate('/random-dog') }
            className="p-6 hover:bg-slate-500 cursor-pointer"
          >
            Random Dog
          </li>
          <li
            onClick={ () => navigate('/http-cat') }
            className="p-6 hover:bg-slate-500 cursor-pointer"
          >
            Http Cats
          </li>
          <li
            onClick={ () => navigate('/customers') }
            className="p-6 hover:bg-slate-500 cursor-pointer"
          >
            Customers
          </li>
        </ul>
      </div>

      <Button text="Logout" onClick={ handleOnLogout } />
    </nav>
  );
}

export default Nav;
