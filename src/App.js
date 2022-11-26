import logo from './logo.svg';
import './App.scss';
import Stopwatch from './components/Stopwatch';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='body'>
        <Stopwatch />
      </div>
    </div>
  );
}

export default App;
