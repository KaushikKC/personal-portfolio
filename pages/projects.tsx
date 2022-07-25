import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
function projects() {
  return (
    <div>
        <Header />
        <SideBar />
        <video className="absolute top-0 h-full w-full object-cover -z-10 overflow-hidden" 
        src="https://cdn.pixabay.com/vimeo/191745474/Full%20Moon%20-%206435.mp4?width=1920&expiry=1658730537&hash=075f77da28ea6a3c8e8809b1cb6ae8a195bd8984"
        autoPlay
        loop
        muted
        ></video>
    </div>
  )
}

export default projects