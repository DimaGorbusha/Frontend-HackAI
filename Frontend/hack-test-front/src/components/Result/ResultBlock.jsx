import React from 'react'
import copy from '../../img/pages/Result/copy.svg'
import search from '../../img/pages/Result/search.svg'
import file from '../../img/pages/Result/file.svg'

export default function ResultBlock() {
  return (
    <div className='flex ml-[120px] mt-[102px]'>
        <div className='flex bg-main rounded-[10px] transition delay-[100] ease-in hover:bg-black'>
            <p className='font-sussie-medium text-[16px] text-white mr-[10px] pl-[53px] py-[14px]'>Копировать текст</p>
            <img src={copy} alt="" className='pr-[53px]'/>
        </div>
        <div className='flex bg-main rounded-[10px] ml-[17px] transition delay-[100] ease-in hover:bg-black'>
            <p className='font-sussie-medium text-[16px] text-white mr-[10px] pl-[30px] py-[14px]'>Найти в Яндексе</p>
            <img src={search} alt="" className='pr-[30px]'/>
        </div>
        <div className='flex bg-white rounded-[10px] ml-[17px] transition delay-[100] ease-in hover:bg-black'>
            <img src={file} alt="" className='pl-[75px] mr-[10px]'/>
            <p className='font-sussie-medium text-[16px] text-main mr-[10px] py-[14px] pr-[75px]'>Скачать файл .docx</p>
        </div>
        <div className='flex'>
          <div className='flex'>
            <h2 className=''>Текст</h2>
          </div>
        </div>
    </div>
  )
}
