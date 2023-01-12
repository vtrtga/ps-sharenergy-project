import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Nav from '../components/Nav';

function HttpCats() {
  const [currentCat, setCurrentCat] = useState('https://http.cat/200');
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleOnClick = () => {
    setCurrentCat(`https://http.cat/${code}`);
    if (!code) setCode('404');
    setIsLoading(false);
  };
  return (
    <div>
      <Nav />
      <Input
        placeHolder="Enter a status code"
        onChange={ ({ target: { value } }) => { setCode(value); } }
      />
      <Button text="Call cat!" onClick={ handleOnClick } />
      {
        isLoading ? <p>Loading...</p> : (
          <div>
            <img src={ currentCat } alt="http-cat" className="md: h-2/5 w-3/4 m-auto" />
          </div>
        )
      }
    </div>
  );
}

export default HttpCats;
