import React from 'react'
import logo from './images/logo.svg'
import {FaBars} from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const {openSidebar, openSubmenu, closeSubmenu} = useGlobalContext()
  
  const displaySubmenu = (event) => openSubmenu(event.target.textContent)

  const handleSubmenu = (event) => {
    if(!event.target.classList.contains('nav-link-button')) {
      closeSubmenu()
    }
  }

  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <img
        className='nav-logo' 
        src={logo}
        alt="stripe logo"
      />

      <ul className="nav-links">
        {/* could make it through mapping the data */}
        <li className='nav-link'>
          <button
            className='nav-link-button'
            onMouseOver={displaySubmenu}
          >
            products
          </button>
        </li>
        <li className='nav-link'>
          <button
            className='nav-link-button'
            onMouseOver={displaySubmenu}
          >
            developers
          </button>
        </li>
        <li className='nav-link'>
          <button
            className='nav-link-button'
            onMouseOver={displaySubmenu}
          >
            company
          </button>
        </li>
      </ul>      

      <button
        className='nav-hamburger'
        onClick={() => openSidebar()}
      >
        <FaBars />
      </button>
      
    </nav>
  )
}

export default Navbar