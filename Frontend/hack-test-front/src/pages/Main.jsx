import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import upload from "../img/pages/Main/upload.svg"
import Header from '../components/common/Header'
import bg from '../img/pages/Main/bg.png'
import arrow from '../img/pages/Main/arrow.svg'
import "../components/Main/Menu/Menu.css"
import axios from 'axios'


export default function Main() {
  const [drag, setDrag] = useState(false);
  let file;
  const navigate = useNavigate();
  const [ethics, setEthics] = useState(false);
  const [mistakes, setMistakes] = useState(false);
  const [lang, setLang] = useState("auto");
  const [censor, setCensor] = useState(false);
  const [langSwitcher, setLangSwithcer] = useState("auto");

  const borderStyle = {
      border: '2px dashed #696969',
  }

  function fileHandler(e){
      let host = "http://2c9a-88-87-94-10.ngrok.io/";
      let url = `import/${ethics}&${mistakes}&${censor}&${langSwitcher}`;
      url = host + url;
      e.preventDefault();
      file = e.dataTransfer.files[0];
      const formData = new FormData();
      formData.append('file', file)
      console.log(file);
      axios.post(url,{
        headers: {"Access-Control-Allow-Origin": "*"},
        body: formData
      })
      .then(res => {
        console.log(res);
      })
      // fetch(url, {
      //   method: 'POST',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   body: file
      // })
      // .then(() => {console.log('Загружено'); })
      // .catch(() => { console.log('Ошибка');})
      setDrag(false);
      navigate("/loader");
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

  console.log(censor);
  console.log(ethics);
  console.log(mistakes);
  console.log(lang);
  console.log(langSwitcher);

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
        <img src={arrow} alt="" className='ml-[689px]'/>
        <img src={bg} alt="" className='h-[3947px]'/>
    </div>
  )
}
