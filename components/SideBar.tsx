import React from 'react'
import {AiFillGithub, AiFillTwitterCircle, AiFillLinkedin, AiFillMail} from 'react-icons/ai'

function SideBar() {
  return (
    <div>
        <div className='absolute w-28 h-full background-side shadow-2xl shadow-cyan-500/90 side-slid'>
        <div className='absolute flex flex-col bottom-0 right-5 pb-3 cursor-pointer'>
              <a className='py-3 text-xl text-white hover:text-teal-300' href="https://github.com/KaushikKC"><AiFillGithub /></a>
              <a className='py-3 text-xl text-white hover:text-teal-300' href="https://www.linkedin.com/in/kaushik-k-36b871219/"><AiFillLinkedin /></a>
              <a className='py-3 text-xl text-white hover:text-teal-300' href="https://twitter.com/Kaushikk1704"><AiFillTwitterCircle /></a>
              <a className='py-3 text-xl text-white hover:text-teal-300' href="kccreations1704@gmail.com"><AiFillMail /></a>
            </div>
        </div>
    </div>
  )
}

export default SideBar