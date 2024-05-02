import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {DataComponent} from './Component/First';
import {Login} from './Component/login';
import {Registration} from './Component/Registration';
import {ImageUploadComponent} from './Component/ImageUpload'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login  />}/>
      <Route path='/register' element={<Registration/>}/>
      <Route path = '/imageUpload' element={< ImageUploadComponent/>}/>
      <Route path='/reader' element={<DataComponent  />}/>

      {/* <Route */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
