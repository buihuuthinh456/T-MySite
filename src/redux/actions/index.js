import { createActions } from 'redux-actions';

export const getType = (reduxAction) => {
    return reduxAction().type;
}

export const getHome = createActions({
    getHomeRequest:undefined,
    getHomeSuccess:(payload)=>payload,
    getHomeFailure:(err)=>err,
});

export const getProject = createActions({
    getProjectRequest:undefined,
    getProjectSuccess:(payload)=>payload,
    getProjectFailure:(err)=>err,
});


export const postLogin = createActions({
    postLoginRequest:(payload)=>payload,
    postLoginSuccess:(payload)=>payload,
    postLoginFailure:(err)=>err,
    logOut:undefined,
});

export const postProject = createActions({
    postProjectRequest:(payload)=>payload,
    postProjectSuccess:(payload)=>payload,
    postProjectFailure:(err)=>err,
});

export const postNotify = createActions({
    postNotifyAdd:(payload)=>payload,
    postNotifyRemove:undefined,
})