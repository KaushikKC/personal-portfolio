import React, { useState } from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import {AiFillGithub, AiFillTwitterCircle, AiFillLinkedin, AiFillMail} from 'react-icons/ai'
import styled from 'styled-components';
function contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <div>
        <Header />
        <video className="fixed top-0 h-full w-full object-cover -z-10 overflow-hidden" 
        src="https://cdn.pixabay.com/vimeo/191745474/Full%20Moon%20-%206435.mp4?width=1920&expiry=1658730537&hash=075f77da28ea6a3c8e8809b1cb6ae8a195bd8984"
        autoPlay
        loop
        muted
        ></video>
          <div className="flex items-center justify-center fade-in">
            <div className='pb-5 overflow-y-auto body-wrapper'>
              <div className="flex flex-col w-full justify-center items-center">
              <p className="text-white w-96 mb-3 text-sm flex justify-center">Get in touch with me</p>
              <div className="flex items-center mb-5">
                <div className='md:line'></div>
                <h1 className="font-bold text-white px-2 cursor-pointer text-3xl hover:underline-offset-4">Contact Me</h1>
                <div className='line'></div>
                </div>
                </div>
                {/* left  */}
                <Wrapper className=' flex flex-col md:flex-row gap-20 mt-20 justify-center md:justify-between relative'>
                <div className="w-full max-w-[500px]">
                  <div className='flex cursor-pointer bg-gray-900 p-5 items-center rounded-md mb-6'>
                    <a className="text-white mr-4 text-lg p-2 bg-gray-600 rounded-full" href="https://www.linkedin.com/in/kaushik-k-36b871219/"><AiFillLinkedin/></a>
                    <p className="text-white text-xl font-bold ">Linkedin</p>
                  </div>
                  <div className='flex cursor-pointer bg-gray-900 p-5 items-center rounded-md mb-6'>
                    <a className="text-white mr-4 text-lg p-2 bg-gray-600 rounded-full" href="https://twitter.com/Kaushikk1704"><AiFillTwitterCircle/></a>
                    <p className="text-white text-xl font-bold ">Twitter</p>
                  </div>
                  <div className='flex cursor-pointer bg-gray-900 p-5 items-center rounded-md mb-6'>
                    <a className="text-white mr-4 text-lg p-2 bg-gray-600 rounded-full" href="https://github.com/KaushikKC"><AiFillGithub/></a>
                    <p className="text-white text-xl font-bold ">GitHub</p>
                  </div>
                  <div className='flex cursor-pointer bg-gray-900 p-5 items-center rounded-md mb-6'>
                    <a className="text-white mr-4 text-lg p-2 bg-gray-600 rounded-full" href="kccreations1704@gmail.com"><AiFillMail/></a>
                    <p className="text-white text-xl font-bold ">Mail</p>
                  </div>
                </div>
                {/* right  */}
                <div className="md:line-vertical"></div>
                <div className='w-full max-w-[500px]'>
                  <form className='w-full'>
                    <div className="w-full my-3 relative inputBox">
                      <input type="text" name='' required={true}/>
                      <span>Your Name</span>
                    </div>
                    <div className="w-full my-3 relative inputBox">
                      <input type="text" name='' required={true}/>
                      <span>Your Email</span>
                    </div>
                    <div className="w-full my-3 relative inputBox">
                      <textarea name='message' required={true}/>
                      <span>Your Message</span>
                    </div>
                    <button className="text-gray-700 font-semibold px-6 inline-block outline-none border-none py-3 bg-yellow-400 rounded-lg" type='submit'>Send</button>
                  </form>
              </div>
              </Wrapper>
            </div>
          </div>
    </div>
  )
}

export default contact

const Wrapper = styled.div`
  &::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: gray;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
`