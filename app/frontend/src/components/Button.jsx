/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';

function Button({ onClick, text }) {
  return (
    <div className="block text-center">
      <button type="button" className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={ onClick }>
        {
          text
        }
      </button>
    </div>
  );
}

export default Button;
