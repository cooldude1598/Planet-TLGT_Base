import React from 'react';
import Investor from '../images/investor.gif';
import banner1 from '../images/banner1.gif';
import banner2 from '../images/banner2.gif';
import banner3 from '../images/banner3.gif';
import gif from '../images/gif.gif';
import gifVirtual from '../images/gif2.gif';


function About() {
  return (

    <><><section className="relative px-6 py-6 bg-green-200 dark:bg-gray-800 md:py-12 md:px-12 lg:py-20 lg:px-16 xl:flex xl:items-center">

      <div class="bg-yellow-200 dark:bg-gray-800 rounded overflow-hidden relative lg:flex lg:items-center">
        <div class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 class="text-3xl pl-4 font-extrabold text-black dark:text-white sm:text-4xl">
            <span class="block">
              The Planet of the Trees
            </span>
          </h2>
          <p class="text-xl mt-1 px-4 pt-4 text-gray-500">Planet TLGT is on a mission to provide <span className="bg-clip-text text-gray-800">Secure, Organic & Luxury</span> lifestyle to its hodlers. Security of privacy, Organic for Health and Luxury of standard of living.</p>
          <p class="text-xl mt-2 px-4 text-gray-500">With a revolutionary <span className="bg-clip-text text-gray-800">Physical-Virtual Home</span> concept, we are creating a <span className="bg-clip-text text-gray-800">TLGT Village</span> with high standards of living at minimal cost, for which TLGT-Fam will have lifetime free access.</p>
          <p class="text-xl mt-2 px-4 text-gray-500">Our revolutionary & transparent <span className="bg-clip-text text-gray-800">D2E</span> earning mechanism will create endless possibilities of earning huge money like never before.</p>
          <p class="text-xl mt-2 px-4 text-gray-500">A <span className="bg-clip-text text-gray-800">Free, Secure, Private and Decentralised VPN (DPN)</span> for the TLGT-Fam with which we can assure that our virtual privacy is completely safe.</p>

        </div>
        <div class="flex items-center gap-8 p-8 lg:p-24 lg:center">
          <img src={banner1} class="center rounded-lg w-1/2 " alt="Tree" />
          <div>
            <img src={banner2} class="center rounded-lg mb-8 w-full" alt="Tree" />
            <img src={banner3} class="center rounded-lg w-full" alt="Tree" />
          </div>
        </div>
      </div>

    </section>
      <section className="relative px-6 py-6 bg-green-200 dark:bg-gray-800 rounded-xl md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
        <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
          <div className="flex flex-col mb-4 lg:justify-between lg:flex-row md:mb-8">
            <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
              <span className="inline-block  sm:mb-4">
                For The Planet
              </span>
              <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
            </h2>
            <p className="text-gray-700 lg:text-lg lg:max-w-md">
              By examining the loopholes and voids in the present system, we are able to curate a better world with infinite possibilities and to provide high returns on investment while supporting the environment.
            </p>
          </div>
          <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-1">
            <a aria-label="View Item">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={Investor} class="center" alt="Investor" />
                <div className="absolute inset-0 px-6 py-8 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-4 text-xl font-bold text-gray-100">Investment Perks</p>
                  <p className="text-lg tracking-wide text-gray-300">
                    Seeder has curated an environment where you can earn by multiple streams. Staking, D2E, DPN, Free access to future projects, Community Airdrops, Free Physical-Virtual and Virtual Lands and a lot more.
                  </p>
                </div>
              </div>
            </a>
            <a href="/" aria-label="View Item">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img className="object-cover w-full h-56 md:h-64 xl:h-80" src={gif} class="center" alt="Physical TLGT" />
                <div className="absolute inset-0 px-6 py-8 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-4 text-xl font-bold text-gray-100">
                    Physical Planet TLGT
                  </p>
                  <p className="text-lg tracking-wide text-gray-300">
                    Seeder is planning our TLGT Village, where hodlers can stay for free for lifetime. Free access to various hotels/villas will also be presented in future. Free merch is also in the plans for TLGT-Fam. </p>
                </div>
              </div>
            </a>
            <a href="/" aria-label="View Item">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img className="object-cover w-full h-56 md:h-64 xl:h-80" src={gifVirtual} class="center" alt="Virtual Planet TLGT" />
                <div className="absolute inset-0 px-6 py-8 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-4 text-xl font-bold text-gray-100">Virtual Planet TLGT</p>
                  <p className="text-lg tracking-wide text-gray-100">
                    Planet TLGT's virtual world consist TLGT NFTs, PFPs, TLGTverse, TLGT DAO, Golden Coin and many more including a not another P2E game and our staking platform. D2E's presence is not limited inside the computer but on our beloved Earth as well.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>

      </section></><section className="relative justify-center bg-green-200 dark:bg-gray-800 py-10 md:px-12  lg:px-16 xl:flex xl:items-center">
        <div class="container mx-auto grid grid-cols-2 gap-8 lg:grid-cols-4 text-center">
          <div>
            <h5 class="text-5xl font-bold text-white">
              <span class="inline bg-clip-text text-transparent bg-gradient-to-l from-green-500 to-yellow-300">
                90
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

              </span>
            </h5>
            <p class="text-yellow-500 tracking-wide text-xs font-medium uppercase">
              Huge Kingdoms
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
      </section></>
  );
}

export default About;
