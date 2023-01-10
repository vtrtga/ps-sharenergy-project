/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import '../styles/index.css';

function Input({ onChange, text, placeHolder, type, value }) {
  return (
    <div className="">
      <label
        htmlFor="genericInput"
        className="block m-2"
      >
        {
          text
        }
        <input
          type={ type }
          value={ value }
          className="form-control block border-solid border-2 rounded-md m-3 p-2 outline-black"
          placeholder={ placeHolder }
          onChange={ onChange }
        />
      </label>
    </div>
  );
}

export default Input;
