import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthProvider } from './Api/context/AuthProvider';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter basename="/">

          <AuthProvider>

          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);


