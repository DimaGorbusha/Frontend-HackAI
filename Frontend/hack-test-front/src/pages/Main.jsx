import React from 'react'
import DropZone from '../components/DropZone'
import Footer from '../components/Footer'
import Header from '../components/Header'
import BottomMenu from '../components/Menu/BottomMenu'


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
