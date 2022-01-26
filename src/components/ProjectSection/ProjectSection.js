import React,{useRef} from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Button from '../Button/Button';

import './ProjectSection.scss';

function Dot({children}){
    return(
        <div className="slider-dots-container">
          <ul className='slider-dots'>{children}</ul>
        </div>
    )
}

const Projectsection = ({title,dataThumbnail,url="#",detailTechSkill=[], description=[]}) => {

    const sliderElement = useRef(null);
    
    const settings = {
        dots:true,
        lazyLoad:true,
        infinite: true,
        speed: 500,
        autoplay:true,
        autoplaySpeed:3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        className:"description-project__slider",
        appendDots:dots=><Dot>{dots}</Dot>,
        customPaging: i => (
            <div className="slider-dots__item">
              
            </div>
          )
    }

    const thumbnail = dataThumbnail || [];

    return (
        <section className="section">
            <div className="section-item">
                <div className="section-item__title">
                    <h2>{title}</h2>
                </div>
                <div className="description-project">
                    <div className="description-project__link">
                        <a href={url} target="_blank" rel="noreferrer" >
                            Nhấn vào đây để xem web
                        </a>
                    </div>
                    <div className="description-project-slider-container">
                        <Slider {...settings} ref={sliderElement} >
                            {
                                thumbnail.map((item,index)=>(
                                    <div className="description-project__slider__item" key={index}>
                                        <img 
                                            src={`data:image/png;base64,${item.url}`}
                                            alt={item.name} />
                                    </div>
                                ))
                            }
                        </Slider>
                        <Button 
                            size="btn-vertical-medium btn-click-left" 
                            txtColor="txt-color-black" 
                            classify="btn-outline"
                            onClick={()=>{sliderElement.current.slickPrev()}}
                        >
                            <i className="fas fa-arrow-left" style={{color:"rgb(16, 94, 238)"}}></i>
                        </Button>
                        <Button 
                            size="btn-vertical-medium btn-click-right" 
                            txtColor="txt-color-black" 
                            classify="btn-outline"
                            onClick={(e)=>{sliderElement.current.slickNext()}}
                        >
                            <i className="fas fa-arrow-right" style={{color:"rgb(16, 94, 238)"}}></i>
                        </Button>
                    </div>
                    <div className="description-project-content-container">
                        <div className="project-details">
                            <div className="project-details__tech">
                                <h3>Mô tả project:</h3>
                                <ul className="project-details__tech__listSkill">
                                    {
                                        description.map((item,index)=>(
                                            <li className="project-details__tech__listSkill__item" key={index}>
                                                - {item}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="project-details__tech">
                                <h3>Công nghệ sử dụng:</h3>
                                <ul className="project-details__tech__listSkill">
                                    {
                                        detailTechSkill.map((item,index)=>(
                                            <li className="project-details__tech__listSkill__item" key={index}>
                                                - {item.title}: {item.tech}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projectsection;
