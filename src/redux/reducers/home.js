import { getHome,getType } from "../actions";
import { INIT_STATE } from "../constant";

export default function homeReducers(state=INIT_STATE.home,action){
    switch(action.type){
        case getType(getHome.getHomeRequest): 
            return {
                ...state,
                isLoading:true,
        } 
        case getType(getHome.getHomeSuccess): 
            return {
                ...state,
                isLoading:false,
                data:action.payload,
        } 
        case getType(getHome.getHomeFailure): 
            return {
                ...state,
                isLoading:false,
                data:action.payload,
        } 
        default:
            return state;
    }
}