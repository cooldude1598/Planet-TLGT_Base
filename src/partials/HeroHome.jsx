import React, { useState } from 'react';


function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative transform -translate-y w-screen h-screen bg-green-200">

      {/*Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none " aria-hidden="true">

        <svg width='1360' height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="80%" y1="10%" x2="30%" y2="100%" id="illustration-01">
              <stop stopColor="#ffff9c" offset="0%" />
              <stop stopColor="#c5e90b" offset="50.402%" />
              <stop stopColor="#86dc3d" offset="100%" />
            </linearGradient>
            <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
              <stop stopColor="#ffff9c" offset="0%" />
              <stop stopColor="#c5e90b" offset="44.317%" />
              <stop stopColor="#86dc3d" offset="100%" />
            </radialGradient>
          </defs>
          <g fill="url(#ni-a)" fillRule="evenodd">

            <circle cx="1232" cy="128" r="58" />
            <circle cx="155" cy="443" r="44" />
          </g>

        </svg>

      </div>
      <div className="max-w max-h-fit content-center	 mx-auto px-4 sm:px-fit bg-green-200">

        {/* Hero image */}
        <div>
          <div className="relative flex justify-center mb-8 " data-aos="zoom-y-out" data-aos-delay="500">
            <div className="flex flex-col justify-center">

            </div>

          </div>

          {/* Hero content */}
          <div className="pt-32 pb-12 md:pt-20 md:pb-20">

            {/* Section header */}
            <div className=" text-center md:pb-16">
              <h1 className="text-5xl md:text-6xl p-10 font-extrabold sm:justify-center leading-tighter font-serif tracking-tighter mb-4" data-aos="zoom-y-out">Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-300">Planet TLGT</span></h1>
              <div className="max-w-4xl mx-auto">
                <h1 className="text-xl text-gray-600 mb-8 pt-10 sm:pt-1 sm:text-l sm:justify-center" data-aos="zoom-y-out" data-aos-delay="150">The 🏡 of <span className="bg-clip-text text-transparent bg-gradient-to-l from-green-500 to-yellow-300">The Lucky Golden Tree</span></h1>
                <p className="text-xl text-gray-600 mb-8 sm:justify-center" data-aos="zoom-y-out" data-aos-delay="150">Discover the Green, Luxury and Rich experience with NFTs</p>
                <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                  <p className="text-xl text-gray-600 mb-8 sm:justify-center" data-aos="zoom-y-out">Bridging the gap between virtual and physical world.</p>

                </div>

                <div>
                  <a className="btn text-white bg-teal-600 hover:bg-green-800 w-full mb-4 sm:w-auto sm:mb-0" href="https://discord.gg/3RZHubXjJK">Join Discord</a>
                  <a className="btn text-white bg-teal-600 hover:bg-green-800 w-full sm:w-auto sm:ml-4" href="/Roadmap">Roadmap</a>
                  <a className="btn text-white bg-teal-600 hover:bg-green-800 w-full sm:w-auto sm:ml-4" href="/Mint">Mint</a>
                </div>
              </div>

            </div>


          </div>

        </div>

      </div>

    </section>

  );
}

export default HeroHome;