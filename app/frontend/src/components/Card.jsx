/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

function Card({ img, name, email, username, age }) {
  return (
    <div
      className="inline-block mx-7 font-semibold text-black bg-white shadow align-middle text-center w-96 m-5 md:rounded-2xl"
    >
      <img className="mx-auto" src={ img } alt="user" />
      <ul>
        <li>
          NAME:
          {' '}
          { name }
        </li>
        <li>
          EMAIL:
          {' '}
          { email }
        </li>
        <li>
          USER:
          {' '}
          { username }
        </li>
        <li>
          AGE:
          {' '}
          { age }
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
