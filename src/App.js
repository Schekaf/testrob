import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the world TestRoboter!
        </p>
        <a
          className="App-link"
          href="https://git.daimler.com/PUEDomain/POFF-Testroboter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to GitRepo 
        </a>
      </header>
    </div>
  );
}

export default App;
