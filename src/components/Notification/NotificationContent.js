import { IonContent, IonRefresher, IonRefresherContent, IonSpinner, IonToolbar, IonHeader, IonTitle, IonAlert } from '@ionic/react';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './NotificationContent.css';
import axios from 'axios';
import ReactDOM from 'react-dom';

import $ from 'jquery';
import moment from 'moment';

import { Badge } from '@awesome-cordova-plugins/badge';

function doRefresh(RefresherEventDetail) {
    console.log('Begin async operation');
    var Elems = []
    axios.get('https://msfitness-17584.nodechef.com/getNotification').then((result) => {
        Elems.push(result.data);
        setTimeout(() => {
            console.log('Async operation has ended');
            $('.noti-list')[0].remove();
            $('.noti-list-wrapper')[0].appendChild(document.createElement("ul"));
            $('.noti-list-wrapper ul')[0].classList.add("noti-list");
            for (let i = 0; i < Elems[0].length; i++) {
                console.log(i);
                $('.noti-list')[0].appendChild(document.createElement("li"));

                $('.noti-list li')[i].classList.add("noti");
                $('.noti-list li')[i].appendChild(document.createElement("div")).classList.add("noti-content");

                $('.noti-list li .noti-content')[i].appendChild(document.createElement("h4")).appendChild(document.createTextNode(Elems[0][i].NAME));
                $('.noti-list li .noti-content')[i].appendChild(document.createElement("div")).classList.add("noti-content-detail");
                $('.noti-list li .noti-content div')[i].appendChild(document.createElement("span")).appendChild(document.createTextNode(Elems[0][i].DESCR));
                $('.noti-list li .noti-content div')[i].appendChild(document.createElement("span")).appendChild(document.createTextNode(" - " + moment(Elems[0][i].TIME).format('DD.MM.YYYY')));

                $('.noti-list li')[i].appendChild(document.createElement("div")).classList.add("dot");
            }
            RefresherEventDetail.detail.complete();
        }, 2000);
    });
}


const NotiContent = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [searchText, setSearchText] = useState('');
    var Elems = []

    useEffect(() => {
        localStorage.setItem("newNotiCount", 0);
        Badge.clear();

        ReactDOM.render(
            <IonSpinner />,
            document.getElementById('noti-list-wrapper')
        );
        axios.get('https://msfitness-17584.nodechef.com/getNotification').then((result) => {
            ReactDOM.render(
                <ul className='noti-list'>
                </ul>,
                document.getElementById('noti-list-wrapper')
            );
            $('.noti-list')[0].remove();
            $('.noti-list-wrapper')[0].appendChild(document.createElement("ul"));
            $('.noti-list-wrapper ul')[0].classList.add("noti-list");
            Elems.push(result.data);
            console.log(Elems);
            for (let i = 0; i < Elems[0].length; i++) {
                console.log(i);
                $('.noti-list')[0].appendChild(document.createElement("li"));

                $('.noti-list li')[i].classList.add("noti");
                $('.noti-list li')[i].appendChild(document.createElement("div")).classList.add("noti-content");

                $('.noti-list li .noti-content')[i].appendChild(document.createElement("h4")).appendChild(document.createTextNode(Elems[0][i].NAME));
                $('.noti-list li .noti-content')[i].appendChild(document.createElement("div")).classList.add("noti-content-detail");
                $('.noti-list li .noti-content div')[i].appendChild(document.createElement("span")).appendChild(document.createTextNode(Elems[0][i].DESCR));
                $('.noti-list li .noti-content div')[i].appendChild(document.createElement("span")).appendChild(document.createTextNode(" - " + moment(Elems[0][i].TIME).format('DD.MM.YYYY')));

                $('.noti-list li')[i].appendChild(document.createElement("div")).classList.add("dot");
            }
            localStorage.setItem("notification-count", Elems[0].length);
        });
    });

    return (
        <IonContent fullscreen="true">
            <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">Mitteilungen 🔔</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
                <IonRefresherContent></IonRefresherContent>
            </IonRefresher>
            <div style={{ width: "100vw" }}>
                <div className='noti-list-wrapper' id="noti-list-wrapper">
                </div>
            </div>
        </IonContent>
    );
}
export default NotiContent;