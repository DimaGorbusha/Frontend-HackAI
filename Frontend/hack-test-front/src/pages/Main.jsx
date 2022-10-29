import React from 'react'
import DropZone from '../components/Main/DropZone'
import Footer from '../components/Main/Footer'
import Header from '../components/Main/Header'
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
