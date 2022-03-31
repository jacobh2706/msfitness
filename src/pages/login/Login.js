import { IonPage, useIonToast } from '@ionic/react';
import './Login.css';
import '../dark-theme.css';
import logo from '../../images/logo.png'
import logolight from '../../images/logo-light.png';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { configFromSession } from '@ionic/core';

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

function dark(e) {
    if (prefersDarkScheme.matches) {
        e.target.setAttribute('src', logolight);
    } else {
        e.target.setAttribute('src', logo);
    }
}

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [present_toast, dismiss] = useIonToast();
    axios.defaults.withCredentials = true;

    const login = () => {
        axios.post("https://msfitness-17584.nodechef.com/login", {
            email: email,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                toast_box(response.data.message);
            } else {
                localStorage.setItem('user-token', response.data);
                autologin();
            }
        });
    };

    const autologin = (() => {
        axios.post("https://msfitness-17584.nodechef.com/getuserdata", {
            token: localStorage.getItem('user-token'),
        }).then((response) => {
            console.log(response.data);
            if (response.data) {
                localStorage.setItem('user-email', response.data.EMAIL);
                localStorage.setItem('user-firstname', response.data.FIRSTNAME);
                localStorage.setItem('user-lastname', response.data.LASTNAME);
                localStorage.setItem('user-role', response.data.ROLE);
                localStorage.setItem('user-birthday', response.data.BIRTHDAY.replace(/T/, ' ').substr(0, 10));
                console.log(localStorage.getItem("user-firstname"));
                window.location.replace("./home/Home");
            }
        });
    })

    function toast_box(msg) {
        present_toast({
            duration: 1000,
            message: msg,
            onDidDismiss: () => console.log('dismissed'),
            onWillDismiss: () => console.log('will dismiss'),
        })
    }

    return (
        <IonPage >
            <div className='main' slot="fixed">
                <div className='logo-img' >
                    < img src={logo} onLoad={dark} /></div >
                <div className='login' >
                    <p > Email </p>
                    <input onChange={
                        (e) => {
                            setEmail(e.target.value);
                        }
                    }
                        type="text" />
                    <p > Password </p>
                    <input onChange={
                        (e) => {
                            setPassword(e.target.value);
                        }
                    }
                        type="password" />
                    <p > Noch nicht registriert? < a href='../register/Register' > Erstelle einen Account. </a></p >
                    <button onClick={login} > Anmelden <span> 🏋️‍♂️ </span></button >
                </div>
            </div>
        </IonPage>
    );
};

export default Login;