import { IonContent, IonHeader, IonPage, IonProgressBar } from '@ionic/react';
import '../dark-theme.css';
import './Logout.css';
import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';
import axios from 'axios';



const Logout = () => {
    useEffect(() => {
        anime({
            targets: '.logout-wrapper h1',
            opacity: [0, 1],
            easing: 'easeInOutQuad'
        });

        setTimeout(() => {
            anime({
                targets: '.logout-wrapper h1',
                opacity: [1, 0],
                easing: 'easeInOutQuad'
            });

            setTimeout(() => {
                axios.post("https://msfitness-17584.nodechef.com/logout", {
                    token: localStorage.getItem("user-token")
                }).then(async (response) => {
                    console.log(response.data.message);
                    localStorage.removeItem("user-token");
                    localStorage.removeItem("user-firstname");
                    localStorage.removeItem("user-lastname");
                    localStorage.removeItem("user-email");
                    localStorage.removeItem("user-role");
                    localStorage.removeItem("user-birthday");
                    localStorage.removeItem("PWChecked");

                    window.location.replace("./login/Login");
                });
            }, 1000);
        }, 2000);
    });

    return (
        <IonPage>
            <IonContent>
                <div className='logout-wrapper' slot="fixed">
                    <h1>
                        Bis Bald 👋
                    </h1>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Logout;
