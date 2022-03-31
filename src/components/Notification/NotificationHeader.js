import { IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonContent } from '@ionic/react';

const NotiHeader = ({ site_title }) => {

    return (
        <IonHeader translucent="true">
            <IonToolbar>
                <IonBackButton style={{ width: 'min-content' }} className='back-button' defaultHref='../home/Home' />
                <IonTitle>{site_title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
};

export default NotiHeader;