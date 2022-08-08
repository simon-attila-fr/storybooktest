import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/toto">Toto</Link>
        <Link to="/titi">Titi</Link>
      </header>
    </div>
  );
}

export default App;
