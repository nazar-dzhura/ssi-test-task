import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Catalog from "./pages/catalog/Catalog";
import Login from "./pages/login/Login";
import {RequireAuth} from "./hoc/RequireAuth";
import {ForbidAuth} from "./hoc/ForbidAuth";

function App() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<RequireAuth><Catalog/></RequireAuth>} />
                    <Route path="login" element={<ForbidAuth><Login/></ForbidAuth>} />
                    <Route path="*" element={<h1>404</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
