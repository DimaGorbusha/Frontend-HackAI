import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import upload from "../img/pages/Main/upload.svg"
import Header from '../components/common/Header'
import bg from '../img/pages/Main/bg.png'
import arrow from '../img/pages/Main/arrow.svg'
import "../components/Main/Menu/Menu.css"
import axios from 'axios'
import copy from '../img/pages/Result/copy.svg'
import search from '../img/pages/Result/search.svg'
import file_img from '../img/pages/Result/file.svg'


export default function Main() {
  const [drag, setDrag] = useState(false);
  const [text, setText] = useState("");
  const [img_url_state, setImgUrl] = useState("");
  const [txt_url_state, setTxtUrl] = useState("");
  const [search_url, setSearchUrl] = useState("");
  const [main_visible, setMainVisible]  = useState("");

  let file;
  const navigate = useNavigate();
  const [ethics, setEthics] = useState(false);
  const [mistakes, setMistakes] = useState(false);
  const [lang, setLang] = useState("auto");
  const [censor, setCensor] = useState(false);
  const [langSwitcher, setLangSwithcer] = useState("auto");
  let ya_url = 'https://yandex.ru/search/?text='
  let alarm_ethics = false;
  let alarm_censor = false;
  const borderStyle = {
      border: '2px dashed #696969',
  }


  function fileHandler(e){
      let pic_url = `get-image/`;
      let txt_url = `get-texts/`;
      let host = "https://ocr.lowderplay.dev/";
      let url = `import/${ethics}&${mistakes}&${censor}&${langSwitcher}`;
      url = host + url

      
      e.preventDefault();
      file = e.dataTransfer.files[0];
      const formData = new FormData();
      formData.append('file', file)
      console.log(file);

      axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }})
        .then(res => {
          console.log(res);
          alarm_censor = res.data.alarm_censor;
          alarm_ethics = res.data.alarm_ethics;
          pic_url += res.data.img_filename;
          pic_url = host + pic_url
          txt_url = host + txt_url
          setTimeout(function(){
            setImgUrl(pic_url);
          }, 1000);
          setText(res.data.result);
          ya_url += res.data.result
          setSearchUrl(ya_url);
          txt_url += res.data.txt_filename;
          setTxtUrl(txt_url);
          if (alarm_censor=== true){
            alert("Будьте осторожны, в вашем запросе содержится нецензурная лексика!")
          }else if(alarm_ethics === true){
            alert("Будьте осторожны, в вашем запросе содержатся неэтичные выражения!")
          }
        })

      setDrag(false);
  }

  function dragStartHandler(e){
      e.preventDefault();
      setDrag(true)
  }

  function dragLeaveHandler(e){
      e.preventDefault();
      setDrag(false)
  }

  const censorHandler = () => {
    setCensor(!censor);
  }

  const ethicsHandler = () => {
    setEthics(!ethics);
  }

  const mistakesHandler = () => {
    setMistakes(!mistakes);
  }

  const langHandler = (e, language) => {
    e.preventDefault();
    setLangSwithcer(language);
    setLang(langSwitcher);
  }
  return (
    <div className='bg-bg'>
        <Header/>
        <div className='bg-white w-[1201px] h-[272px] rounded-[15px] mt-[40px] ml-[120px]'>
          <div className='ml-[24px] w-[1153px] h-[230px] flex items-center align-middle text-center flex-col '>
              {drag
              ?<div
                  onDragStart={e => dragStartHandler(e)}
                  onDragLeave={e => dragLeaveHandler(e)}
                  onDragOver={e => dragStartHandler(e)}
                  onDrop={e => fileHandler(e)}
                  className='mt-[21px] px-[410px] pb-[85px] rounded-[13px] flex items-center align-middle text-center flex-col' style={borderStyle}>
                  <p className='mt-[116px] font-sussie-regular text-[20px] text-darkgray '>Отпустите файл, чтобы загрузить</p>
              </div>
              : <div
                  onDragStart={e => dragStartHandler(e)}
                  onDragLeave={e => dragLeaveHandler(e)}
                  onDragOver={e => dragStartHandler(e)}
                  className='mt-[21px] px-[400px] pb-[60px] rounded-[13px] flex items-center align-middle text-center flex-col' style={borderStyle}>
                  <img src={upload} alt="" className='mt-[101px]'/>
                  <p className='mt-[15px] font-sussie-regular text-[20px] text-darkgray '>Перетащите файл, чтобы загрузить</p>
              </div>
              }
          </div>
        </div>
        <div className='ml-[110px] mt-[16px] flex mb-[190px]'>
          <div className='pl-[20px] pr-[36px] py-[15px] bg-white rounded-[8px] ml-[10px]'>
              <input type="checkbox" className="custom-checkbox" id="ethics-checking" name="ethics-checking" value="yes" checked={ethics} onChange={ethicsHandler}/>
              <label for="ethics-checking" className='ml-[10px] text-[16px] font-sussie-book text-[#332E2D]'>Проверка на этичность</label>
          </div>
          <div className='pl-[20px] pr-[36px] py-[15px] bg-white rounded-[8px] ml-[10px]'>
              <input type="checkbox" className="custom-checkbox" id="mistakes-checking" name="mistakes-checking" value="yes" checked={mistakes} onChange={mistakesHandler}/>
              <label for="mistakes-checking" className='ml-[10px] text-[16px] font-sussie-book text-[#332E2D]'>Исправление ошибок</label>
          </div>
          <div className='pl-[20px] pr-[36px] py-[15px] bg-white rounded-[8px] ml-[10px]'>
              <input type="checkbox" className="custom-checkbox" id="censorship-checking" name="censorship-checking" value="yes" checked={censor} onChange={censorHandler}/>
              <label for="censorship-checking" className='ml-[10px] text-[16px] font-sussie-book text-[#332E2D]'>Проверка на цензурность</label>
          </div>
          <div className='dropdown'>
            <button className="dropbtn font-sussie-book rounded-[8px] pl-[28px] pr-[161px] py-[15px]">Выбрать язык</button>
            <div className="dropdown-content">
              <a onClick={(e) => langHandler(e, 'rus')}>Русский</a>
              <a onClick={(e) => langHandler(e, 'eng')}>Английский</a>
              <a onClick={(e) => langHandler(e, 'auto')}>Автоматически</a>
            </div>
          </div>
        </div>
        <div>
        <div className='flex ml-[120px] mt-[102px]'>
            <div className='flex bg-main rounded-[10px] transition delay-[100] ease-in hover:bg-black cursor-pointer' onClick={() => {navigator.clipboard.writeText(text)}}>
                <p className='font-sussie-medium text-[16px] text-white mr-[10px] pl-[53px] py-[14px]'>Копировать текст</p>
                <img src={copy} alt="" className='pr-[53px]'/>
            </div>
            <div className='flex bg-main rounded-[10px] ml-[17px] transition delay-[100] ease-in hover:bg-black cursor-pointer'>
                <a href={search_url} className='font-sussie-medium text-[16px] text-white mr-[10px] pl-[30px] py-[14px]'>Найти в Яндексе</a>
                <img src={search} alt="" className='pr-[30px]'/>
            </div>
            <div className='flex bg-white rounded-[10px] ml-[17px] transition delay-[100] ease-in hover:bg-black cursor-pointer'>
                <img src={file_img} alt="" className='pl-[75px] mr-[10px]'/>
                <a href={txt_url_state}><p className='font-sussie-medium text-[16px] text-main mr-[10px] py-[14px] pr-[75px]'>Скачать файл .txt</p></a>
            </div>
        </div>
        <div className='flex mt-[17px]'>
          <div className='flex-col bg-white min-w-[690px] min-h-[275px] ml-[120px] rounded-[8px]'>
            <h2 className='font-sussie-semibold text-[15px] text-[#332E2D] pt-[18px] pl-[20px] mb-[8px]'>Текст</h2>
            <p className='font-sussie-regular text-[14px] text-black pl-[20px] '>{text}</p>
          </div>
          <div className='flex-col bg-white min-w-[486px] min-h-[275px] ml-[24px] rounded-[8px]'>
            <h2 className='font-sussie-semibold text-[15px] text-[#332E2D] pt-[18px] pl-[20px] mb-[8px]'>Изображение</h2>
            <img src={img_url_state} alt="" className='pl-[20px] max-w-[450] max-h-[209]'/>
          </div>
        </div>
        <a href="/"><p className='bg-main rounded-[10px] transition delay-[100] ease-in hover:bg-black font-sussie-medium text-[16px] text-white ml-[120px] mr-[1038px] pl-[75px] py-[14px] mt-[17px] mb-[104px] cursor-pointer'>Начать сначала &gt;</p></a>
      </div>
        <img src={arrow} alt="" className='ml-[689px]'/>
        <img src={bg} alt="" className='h-[3947px]'/>
    </div>
  )
}
