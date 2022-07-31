import React from 'react'
import Header from '../components/Header'
import Project from '../components/Project'
import SideBar from '../components/SideBar'
import "@fontsource/mochiy-pop-one"
import Image from 'next/image'
// import bg from '../Images/Image5.jpg'
function projects() {
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

        {/* Project-Section */}

        <div className="flex items-center justify-center fade-in">
          <div className='pb-5 pt-8 overflow-y-auto body-wrapper'>
            <div className="section min-h-[1400px]">
              <div className="container mx-auto">
                <div className="flex flex-col items-center">
                  <div className="flex items-center mb-5">
                    <div className='md:line'></div>
                    <h1 className="section-title relative text-white before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block font-bold text-3xl ">My Works</h1>
                    <div className='line'></div>
                  </div>
        
                </div>
                <Project />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default projects