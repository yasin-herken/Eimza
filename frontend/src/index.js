import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Eimza from './pages/Eimza';
import Kep from './pages/Kep';
import Efatura from './pages/Efatura';
import Portal from './pages/Portal';
import Entegrator from './pages/Entegrator';
import Eserbest from './pages/Eserbest';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/eimza" element={<Eimza />}></Route>
      <Route path="/kep" element={<Kep />}></Route>
      <Route path="/efatura" element={<Efatura />}></Route>
      <Route path="/portal" element={<Portal />}></Route>
      <Route path="/entegrator" element={<Entegrator />}></Route>
      <Route path="/eserbest" element={<Eserbest />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
