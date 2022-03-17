import React from 'react';
import { Link } from 'react-router-dom';
import TestimonialImage from '../images/3085.png';
import discordlogo from '../images/discord.png';
import twitterlogo from '../images/twitter.png';
import instalogo from '../images/instagram.png';
import facebooklogo from '../images/facebook.png';
import opensealogo from '../images/opensea.png';
import telegram from '../images/telegram.png';

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          <div className="sm:col-span-2 lg:col-span-3">
            <div className="mb-2">
              {/* Logo */}
              <Link to="/" className="block" aria-label="logo">
                <img className="relative rounded-full" src={TestimonialImage} width='52' height="52" alt="Testimonial 01" />
              </Link>
            </div>
          </div>

          {/* Blank 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2"> </h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"></Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"></Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"></Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"></Link>
              </li>

            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Resources</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a className="text-gray-600 hover:text-blue-900 transition duration-150 ease-in-out" href="https://gateway.pinata.cloud/ipfs/QmbvR989hV3C4AfkFBj2YYdPsdtktcuu3Z2KhkfSRrLvpY">Roadmap Download</a>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"></Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"></Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"></Link>
              </li>

            </ul>
          </div>

          {/* Blank 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2"> </h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"></Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"></Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"></Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"></Link>
              </li>

            </ul>
          </div>


          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2">Naviagte</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="/" className="text-gray-600 hover:text-blue-900 transition duration-150 ease-in-out">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/Mint" className="text-gray-600 hover:text-blue-900 transition duration-150 ease-in-out">Mint Page</Link>
              </li>
              <li className="mb-2">
                <Link to="/Roadmap" className="text-gray-600 hover:text-blue-900 transition duration-150 ease-in-out">Roadmap</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-gray-600 hover:text-blue-900 transition duration-150 ease-in-out">FAQs</Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}


        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li className="ml-4">
              <a to="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" href="https://discord.gg/3RZHubXjJK" aria-label="Discord">
                <img className=" w-8 h-8 fill-current " src={discordlogo} width="32" height="32" alt="discord" />
              </a>
            </li>

            <li className="ml-4">
              <a to="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" href="https://instagram.com/planettlgt" aria-label="Instagram">
                <img className=" w-8 h-8 fill-current " src={instalogo} width="32" height="32" alt="insta" />
              </a>
            </li>
            <li className="ml-4">
              <a to="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" href="https://t.me/+a68HYxewtztiODRl" aria-label="Telegram">
                <img className=" w-8 h-8 fill-current " src={telegram} width="32" height="32" alt="telegram" />
              </a>
            </li>
            <li className="ml-4">
              <a to="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" href="https://twitter.com/Planet_tlgt" aria-label="Twitter">
                <img className=" w-8 h-8 fill-current " src={twitterlogo} width="32" height="32" alt="twitter" />
              </a>
            </li>
            <li className="ml-4">
              <a to="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" href="https://opensea.io/collection/tlgtree" aria-label="Opensea">
                <img className=" w-8 h-8 fill-current " src={opensealogo} width="32" height="32" alt="opensea" />
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">Made by <a className="text-blue-600 hover:underline" href="https://twitter.com/TLGTree">The Seeder 🌲</a>.</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;