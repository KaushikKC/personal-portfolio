import Image from 'next/image'
import React, { useState } from 'react'
import logo from "../Images/Logo1.png"
import { Transition } from "@headlessui/react";
import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
  
    <div className={`fixed backdrop-blur transition duration-500 z-40 w-full ${!isOpen && "shadow-lg shadow-cyan-500/30" } header-slid`}>
        <div className="flex background px-4 py-2">
          <div className="text-white cursor-pointer relative h-16 w-full items-center justify-center md:w-20">
            <Image objectFit='contain' src={logo} layout="fill" />
          </div>
          <div className='hidden justify-center text-white items-center w-full md:inline-flex font-semibold text-base'>
            <button onClick={() => router.push('/')} className="transition hover:-translate-y-1 hover:text-teal-300 mx-4 p-2 lg:mx-8" >HOME</button>
            <button onClick={() => router.push('/about')} className=" transition hover:-translate-y-1 hover:text-teal-300 mx-4 p-2 lg:mx-8" >ABOUT</button>
            <button onClick={() => router.push('/projects')} className="transition hover:-translate-y-1  hover:text-teal-300 mx-4 p-2 lg:mx-8">PROJECTS</button>
            <button onClick={() => router.push('/contact')} className="transition hover:-translate-y-1  hover:text-teal-300 mx-4 p-2 lg:mx-8">CONTACT</button>
            
          </div>
          <div className="mr-10 flex md:hidden ">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className=" inline-flex items-center justify-center p-2 rounded-md text-teal-300  hover:text-teal-600 "
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>
                    {!isOpen ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </button>
                </div>   
          </div>
              <Transition
              show={isOpen}
              enter="transition ease-out duration-700 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {(ref) => (
                <div className="md:hidden relative top-0 w-52 ml-auto right-0 z-50 h-full" id="mobile-menu">
                  <div
                    ref={ref}
                    className="ml-auto heightd bg-black w-52 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center justify-center"
                  >
                    <div className="flex h-12 w-full bg-teal-300 items-center justify-center font-semibold text-gray-900">
                      <p>KAUSHIK</p>
                    </div>
                    <button
                      onClick={() => router.push('/')}
                      className="cursor-pointer transition hover:-translate-y-1 hover:text-teal-300 text-white block px-3 py-4 rounded-md text-bold"
                    >
                      Home
                    </button>
                    <button
                      onClick={() => router.push('/about')}
                      className="cursor-pointer transition hover:-translate-y-1 hover:text-teal-300 text-white block px-3 py-4 rounded-md text-bold"
                    >
                      About
                    </button>

                    <button
                      onClick={() => router.push('/projects')}
                      className="cursor-pointer transition hover:-translate-y-1 hover:text-teal-300 text-white block px-3 py-4 rounded-md text-bold "
                    >
                      Projects
                    </button>
                    <button
                      onClick={() => router.push('/contact')}
                      className="cursor-pointer transition hover:-translate-y-1 hover:text-teal-300 text-white block px-3 py-4 rounded-md text-bold"
                    >
                      Contact
                    </button>
                    
                  <div className="relative bottom-0 mt-36 pt-96">
                    <h1>@Kaushik</h1>
                  </div>
                  </div>
                  
                </div>
              )}
            </Transition>
          </div>
        
        
  )
}

export default Header