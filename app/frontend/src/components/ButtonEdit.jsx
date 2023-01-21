/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

function ButtonEdit({ onEdit, onClickEdit, onClickSave }) {
  return (
    <div>
      {
        onEdit ? (
          <button
            type="button"
            className="bg-save bg-cover w-10 h-10 m-2"
            onClick={ onClickSave }
          />
        )
          : (
            <button
              type="button"
              onClick={ onClickEdit }
              className="bg-edit bg-cover
              w-10 h-10 m-2"
            />
          )
      }
    </div>
  );
}

export default ButtonEdit;
