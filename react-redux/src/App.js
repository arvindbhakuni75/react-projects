
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {incNumber, decNumber} from './Actions/index';

function App() {

  const myState = useSelector((state) => state.changeTheNumber);

  const dispatch = useDispatch()

  return (
    <div className="App">

      <button onClick={()=>dispatch(incNumber(5))}>+</button>
      <h1>{myState}</h1>
      <button onClick={()=>dispatch(decNumber())}>-</button>
      
    </div>
  );
}

export default App;
