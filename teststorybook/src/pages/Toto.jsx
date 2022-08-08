import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import './Toto.css';

export default function Toto() {
    return(
        <div className="totoContainer">
            <h1>Toto</h1>
            <p>Text</p>
            <Link to="/">
                <Button text="Home" />
            </Link>
            <Checkbox />
        </div>
    )
}