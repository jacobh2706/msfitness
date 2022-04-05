import { IonButton, IonToolbar, IonHeader, IonTitle, IonAlert, IonButtons, IonBackButton } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NotiHeader = ({ site_title }) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("user-role") == "ADMIN") {
            setIsAdmin(true);
        }
    });

    return (
        <IonHeader translucent="true">
            <IonToolbar>
                <IonButtons slot="start"><IonBackButton style={{ width: 'min-content' }} className='back-button' defaultHref='../home/Home' /></IonButtons>
                <IonTitle>{site_title}</IonTitle>
                {isAdmin && <IonButtons slot="primary">
                    <IonButton onClick={() => setShowAlert(true)}>Neue Nachricht</IonButton>
                </IonButtons>}
            </IonToolbar>

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
        </IonHeader>
    );
};

export default NotiHeader;