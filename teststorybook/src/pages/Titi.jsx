import { useState } from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default function Titi() {
    const [ inputText, setInputtext ] = useState("");

    const handleInput = (e) => {
        setInputtext(e.target.value)
    }

    return(
        <div>
            <h1>Titi</h1>
            <p>Text</p>
            <Link to="/toto">
                <Button text="Toto" />
            </Link>
            <input type="text" placeholder="Type here..." onChange={handleInput}></input>
            <p>Length of the typed text: {inputText.length}</p>
        </div>
    )
}