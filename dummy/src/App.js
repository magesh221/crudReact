import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {DataComponent} from './Component/First';
import {Login} from './Component/login';
import {Registration} from './Component/Registration';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/reader' element={<DataComponent  />}/>
      <Route path='/' element={<Login  />}/>
      <Route path='/register' element={<Registration/>}/>

      {/* <Route */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
