import { IonContent, IonHeader, IonPage, IonTitle, IonButtons, IonToolbar, IonBackButton, IonButton } from '@ionic/react';
import { NavLink } from 'react-router-dom';

import './Detail_Header.css';

const Detail_Header = ({ site_title }) => {
    return (
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="../Equipment" />
                </IonButtons>
                <IonTitle>{site_title}</IonTitle>
                <IonButtons slot="primary">
                    <IonButton>Bearbeiten</IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    );
};

export default Detail_Header;