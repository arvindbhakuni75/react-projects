// import React,{createContext, useState} from "react";
import "./App.css";
import Acrud from "./components/Acrud";
// import UseReducer from "./components/UseReducer";
// import Child from "./components/Child";
// import User from "./components/User";
// import LiftState from "./components/LiftState";
// import CrudApp from "./components/Crud";
// import Self from "./components/Self";
// import Add from "./components/Shusel";

// export const GlobleData = createContext()

 function App() {

// const [num, setNum] = useState("5")
// const [acc, setAcc] = useState("Account Number")

// function sendValue (item) {
//   console.log(item)
//   setAcc(item)
// }

  return (
    <div className="App">
    {/* <GlobleData.Provider value = {{num, setNum, color: "green", sendVal: sendValue, acc: acc}}>
      <h1>{acc}</h1>
      <h1>{num}</h1>
      <Child />
    </GlobleData.Provider> */}
    {/* <Self /> */}
    {/* <CrudApp /> */}
    {/* <Add /> */}

    {/* <User /> */}

    {/* <LiftState /> */}
    {/* <UseReducer /> */}
    <Acrud />
    </div>
  ) 
  
  
  
  
}
export default App;
