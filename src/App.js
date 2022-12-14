import './App.scss';
import Stopwatch from './basic-components/Stopwatch';
import Header from './basic-components/Header';
import DotMaker from './basic-components/DotMaker';
import ReducerSection1 from './basic-components/Reducer1';
import SideMenu1 from './basic-components/SideMenu1';
import Footer from './basic-components/Footer';
import StopwatchRef from './basic-components/StopwatchRef';
import SideMenu2 from './basic-components/SideMenu2';
import TodoList1 from './complex-components/todo1/TodoList1';
import TodoMultiLayer from './complex-components/todo2/TodoMain';
import ToggleBtns from './basic-components/ToggleBtns';
import Keypad from './basic-components/Keypad';

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
        <TodoList1 />
        <TodoMultiLayer />
        <ToggleBtns />
        <Keypad />
        <Footer />
      </div>
    </div>
  );
}

export default App;