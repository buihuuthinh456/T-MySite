import React from 'react';
import './FuturePage.scss';

function FuturePage() {
  return (
    <section className="section">
        <div className="section-item">
            <div className="section-item__title">
                <h2>Muốn học trong năm 2022</h2>
            </div>
            <div className="future-description row">
                <div className="future-description__item column-6">
                    <div className="future-description__item__img" 
                        style={{backgroundImage:`url("https://ichi.pro/assets/images/max/724/1*Hva7hcsFWulFUPhrEWui1A.jpeg")`}} />
                    <p>NextJS một Framework của ReactJS, rất tốt cho SEO</p>
                </div>
                <div className="future-description__item column-6">
                    <div className="future-description__item__img"
                        style={{backgroundImage:`url("https://images.viblo.asia/94f4ac67-bebd-4d2e-9a39-2562525e74c3.jpeg")`}} />
                    <p>VueJS tương tự React nhưng xây dựng dễ dàng hơn</p>
                </div>
                <div className="future-description__item column-6">
                    <div className="future-description__item__img"
                            style={{backgroundImage:`url("https://www.bookmarks.design/media/image/figma.jpg")`}} />
                    <p>Figma, Thiết kế UI web</p>
                </div>
                <div className="future-description__item column-6">
                    <div className="future-description__item__img"
                            style={{backgroundImage:`url("http://www.appcoda.com/wp-content/uploads/2015/04/react-native.png")`}} />
                    <p>Thiết kế giao diện cho Mobile App</p>
                </div>
            </div>
            <div className="soft-skill">
                <p>Bổ sung thêm các kỹ năng mềm, cải thiện ngoại ngữ... 
                    để làm việc một cách hiệu quả. Học thêm về Backend và những công nghệ hữu ích cho phát triển của cá nhân, công việc.
                </p>
            </div>
        </div>
    </section>);
}

export default FuturePage;

