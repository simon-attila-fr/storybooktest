import { useState } from 'react';
import PropTypes from 'prop-types';
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

Checkbox.propTypes = {
    /**
     * The text attached to this element.
     */
    checkboxLabel: PropTypes.string.isRequired
}
Checkbox.defaultProps = {
    checkboxLabel: "True or false?"
}