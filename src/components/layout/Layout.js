import React from 'react'

import './layout.css'

import {Outlet} from 'react-router-dom'
import Header from "../header/Header";
import Footer from "../footer/Footer";


const Layout = () => {

        return (
            <div className="layout">
                <Header/>
                <div className="layout__content">
                    <Outlet/>
                </div>
                <Footer/>
            </div>
        )
}

export default Layout