import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Nav from '../components/Nav';

function HttpCats() {
  const [currentCat, setCurrentCat] = useState('https://http.cat/404');
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleOnClick = () => {
    setCurrentCat(`https://http.cat/${code}`);
    if (!code) setCode('404');
    setIsLoading(false);
  };
  return (
    <div className="">
      <Nav />
      <Input
        placeHolder="Enter a status code"
        onChange={ ({ target: { value } }) => { setCode(value); } }
      />
      <Button text="Call cat!" onClick={ handleOnClick } />
      {
        isLoading ? <div className="flex w-full text-center">Loading...</div> : (
          <div>
            <img
              src={ currentCat }
              alt="http-cat"
              className="md: h-96
              w-auto m-auto"
            />
          </div>
        )
      }
    </div>
  );
}

export default HttpCats;
