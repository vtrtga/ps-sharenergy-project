/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ButtonDelete from './ButtonDelete';
import ButtonEdit from './ButtonEdit';

function Row({ data, isLoading }) {
  console.log(data);
  const [onEdit, setOnEdit] = useState(false);
  const [name, setName] = useState(data.name);
  // const [birthDate, setBirthDate] = useState(data.birthDate);
  const handleOnEdit = () => {
    setOnEdit(true);
  };

  const handleOnSave = () => {
    setOnEdit(false);
  };
  return (
    <tr className="md: border-solid border-black border-2" key={ data.i }>

      {
        isLoading ? <p>Loading...</p>
        : Array(data).map((d, i) => (
          onEdit ? (
          <input onChange={ ({ target: value }) => setName(value) } value={ name } />
          )
           : (
            <>
            <td key={ i }>{ data.name }</td>
            <td key={ i }>{ data.birthDate }</td>
            <td key={ i }>{ data.email }</td>
            <td key={ i }>{ data.phone }</td>
            <td key={ i }>{ data.address }</td>
            <td key={ i }>{ data.cpf }</td>
            </>
          )
        ))
      }
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
