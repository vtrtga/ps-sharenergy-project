import axios from 'axios';
import React, { useState } from 'react';
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
        <div className="flex btn-dog justify-center w-full mx-46">
          <button
            type="button"
            onClick={ sendRequest }
            className="bg-blue-500
            absolute z-20 w-36 h-11 mt-8 rounded-lg md:mx-auto"
          >
            Call the puppy
          </button>
        </div>

        {
          isLoading ? <div className="mx-auto w-full text-center mt-40">Loading...</div>
            : (
              <section className="h-1/3 w-2/3 mx-auto">
                {
                  currentDog && (
                    <div className="absolute w-full md:flex mx-8">
                      <img
                        src={ currentDog }
                        className="
                      w-1/2 h-auto rounded-3xl lg:mx-28 mt-32 my-5"
                        alt="random-dog"
                      />
                    </div>
                  )
                }
              </section>
            )
        }
      </div>

    </div>
  );
}

export default RandomDog;
