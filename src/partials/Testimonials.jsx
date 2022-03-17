import React from 'react';
import RedTree from '../images/42.png';

function Team() {
  return (
    <section className="relative px-6 py-6 justify-center bg-green-200 dark:bg-gray-800  md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">The Team</span>
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            (Currently single person)          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-1 lg:grid-cols-1">
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-scale-down w-full h-56 md:h-64 xl:h-80" src={RedTree} alt="Person" />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-300 hover:underline" href="#0">The Seeder🌲</span>                </p>
                <p className="mb-4 text-xs text-gray-100">Creator & Conceptor Planet TLGT
                </p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  A creative management student and currently i am a coder, graphic designer, and social media manager for this project.
                  <p>I haven't worked for Disney, Microsoft, Rockstar Games and Pixar yet.</p></p>
                <div className="flex items-center justify-center space-x-3">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
