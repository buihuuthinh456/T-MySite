import React from 'react';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import {selectLogin$} from '../../selector';



import User from '../User/User';

import './Navbar.scss';
const Navbar = () => {

    const user = useSelector(selectLogin$);
   
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="navbar__item">
                    <div className="navbar__item-container">
                        <Link to="/">
                            <i className="fas fa-address-card"></i>
                            Sơ lược về bản thân
                        </Link>
                    </div>
                </div>
                <div className="navbar__item">
                    <div className="navbar__item-container">
                        <Link to="/project">
                            <i className="fas fa-user-check"></i>
                            Dự án cá nhân
                        </Link>
                    </div>
                </div>
                <div className="navbar__item">
                    <div className="navbar__item-container">
                        <Link to="/future">
                            <i className="fas fa-layer-group"></i>
                            Định hướng phát triển
                        </Link>
                    </div>
                </div>
                <div className="navbar__item">
                    <div className="navbar__item-container">
                        {
                            user.isLogin
                            ?(<User>{user?.data?.username}</User>)
                            :(<Link to="/login">
                            <i className="fas fa-sign-in-alt"></i>
                            Đăng nhập
                            </Link>)
                        }
                
                    </div>
                </div>
                {
                    user.isLogin && user?.data?.type==="admin"
                    ?(<div className="navbar__item">
                            <div className="navbar__item-container">
                                <Link to="/edit">
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

export default Navbar;
