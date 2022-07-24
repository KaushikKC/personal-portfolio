import Image from 'next/image'
import React, { useState } from 'react'
import logo from "../Images/Logo.png"
import { Transition } from "@headlessui/react";
import Link from 'next/link';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex background px-4 py-2">
      <div className="relative h-16 w-full items-center justify-center md:w-20">
        <Image objectFit='contain' src={logo} layout="fill" />
      </div>
      <div className='hidden justify-center items-center w-full md:inline-flex'>
        <a className="mx-4 p-2 lg:mx-8" href="">Home</a>
        <a className="mx-4 p-2 lg:mx-8" href="">About</a>
        <a className="mx-4 p-2 lg:mx-8" href="">Projects</a>
        <a className="mx-4 p-2 lg:mx-8" href="">Contact</a>
        
      </div>
      <div className="mr-10 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className=" inline-flex items-center justify-center p-2 rounded-md text-black  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
								) : (
									<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
								)}
							</button>
						</div>
            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
              {(ref) => (
                <div className="md:hidden" id="mobile-menu">
                  <div
                    ref={ref}
                    className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
                  >
                    <Link
                      href="/home"
                      activeClass="home"
                      to="home"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Home
                    </Link>
                    <Link
                      href="/about";
                      activeClass="about";
                      to="about";
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      About
                    </Link>

                    <Link
                      href="/work"
                      activeClass="work"
                      to="work"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Projects
                    </Link>
                  <Link
                    href="/services"
                    activeClass="services"
                    to="services"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Services
                  </Link>

                  <Link
                    href="/contact"
                    activeClass="work"
                    to="work"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            )}
				  </Transition>
    </div>
  )
}

export default Header