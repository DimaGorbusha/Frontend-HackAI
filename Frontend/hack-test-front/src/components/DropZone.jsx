import React from 'react'
import upload from "../img/pages/Main/upload.svg"

export default function DropZone() {
    const borderStyle = {
        border: '2px dashed #696969',
    }
  
    return (
    <div className='bg-white w-[1201px] h-[272px] rounded-[15px] mt-[40px] ml-[120px]'>
        <div className='ml-[24px] w-[1153px] h-[230px] flex items-center align-middle text-center flex-col '>
             <div className='mt-[21px] px-[301px] pb-[60px] rounded-[13px] flex items-center align-middle text-center flex-col' style={borderStyle}>
                <img src={upload} alt="" className='mt-[101px]'/>
                <p className='mt-[15px] font-sussie-regular text-[20px] text-darkgray '>Перетащите файлы сюда или нажмите, чтобы загрузить</p>
             </div>
        </div>
    </div>
  )
}
