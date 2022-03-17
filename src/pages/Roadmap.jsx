import React from 'react';
import { Link } from 'react-router-dom';
import Roadmap2 from '../partials/Roadmap2';
import Footer from '../partials/Footer';

import Header from '../partials/Header';

function Roadmap() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <Roadmap2 />


      </main>
      <Footer />

    </div>
  );
}

export default Roadmap;