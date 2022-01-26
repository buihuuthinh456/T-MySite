import {getType,postNotify} from '../actions';
import {INIT_STATE} from '../constant'


export default function notifyReducer(state=INIT_STATE.notify,action){
    switch(action.type){
        case getType(postNotify.postNotifyAdd):
            return [action.payload]
        case getType(postNotify.postNotifyRemove):
            return []
        default:
            return state
    }

}