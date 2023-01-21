/* eslint-disable react/prop-types */
import React from 'react';

function GenericSelectInput({ options, onChange, name }) {
  return (
    <div className="block">
      <select
        className="md: form-control
       block border-solid border-2
       rounded-md mx-auto p-2 outline-black"
        onChange={ onChange }
      >
        {
          options.map((o, i) => (
            <option key={ i } name={ name } value={ o }>{ o }</option>
          ))
        }
      </select>
    </div>
  );
}

export default GenericSelectInput;
