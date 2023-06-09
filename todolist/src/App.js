
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UseRefHook from './components/UseRefHook';
import MeomoHook from './components/MemoHook';
import ListRendring from './components/ListRendring';
import Form from './components/Form';
import Dreopdown from './components/Dreopdown';
import HiButton from './components/HiButton';
// import Prop from './components/Prop';
 import TodoList from './components/TodoList';
import NavBar from './components/NavBar';
import Inputform from './components/Inputform';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import RedecerCounter from './components/RedecerCounter';
import EffectVsMemo from './components/EffectVsMemo';
import Task from './components/Task';
import WithImg from './components/WithImg';
import Material from './Material';

function App() {

  return (
    <div className="app">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProtectedRoute Comp = {TodoList} />} />
        <Route path="/inputform" element={<Inputform /> } />
        <Route path="/hiby" element={<HiButton/> } />
        <Route path="/dropdown" element={<Dreopdown/> } />
        <Route path="/listrendring" element={<ListRendring/> } />
        <Route path="/memohook" element={<MeomoHook/> } />
        <Route path="/userefhook" element={<UseRefHook/>} />
        <Route path="/form" element={<Form /> } />
        <Route path="/login" element={<Login /> } />
        <Route path="/reducer" element={<RedecerCounter/>} />
        <Route path="/effectvsmemo" element={<EffectVsMemo />} />
        <Route path="/task" element={<Task />} />
        <Route path="/imgapi" element={<WithImg />} />
        <Route path="/material" element={<Material />} />
        
     
      {/* <Prop name = "Arvind" profile = "React Developer"  />
      <Prop name = "Jashvant" profile = "Angular Developer"  />  */}
       
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
