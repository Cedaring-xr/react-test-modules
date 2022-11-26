import './App.scss';
import Stopwatch from './components/Stopwatch';
import Header from './components/Header';
import DotMaker from './components/DotMaker';
import ReducerSection1 from './components/Reducer1';
import SideMenu1 from './components/SideMenu1';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='body'>
        <Stopwatch />
        <DotMaker />
        <ReducerSection1 />
        <SideMenu1 />
      </div>
    </div>
  );
}

export default App;
