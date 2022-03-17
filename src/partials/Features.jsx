import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';
import FeaturesBg from '../images/features-bg.png';
import FeaturesElement from '../images/features-element.png';
import gif from '../images/gif.gif';
import gifVirtual from '../images/gif2.gif';
import Investor from '../images/investor.gif';

function Features() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 w-screen  sm:max-w-full pointer-events-none mb-screen bg-gradient-to-b from-green-200 to-green-200" aria-hidden="true"></div>
      <div className="relative max-w-6xl mx-auto px-40 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-4xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h3 mb-4">The Planet of the Trees</h1>
            <p className="text-lg text-gray-600">Earlier there was peace and prosperity, people were rich, earth was rich but as time passed, we have noticed that nowadays the standard of the lives of people along with our beloved mother nature is declining. To give a rise to both, Standard of life and Greenery of nature, we created this Planet.</p>
            <p className="text-lg text-gray-600"> </p>
            <p className="text-lg text-gray-600">Planet TLGT is creating its presence on virtual as well as physical world. By examining the loopholes and voids in the present system, we are able to curate a better world with infinite possibilities and to provide high returns on investment while supporting the environment.</p>
          </div>
          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-5">
            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">

              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">

                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-yellow-100 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Virtual Planet TLGT</div>
                    <div className="text-gray-600">Planet TLGT is a virtual world which consist TLGT NFTs, PFPs, TLGTverse, TLGT DAO, Golden Coin and many more including a not another P2E game and our staking platform. Its presence is not limited inside the computer but on our beloved Earth as well.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fillRule="nonzero" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-yellow-100 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Physical Planet TLGT</div>
                    <div className="text-gray-600">The physical presence of Planet TLGT will be in the form of various things, which will be specifically available for the community members for free. However, we cannot disclose much on this topic till Stage 2 is complete.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z" fill="#191919" fillRule="nonzero" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-yellow-100 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(1); }}>
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Features for invstors.</div>
                    <div className="text-gray-600">The community is rich and getting even richer day by day. All the plans formulated are to give maximum returns on the investment. We have created an ecosystem with farms, gardens, natural resources which will be a stream of passive income.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
              <div className="relative flex flex-col text-center lg:text-right">
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-full mx-auto rounded" src={FeaturesElement} width="500" height="462" alt="Features bg" />
                    <img className="md:max-w-none absolute w-full left-0 transform animate-float" src={gifVirtual} width="500" height="44" alt="Element" style={{ top: '30%' }} />
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-full mx-auto rounded" src={FeaturesElement} width="500" height="462" alt="Features bg" />
                    <img className="md:max-w-none absolute w-full left-0 transform animate-float" src={gif} width="500" height="44" alt="Element" style={{ top: '30%' }} />
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-full mx-auto rounded" src={FeaturesElement} width="500" height="462" alt="Features bg" />
                    <img className="md:max-w-none absolute w-full left-0 transform animate-float" src={Investor} width="500" height="44" alt="Element" style={{ top: '30%' }} />
                  </div>
                </Transition>

              </div>
            </div >

          </div >

        </div >
      </div >

    </section >
  );
}

export default Features;
