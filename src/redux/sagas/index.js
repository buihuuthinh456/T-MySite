import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions'
import * as api from '../../api';

function* fetchHomeSaga(action){
    try{
        const data = yield call(api.fetchHome);
        yield put(actions.getHome.getHomeSuccess(data.data));
    } catch(err){
        console.log(err)
        yield put(actions.getHome.getHomeFailure(err));
    }
}

function* postLoginSaga(action){
    try{
        const data = yield call(api.postLogin,action.payload);

        console.log(data.data);
        yield put(actions.postNotify.postNotifyAdd(data.data));
        yield put(actions.postLogin.postLoginSuccess(data.data));
    } catch(err){
        console.log(err)
        yield put(actions.postLogin.postLoginFailure(err));
    }
}

function* fetchProjectSaga(action){
    try{
        const data = yield call(api.fetchProject)
        yield put(actions.getProject.getProjectSuccess(data.data));
        
    }catch(err){
        console.log(err)
        yield put(actions.getProject.getProjectFailure(err));
    }
}
function* postProjectSaga(action){
    try{
        const data = yield call(api.postProject,action.payload)
        yield put(actions.postProject.postProjectSuccess(data.data));
        
    }catch(err){
        console.log(err)
        yield put(actions.postProject.postProjectFailure(err));
    }
}


function* mySaga(){
    yield takeLatest(actions.getHome.getHomeRequest,fetchHomeSaga);
    yield takeLatest(actions.postLogin.postLoginRequest,postLoginSaga);
    yield takeLatest(actions.getProject.getProjectRequest,fetchProjectSaga);
    yield takeLatest(actions.postProject.postProjectRequest,postProjectSaga);
}

export default mySaga