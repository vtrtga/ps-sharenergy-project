/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';

function SelectSearchInput({ onChange, value, text }) {
  return (
    <div className="md: my-5 mx-5 w-auto h-auto">
      <label htmlFor="selectInput" className="md: p-4 h-auto w-auto">
        {
          text
        }
        <select
          value={ value }
          id="selectInput"
          onChange={ onChange }
          className="md: form-control block border-solid border-2 rounded-md mx-auto p-2 w-8/12 outline-black text-center"
        >
          <option value="firstName">first name</option>
          <option value="userName">username</option>
          <option value="email">email</option>
          <option value="lastName">last name</option>
        </select>
      </label>
    </div>
  );
}

export default SelectSearchInput;
