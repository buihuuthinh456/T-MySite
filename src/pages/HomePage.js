import React,{useEffect} from 'react';

import {useSelector,useDispatch } from 'react-redux';
import { selectHome$ } from '../selector';

import * as actions from '../redux/actions';

import Modal from '../components/Modal/Modal';
import Loading from '../components/Loading/Loading';

import Section from '../components/Section/Section';

const Homepage = () => {

    const dispatch = useDispatch();
    const dataHome = useSelector(selectHome$);
    useEffect(()=>{
        if(dataHome.data.length===0){
            dispatch(actions.getHome.getHomeRequest());
        }
       
    },[dispatch,dataHome.data.length])

    if(dataHome.isLoading){
        return (
        <Modal>
            <Loading/>
        </Modal>)
    }

    return (
        <>
            {
                dataHome.data.map((item,index)=>(
                    <Section 
                        key={index}
                        type={item?.type}
                        title={item?.title}
                        logo={item?.logo}
                        gpa={item?.gpa}
                        universityName={item?.universityName}
                        description={item?.description}
                        predict={item?.predict}
                        listSkill={item?.listSkill}
                    />
                ))
            }
        </>
    );
};


export default Homepage;
