import Image from 'next/image'
import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Skills from '../components/Skills'
import Profile from "../Images/Profile.jpg"
import {FaReact, FaHtml5, FaCss3Alt,FaNode, FaBootstrap} from "react-icons/fa"
import {DiJavascript1} from "react-icons/di"
import {SiExpress, SiNextdotjs, SiTailwindcss, SiMysql, SiMongodb, SiSolidity,SiWeb3Dotjs} from "react-icons/si"
import Marquee from 'react-fast-marquee'

function about() {
  return (
    <div>
        <Header />
        <SideBar />
        <video className="fixed top-0 h-full w-full object-cover -z-10 overflow-hidden" 
        src="https://cdn.pixabay.com/vimeo/191745474/Full%20Moon%20-%206435.mp4?width=1920&expiry=1658730537&hash=075f77da28ea6a3c8e8809b1cb6ae8a195bd8984"
        autoPlay
        loop
        muted
        ></video>
        <div className="flex items-center justify-center fade-in">
        <div className='pb-5 overflow-y-auto body-wrapper'>
          <div className="mb-20">
            <div className="flex items-center mb-5">
              <div className='md:line'></div>
              <h1 className="font-bold text-white px-2 cursor-pointer text-3xl hover:underline-offset-4">About Me</h1>
              <div className='line'></div>
            </div>
            <div  className="flex flex-col md:flex-row justify-between w-full h-full">
              <div  className="max-h-[400px] overflow-hidden w-full mb-5 md:w-[32%] object-cover">
              <Image  src={Profile} />
              </div>
              
              <div className="h-full w-full md:w-[65%]">
                  <h1 className="font-bold text-yellow-300 text-3xl mb-3">Web Developer</h1>
                  <p className="leading-loose text-white text-lg font">A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place.</p>
              </div>
            </div>
          </div>
          <Skills />
          {/* technoligies */}
          <div>
            <div className="flex items-center mb-14">
              <div className='md:line'></div>
              <h1 className="font-bold text-white px-2 cursor-pointer text-3xl hover:underline-offset-4">Technologies</h1>
              <div className='line'></div>
            </div>
            <Marquee className="h-36 text-6xl md:text-8xl overflow-hidden mt-3" speed={100} gradientColor={[0,0,0]} gradientWidth={100}>
            
              <div className="text-yellow-300 px-14 w-full h-full"><FaReact/></div>
              <div className="text-yellow-300 px-14 w-full h-full"><FaHtml5/></div>
              <div className="text-yellow-300 px-14 w-full h-full"><FaCss3Alt/></div>
              <div className="text-yellow-300 px-14 w-full h-full"><DiJavascript1/></div>
              <div className="text-yellow-300 px-14 w-full h-full"><FaNode/></div>
              <div className="text-yellow-300 px-14 w-full h-full"><SiExpress/></div>
              <div className="text-yellow-300 px-14 w-full h-full"><SiNextdotjs/></div>
              <div className="text-yellow-300 px-14 w-full h-full"><SiTailwindcss/></div>
              <div className="text-yellow-300 px-14 w-full h-full"><FaBootstrap/></div>
              <div className="text-yellow-300 px-14 w-full h-full"><SiMysql/></div>
              <div className="text-yellow-300 px-14 w-full h-full"><SiMongodb/></div>
              <div className="text-yellow-300 px-14 w-full h-full"><SiSolidity/></div>
              <div className="text-yellow-300 px-14 w-full h-full"><SiWeb3Dotjs/></div>
              
          
          </Marquee>
          </div>
          
                
        </div>
        </div>
    </div>
  )
}

export default about


