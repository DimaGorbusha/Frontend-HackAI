import React from 'react'
import "./Menu.css"

export default function BottomMenu() {
  return (
    <div className='ml-[120px] mt-[16px] flex'>
        <p className='font-sussie-medium text-[16px] text-white bg-main px-[123px] py-[14px] rounded-[10px] transition delay-[100] ease-in hover:bg-black'>Начать &gt;</p>
        <div className='pl-[20px] pr-[36px] py-[15px] bg-white rounded-[8px] ml-[10px]'>
            <input type="checkbox" class="custom-checkbox" id="mistakes-checking" name="mistakes-checking" value="yes"/>
            <label for="mistakes-checking" className='ml-[10px] text-[16px] font-sussie-book text-[#332E2D]'>Исправление ошибок</label>
        </div>
        <div className='pl-[20px] pr-[36px] py-[15px] bg-white rounded-[8px] ml-[10px]'>
            <input type="checkbox" class="custom-checkbox" id="censorship-checking" name="censorship-checking" value="yes"/>
            <label for="censorship-checking" className='ml-[10px] text-[16px] font-sussie-book text-[#332E2D]'>Проверка на цензурность</label>
        </div>
    </div>
  )
}
