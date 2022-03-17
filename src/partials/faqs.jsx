import React, { useState } from 'react';

function faqs() {
  <h1 id="faq"></h1>
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative transform -translate-y w-screen bg-green-200 ">

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">

                <span className="relative">FAQs</span>
              </span>{' '}
            </h2>
          </div>
        </div>
        <div className="max-w-screen-xl sm:mx-auto">
          <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <p className="mb-4 text-xl font-medium">
                  What is Planet TLGT?                </p>
                <p className="text-gray-700">
                  Planet TLGT is an ecosystem for the benefit of nature and its community.
                  <br />
                  It consists various NFT projects, Metaverse, IRL projects, Plantation drives, DAO, DeFi and many more to get profits while saving the earth.
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium">
                  What are The Lucky Golden Trees?                </p>
                <p className="text-gray-700">
                  The Lucky Golden Trees are randomly generated, non-fungible tokens,
                  also known as an "NFT." Owners gain access to community benefits such as
                  additional FREE High value NFT's, prizes and access to Planet TLGT.
                  <br />
                  There are 11111 TLGTs and each is completely unique.
                  TLGTs are minted, stored, and traded on the Polygon blockchain.
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium">
                  How do I purchase a TLGT NFT?
                </p>
                <p className="text-gray-700">
                  You can purchase a TLGT NFT on this website by scrolling to the minting section and clicking "Mint Now" once it is availabe.
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium">
                  How many TLGT NFTs exist?
                </p>
                <p className="text-gray-700">
                  There exist a total of 11111 NFTs.

                  (Excluding Hybrid Trees)
                </p>
              </div>
            </div>
            <div className="space-y-8">

              <div>
                <p className="mb-4 text-xl font-medium">
                  Are there any reserves?</p>
                <p className="text-gray-700">
                  A total of 1111 are reserved.
                  <br />
                  of which, 300 will be for the ever expanding team, and 555 for giveaways. Rest, there will be exclusive auctions.</p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium">
                  Are there any rare TLGT?
                </p>
                <p className="text-gray-700">
                  Yes, from a total of 11111 NFTs and 90+ traits, there are some rare traits.
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium">
                  How to get whitelisted?
                </p>
                <p className="text-gray-700">
                  Join our discord for a detailed guide on getting whitelisted.
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium">
                  Time required to complete Roadmap 1.x?
                </p>
                <p className="text-gray-700">
                  Roadmap 1.x is a 2 year plan.
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium">
                  What are your social media channels?
                </p>
                <p className="text-gray-700">
                  Linked to the bottom of the page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>

  );
}

export default faqs;