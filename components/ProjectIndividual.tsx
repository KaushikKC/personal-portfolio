import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

function ProjectIndividual({item}:any) {

  return (
    <div key={item.id} className='flex flex-col items-center text-center cont'>
      <Cont className='mb-8 h-60'>
        <Image 
        className='rounded-2xl cursor-pointer h-32 absolute hover:opacity-50' 
        src={item.image} alt='' />
        <a href={item.URL} className='cursor-pointer'>github</a>
      </Cont>
      <p className='capitalize text-yellow-300 text-sm mb-3 font-semibold'>{item.category}</p>
      <h3 className='text-2xl text-white font-semibold capitalize mb-3'>{item.name}</h3>

    
      
    </div>
  )
}

export default ProjectIndividual

const Cont = styled.div`
    background-color: #000;
    display: inline-block;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    margin: 10px;
    max-width: 315px;
    min-width: 230px;
    overflow: hidden;
    position: relative;
    text-align: center;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.35s ease;
    transition: all 0.35s ease;


    & a {
        background-color: #000000;
        border: 2px solid #fff;
        color: #fff;
        font-size: 1em;
        font-weight: 600;
        letter-spacing: 1px;
        margin: 0;
        padding: 5px 10px;
        text-transform: uppercase;
    }

    &::before, &::after {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        -webkit-transition: all 0.35s ease;
        transition: all 0.35s ease;
        background-color: #000000;
        border-left: 3px solid #fff;
        border-right: 3px solid #fff;
        content: '';
        opacity: 0.9;
        z-index: 1;
    }

    &::before {
        -webkit-transform: skew(45deg) translateX(-155%);
        transform: skew(45deg) translateX(-155%);
    }

    &::after {
        -webkit-transform: skew(45deg) translateX(155%);
        transform: skew(45deg) translateX(155%);
    }

    & Image {
        backface-visibility: hidden;
        max-width: 100%;
        vertical-align: top;
    }

    & a {
        top: 50%;
        left: 50%;
        position: absolute;
        z-index: 2;
        -webkit-transform: translate(-50%, -50%) scale(0.5);
        transform: translate(-50%, -50%) scale(0.5);
        opacity: 0;
        -webkit-box-shadow: 0 0 10px #000000;
        box-shadow: 0 0 10px #000000;
    }

    &:hover Image {
        opacity: 0.5;
    }

    &:hover:before {
        -webkit-transform: skew(45deg) translateX(-55%);
        transform: skew(45deg) translateX(-55%);
    }

    &:hover:after {
        -webkit-transform: skew(45deg) translateX(55%);
        transform: skew(45deg) translateX(55%);
    }

    &:hover a {
        -webkit-transform: translate(-50%, -50%) scale(1);
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
    }
`