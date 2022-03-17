import React from 'react';
import { Link } from 'react-router-dom';

import TestimonialImage from '../images/3085.png';
import RedTree from '../images/42.png';

function Testimonials1() {
  return (
    <section className="relative w-full h-full bg-green-100">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none " aria-hidden="true">
        <svg width='1360' height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="80%" y1="10%" x2="30%" y2="100%" id="illustration-01">
              <stop stopColor="#ffff9c" offset="0%" />
              <stop stopColor="#c5e90b" offset="50.402%" />
              <stop stopColor="#86dc3d" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#ni-a)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="58" />
            <circle cx="155" cy="443" r="44" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="py-auto md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto w-screen h-fit text-center pb-22 md:pb-16">
            <h1 className="h1 mb-4">Planted to make Earth and Metaverse a better place.</h1>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">To create a better living environment in the society, and to get an awesome tailored experience in the metaverse, Planet TLGT is created.</p>
            <div className="max-w-relative pt-20 mx-auto mt-relative" data-aos="zoom-y-out">
              <div className="relative flex items-start border-2 border-gray-200 rounded bg-white shadow-2xl">

                {/* About */}
                <div className="text-center px-20 py-8 pt-20 mx-20 md:mx-0">
                  <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                    <img className="relative rounded-full" src={TestimonialImage} width="96" height="96" alt="Testimonial 01" />
                  </div>
                  <blockquote className="text-xl font-medium mb-4">
                    “A creative management student and currently i am a coder, graphic designer, and social media manager for this project. You can call me  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-300 hover:underline" href="#0">-The Seeder 🌲</span>
                  </blockquote>
                  <cite className="block font-bold text-lg not-italic mb-1"></cite>
                  <div className="text-gray-600">
                    <span>Creator & Conceptor</span> <a className="text-blue-600 hover:underline " href="https://opensea.com/collection/tlgtree">Planet TLGT</a>
                  </div>

                </div>


              </div>
              <div className="relative flex items-start border-2 my-20 border-gray-200 rounded bg-white shadow-2xl">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                  <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                      <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        Core Team
                      </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                      <span className="relative inline-block">
                        <svg
                          viewBox="0 0 52 24"
                          fill="currentColor"
                          className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                          <defs>
                            <pattern
                              id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                              x="0"
                              y="0"
                              width=".135"
                              height=".30"
                            >
                              <circle cx="1" cy="1" r=".7" />
                            </pattern>
                          </defs>
                          <rect
                            fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                            width="52"
                            height="24"
                          />
                        </svg>
                        <span className="relative">Welcome</span>
                      </span>{' '}
                      our talented team of professionals
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque rem aperiam, eaque ipsa quae.
                    </p>
                  </div>
                  <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <img
                          className="object-cover w-full h-56 md:h-64 xl:h-80"
                          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                          alt="Person"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                          <p className="mb-1 text-lg font-bold text-gray-100">
                            Oliver Aguilerra
                          </p>
                          <p className="mb-4 text-xs text-gray-100">Product Manager</p>
                          <p className="mb-4 text-xs tracking-wide text-gray-400">
                            Vincent Van Gogh’s most popular painting, The Starry Night.
                          </p>
                          <div className="flex items-center justify-center space-x-3">
                            <a
                              href="/"
                              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                              </svg>
                            </a>
                            <a
                              href="/"
                              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <img
                          className="object-cover w-full h-56 md:h-64 xl:h-80"
                          src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                          alt="Person"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                          <p className="mb-1 text-lg font-bold text-gray-100">
                            Marta Clermont
                          </p>
                          <p className="mb-4 text-xs text-gray-100">Design Team Lead</p>
                          <p className="mb-4 text-xs tracking-wide text-gray-400">
                            Amet I love liquorice jujubes pudding croissant I love pudding.
                          </p>
                          <div className="flex items-center justify-center space-x-3">
                            <a
                              href="/"
                              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                              </svg>
                            </a>
                            <a
                              href="/"
                              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <img
                          className="object-cover w-full h-56 md:h-64 xl:h-80"
                          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                          alt="Person"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                          <p className="mb-1 text-lg font-bold text-gray-100">
                            Anthony Geek
                          </p>
                          <p className="mb-4 text-xs text-gray-100">CTO, Lorem Inc.</p>
                          <p className="mb-4 text-xs tracking-wide text-gray-400">
                            Apple pie macaroon toffee jujubes pie tart cookie caramels.
                          </p>
                          <div className="flex items-center justify-center space-x-3">
                            <a
                              href="/"
                              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                              </svg>
                            </a>
                            <a
                              href="/"
                              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <img
                          className="object-cover w-full h-56 md:h-64 xl:h-80"
                          src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                          alt="Person"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                          <p className="mb-1 text-lg font-bold text-gray-100">
                            Alice Melbourne
                          </p>
                          <p className="mb-4 text-xs text-gray-100">Human Resources</p>
                          <p className="mb-4 text-xs tracking-wide text-gray-400">
                            Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing
                            elit.
                          </p>
                          <div className="flex items-center justify-center space-x-3">
                            <a
                              href="/"
                              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                              </svg>
                            </a>
                            <a
                              href="/"
                              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <img
                          className="object-cover w-full h-56 md:h-64 xl:h-80"
                          src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                          alt="Person"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                          <p className="mb-1 text-lg font-bold text-gray-100">
                            Martin Garix
                          </p>
                          <p className="mb-4 text-xs text-gray-100">Good guy</p>
                          <p className="mb-4 text-xs tracking-wide text-gray-400">
                            Bacon ipsum dolor sit amet salami jowl corned beef, andouille
                            flank.
                          </p>
                          <div className="flex items-center justify-center space-x-3">
                            <a
                              href="/"
                              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                              </svg>
                            </a>
                            <a
                              href="/"
                              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <img
                          className="object-cover w-full h-56 md:h-64 xl:h-80"
                          src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                          alt="Person"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                          <p className="mb-1 text-lg font-bold text-gray-100">
                            Andrew Larkin
                          </p>
                          <p className="mb-4 text-xs text-gray-100">Backend Developer</p>
                          <p className="mb-4 text-xs tracking-wide text-gray-400">
                            Moonfish, steelhead, lamprey southern flounder tadpole fish
                            bigeye.
                          </p>
                          <div className="flex items-center justify-center space-x-3">
                            <a
                              href="/"
                              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                              </svg>
                            </a>
                            <a
                              href="/"
                              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <img
                          className="object-cover w-full h-56 md:h-64 xl:h-80"
                          src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                          alt="Person"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                          <p className="mb-1 text-lg font-bold text-gray-100">
                            Sophie Denmo
                          </p>
                          <p className="mb-4 text-xs text-gray-100">Designer</p>
                          <p className="mb-4 text-xs tracking-wide text-gray-400">
                            Veggies sunt bona vobis, proinde vos postulo esse magis grape
                            pea.
                          </p>
                          <div className="flex items-center justify-center space-x-3">
                            <a
                              href="/"
                              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                              </svg>
                            </a>
                            <a
                              href="/"
                              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <img
                          className="object-cover w-full h-56 md:h-64 xl:h-80"
                          src="https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                          alt="Person"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                          <p className="mb-1 text-lg font-bold text-gray-100">
                            Benedict Caro
                          </p>
                          <p className="mb-4 text-xs text-gray-100">Frontend Developer</p>
                          <p className="mb-4 text-xs tracking-wide text-gray-400">
                            I love cheese, especially airedale queso. Cheese and biscuits
                            halloumi.
                          </p>
                          <div className="flex items-center justify-center space-x-3">
                            <a
                              href="/"
                              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                              </svg>
                            </a>
                            <a
                              href="/"
                              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials1;