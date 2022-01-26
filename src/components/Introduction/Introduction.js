import React from 'react';

import './Introduction.scss'

const Introduction = (props) => {
    return (
        <div className="introduction">
            <h3 className="introduction__title">
                {props.title}
            </h3>
            <p className="introduction__description">
                {props.content?props.content:''}
            </p>
            <ul className="introduction__contact">
                <li className="introduction__contact__item">
                    <span>Số điện thoại:</span><span>+84 768801289</span>
                    <span>Email:</span><span>buihuuthinh2018@gmail.com</span>
                </li>
                <li className="introduction__contact__item">
                    <a href="https://www.facebook.com/bui.thinh.520/" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                </li>
                <li className="introduction__contact__item">
                    <a href="https://github.com/buihuuthinh456" target="_blank" rel="noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                </li>
                <li className="introduction__contact__item">
                    <a href="https://www.linkedin.com/in/b%C3%B9i-h%E1%BB%AFu-th%E1%BB%8Bnh-662455229/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </li>
                <li className="introduction__contact__item">
                    <a href="https://www.youtube.com/channel/UCUOeedE6Cxh_9xUlk75AidA" target="_blank" rel="noreferrer">
                        <i className="fab fa-youtube"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Introduction;
