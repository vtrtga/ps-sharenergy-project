/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';

function Button({ onClick, text }) {
  return (
    <div className="block text-center m-3">
      <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md: w-auto" onClick={ onClick }>
        {
          text
        }
      </button>
    </div>
  );
}

export default Button;
