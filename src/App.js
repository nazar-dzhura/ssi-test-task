import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/layout/Layout";


function App() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<h1>Home</h1>} />
                    <Route path="*" element={<h1>404</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
