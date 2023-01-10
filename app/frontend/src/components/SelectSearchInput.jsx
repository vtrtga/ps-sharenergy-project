/* eslint-disable react/prop-types */
import React from 'react';

function SelectSearchInput({ onChange, styles, value }) {
  return (
    <div>
      <label htmlFor="selectInput" className="">
        <select
          value={ value }
          id="selectInput"
          onChange={ onChange }
          className={ styles }
        >
          <option value="firstName">first name</option>
          <option value="userName">username</option>
          <option value="email">email</option>
          <option value="age">age</option>
          <option value="lastName">last name</option>
        </select>
      </label>
    </div>
  );
}

export default SelectSearchInput;
