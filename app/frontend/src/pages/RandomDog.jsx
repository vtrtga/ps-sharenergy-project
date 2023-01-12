import axios from 'axios';
import React, { useState } from 'react';
import Button from '../components/Button';
import Nav from '../components/Nav';

function RandomDog() {
  const [currentDog, setCurrentDog] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = async () => {
    setIsLoading(true);
    try {
      const dog = await axios.create({
        baseURL: 'https://random.dog/woof.json',
      }).get();
      const loadingTime = 1400;
      setCurrentDog(dog.data.url);
      setTimeout(() => setIsLoading(false), loadingTime); // response delay
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <Nav />
      {
        isLoading ? <p>Loading...</p>
          : (
            <section className="md: w-2/2 h-2/3">
              {
                currentDog && (
                  <img
                    src={ currentDog }
                    className="md: w-1/2 h-2/6 rounded-3xl mx-auto my-5"
                    alt="random-dog"
                  />
                )
              }
            </section>
          )
      }
      <Button text="Click here to call the puppy" onClick={ sendRequest } />
    </div>
  );
}

export default RandomDog;
