import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DataComponent } from './Component/First';
import { Login } from './Component/login';
import { Registration } from './Component/Registration';
import { ImageUploadComponent } from './Component/ImageUpload';
import { Layout } from './Component/Layout';

function App() {
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       {/* Route for Login */}
  //       <Route path='/' element={<Login />} />

  //       {/* Route for Registration */}
  //       <Route path='/register' element={<Registration />} />

  //       {/* Route for ImageUploadComponent with Header */}
  //       <Route path='/imageUpload' element={<><Header /><ImageUploadComponent /></>} />

  //       {/* Route for DataComponent with Header */}
  //       <Route path='/reader' element={<><Header /><DataComponent /></>} />
  //     </Routes>
  //   </BrowserRouter>
  // );



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Registration />} />

          <Route element={<Layout />}>
            <Route path='/imageUpload' element={<ImageUploadComponent />} />
            <Route path='/reader' element={<DataComponent />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
