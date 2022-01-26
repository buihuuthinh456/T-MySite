import React,{useEffect,useLayoutEffect} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {getProject} from '../redux/actions';

import { selectProject$ } from '../selector';

import Modal from '../components/Modal/Modal';
import Loading from '../components/Loading/Loading';


import ProjectSection from '../components/ProjectSection/ProjectSection';


const Projectpage = () => {
    
    const dispatch = useDispatch();

    const myProject = useSelector(selectProject$);  

    
    useEffect(() => {
        if(myProject.data.length===0){
            dispatch(getProject.getProjectRequest());
        }
    }, [dispatch,myProject.data.length]);

    useLayoutEffect(() => {
        console.log(myProject)
    }, [myProject]);


    if(myProject.isLoading){
        return (
            <Modal>
                <Loading/>
            </Modal>)
    }
    return (
        <>
            {
                myProject.data&&myProject.data.map((item,index)=>(
                    <ProjectSection 
                        key={index}
                        title={item?.title} 
                        dataThumbnail={item?.thumbnail} 
                        detailTechSkill={item?.detailTechSkill} 
                        description={item?.description}
                        url={item?.url}
                    />
                ))
            }
        </>
    );
}

export default Projectpage;
