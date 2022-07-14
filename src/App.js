import logo from './logo.svg';
import './App.css';
import SubscribeBoxFunction from './components/SubscribeBoxFunction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SubscribeBoxFunction />
      </header>
    </div>
  );
}

export default App;
