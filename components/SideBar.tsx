import React from 'react'
import {AiFillGithub, AiFillTwitterCircle, AiFillLinkedin, AiFillMail} from 'react-icons/ai'

function SideBar() {
  return (
    <div>
        <div className='absolute w-28 background-side shadow-2xl shadow-cyan-500/90 side-slid'>
        <div className='absolute flex flex-col bottom-0 right-5 pb-3'>
              <a className='py-3 text-xl text-white' href=""><AiFillGithub /></a>
              <a className='py-3 text-xl text-white' href=""><AiFillLinkedin /></a>
              <a className='py-3 text-xl text-white' href=""><AiFillTwitterCircle /></a>
              <a className='py-3 text-xl text-white' href=""><AiFillMail /></a>
            </div>
        </div>
    </div>
  )
}

export default SideBar