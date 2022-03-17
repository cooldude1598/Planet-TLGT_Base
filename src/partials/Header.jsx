import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TestimonialImage from '../images/3085.png';

function Header() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header className={`fixed w-full hover:transition-all z-30 md:bg-opacity-90 transition grid-cols-2 duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-left h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 ">
            {/* Logo */}
            <Link to="/" className="block" aria-label="logo">
              <img className="relative rounded-full" src={TestimonialImage} width='42' height="42" alt="Logo" />
            </Link>
          </div>
          <Link to="/" className="block" aria-label="logo">
            <h3 className=''> <span className="bg-clip-text text-transparent text-2xl font-extrabold p-4 bg-gradient-to-r from-green-500 to-yellow-300">Planet TLGT</span></h3>
          </Link>

          {/* Site navigation 
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              
              <li>
                <Link to="/" className="btn-sm text-gray-900 bg-yellow-200 hover:bg-green-300 ml-3">
                  <span>Home</span>
                </Link>
                <Link to="#home1" className="btn-sm text-gray-900 bg-yellow-200 hover:bg-green-300 ml-3">
                  <span>About Us</span>
                </Link>
                <Link to="/signup" className="btn-sm text-gray-900 bg-yellow-200 hover:bg-green-300 ml-3">
                  <span>Roadmap</span>
                </Link>
                <Link to="/signup" className="btn-sm text-gray-900 bg-yellow-200 hover:bg-green-300 ml-3">
                  <span>Buy Now</span>
                </Link>
                <Link to="/signup" className="btn-sm text-gray-900 bg-yellow-200 hover:bg-green-300 ml-3">
                  <span>FAQs</span>
                </Link>
              </li>
            </ul>

          </nav>*/}

        </div>
      </div>
    </header>
  );
}

export default Header;
