import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'

import Group from './Group'

import './css/NavBar.css'

const NavBar = () => {
  return (
    <Group className='nav-container'>
        <nav class='nav-container__nav'>
            <Group className='nav-container__nav__left'>
                <ul className='nav-container__nav__left__navbar'>
                    <h2 className='nav-container__nav__left__navbar__nav-item'>Blogify</h2>

                    <li className='nav-container__nav__left__navbar__nav-item'>
                        <a className='nav-container__nav__left__navbar__nav-item__nav-link' href="#">Home</a>
                    </li>
                    <li className='nav-container__nav__left__navbar__nav-item'>
                        <a className='nav-container__nav__left__navbar__nav-item__nav-link' href="#">Your Blogs</a>
                    </li>
                    <li className='nav-container__nav__left__navbar__nav-item'>
                        <a className='nav-container__nav__left__navbar__nav-item__nav-link' href="#">Discover</a>    
                    </li>
                    <li className='nav-container__nav__left__navbar__nav-item'>
                        <a className='nav-container__nav__left__navbar__nav-item__nav-link' href="#">Categories</a>
                    </li>
                </ul>
            </Group>
            <Group className='nav-container__nav__right'>
                <p className='nav-container__nav__right__nav-item'>John Doe</p>
                <i className='fa-solid fa-user nav-container__nav__right__nav-item'></i>
                <i className='fa-solid fa-magnifying-glass nav-container__nav__right__nav-item'></i>
            </Group>
        </nav>
    </Group>
  )
}

export default NavBar