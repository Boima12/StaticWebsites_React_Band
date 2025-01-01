import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Co_navbar_fix from './pages/navbar_fix/navbar_fix.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>

    <BrowserRouter basename='/StaticWebsites_React_Band/'>
      <Routes>

        <Route path="/" element={<App />} />

        <Route path="/navbar_fix" element={<Co_navbar_fix />} />

      </Routes>
    </BrowserRouter>

  </StrictMode>
);
