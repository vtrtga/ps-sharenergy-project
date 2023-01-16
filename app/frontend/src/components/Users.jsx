/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable max-len */
// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import Input from './Input';
import SelectSeachInput from './SelectSearchInput';

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectValue, setSelectValue] = useState('firstName');

  const itemsPerPage = 9;
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItens = filteredUsers.slice(startIndex, endIndex);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        await fetch('https://randomuser.me/api/?results=90')
          .then((res) => res.json()).then((res) => setUsers(res.results
            .map(({ name, dob, login, email, picture }) => ({
              firstName: name.first,
              lastName: name.last,
              age: dob.age,
              userName: login.username,
              email,
              image: picture.thumbnail,
            }))));
        setIsLoading(false);
        setFilteredUsers(users);
      } catch (e) {
        console.error(e);
      }
    };
    fetchItems();
  }, [setUsers, isLoading]);

  useEffect(() => {
    setFilteredUsers([...users]);
    const minLength = 1;
    if (searchInputValue.length > minLength) {
      const filtered = users.filter(({ userName, lastName, email, firstName }) => {
        if (selectValue === 'userName') {
          return userName.toLowerCase().match(searchInputValue.toLowerCase());
        }
        if (selectValue === 'email') {
          return email.toLowerCase().match(searchInputValue.toLowerCase());
        }
        if (selectValue === 'lastName') {
          return lastName.toLowerCase().match(searchInputValue.toLowerCase());
        }
        if (selectValue === 'firstName') {
          return firstName.toLowerCase().match(searchInputValue.toLowerCase());
        }
        return [...users];
      });
      if (filtered) {
        setFilteredUsers([...filtered]);
      }
    }
  }, [searchInputValue, users, selectValue, setFilteredUsers]);

  const onChangeInput = ({ target }) => {
    const { value } = target;
    setSearchInputValue(value);
  };

  // eslint-disable-next-line no-unused-expressions

  return (
    <div className="md: w-full m-auto border-l-blue-800 border-solid border-2">
      <SelectSeachInput
        inputText="Select filter option"
        value={ selectValue }
        onChange={ ({ target }) => setSelectValue(target.value) }
      />
      <Input value={ searchInputValue } onChange={ (e) => onChangeInput(e) } placeHolder="Search" />
      <div className="">
        {
          Array.from(
            Array(totalPages),
            (item, index) => (<button
              key={ index }
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
            <ul className="flex-wrap mt-48 mr-8 ml-8 m-auto">
              {
                currentItens.map(({ age, firstName, lastName, userName, email, image }, i) => (<Card
                  key={ i }
                  username={ userName }
                  name={ `${firstName} ${lastName}` }
                  age={ age }
                  email={ email }
                  img={ image }
                />))
              }
            </ul>
          )
      }
    </div>
  );
}

export default Users;
