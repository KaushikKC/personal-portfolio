import type { NextPage } from 'next'
import { VideoHTMLAttributes } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import { useRouter } from 'next/router'
// import bg from '../Images/Image5.jpg'
import ReactPlayer from 'react-player'


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
      
        
        <Header />
        <SideBar />
        {/* <ReactPlayer url={'} /> */}
        <div className="overlay"></div>
        <video className="fixed top-0 h-full w-full object-cover -z-10 overflow-hidden" 
        src="https://assets.mixkit.co/videos/preview/mixkit-aerial-landscape-of-a-huge-city-at-dusk-41374-large.mp4"
        autoPlay
        loop
        muted
  
        >  
        </video>
        
        {/* <img
          className="fixed h-full w-full object-cover -z-10 overflow-hidden"
          src="https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt='Background' 
          /> */}
        
        <div className="">
          <div className='absolute pl-16 md:pl-52 flex flex-col text-white top-60 text-ani'>
            <p className="font-bold text-lg md:text-xl small-text tracking-wide">Hello I'm</p>
            <p className=" main-text text-5xl md:text-7xl font-bold">Kaushik</p>
            <span className='flex font-bold text-lg md:text-xl'>
              <p className='pr-3'>A</p>
              <span>{text}</span>
              <p className="ml-3 text-teal-400 tracking-widest ">Developer</p>
            </span>
            
            <div className="mt-5">
              <button onClick={() => router.push('/projects')} className="text-white hover:bg-yellow-300 hover:text-black font-semibold px-6 md:px-8 inline-block outline-none border-none py-2 md:py-3 bg-[hsla(0,0%,100%,.12)] rounded-lg mr-5" type='submit'>My Works</button>
              <button onClick={() => router.push('/contact')} className="text-white hover:bg-yellow-300 hover:text-black font-semibold px-6 md:px-8 inline-block outline-none border-none py-2 md:py-3 bg-[hsla(0,0%,100%,.12)] rounded-lg" type='submit'>Contact Me</button>
            </div>

          </div>
          
        </div>
        
    </div>
  )
}

export default Home
