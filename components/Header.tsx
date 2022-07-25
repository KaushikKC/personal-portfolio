import Image from 'next/image'
import React, { useState } from 'react'
import logo from "../Images/Logo.png"
import { Transition } from "@headlessui/react";
import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
  
    <div className="z-50 absolute w-full shadow-lg shadow-cyan-500/50 header-slid">
        <div className="flex background px-4 py-2">
          <div className="text-white relative h-16 w-full items-center justify-center md:w-20">
            <Image objectFit='contain' src={logo} layout="fill" />
          </div>
          <div className='hidden justify-center text-white items-center w-full md:inline-flex'>
            <button onClick={() => router.push('/')} className="mx-4 p-2 lg:mx-8 animation" href="">Home</button>
            <button onClick={() => router.push('/about')} className="mx-4 p-2 lg:mx-8 animation" href="">About</button>
            <button onClick={() => router.push('/projects')} className="mx-4 p-2 lg:mx-8 animation" href="">Projects</button>
            <button onClick={() => router.push('/contact')} className="mx-4 p-2 lg:mx-8 animation" href="">Contact</button>
            
          </div>
          <div className="mr-10 flex md:hidden ">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className=" inline-flex items-center justify-center p-2 rounded-md text-white  hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-green"
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
                <div className="md:hidden h-full" id="mobile-menu">
                  <div
                    ref={ref}
                    className="ml-auto heightd bg-gray-900 w-52 px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center justify-center"
                  >
                    <a
                      className="cursor-pointer animation text-white block px-3 py-4 rounded-md text-bold"
                    >
                      Home
                    </a>
                    <a
                      className="cursor-pointer animation text-white block px-3 py-4 rounded-md text-bold"
                    >
                      About
                    </a>

                    <a
                      className="cursor-pointer animation text-white block px-3 py-4 rounded-md text-bold "
                    >
                      Projects
                    </a>
                    <a
                      className="cursor-pointer animation text-white block px-3 py-4 rounded-md text-bold"
                    >
                      Contact
                    </a>
                    
                  </div>
                </div>
              )}
            </Transition>
          </div>
        
        
  )
}

export default Header