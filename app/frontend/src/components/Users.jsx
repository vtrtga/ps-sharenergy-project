/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable max-len */
// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(users.length / itemsPerPage);

  useEffect(() => {
    const fetchItems = async () => {
      await fetch('https://randomuser.me/api/?results=50')
        .then((res) => res.json()).then((res) => setUsers(res.results));
      setIsLoading(false);
    };
    fetchItems();
  }, []);
  return (
    isLoading ? (<p>Loading...</p>)
      : (
        <ul>
          {
            // eslint-disable-next-line no-array-constructor
            <div>
              {
                Array.from(
                  Array(totalPages),
                  (item, index) => (<button
                    className="bg-gray-500 m-2 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
                    type="button"
                  >
                    { index }
                  </button>),
                )
              }
            </div>
          }
          {/* <p>{ currentPage }</p> */}
          {
            users.map(({ name, dob, login, email, picture }) => (<Card
              key={ login.username }
              name={ `${name.first} ${name.last}` }
              age={ dob.age }
              email={ email }
              img={ picture.thumbnail }
            />))
          }
        </ul>
      )
  );
}

export default Users;
