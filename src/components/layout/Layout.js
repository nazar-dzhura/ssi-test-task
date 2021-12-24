import React, {useEffect} from 'react'

import './layout.css'

import {Outlet} from 'react-router-dom'
import Header from "../header/Header";


const Layout = () => {

        return (
            <div className="layout">
                <Header/>
                <Outlet/>
                {/*<Footer/>*/}
            </div>
        )
}

export default Layout