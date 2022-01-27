import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import {selectLogin$} from '../../selector';



import User from '../User/User';

import './NavbarMobileMenu.scss';
const NavbarMobileMenu = (props) => {

    const user = useSelector(selectLogin$);
    const state = props.state
    const onClick = props.onClick;

    useEffect(()=>{
        const mobileMenu = document.querySelector(".navbar-mobile-menu-container");
        if(state){
            mobileMenu.style.height = '300px';
        }
        else{
            mobileMenu.style.height = '0px';
        }
    },[state])
   
    return (
        <div className={`navbar-mobile-menu-container`}>
            <nav className="navbar-mobile-menu">
                <div className="navbar-mobile-menu__item">
                    <div className="navbar-mobile-menu__item-container">
                        <Link to="/" onClick={onClick}>
                            <i className="fas fa-address-card"></i>
                            Sơ lược về bản thân
                        </Link>
                    </div>
                </div>
                <div className="navbar-mobile-menu__item">
                    <div className="navbar-mobile-menu__item-container">
                        <Link to="/project" onClick={onClick}>
                            <i className="fas fa-user-check"></i>
                            Dự án cá nhân
                        </Link>
                    </div>
                </div>
                <div className="navbar-mobile-menu__item">
                    <div className="navbar-mobile-menu__item-container">
                        <Link to="/future" onClick={onClick}>
                            <i className="fas fa-layer-group"></i>
                            Định hướng phát triển
                        </Link>
                    </div>
                </div>
                <div className="navbar-mobile-menu__item">
                    <div className="navbar-mobile-menu__item-container">
                        {
                            user.isLogin
                            ?(<User>{user?.data?.username}</User>)
                            :(<Link to="/login" onClick={onClick}>
                            <i className="fas fa-sign-in-alt"></i>
                            Đăng nhập
                            </Link>)
                        }
                
                    </div>
                </div>
                {
                    user.isLogin && user?.data?.type==="admin"
                    ?(<div className="navbar-mobile-menu__item">
                            <div className="navbar-mobile-menu__item-container">
                                <Link to="/edit" onClick={onClick}>
                                    <i className="fas fa-sign-in-alt"></i>
                                    Cập nhật
                                </Link>
                            </div>
                        </div>)
                    :''
                }
            </nav>  
        </div>
    );
}

export default NavbarMobileMenu;
