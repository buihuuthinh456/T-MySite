import React,{useEffect,useState} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {getProject,postProject} from '../redux/actions';

import { selectProject$, selectLogin$ } from '../selector';

import img1 from '../assets/img/img__travel/travel-clone-1.png';
import img2 from '../assets/img/img__travel/travel-clone-2.png';
import img3 from '../assets/img/img__travel/travel-clone-3.png';
import img4 from '../assets/img/img__travel/travel-clone-4.png';


import imageToBase64 from 'image-to-base64/browser';


const Projectpage = () => {

    const dispatch = useDispatch();
    const isLogin = useSelector(selectLogin$); 

    const [imgBase64,setImgBase64] = useState([]);
    const [title,setTitle] = useState('');

    const detailTechSkill = [
        {
            title:"Xử lý logic ( chỉ xử lý hiển/đóng component )",
            tech:"JavaScript"
        },
        {
            title:"Style",
            tech:"CSS"
        },
        {
            title:"Cấu trúc web",
            tech:"HTML"
        },
    ]

    const description = [
        "Tạo HTML,CSS từ design","Tập trung xử lí UI","Responsive cho cả mobile và tablet"
    ]

    const url = "https://buihuuthinh456.github.io/WebTravel/"

    

    useEffect(() => {
        dispatch(getProject.getProjectRequest());
    }, [dispatch]);

    useEffect(() => {
        function convertImageToBase64(img){
            imageToBase64(img)
            .then(res=>setImgBase64(prev=>[...prev,{name:"react-music",url:res}]))
            .catch(error=>console.log(error))
        }
        convertImageToBase64(img1)
        convertImageToBase64(img2)
        convertImageToBase64(img3)
        convertImageToBase64(img4)
 
    }, []);

    useEffect(() => {
        console.log(imgBase64);
    }, [imgBase64]);

    if(isLogin.isLogin&&isLogin.data?.type==="admin"){
        return (
            <>
                <button onClick={()=>{
                    const data = {
                        title:"Web Travel UI",
                        thumbnail:imgBase64,
                        url:url,
                        detailTechSkill:detailTechSkill,
                        description:description,
                    }
                    // dispatch(postProject.postProjectRequest(data))
                    console.log(data)
                }}>Click</button>
            </>
        );
    }
    else{
        return(
        <>
            <h3>Bạn không thể sử dụng tính năng này</h3>
        </>
        );
    }

    
}

export default Projectpage;
