import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Datos2 from './routes/datos2';
import Datosalumno from './routes/datos2';

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
<Routes>
  <Route path= "/" element= {<App />}>
    <Route path= "/datosalumno" element={<Datosalumno/>} >
      <Route path= ":datos2" element= {<Datos2/>}/>
      </Route>
  </Route>
</Routes>
</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
