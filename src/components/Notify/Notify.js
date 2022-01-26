import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as actions from '../../redux/actions'

import './Notify.scss';


const Notify = (props) => {

    const state = props.state||"error";
    const content = props.content||"Rỗng";

    const dispatch = useDispatch();
    useEffect(()=>{
        setTimeout(()=>{
            dispatch(actions.postNotify.postNotifyRemove())
        },4000)
    },[dispatch])
    return (
        <div className="notify-item">
           <p>{content}</p>
           {
               state==="success"
               ?(<i className={`fas fa-check-circle ${state}`}></i>)
               :(<i className={`fas fa-times-circle ${state}`}></i>)
           }
        </div>
    );
}

export default Notify;
