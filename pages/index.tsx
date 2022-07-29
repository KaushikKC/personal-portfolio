import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import { useRouter } from 'next/router'

import SideBar from '../components/SideBar'


const Home: NextPage = () => {
  const words = ["Full-stack", "Blockchain", "Front-end"];
    const { text } = useTypewriter({
        delaySpeed: 1000,
        words,
        loop: 0, // Infinit
    });

  const router = useRouter();
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
          <div className='absolute pl-16 md:pl-52 flex flex-col text-white top-60 text-ani'>
            <p className="font-bold text-lg md:text-xl small-text tracking-wide">Hello I'm</p>
            <p className=" main-text text-5xl md:text-7xl font-bold">Kaushik</p>
            <span className='flex font-bold text-lg md:text-xl'>
              <p className='pr-3'>A</p>
              <span>{text}</span>
              <p className="ml-3 text-teal-400 tracking-widest ">Web Developer</p>
            </span>
            
            <div className="mt-5">
              <button onClick={() => router.push('/projects')} className="text-white hover:bg-yellow-300 hover:text-black font-semibold px-6 md:px-8 inline-block outline-none border-none py-2 md:py-3 bg-[hsla(0,0%,100%,.12)] rounded-lg mr-5" type='submit'>My Works</button>
              <button onClick={() => router.push('/contact')} className="text-gray-900 hover:bg-[hsla(0,0%,100%,.12)] hover:text-white font-semibold px-6 md:px-8 inline-block outline-none border-none py-2 md:py-3 bg-yellow-300 rounded-lg" type='submit'>Contact Me</button>
            </div>

          </div>
          
        </div>
        
    </div>
  )
}

export default Home
