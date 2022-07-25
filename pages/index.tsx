import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'

import SideBar from '../components/SideBar'

const Home: NextPage = () => {
  const words = ["Full-stack", "Blockchain", "Front-end"];
    const { text } = useTypewriter({
        delaySpeed: 1000,
        words,
        loop: 0, // Infinit
    });
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
        <Header />
        <SideBar />
        <video className="absolute top-0 h-full w-full object-cover -z-10 overflow-hidden" 
        src="https://cdn.pixabay.com/vimeo/191745474/Full%20Moon%20-%206435.mp4?width=1920&expiry=1658730537&hash=075f77da28ea6a3c8e8809b1cb6ae8a195bd8984"
        autoPlay
        loop
        muted
        ></video>
        <div className="">
          <div className='absolute pl-52 flex flex-col text-white top-60 text-ani'>
            <p className="font-bold text-xl small-text tracking-wide">Hello I'm</p>
            <p className=" main-text">Kaushik</p>
            <span className='flex font-bold text-xl'>
              <p className='px-3'>A</p>
              <span>{text}</span>
              <p className="ml-3 text-teal-400 tracking-widest ">Web Developer</p>
            </span>
            

          </div>
          
        </div>
        
    </div>
  )
}

export default Home
