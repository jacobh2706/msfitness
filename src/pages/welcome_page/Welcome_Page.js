import { IonContent, IonHeader, IonPage, IonSpinner } from '@ionic/react';
import '../dark-theme.css';
import './Welcome_Page.css';
import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';
import axios from 'axios';
import logo from '../../images/logo.png';
import logolight from '../../images/logo-light.png';
import $ from 'jquery';
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

function dark(e) {
    if (prefersDarkScheme.matches) {
        e.target.setAttribute('src', logolight);
    } else {
        e.target.setAttribute('src', logo);
    }
}

const Welcome_Page = () => {

    useEffect(() => {
        $(".wp-spinner").css("opacity", "0");

        anime({
            targets: '.wp-wrapper img',
            opacity: [0, 1],
            easing: 'easeInOutQuad'
        });
        autologin();
    });

    const autologin = (() => {
        $(".wp-spinner").css("opacity", "1");
        axios.post("https://msfitness-17584.nodechef.com/getuserdata", {
            token: localStorage.getItem('user-token'),
        }).then((response) => {
            console.log(response.data);
            if (response.data) {
                setTimeout(() => {
                    localStorage.setItem('user-email', response.data.EMAIL);
                    localStorage.setItem('user-firstname', response.data.FIRSTNAME);
                    localStorage.setItem('user-lastname', response.data.LASTNAME);
                    localStorage.setItem('user-role', response.data.ROLE);
                    localStorage.setItem('user-birthday', response.data.BIRTHDAY.replace(/T/, ' ').substr(0, 10));
                    console.log(localStorage.getItem("user-firstname"));
                    setTimeout(() => {
                        window.location.replace("./home/Home");
                    }, 1100)
                }, 700);
            } else {
                setTimeout(() => {
                    setTimeout(() => {
                        window.location.replace("./Login/login");
                    }, 1000)
                }, 1500);
            }
        });
    })

    return (
        <IonPage>
            <IonContent scrollY="false">
                <div className='wp-wrapper'>
                    <img src={logo} onLoad={dark} style={{ opacity: "0" }} />
                    <div className="wp-spinner">
                        <IonSpinner name="crescent" />
                    </div>
                </div>
                <div className='credits'><span>Created by</span></div>
            </IonContent>
        </IonPage>
    );
};

export default Welcome_Page;
