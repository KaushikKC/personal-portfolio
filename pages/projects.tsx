import React from 'react'
import Header from '../components/Header'
import Project from '../components/Project'
import SideBar from '../components/SideBar'
import "@fontsource/mochiy-pop-one"
function projects() {
  return (
    <div>
        <Header />
        <SideBar />
        <video className="fixed top-0 h-full w-full object-cover -z-10 overflow-hidden" 
        src="https://cdn.pixabay.com/vimeo/191745474/Full%20Moon%20-%206435.mp4?width=1920&expiry=1658730537&hash=075f77da28ea6a3c8e8809b1cb6ae8a195bd8984"
        autoPlay
        loop
        muted
        ></video>

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