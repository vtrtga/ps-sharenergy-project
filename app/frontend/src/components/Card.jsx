/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

function Card({ img, name, email, username, age }) {
  return (
    <div
      className="inline-block bg-slate-200 mx-7 align-middle text-center border-2 w-72 h-44 border-solid border-black rounded-2xl m-5"
    >
      <img className="mx-auto" src={ img } alt="user" />
      <p>
        name:
        {' '}
        { name }
      </p>
      <p>
        email:
        {' '}
        { email }
      </p>
      <p>
        user :
        { username }
      </p>
      <p>
        age:
        {' '}
        { age }
      </p>
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
