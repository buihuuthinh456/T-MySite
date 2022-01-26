import {INIT_STATE} from '../constant';

import { getType, getProject, postProject } from '../actions';


export default function projectReducer(state=INIT_STATE.project, action){
    switch(action.type){
        
        case getType(getProject.getProjectRequest):
            return {
                ...state,
                isLoading:true,
            }
        case getType(getProject.getProjectSuccess):
            return {
                ...state,
                isLoading:false,
                data:action.payload,
            }
        case getType(getProject.getProjectFailure):
            return {
                ...state,
                isLoading:false,
                data:action.payload,
            }
        case getType(postProject.postProjectRequest):
            return {
                ...state,
                data:[...state.data,action.payload]
            }
        default:
            return state;
    }
}