import React from 'react'
import {AiFillGithub, AiFillTwitterCircle, AiFillLinkedin, AiFillMail} from 'react-icons/ai'

function SideBar() {
  return (
    <div>
        <div className='fixed hidden md:inline-flex w-18 md:w-14 lg:w-28 h-full background-side shadow-2xl shadow-cyan-500/90 side-slid'>
        <div className='absolute flex flex-col bottom-0 right-5 pb-3 cursor-pointer'>
              <a className='transition py-3 text-xl text-white hover:text-teal-300 hover:-translate-y-1 hover:scale-110 duration-500' href="https://github.com/KaushikKC"><AiFillGithub /></a>
              <a className='transition py-3 text-xl text-white hover:text-teal-300 hover:-translate-y-1 hover:scale-110 duration-500' href="https://www.linkedin.com/in/kaushik-k-36b871219/"><AiFillLinkedin /></a>
              <a className='transition py-3 text-xl text-white hover:text-teal-300 hover:-translate-y-1 hover:scale-110 duration-500' href="https://twitter.com/Kaushikk1704"><AiFillTwitterCircle /></a>
              <a className='transition py-3 text-xl text-white hover:text-teal-300 hover:-translate-y-1 hover:scale-110 duration-500' href="kccreations1704@gmail.com"><AiFillMail /></a>
            </div>
        </div>
    </div>
  )
}

export default SideBar