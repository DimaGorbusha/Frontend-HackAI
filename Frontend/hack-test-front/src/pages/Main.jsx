import React from 'react'
import DropZone from '../components/Main/DropZone'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import BottomMenu from '../components/Main/Menu/BottomMenu'


export default function Main() {
  return (
    <div>
        <Header/>
        <DropZone/>
        <BottomMenu/>
        <Footer/>
    </div>
  )
}
