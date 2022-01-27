import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import NavbarMobileMenu from '../NavbarMobileMenu/NavbarMobileMenu';

import './NavbarMobile.scss';

function NavbarMobile() {
    const [openMenu,setOpenMenu] = useState(false)
    function closeMenu(){
        setOpenMenu(prev=>!prev)
        window.scrollTo(0,580)
    }
    
    return (
        <div className="navbar-mobile-wrapper">
            <nav className="navbar-mobile">
                <div className="navbar-mobile__logo">
                    <Link to="/">
                        <i className="fas fa-home"></i>
                    </Link>
                </div>
                <div className="navbar-mobile__menu" onClick={()=>setOpenMenu(prev=>!prev)}>
                    <i className={openMenu?"fas fa-window-close":"fas fa-bars"} ></i>
                </div>
                {<NavbarMobileMenu state={openMenu} onClick={closeMenu} />}
            </nav>
        </div>
        );
}

export default NavbarMobile;
