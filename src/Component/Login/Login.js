import React, { useContext, useState } from 'react';
import Google from '../../Img/google.png'
import './Login.css'
import firebaseConfig from './firebase.config'
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import Header from '../Header/Header';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isLoggedIn: false,
        name: '',
        email: '',
        photo: '',
        error: '',
        success: false,
    })
    const [loggedInUser, setLoggedInUSer] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const googleHandler = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const userInfo = {
                    isLoggedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                    success: true,
                }
                setUser(userInfo);
                setLoggedInUSer(userInfo)
                history.replace(from);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message
                console.log(errorCode, errorMessage);
            });
    }
    return (
        <div>
            <Header></Header>
            <div className=" form-div container d-flex justify-content-center align-item-center">
                <form action="">
                    <div className="login-box">
                        <h1>Login <span>OR</span></h1>
                        <h1 >Register</h1> <input onClick={() => setNewUser(!newUser)} className="checkbox" type="checkbox" />
                        {
                            newUser && <div className="textbox">
                                <i className="fas fa-user"></i>
                                <input name="name" type="text" placeholder="Name" required />
                            </div>
                        }
                        <div className="textbox">
                            <i className="fas fa-envelope"></i>
                            <input name="email" type="text" placeholder="Email" required />
                        </div>

                        <div className="textbox">
                            <i className="fas fa-lock"></i>
                            <input name="password" type="password" placeholder="Password" required />
                        </div>

                        {
                            newUser && <div className="textbox">
                                <i className="fas fa-lock"></i>
                                <input name="confirm-password" type="password" placeholder="Confirm Password" required />
                            </div>
                        }

                        {
                            newUser ? <button type="submit" className="form-btn">Register</button> : <button type="submit" className="form-btn">Log in</button>
                        }

                        <div onClick={googleHandler} className="sign-in-media d-flex justify-content-center align-item-center">
                            <img src={Google} alt="" srcSet="" />
                            <p className="mb-0 pt-2">Continue With Google</p>
                        </div>
                    </div>
                    <p style={{ color: 'red' }}>{user.error}</p>
                    {
                        user.success && <p style={{ color: "green" }}>{newUser ? "Register" : "Sign In"} Successfully</p>
                    }
                </form>
            </div>
        </div>
    );
};

export default Login;