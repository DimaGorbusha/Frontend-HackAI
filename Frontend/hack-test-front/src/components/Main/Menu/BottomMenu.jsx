import React, {useState} from 'react'
import "./Menu.css"



export default function BottomMenu() {
  // let checked = false;

  const [ethics, setEthics] = useState(false);
  const [mistakes, setMistakes] = useState(false);
  const [lang, setLang] = useState("auto");
  const [censor, setCensor] = useState(false);
  const [langSwitcher, setLangSwithcer] = useState("auto");

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
  )
}
