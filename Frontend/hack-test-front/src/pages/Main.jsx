import React from 'react'
import DropZone from '../components/Main/DropZone'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import BottomMenu from '../components/Main/Menu/BottomMenu'
import bg from '../img/pages/Main/bg.png'


export default function Main() {
  return (
    <div className='bg-bg'>
        <Header/>
        <DropZone/>
        <BottomMenu/>
        <Footer/>
        <img src={bg} alt="" className='h-[3947px]'/>
    </div>
  )
}
