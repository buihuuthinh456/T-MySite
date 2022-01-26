import axios from 'axios';

const URL = "https://personal-site-buihuuthinh.herokuapp.com";

export const fetchHome = ()=> axios.get(`${URL}/`)

export const fetchProject = ()=> axios.get(`${URL}/project`)

export const postLogin = (payload)=> axios({
    method:"post",
    url:`${URL}/login`,
    data:payload,
})

export const postProject = (payload)=> axios({
    method:"post",
    url:`${URL}/edit/create`,
    data:payload,
})