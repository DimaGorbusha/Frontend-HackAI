import React from 'react'
import logo from '../../img/common/logo.svg'

export default function Header() {
  return (
    <div className='flex pt-[122px]'>
        <img src={logo} className="w-[58px] h-[32px] ml-[647px]" alt="logo" />
        <p className='font-sussie-regular text-[16px] text-darkgray mt-[10px] ml-[10px]'>Img to text</p>
    </div>
  )
}
