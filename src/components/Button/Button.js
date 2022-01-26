import React from 'react';

import './Button.scss';

const Button = (props) => {
    const classify =props.classify||'btn-default';
    const size = props.size||'btn-medium';
    const bg = props.bg||'bg-default';

    const onClick=props.onClick


    return (
        <button className={`${classify} ${size} ${bg} ${props.txtColor} ${props.className}`} onClick={onClick?onClick:null}>
            { props.children }
        </button>
    );
}

export default Button;
