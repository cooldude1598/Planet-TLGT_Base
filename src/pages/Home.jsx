import React from 'react';

import HeroHome from '../partials/HeroHome';
import Faqs from '../partials/faqs';
import Testimonials from '../partials/Testimonials';
import Mintblock from '../partials/Mintblock';
import Footer from '../partials/Footer';
import About from '../partials/About';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <About />
        <Mintblock />
        <Testimonials />
        <Faqs />
      </main>

      {/*  Site footer */}
      <Footer />

    </div>

  );
}

export default Home;