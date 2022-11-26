import './App.scss';
import Stopwatch from './components/Stopwatch';
import Header from './components/Header';
import DotMaker from './components/DotMaker';
import ReducerSection1 from './components/Reducer1';
import SideMenu1 from './components/SideMenu1';
import Footer from './components/Footer';
import StopwatchRef from './components/StopwatchRef';
import SideMenu2 from './components/SideMenu2';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='body'>
        <Stopwatch />
        <StopwatchRef />
        <DotMaker />
        <ReducerSection1 />
        <SideMenu1 />
        <SideMenu2 />
        <Footer />
      </div>
    </div>
  );
}

export default App;