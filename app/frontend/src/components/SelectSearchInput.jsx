/* eslint-disable react/prop-types */
import React from 'react';

function SelectSearchInput({ onChange, styles, value, text }) {
  return (
    <div>
      <label htmlFor="selectInput" className="p-2 m-2">
        {
          text
        }
        <select
          value={ value }
          id="selectInput"
          onChange={ onChange }
          className={ styles }
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
