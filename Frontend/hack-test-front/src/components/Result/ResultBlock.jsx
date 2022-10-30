import React, {useState} from 'react'
import copy from '../../img/pages/Result/copy.svg'
import search from '../../img/pages/Result/search.svg'
import file from '../../img/pages/Result/file.svg'

export default function ResultBlock() {
  const [text, setText] = useState("туманы лимана манили меня");
  let host = "https://ocr.lowderplay.dev/";
  let pic_name = "00009.jpg";
  let txt_name = "00009.txt";
  let pic_url = `get-image/${pic_name}`;
  let txt_url = `get-texts/${txt_name}`;
  pic_url = host + pic_url;
  txt_url = host + txt_url;
  let ya_url = 'https://yandex.ru/search/?text='
  ya_url += text

  console.log(ya_url);
  return (
    <div>
      <div className='flex ml-[120px] mt-[102px]'>
          <div className='flex bg-main rounded-[10px] transition delay-[100] ease-in hover:bg-black cursor-pointer' onClick={() => {navigator.clipboard.writeText(text)}}>
              <p className='font-sussie-medium text-[16px] text-white mr-[10px] pl-[53px] py-[14px]'>Копировать текст</p>
              <img src={copy} alt="" className='pr-[53px]'/>
          </div>
          <div className='flex bg-main rounded-[10px] ml-[17px] transition delay-[100] ease-in hover:bg-black cursor-pointer'>
              <a href={ya_url} className='font-sussie-medium text-[16px] text-white mr-[10px] pl-[30px] py-[14px]'>Найти в Яндексе</a>
              <img src={search} alt="" className='pr-[30px]'/>
          </div>
          <div className='flex bg-white rounded-[10px] ml-[17px] transition delay-[100] ease-in hover:bg-black cursor-pointer'>
              <img src={file} alt="" className='pl-[75px] mr-[10px]'/>
              <a href={txt_url}><p className='font-sussie-medium text-[16px] text-main mr-[10px] py-[14px] pr-[75px]'>Скачать файл .txt</p></a>
          </div>
      </div>
      <div className='flex mt-[17px]'>
        <div className='flex-col bg-white min-w-[690px] min-h-[275px] ml-[120px] rounded-[8px]'>
          <h2 className='font-sussie-semibold text-[15px] text-[#332E2D] pt-[18px] pl-[20px] mb-[8px]'>Текст</h2>
          <p className='font-sussie-regular text-[14px] text-black pl-[20px] '>{text}</p>
        </div>
        <div className='flex-col bg-white min-w-[486px] min-h-[275px] ml-[24px] rounded-[8px]'>
          <h2 className='font-sussie-semibold text-[15px] text-[#332E2D] pt-[18px] pl-[20px] mb-[8px]'>Изображение</h2>
          <img src={pic_url} alt="" className='pl-[20px] max-w-[450] max-h-[209]'/>
        </div>
      </div>
      <a href="/"><p className='bg-main rounded-[10px] transition delay-[100] ease-in hover:bg-black font-sussie-medium text-[16px] text-white ml-[120px] mr-[1038px] pl-[75px] py-[14px] mt-[17px] mb-[104px] cursor-pointer'>Начать сначала &gt;</p></a>
    </div>
  )
}
 