import React from 'react';



import './Section.scss'

const Section = ({type,title,logo,gpa,universityName,predict,description,listSkill}) => {

    if(type==="different"){
        return(
            <section className="section">
                <div className="section-item">
                    <div className="section-item__title">
                        <h2>{title}</h2>
                    </div>
                    <div className="list-skill">
                        {
                            listSkill.map((item,index)=>(
                                <div className="list-skill__item" key={index}>
                                    <i className={item.iconClass}></i>
                                    <span>{item.name}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        )
    }
    else{
        return (
            <section className="section">
                <div className="section-item">
                    <div className="section-item__title">
                        <h2>{title}</h2>
                    </div>
                    <div className="section-item-content">
                        <h4>
                            {logo&&
                                <img 
                                    src="https://haitrieu.com/wp-content/uploads/2021/09/Logo-DH-Su-Pham-Ky-Thuat-TP-Ho-Chi-Minh-HCMUTE.png" 
                                    alt="logotruong" 
                                    width="50px"
                                />}
                            {universityName}</h4>
                        <ul className="section-item-content__list">
                            {gpa&&(
                                <li className="section-item-content__list__item">
                                    GPA: {gpa}
                                </li>
                            )}
                            {
                                predict&&(
                                    <li className="section-item-content__list__item">
                                        Dự kiến tốt nghiệp: {predict}
                                    </li>
                                )
                            }
                            {
                                description&&(
                                    <li className="section-item-content__list__item">
                                        Mô tả chuyên ngành: <p>{description}</p>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </section>
        );
    }  
}

export default Section;
