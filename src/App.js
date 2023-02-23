
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { routers } from './Components/routers/routers';
import Aos from 'aos';
function App() {
  React.useEffect(() => {
    Aos.init({
      duration:"2000"
    });
  }, []);
  return (
    <React.Fragment>
      <RouterProvider router={routers} fallbackElement={<div>
        <h2 className='fs-1 fw-bold text-center text-info mt-5'> Loading ... </h2>
      </div>} />
      
    </React.Fragment>
  );
}

export default App;
