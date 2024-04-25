import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {DataComponent} from './Component/First';
import {Registration} from './Component/Registration';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/first' element={<DataComponent  />}/>
      <Route path='/' element={<Registration/>}/>
      {/* <Route */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
