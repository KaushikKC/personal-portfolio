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
// import bg from '../Images/Image5.jpg'


function about() {
  return (
    <div>
        <Header />
        <SideBar />
        
        <video className="fixed top-0 h-full w-full object-cover -z-10 overflow-hidden" 
        src="https://assets.mixkit.co/videos/preview/mixkit-aerial-landscape-of-a-huge-city-at-dusk-41374-large.mp4"
        autoPlay
        loop
        muted
  
        >  
        </video>
      
          {/* <img
          className="fixed h-full w-full object-cover -z-10 overflow-hidden"
          src="https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt='Background' 
          /> */}
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
                  <p className="leading-loose text-white text-lg font pr-3">
                    Hello, I'm Kaushik and I'm an ambitious 18-year-old Web Developer hailing from India. Ever since I delved into the world of technology, I have been driven by a passion for creating impactful projects that bring value to people's lives. I embarked on my journey as a developer in 2020, and since then, I have acquired a comprehensive understanding of full stack development.Throughout my journey, I have successfully completed numerous projects that have honed my skills and enriched my knowledge. I take great pride in my ability to conceptualize, design, and implement projects that not only meet the needs of my clients but also exceed their expectations.<br></br> <br></br> Thank you for visiting my About page. If you're interested in working together or simply want to connect, please feel free to reach out. Let's create something amazing together! 
                    </p>
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
            <Marquee className="h-36 text-6xl md:text-8xl overflow-hidden mt-3" speed={80} gradientColor={[0,0,0]} gradientWidth={100}>
            
              <div className="text-yellow-300 px-14 w-full h-4/6"><FaReact/></div>
              <div className="text-yellow-300 px-14 w-full h-4/6"><FaHtml5/></div>
              <div className="text-yellow-300 px-14 w-full h-4/6"><FaCss3Alt/></div>
              <div className="text-yellow-300 px-14 w-full h-4/6"><DiJavascript1/></div>
              <div className="text-yellow-300 px-14 w-full h-4/6"><FaNode/></div>
              <div className="text-yellow-300 px-14 w-full h-4/6"><SiExpress/></div>
              <div className="text-yellow-300 px-14 w-full h-4/6"><SiNextdotjs/></div>
              <div className="text-yellow-300 px-14 w-full h-4/6"><SiTailwindcss/></div>
              <div className="text-yellow-300 px-14 w-full h-4/6"><FaBootstrap/></div>
              <div className="text-yellow-300 px-14 w-full h-4/6"><SiMysql/></div>
              <div className="text-yellow-300 px-14 w-full h-4/6"><SiMongodb/></div>
              <div className="text-yellow-300 px-14 w-full h-4/6"><SiSolidity/></div>
              <div className="text-yellow-300 px-14 w-full h-4/6"><SiWeb3Dotjs/></div>
              
          
          </Marquee>
          </div>
          
                
        </div>
        </div>
    </div>
  )
}

export default about


