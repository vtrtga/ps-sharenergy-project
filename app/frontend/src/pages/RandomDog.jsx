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
        baseURL: 'https://random.dog/doggos',
      }).get();
      const dataFilter = dog.data.filter((d) => !d.match(/\.mp4|.gif|.webm/g));
      setCurrentDog(`https://random.dog/${dataFilter[Math.ceil(Math.random() * 100)]}`);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="">
      <Nav />
      <div className="">

        {
          isLoading ? <p>Loading...</p>
            : (
              <section className="h-1/3 w-2/3 mx-auto">
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
      </div>
      <div className="absolute btn-dog">
        <Button text="Click here to call the puppy" onClick={ sendRequest } />
      </div>
    </div>
  );
}

export default RandomDog;
