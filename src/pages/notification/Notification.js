import { IonPage } from '@ionic/react';
import '../dark-theme.css';

import NotificationHeader from '../../components/Notification/NotificationHeader';
import NotificationContent from '../../components/Notification/NotificationContent'

const Notification = () => {
    return (
        <IonPage>
            <NotificationHeader site_title="Mitteilungen" />
            <NotificationContent />
        </IonPage>
    );
};

export default Notification;
