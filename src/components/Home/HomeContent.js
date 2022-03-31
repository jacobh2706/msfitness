import { IonContent, IonHeader, IonTitle, IonToolbar, IonBadge, useIonViewWillEnter, IonModal } from '@ionic/react';
import { NavLink, Link } from 'react-router-dom';
import './HomeContent.css';
import gym_building from '../../images/fitness-center-kirchberg.jpeg';
import gym from '../../images/studio.jpg';
import axios from 'axios';
import { useEffect, useState } from 'react';
import FastAverageColor from 'fast-average-color';

import { App } from '@capacitor/app';
import { BackgroundTask } from '@robingenz/capacitor-background-task';

import { LocalNotifications } from '@capacitor/local-notifications';
import { Badge } from '@awesome-cordova-plugins/badge';

const fac = new FastAverageColor();
function getColor() {
    var img_arr = [];
    img_arr.push(gym_building);
    img_arr.push(gym);

    for (let i = 0; i < document.getElementsByClassName('card-header').length; i++) {
        fac.getColorAsync(img_arr[i], { algorithm: 'dominant' })
            .then(function (color) {
                document.getElementsByClassName('card-header')[i].style.backgroundColor = color.rgba;
                document.getElementsByClassName('card-header-text')[i].style.color = color.isDark ? '#fff' : '#000';
            })
            .catch(function (e) {
                console.error(e);
            });
    }
}

const HomeContent = ({ isloaded, isBday }) => {
    const [NotiNotNull, setNotiNotNull] = useState();

    useIonViewWillEnter(async () => {
        let permStatus = await LocalNotifications.checkPermissions();

        if (permStatus.receive === 'prompt') {
            permStatus = await LocalNotifications.requestPermissions();
        }

        setTimeout(() => {
            console.log("fired");
            console.log("Ungelesene Nachrichten: " + localStorage.getItem("newNotiCount"));

            console.log(isloaded);
            if (localStorage.getItem("newNotiCount") != "0") {
                console.log("anzeigen");
                Badge.set(localStorage.getItem("newNotiCount"));
                setNotiNotNull(true);
            } else {
                console.log("nicht anzeigen");
                setNotiNotNull(false);
            }

            console.log("fired2");
        }, 500);
    });


    return (
        <IonContent scrollEvents={true} onLoad={getColor()} fullscreen="true">
            <IonToolbar className="noti-bar">
                {isloaded && (<NavLink className='noti-btn' to="/notification/Notification"><span>🔔</span></NavLink>)}{NotiNotNull && (<IonBadge color="danger">{localStorage.getItem("newNotiCount")}</IonBadge>)}
            </IonToolbar>
            <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">Willkommen {localStorage.getItem("user-firstname")} </IonTitle>
                </IonToolbar>
            </IonHeader>

            <div className='content' >
                {isBday && (<div className='card bday-card'>
                    <h1>Alles Gute zum Geburtstag 🎉</h1>
                </div>)}

                <IonModal
                    trigger="trigger-button"
                    swipeToClose={true}
                >
                    <IonHeader>
                        <IonToolbar className='modal-toolbar'>
                            <IonTitle size='large'>Modal Content</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent fullscreen="true" scrollY="false">
                    </IonContent>
                </IonModal>

                <div className='card' style={{ backgroundImage: "url(" + gym_building + ")", backgroundPositionX: "center" }} id="trigger-button">
                    <div className='card-header'><h1 className='card-header-text'>Unser Studio</h1></div>
                </div>

                <div className='card' style={{ backgroundImage: "url(" + gym + ")", backgroundPositionX: "center" }}>
                    <div className='card-header'><h1 className='card-header-text'>Anmeldung</h1></div>
                </div>

                <div style={{ display: "none" }}>
                    <div> Icons made by <a href="https://www.freepik.com" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
                    <div> Icons made by <a href="https://www.flaticon.com/authors/mayor-icons" title="Mayor Icons"> Mayor Icons </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
                    <a href="https://www.flaticon.com/free-icons/back" title="back icons">Back icons created by Roundicons - Flaticon</a>
                </div>
            </div>
        </IonContent>
    );
};

export default HomeContent;