import { useState } from 'react';
import "./Checkbox.css"

export default function Checkbox() {
    const [ isChecked, setIsChecked ] = useState(false);

    const handleCheck = (e) => {
        setIsChecked(!isChecked)
    }

    return(
        <div>
        <input type="checkbox" onChange={handleCheck}></input>
        <p className={isChecked ? "checked" : "notChecked"}>{isChecked.toString()}</p>
        </div>
    )
}