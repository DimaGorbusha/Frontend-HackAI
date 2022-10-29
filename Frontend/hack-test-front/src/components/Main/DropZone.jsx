import React, {useState} from 'react'
import upload from "../../img/pages/Main/upload.svg"
import { useNavigate } from "react-router-dom";

export default function DropZone() {

    const [drag, setDrag] = useState(false);
    const [file, setFile] = useState();
    const url = "";

    const navigate = useNavigate();

    const borderStyle = {
        border: '2px dashed #696969',
    }

    function fileHandler(e){
        e.preventDefault();
        setFile(e.dataTransfer.files[0]);
        console.log(file);
        fetch(url, {
          method: 'POST',
          body: file
        })
        .then(() => {console.log('Загружено'); })
        .catch(() => { console.log('Ошибка');})
        navigate("/loader");
        setDrag(false)
    }

    function dragStartHandler(e){
        e.preventDefault();
        setDrag(true)
    }
  
    function dragLeaveHandler(e){
        e.preventDefault();
        setDrag(false)
    }
  
    return (
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
  )
}
