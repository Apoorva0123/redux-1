import './App.css';
import { Counter } from './components/Counter';
import {Todos} from "./components/Todos";


function App() {

  return (
    <div className="App">
      {/* <Switch>
        <Route path='/' component={Todos}/>
      </Switch> */}
      <Counter/>
      <Todos/>
    </div>
  )
}

export default App
