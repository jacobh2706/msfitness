import { IonContent, IonHeader, IonPage, IonTitle, IonButtons, IonToolbar, IonBackButton, IonButton } from '@ionic/react';
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect, } from 'react';
import ReactDOM from 'react-dom';

import './Detail_Header.css';

const Detail_Header = ({ site_title }) => {
    const [isAdmin, setIsAdmin] = useState(false);
    

    useEffect(() => {
        if (localStorage.getItem("user-role") == "ADMIN") {
            setIsAdmin(true);
        }
    });

    const activateEditMode = () => {
        localStorage.setItem("EditMode", true);
        console.log("Edit Mode aktiviert");
        window.location.reload(true);
    }

    const endEditMode = () => {
        localStorage.removeItem("EditMode");
        console.log("Edit Mode deaktiviert");
        window.location.reload(true);
    }

    return (
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="../Equipment" />
                </IonButtons>
                <IonTitle>{site_title}</IonTitle>
                
                {isAdmin && 
                 localStorage.getItem("EditMode") == null && 
                <IonButtons slot="primary">
                    <IonButton onClick={activateEditMode}>Bearbeiten</IonButton>
                </IonButtons>}
                {isAdmin && 
                 localStorage.getItem("EditMode") == "true" && 
                <IonButtons slot="primary">
                    <IonButton onClick={endEditMode}>Fertig</IonButton>
                </IonButtons>}
            </IonToolbar>
        </IonHeader>
    );
};

export default Detail_Header;