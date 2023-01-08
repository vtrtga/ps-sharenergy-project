import React from 'react';
import PropTypes from 'prop-types';

function Input({ onChange, text }) {
  return (
    <label htmlFor="input">
      {
        text
      }
      <input type="text" onChange={ onChange } />
    </label>
  );
}

export default Input;

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
