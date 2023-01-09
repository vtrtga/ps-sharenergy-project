/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable max-len */
// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 9;
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItens = users.slice(startIndex, endIndex);

  useEffect(() => {
    const fetchItems = async () => {
      await fetch('https://randomuser.me/api/?results=90')
        .then((res) => res.json()).then((res) => setUsers(res.results));
      setIsLoading(false);
    };
    fetchItems();
  }, []);
  return (
    <>
      <div className="">
        {
          Array.from(
            Array(totalPages),
            (item, index) => (<button
              onClick={ () => setCurrentPage(index) }
              className="bg-gray-500 m-2 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:bg-blue-500 md: w-auto"
              type="button"
            >
              { index }
            </button>),
          )
        }
      </div>
      {
        isLoading ? (<p>Loading...</p>)
          : (
            <ul className="flex-wrap mt-48 mr-8 ml-8">
              {
                currentItens.map(({ name, dob, login, email, picture }) => (<Card
                  key={ login.username }
                  username={ login.username }
                  name={ `${name.first} ${name.last}` }
                  age={ dob.age }
                  email={ email }
                  img={ picture.thumbnail }
                />))
              }
            </ul>
          )
      }
    </>
  );
}

export default Users;
