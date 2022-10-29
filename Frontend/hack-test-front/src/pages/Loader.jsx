import React from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import waiting from '../img/pages/Loader/waiting.gif' 

export default function Loader() {
  return (
    <div className='bg-bg'>
        <Header/>
        <div className='flex-col text-center align-middle items-center mt-[70px]'>
            <p className='font-sussie-medium text-[24px] text-[#A4A2A2] mb-[28px]'>Немного подождите...</p>
            <img src={waiting} alt="" className='w-[371px] h-[360px] ml-[560px] mb-[120px]'/>
        </div>
        <Footer/>
    </div>
  )
}
