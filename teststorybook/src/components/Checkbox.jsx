import { useState } from 'react';
import "./Checkbox.css"

export default function Checkbox({ checkboxLabel }) {
    const [ isChecked, setIsChecked ] = useState(false);

    const handleCheck = (e) => {
        setIsChecked(!isChecked)
    }

    return(
        <div>
            <label for="checkbox">{checkboxLabel}</label>
            <input type="checkbox" id="checkbox" onChange={handleCheck}></input>
            <p className={isChecked ? "checked" : "notChecked"}>{isChecked.toString()}</p>
        </div>
    )
}