import React, { useState } from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import {AiFillGithub, AiFillTwitterCircle, AiFillLinkedin, AiFillMail} from 'react-icons/ai'
import styled from 'styled-components';
// import bg from '../Images/Image5.jpg'
import Image from 'next/image';
function contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <div>
        <Header />
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
          src="https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt='Background' 
          /> */}

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
                <h1 className="text-yellow-300 px-5 font-semibold text-lg">Feel Free to contact Me...</h1>
                {/* left  */}
                <Wrapper className=' flex flex-col md:flex-row gap-20 mt-10 justify-center md:justify-between relative'>
                <div className="w-full max-w-[400px] pl-10">
                  
                  <div className='flex  bg-[hsla(0,0%,100%,.12)]  p-5 items-center rounded-md mb-6'>
                    <a className="cursor-pointer text-white mr-4 text-lg p-2 bg-gray-600 rounded-full" href="https://www.linkedin.com/in/kaushik-k-36b871219/"><AiFillLinkedin/></a>
                    <a className="text-white cursor-pointer text-xl font-bold " href="https://www.linkedin.com/in/kaushik-k-36b871219/">Linkedin</a>
                  </div>
                  <div className='flex bg-[hsla(0,0%,100%,.12)] p-5 items-center rounded-md mb-6'>
                    <a className="text-white cursor-pointer mr-4 text-lg p-2 bg-gray-600 rounded-full" href="https://twitter.com/Kaushikk1704"><AiFillTwitterCircle/></a>
                    <a className="text-white cursor-pointer text-xl font-bold " href="https://twitter.com/Kaushikk1704">Twitter</a>
                  </div>
                  <div className='flex bg-[hsla(0,0%,100%,.12)]  p-5 items-center rounded-md mb-6'>
                    <a className="text-white cursor-pointer mr-4 text-lg p-2 bg-gray-600 rounded-full" href="https://github.com/KaushikKC"><AiFillGithub/></a>
                    <a className="text-white cursor-pointer text-xl font-bold " href="https://github.com/KaushikKC">GitHub</a>
                  </div>
                  <div className='flex bg-[hsla(0,0%,100%,.12)] p-5 items-center rounded-md mb-6'>
                    <a className="text-white cursor-pointer mr-4 text-lg p-2 bg-gray-600 rounded-full" href="kccreations1704@gmail.com"><AiFillMail/></a>
                    <a className="text-white cursor-pointer text-xl font-bold " href="kccreations1704@gmail.com">Mail</a>
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
  /* &::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: gray;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  } */
`