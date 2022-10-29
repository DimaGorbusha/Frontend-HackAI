import React, {useState} from 'react'

export default function Checkbox(){
    const [isChecked, setIsChecked] = useState(false)
  
    const checkHandler = () => {
      setIsChecked(!isChecked)
    }
    console.log(isChecked);
    return (
      <div>
        <input
          type="checkbox"
          id="checkbox"
          checked={isChecked}
          onChange={checkHandler}
        />
        <label htmlFor="checkbox">I agree to Terms of Service </label>
        <p>The checkbox is {isChecked ? "checked" : "unchecked"}</p>
      </div>
    )
  }
