import './App.scss'
import Stopwatch from './basic-components/Stopwatch'
import Header from './basic-components/Header'
import DotMaker from './basic-components/DotMaker'
import ReducerSection1 from './basic-components/Reducer1'
import SideMenu1 from './basic-components/SideMenu1'
import Footer from './basic-components/Footer'
import StopwatchRef from './basic-components/StopwatchRef'
import SideMenu2 from './basic-components/SideMenu2'
import TodoList1 from './complex-components/todo1/TodoList1'
import TodoMultiLayer from './complex-components/todo2/TodoMain'
import ToggleBtns from './basic-components/ToggleBtns'
import Keypad from './basic-components/Keypad'
import DragAndDrop from './basic-components/DragAndDrop'
import DragNDrop2 from './basic-components/DragNDrop2'
import StarRating from './basic-components/StarRating'
import InputFormSimple from './basic-components/InputFormSimple'
import KeypadLayout from './complex-components/runescapeKeypad/keypadLayout'
import RadialMenu from './basic-components/RadialMenu'
import TabsContent from './basic-components/TabsContent'
import NestedDropMenu from './basic-components/NestedDropMenu'

function App() {
	return (
		<div className="App">
			<Header />
			<div className="body">
				<RadialMenu />
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
				<KeypadLayout />
				<DragAndDrop />
				<DragNDrop2 />
				<StarRating />
				<InputFormSimple />
				<TabsContent />
				<NestedDropMenu />
				<Footer />
			</div>
		</div>
	)
}

export default App
