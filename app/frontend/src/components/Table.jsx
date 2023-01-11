/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
// import ButtonDelete from './ButtonDelete';
// import ButtonEdit from './ButtonEdit';
import Row from './Row';

function Table({ tableHead, data }) {
  return (
    <div>
      <table className="table-auto md: m-auto bg-blue-500 rounded-md">
        <thead className="">
          <tr>

            {
              tableHead.map((item, i) => (
                <th className="md:" key={ i }>{item}</th>
              ))
            }
          </tr>
        </thead>
        <tbody className="">
          {
            data.map((d, i) => (
              <Row data={ d } key={ i } />
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
