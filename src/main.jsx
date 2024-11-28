import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>

    <BrowserRouter basename='/StaticWebsites_React_Band/'>
      <Routes>

        <Route path="/" element={<App />} />
        {/* <Route path="/pages/page1" element={<Co_Page1 />} />
        <Route path="/pages/page2" element={<Co_Page2 />} /> */}

      </Routes>
    </BrowserRouter>

  </StrictMode>
);
