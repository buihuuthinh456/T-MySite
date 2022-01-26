import React from 'react';

import {useNavigate} from 'react-router-dom'

import './Modal.scss';

const Modal = ({children}) => {

    const navigate = useNavigate();
    return (
        <div className="modal" onClick={()=>navigate("/")}>
            {children}
        </div>
    );
}

export default Modal;
