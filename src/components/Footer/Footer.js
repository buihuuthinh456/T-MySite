import React from 'react';

import './Footer.scss';

const Footer = () => {

    const frontend = [
        "ReactJS","Redux","Redux-Saga","Slide-Slick","React-Router V6","SASS/SCSS","Axios",
    ];
    const backend = [
        "NodeJS","ExpressJS","MongoDB","Mongoose",
    ];



    return (
        <div className="footer">
            <h3>Các công nghệ đã sử dụng trong Site cá nhân này</h3>
            <div className="technology">
                <div className="technology__scope">
                    <h3 className="technology__scope__title">
                        Frontend
                    </h3>
                    <ul className="technology__scope__list">
                        {
                            frontend.map((item,index)=>(
                                <li className="technology__scope__list__item" key={index}>
                                    <i className="fas fa-chevron-right"></i> {item}
                                </li>
                            ))
                        }
                        

                    </ul>
                </div>
                <div className="technology__scope">
                    <h3 className="technology__scope__title">
                        Backend
                    </h3>
                    <ul className="technology__scope__list">
                        {
                            backend.map((item,index)=>(
                                <li className="technology__scope__list__item" key={index}>
                                    <i className="fas fa-chevron-right"></i> {item}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
