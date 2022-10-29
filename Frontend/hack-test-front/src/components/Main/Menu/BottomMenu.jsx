import React from 'react'
import "./Menu.css"

export default function BottomMenu() {
  return (
    <div className='ml-[110px] mt-[16px] flex'>
        <div className='pl-[20px] pr-[36px] py-[15px] bg-white rounded-[8px] ml-[10px]'>
            <input type="checkbox" className="custom-checkbox" id="ethics-checking" name="ethics-checking" value="yes"/>
            <label for="ethics-checking" className='ml-[10px] text-[16px] font-sussie-book text-[#332E2D]'>Проверка на этичность</label>
        </div>
        <div className='pl-[20px] pr-[36px] py-[15px] bg-white rounded-[8px] ml-[10px]'>
            <input type="checkbox" className="custom-checkbox" id="mistakes-checking" name="mistakes-checking" value="yes"/>
            <label for="mistakes-checking" className='ml-[10px] text-[16px] font-sussie-book text-[#332E2D]'>Исправление ошибок</label>
        </div>
        <div className='pl-[20px] pr-[36px] py-[15px] bg-white rounded-[8px] ml-[10px]'>
            <input type="checkbox" className="custom-checkbox" id="censorship-checking" name="censorship-checking" value="yes"/>
            <label for="censorship-checking" className='ml-[10px] text-[16px] font-sussie-book text-[#332E2D]'>Проверка на цензурность</label>
        </div>
        <div className='dropdown'>
          <button className="dropbtn font-sussie-book rounded-[8px] pl-[28px] pr-[161px] py-[15px]">Выбрать язык</button>
          <div className="dropdown-content">
            <a href="#">Русский</a>
            <a href="#">Английский</a>
            <a href="#">Автоматически</a>
          </div>
        </div>
    </div>
  )
}
