import React from 'react';
import RedTree from '../images/42.png';

function Mintblock() {
  return (
    <section className="relative px-6 py-6 justify-center bg-green-200 dark:bg-gray-800  md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">

      <div class="bg-yellow-200 w-full rounded dark:bg-gray-800 ">
        <div class="lg:flex lg:items-center lg:justify-between  mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h3 class="text-xl font-bold text-black dark:text-white sm:text-2xl">
            <span class="block">Collection exclusively available for minting & trading on Opensea soon.
            </span>
          </h3>
          <div class="lg:mt-0 lg:flex-shrink-0">
            <div class=" inline-flex rounded-md shadow">
              <a className="btn text-white bg-teal-600 hover:bg-green-800 w-full mb-4 sm:w-auto sm:mb-0" href="/Mint">Mint Soon</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mintblock;
