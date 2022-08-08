import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default function Toto() {
    return(
        <div>
            <h1>Toto</h1>
            <p>Text</p>
            <Link to="/">
                <Button text="Home" />
            </Link>
        </div>
    )
}