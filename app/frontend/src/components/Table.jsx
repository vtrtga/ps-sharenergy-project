/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
// import ButtonDelete from './ButtonDelete';
// import ButtonEdit from './ButtonEdit';
import Row from './Row';

function Table({ tableHead, data, isLoading }) {
  return (
    <div className="overflow-auto">
      <table className="border-collapse text-xs border border-slate-400 m-auto font-sans">
        <thead className="">
          <tr>

            {
              tableHead.map((item, i) => (
                <th className="border-slate-300" key={ i }>{item}</th>
              ))
            }
          </tr>
        </thead>
        <tbody className="border-slate-800">
          {
            data.map((d, i) => (
              <Row isLoading={ isLoading } data={ d } key={ i } />
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
