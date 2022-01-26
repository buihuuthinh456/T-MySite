import React,{useState,useEffect} from 'react';


import { useNavigate } from 'react-router-dom';

import { useDispatch,useSelector } from 'react-redux';
import * as actions from '../../redux/actions'

import {selectLogin$} from '../../selector'

import Button from '../Button/Button';

import './Login.scss'
const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginState = useSelector(selectLogin$);

    useEffect(()=>{
        if(loginState.isLogin){
            navigate("/")
        }
    },[loginState,navigate,dispatch])


    return (
        <div className="login-container" 
            onClick={e=>e.stopPropagation()}
        >
            <div className="notice">
                Bạn có thể test bằng tài khoản dưới: <br/> 
                Tài khoản: guest <br/>
                Mật khẩu: guest <br/>
                Cảm ơn bạn đã ghé qua. Chúc bạn một ngày tốt lành.
            </div>
            <form
                className="login-form"
                onSubmit={e=>{
                    e.preventDefault()
                    if(username.length!==0&&password.length!==0){
                        const data = {
                            account:username,
                            password:password
                        }
                        setUsername('');
                        setPassword('');
                        dispatch(actions.postLogin.postLoginRequest(data))
                    }
                    else{
                        dispatch(actions.postNotify.postNotifyAdd({
                            content:"Chưa nhập đầy đủ thông tin",
                            state:"error"
                        }))
                    }
                }}
            >
                <div className="login-form__input">
                    <label 
                        htmlFor="login-username"
                        className="login-form__input__item">
                        Username: 
                    </label>
                    <input 
                        type="text" 
                        name="username" 
                        value={username}
                        id="login-username"
                        className="login-form__input__item"
                        onChange={e=>setUsername(e.target.value)}
                    />
                    <label 
                        htmlFor="login-password"
                        className="login-form__input__item"
                    >
                        Password: 
                    </label>
                    <input 
                        type="text" 
                        name="password" 
                        value={password}
                        id="login-password"
                        onChange={e=>setPassword(e.target.value)}
                        className="login-form__input__item"
                    />
                </div>
                <Button 
                    className="login-form__submit"
                    classify="btn-default"
                    bg="bg-blue"
                    size="btn-large"
                >
                    Đăng Nhập
                </Button>
            </form>

            <div 
                className="login-close"
                onClick={()=>navigate("/")}>
                <i className="fas fa-window-close"></i>
            </div>
        </div>
    );
}

export default Login;
