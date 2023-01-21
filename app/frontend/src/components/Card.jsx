/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

function Card({ img, name, email, username, age }) {
  return (
    <div
      className="md: w-full flex mx-auto my-10 p-5 font-semibold text-black bg-white shadow-2xl align-middle text-center md:rounded-2xl"
    >
      <img className="m-auto w-14 h-20 rounded-full" src={ img } alt="user" />
      <ul>
        <li className="font-extrabold my-2 text-lg">
          { name }
        </li>
        <li className="font-sans my-1 text-xs">
          { email }
        </li>
        <li className="font-thin my-1">
          { username }
        </li>
        <li className="font-extralight">
          { age }
          {' '}
          years old
        </li>
      </ul>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  username: PropTypes.string,
  age: PropTypes.number,
};

Card.defaultProps = {
  img: '',
  name: '',
  email: '',
  username: '',
  age: '',
};

export default Card;
