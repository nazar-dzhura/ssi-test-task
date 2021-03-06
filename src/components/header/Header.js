import React from 'react'
import './header.css'
import {NavLink} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";

function Header(){
    const {logout} = useAuth();

    return (
        <header className="header border-b p-3 flex justify-between items-center">
            <h1 className="header__title">
                SSI Test Task
            </h1>
            <div className="header__navigation">
                <NavLink to={'/'} className="header__navigation-link" activeClassName="header__navigation-link-active">Catalog</NavLink>
                <NavLink to={'/login'} className="header__navigation-link" onClick={() => logout()}>Log out</NavLink>
            </div>
        </header>
    )
}

export default Header;