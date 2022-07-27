import Image from 'next/image'
import React from 'react'
import styled from "styled-components"
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Skills from '../components/Skills'
import Profile from "../Images/profile.jpg"
import Background from "../Images/Untitled-1.png"
import {FaReact, FaHtml5, FaCss3Alt,FaNode, FaBootstrap} from "react-icons/fa"
import {DiJavascript1} from "react-icons/di"
import {SiExpress, SiNextdotjs, SiTailwindcss, SiMysql, SiMongodb, SiSolidity,SiWeb3Dotjs} from "react-icons/si"

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
        <div className=' absolute overflow-y-auto left-24 md:left-36 body-wrapper'>
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
                  <h1 className="font-bold text-green-400 text-3xl">Web Developer</h1>
                  <p className="leading-loose text-white text-lg font">A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place.</p>
              </div>
            </div>
          </div>
          <Skills />
          {/* technoligies */}
          <Marquee>
            <div className="maarquee-content">
              <li className="text-white"><FaReact/></li>
              <li className="text-white"><FaHtml5/></li>
              <li className="text-white"><FaCss3Alt/></li>
              <li className="text-white"><DiJavascript1/></li>
              <li className="text-white"><FaNode/></li>
              <li className="text-white"><SiExpress/></li>
              <li className="text-white"><SiNextdotjs/></li>
              <li className="text-white"><SiTailwindcss/></li>
              <li className="text-white"><FaBootstrap/></li>
              <li className="text-white"><SiMysql/></li>
              <li className="text-white"><SiMongodb/></li>
              <li className="text-white"><SiSolidity/></li>
              <li className="text-white"><SiWeb3Dotjs/></li>
            </div>
          </Marquee>
                
        </div>
    </div>
  )
}

export default about

const Marquee = styled.div`
  width: 80vw;
  height: 20vw;
  background-color: transparent;
  color: #eee;
  overflow: hidden;
  position: relative;

  &::before, &::after {
    position: absolute;
    top: 0;
    width: 10rem;
    height: 100%;
    content: "";
    z-index: 1
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, #111 0%, transparent 100%);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, #111 0%, transparent 100%);
  }

`
