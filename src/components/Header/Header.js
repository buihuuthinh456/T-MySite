import React from 'react';

import Avatar from '../Avatar/Avatar';
import Introduction from '../Introduction/Introduction';


import avatar from '../../assets/img/Avatar.png'

import './Header.scss';

const Header = () => {

    const description = `Tôi tên là Bùi Hữu Thịnh, hiện đang là sinh viên năm 4 tại trường Đại học Sư Phạm kỹ thuật Tp.HCM. 
    Tôi rất yêu thích lập trình web và tôi muốn tương lai mình sẽ phát triển theo đam mê này.`

    return (
        <header className="header">
            <div className="header__avatar">
                <Avatar url={avatar} />
            </div>
            <Introduction title={'Bùi Hữu Thịnh'} content={description} />
        </header>
    );
}

export default Header;
