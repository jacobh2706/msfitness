import { IonContent, IonHeader, IonPage, IonTitle, IonButtons, IonToolbar, IonBackButton, IonButton } from '@ionic/react';
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect, } from 'react';

import './Detail_Header.css';

const Detail_Header = ({ site_title }) => {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("user-role") == "ADMIN") {
            setIsAdmin(true);
        }
    });

    return (
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="../Equipment" />
                </IonButtons>
                <IonTitle>{site_title}</IonTitle>
                {isAdmin && 
                <IonButtons slot="primary">
                    <IonButton>Bearbeiten</IonButton>
                </IonButtons>}
            </IonToolbar>
        </IonHeader>
    );
};

export default Detail_Header;