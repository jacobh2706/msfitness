import { IonContent, IonRefresher, IonRefresherContent, IonButton, IonToolbar, IonHeader, IonTitle, IonAlert } from '@ionic/react';
import { Link } from 'react-router-dom';
import React, { useState, useEffect, createElement, Children } from 'react';
import './NotificationContent.css';
import axios from 'axios';

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
    const [isAdmin, setIsAdmin] = useState(false);
    var Elems = []

    useEffect(() => {
        if (localStorage.getItem("user-role") == "ADMIN") {
            setIsAdmin(true);
        }

        localStorage.setItem("newNotiCount", 0);
        Badge.clear();

        axios.get('https://msfitness-17584.nodechef.com/getNotification').then((result) => {
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
                    {isAdmin && <IonButtons slot="primary">
                        <IonButton slot='end' onClick={() => setShowAlert(true)}>+</IonButton>
                    </IonButtons>}
                </IonToolbar>
            </IonHeader>

            <IonAlert
                isOpen={showAlert}
                onDidDismiss={() => setShowAlert(false)}
                cssClass='my-custom-class'
                header={'Neue Nachricht teilen'}
                inputs={[
                    {
                        name: 'notiheader',
                        type: 'text',
                        placeholder: 'Überschrift'
                    },
                    {
                        name: 'notitext',
                        type: 'text',
                        placeholder: 'Text'
                    }]}
                buttons={[
                    {
                        text: 'Abbruch',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    },
                    {
                        text: 'Teilen',
                        handler: (alertdata) => {
                            console.log('Confirm Ok');
                            console.log(alertdata.notiheader);
                            axios.post('http://msfitness-17584.nodechef.com/createNotification', {
                                header: alertdata.notiheader,
                                text: alertdata.notitext,
                            }).then((result) => {
                                console.log(result);
                            });
                        }
                    }
                ]}
            ></IonAlert>

            <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
                <IonRefresherContent></IonRefresherContent>
            </IonRefresher>
            <div style={{ width: "100vw" }}>
                <div className='noti-list-wrapper'>
                    <ul className='noti-list'>
                    </ul>
                </div>
            </div>
        </IonContent>
    );
}
export default NotiContent;