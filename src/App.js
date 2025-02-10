import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App bg-blue-100 min-h-screen flex items-center justify-center">
      <header className="App-header text-center">
        <img src={logo} className="App-logo mb-4" alt="logo" />
        <p className="text-lg">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link text-blue-500 hover:text-blue-700"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
