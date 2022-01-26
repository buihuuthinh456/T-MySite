import React from 'react';

import './Avatar.scss';

const Avatar = (props) => {

    const style={
        backgroundImage:`url(${props.url})`,
    };

    return (
        <div className="avatar" style={ style } />
    );
}

export default Avatar;
