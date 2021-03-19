import React from 'react'
import { NavLink } from 'react-router-dom'

function NavMenu() {
    return (
        <nav className = 'menu'>
            <NavLink exact className = 'menu__item' to = '/' activeClassName = "menu__item-active">ГЛАВНАЯ</NavLink>
            <NavLink exact className = 'menu__item' to = '/drift' activeClassName = "menu__item-active">ДРИФТ-ТАКСИ</NavLink>
            <NavLink exact className = 'menu__item' to = '/timeattack' activeClassName = "menu__item-active">TIME ATTACK</NavLink>
            <NavLink exact className = 'menu__item' to = '/forza' activeClassName = "menu__item-active">FORZA KARTING</NavLink>
        </nav>
    )
}

export default NavMenu;
