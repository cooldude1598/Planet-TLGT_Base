import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';
import Footer from '../partials/Footer';

function Mint() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <div className="mb-16">
        <div className="bg-green-200 p-10">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  Minting Info
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">

                  <span className="relative">The</span>
                </span>{' '}
                Lucky Golden Tree NFTs
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                will be minted and availabe for trading and collecting on TBD.
              </p>
              <p className="text-base text-gray-700 md:text-lg">
                There will be a total supply of 11,111 TLGT NFTs, which will be rolled out in 4 different stages with a gap of 2 months in each stage.
              </p>
              <p className="text-base text-gray-700 md:text-lg">
                Each stage holds various community and public rewards for minting NFTs.
              </p>
            </div>
            <div className="flex items-center sm:justify-center">
              <a className="btn text-white bg-teal-600 hover:bg-green-800 w-full sm:w-auto sm:ml-4" href="/Mint">Minting Starts Soon</a>

            </div>
          </div>
          <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y sm:divide-x sm:max-w-screen-sm sm:grid-cols-2 lg:max-w-screen-md">
            <div className="inline-block p-8 text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <p className="font-bold tracking-wide text-gray-800">
                Stage 1
              </p>
              <div>
                <p className="text-sm text-gray-600 sm:justify-center" data-aos="zoom-y-in">NFT : 1-100</p>
                <p className="text-sm text-gray-600 sm:justify-center" data-aos="zoom-y-in">Price : 0.01 ETH</p>
                <p className="text-sm text-gray-600 sm:justify-center" data-aos="zoom-y-in">Date : TBD</p>
                <p className="text-sm text-gray-600 sm:justify-center" data-aos="zoom-y-in">Stage Work : TBD</p>
              </div>
            </div>
            <div className="inline-block p-8 text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <p className="font-bold tracking-wide text-gray-800">
                Stage 2
              </p>
              <div>
                <p className="text-sm text-gray-600 sm:justify-center" data-aos="zoom-y-in">NFT : 101-1000</p>
                <p className="text-sm text-gray-600 sm:justify-center" data-aos="zoom-y-in">Price : 0.05 ETH</p>
                <p className="text-sm text-gray-600 sm:justify-center" data-aos="zoom-y-in">Date : TBD</p>
                <p className="text-sm text-gray-600 sm:justify-center" data-aos="zoom-y-in">Stage Work : TBD</p>
              </div>
            </div>
            <div className="inline-block p-8 text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <p className="font-bold tracking-wide text-gray-800">
                Stage 3
              </p>
              <div>
                <p className="text-sm text-gray-600 sm:justify-center" data-aos="zoom-y-in">NFT : 1001-5000</p>
                <p className="text-sm text-gray-600 sm:justify-center" data-aos="zoom-y-in">Price : 0.5 ETH</p>
                <p className="text-sm text-gray-600 sm:justify-center" data-aos="zoom-y-in">Date : TBD</p>
                <p className="text-sm text-gray-600 sm:justify-center" data-aos="zoom-y-in">Stage Work : TBD</p>
              </div>
            </div>
            <div className="inline-block p-8 text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <p className="font-bold tracking-wide text-gray-800">
                Stage 4
              </p>
              <div>
                <p className="text-sm text-gray-600 sm:justify-center" data-aos="zoom-y-in">NFT : 5001-10000</p>
                <p className="text-sm text-gray-600 sm:justify-center" data-aos="zoom-y-in">Price :1 ETH</p>
                <p className="text-sm text-gray-600 sm:justify-center" data-aos="zoom-y-in">Date : TBD</p>
                <p className="text-sm text-gray-600 sm:justify-center" data-aos="zoom-y-in">Stage Work : TBD</p>
              </div>
            </div>
          </div>
        </div>
        {/*  Site footer */}
        <Footer />
      </div>
    </div>

  );
}

export default Mint;