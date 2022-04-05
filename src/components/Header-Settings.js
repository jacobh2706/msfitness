import { IonContent, IonHeader, IonButtons, IonBackButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Link } from 'react-router-dom';
import './Header-Settings.css';
import log_out from '../images/log-out.png';


const Header_Settings = ({ site_title }) => {
    return (
        <IonHeader>
            <IonToolbar className="IonTool">
                <IonButtons slot="start">
                    <IonBackButton style={{ width: 'min-content' }} className='back-button' defaultHref="../home/home" />
                </IonButtons>
                <ion-title>{site_title}</ion-title>
            </IonToolbar>
        </IonHeader>
    );
};

export default Header_Settings;