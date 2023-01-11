/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { deleteMethod } from '../services/usersAndCustomers';

function ButtonDelete({ deleteId }) {
  const [customerId, setCustomerId] = useState('');
  const handleOnDelete = async () => {
    try {
      await deleteMethod(`/customer/${customerId}`);
      window.location.reload(true);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => setCustomerId(deleteId), []);
  return (
    <div>
      <button
        onClick={ handleOnDelete }
        type="button"
        className="
        bg-delete
        bg-cover
        w-10 h-10"
      />
    </div>
  );
}

export default ButtonDelete;
