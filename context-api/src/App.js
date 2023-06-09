
import { createContext, useState } from 'react';
import './App.css';
import Child from './Child';
import OtherChild from './components/OtherChild';

export const GlobleInfo = createContext();

function App() {

  const [color, setColor] = useState('green')
  const [day, setDay] = useState('Monday')
  var redColor = "red";
  var num = 5000000

  const getData = (data) => {
    console.log(data)
    setDay(data)
  }

  return (
    <GlobleInfo.Provider value={{appColor: color, superChildcolor: redColor, number: num, getDataDay: getData}}>
    <div className="App">
      <Child />
      <OtherChild />
      <h1>This Day is: : {day}</h1>
    </div>
    </GlobleInfo.Provider>
  );
}

export default App;
