import React, { useState } from "react";
import 'flowbite';
const demographics = () => {
  const [activeStatus, setActiveStatus] = useState(1);
  return (

    <section className="relative px-6 py-6 justify-center bg-green-200 dark:bg-gray-800  md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
      <div class="containerx mx-auto grid grid-cols-2 gap-8 md:grid-cols-4 py-8 text-center">
        <div>
          <h5 class="text-5xl font-bold text-white">
            <span class="inline bg-clip-text text-transparent bg-gradient-to-l from-green-500 to-yellow-300">
              80
            </span>
            <span class="bg-clip-text text-transparent bg-gradient-to-l from-green-400 to-yellow-200">
              +
            </span>
          </h5>
          <p class="text-yellow-500 tracking-wide text-xs font-medium uppercase">
            Unique Traits
          </p>
        </div>
        <div>
          <h5 class="text-5xl font-bold text-white">
            <span class="inline bg-clip-text text-transparent bg-gradient-to-l from-green-500 to-yellow-300">
              5
            </span>
            <span class="bg-clip-text text-transparent bg-gradient-to-l from-green-400 to-yellow-200">
              +
            </span>
          </h5>
          <p class="text-yellow-500 tracking-wide text-xs font-medium uppercase">
            Kingdoms
          </p>
        </div>
        <div>
          <h5 class="text-5xl font-bold text-white">
            <span class="inline bg-clip-text text-transparent bg-gradient-to-l from-green-500 to-yellow-300">
              2
            </span>
            <span class=" text-2xl bg-clip-text text-transparent bg-gradient-to-l from-green-400 to-yellow-200">
              Years
            </span>
          </h5>
          <p class="text-yellow-500 tracking-wide text-xs font-medium uppercase">
            Roadmap
          </p>
        </div>
        <div>
          <h5 class="text-5xl font-bold text-white">
            <span class="inline bg-clip-text text-transparent bg-gradient-to-l from-green-500 to-yellow-300">
              Lifetime
            </span>
            <span class="text-indigo-200">

            </span>
          </h5>
          <p class="text-yellow-500 tracking-wide text-xs font-medium uppercase">
            IRL Benefits
          </p>
        </div>
      </div>
    </section>
  );
};
export default demographics;
