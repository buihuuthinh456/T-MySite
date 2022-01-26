import {postLogin,getType} from '../actions';
import {INIT_STATE} from '../constant';

export default function loginReducer(state=INIT_STATE.login,action){

    switch(action.type){

        case getType(postLogin.postLoginRequest):
            return{
                ...state,
                isLoading:true,
            };
        case getType(postLogin.postLoginSuccess):
            {
                console.log(action.payload)
                return{
                    ...state,
                    isLoading:false,
                    isLogin:action.payload.state==="success",
                    data:action.payload
                };
            }
        case getType(postLogin.postLoginFailure):
            return{
                ...state,
                isLoading:false,
                data:action.payload
            };
        case getType(postLogin.logOut):
            return (INIT_STATE)
            
        default:
            return state;

    }



}