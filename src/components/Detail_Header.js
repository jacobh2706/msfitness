import { IonContent, IonHeader, IonPage, IonTitle, IonButtons, IonToolbar, IonBackButton, IonButton } from '@ionic/react';
import { NavLink } from 'react-router-dom';

import './Detail_Header.css';

const Detail_Header = ({ site_title }) => {
    return (
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton style={{ width: 'min-content' }} className='back-button' defaultHref="../Equipment" />
                </IonButtons>
                <IonTitle>{site_title}</IonTitle>
                <IonButtons slot="end">
                    <IonButton style={{ width: 'max-content' }}>Bearbeiten</IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    );
};

export default Detail_Header;