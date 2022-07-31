import Image from 'next/image';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../Images/meter1.svg"
import meter2 from "../Images/meter2.svg"
import meter3 from "../Images/meter3.svg"
import styled from "styled-components"
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Skills() {
  return (
    <div>
        <div className="flex items-center mb-8">
        <div className='md:line'></div>
        <h1 className="font-bold text-white px-2 cursor-pointer text-3xl hover:underline-offset-4">Technical Skills</h1>
        <div className='line'></div>
        </div>
        <div>
        <Carousel responsive={responsive} className="relative w-[80%] mx-auto mb-16">
            <div className='text-white font-semibold'>
                <div className='w-[60%] px-4 mb-5' >
                <Image src={meter1} />
                </div>
                <p >Full-Stack Development</p>
            </div>
            <div className='text-white font-semibold'>
                <div className='w-[60%] px-4 mb-5' >
                <Image src={meter3} />
                </div>
                <p>FrontEnd Development</p>
            </div>
            <div className='text-white font-semibold'>
                <div className='w-[60%] px-4 mb-5' >
                <Image src={meter2} />
                </div>
                <p>BackEnd Development</p>
            </div>
            <div className='text-white font-semibold'>
                <div className='w-[60%] px-4 mb-5' >
                <Image src={meter2} />
                </div>
                <p>Blockchain Development</p>
            </div>

        </Carousel>
        </div>
        <div>
            <div>
                <div className="flex items-center mb-5">
                    <div className='md:line'></div>
                    <h1 className="font-bold text-white px-2 cursor-pointer text-3xl hover:underline-offset-4">Soft Skills</h1>
                    <div className='line'></div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-3'>
                    <div className='py-3'>
                        <Skill >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 ml-5 w-12 text-blue-700 mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                            </svg>
                            <h1 className="text-white p-5  text-xl font-bold">Communication</h1>
                        </Skill>
                    </div>
                    <div className='py-3'>
                        <Skill >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 ml-5 w-10 text-red-600 mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                            </svg>
                            <h1 className="text-white p-5  text-xl font-bold">Problem Solving</h1>
                        </Skill>
                    </div>
                    <div className='py-3'>
                        <Skill >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 ml-5 w-10 text-orange-600 mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h1 className="text-white p-5  text-xl font-bold">Time Management</h1>
                        </Skill>
                    </div>
                    <div className='py-3'>
                        <Skill >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 ml-5 w-10 text-green-600 mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h1 className="text-white p-5  text-xl font-bold">Decision Making</h1>
                        </Skill>
                    </div>
                    <div className='py-3'>
                        <Skill >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 ml-5 w-10 text-sky-600 mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <h1 className="text-white p-5  text-xl font-bold">Teamwork</h1>
                        </Skill>
                    </div>
                    <div className='py-3'>
                        <Skill >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 ml-5 w-10 text-purple-600 mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h1 className="text-white p-8  text-xl font-bold">Money Mangement</h1>
                        </Skill>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    
  )
}

export default Skills

const Skill = styled.div`
    height: 32px;
    width: 92%;
    background: rgba(0,0,0,.6);
    padding: 34px;
    display: flex;
    margin-bottom: 10px;
    align-items: center;

    &::before {
        content: '';
        position: absolute;
        width: 6px;
        height: 50px;
        background: rgb(228, 238, 117);
        transition: 0.5s ease-in-out;
    }

    &:hover::before {
        width: 300px;
    }

    @media only screen and (max-width: 600px){
        &:hover::before {
            width: 40%;
        }
    }
`