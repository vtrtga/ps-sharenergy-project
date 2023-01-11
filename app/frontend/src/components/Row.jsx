/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ButtonDelete from './ButtonDelete';
import ButtonEdit from './ButtonEdit';

function Row({ data }) {
  const [onEdit, setOnEdit] = useState(false);
  const handleOnEdit = () => {
    setOnEdit(true);
  };

  const handleOnSave = () => {
    setOnEdit(false);
  };
  return (
    <tr className="md: border-solid border-black border-2" key={ data.i }>
      <td className="md: w-44 border-solid border-black border-2">{ data.name }</td>
      <td className="md: w-44 border-solid border-black border-2">{ data.birthDate }</td>
      <td className="md: w-44 border-solid border-black border-2">{ data.email }</td>
      <td className="md: w-44 border-solid border-black border-2">{ data.phone }</td>
      <td className="md: w-44 border-solid border-black border-2">{ data.address }</td>
      <td className="md: w-44 border-solid border-black border-2">{ data.cpf }</td>
      <td className="md: w-44 border-solid border-black border-2">{ data.age }</td>
      <td>
        <ButtonEdit
          onEdit={ onEdit }
          onClickEdit={ handleOnEdit }
          onClickSave={ handleOnSave }
        />

      </td>
      <td><ButtonDelete deleteId={ data.id } /></td>
    </tr>
  );
}

export default Row;
