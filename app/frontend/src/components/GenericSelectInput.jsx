/* eslint-disable react/prop-types */
import React from 'react';

function GenericSelectInput({ options, onChange, name }) {
  return (
    <div>
      <select onChange={ onChange }>
        {
          options.map((o, i) => (
            <option key={ i } name={ name } value={ o.value }>{ o.value }</option>
          ))
        }
      </select>
    </div>
  );
}

export default GenericSelectInput;
