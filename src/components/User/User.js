import React from 'react';

import {useDispatch} from 'react-redux';

import * as actions from '../../redux/actions'

import './User.scss';

const User = (props) => {
    const dispatch = useDispatch()
    return (
        <div className="user-container">
            <i className="fas fa-user"></i>
            <span className="user-username">{props.children}</span>
            <span 
                className="btn-logout"
                onClick={()=>dispatch(actions.postLogin.logOut())}
            >Đăng xuất</span>
        </div>
    );
}

export default User;
