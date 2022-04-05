import { IonContent, IonButton, useIonLoading, IonHeader, IonToolbar, IonTitle, IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';
import './UserContent.css';
import axios from 'axios';
import ReactDOM from 'react-dom';
import UserSettings from './UserSettings';
import AdminSettings from './AdminSettings';
import { useState, useEffect } from 'react';

const Settings_Content = () => {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("user-role") == "ADMIN") {
            setIsAdmin(true);
        }
    });

    function handleChange(e) {
        if (e.detail.value == "settings")
            ReactDOM.render(<UserSettings />, document.getElementById('settings-content'));
        else if (e.detail.value == "admin-area")
            ReactDOM.render(<AdminSettings />, document.getElementById('settings-content'));
    }

    return (
        <div slot="fixed">
            <IonHeader >
                <IonToolbar class='user-header'>
                    <IonTitle size="large">Einstellung</IonTitle>
                </IonToolbar>
                {isAdmin &&
                    <IonSegment onIonChange={e => handleChange(e)} value="settings">
                        <IonSegmentButton value="settings">
                            <IonLabel>Benutzer</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="admin-area">
                            <IonLabel>Admin</IonLabel>
                        </IonSegmentButton>
                    </IonSegment>
                }
            </IonHeader>

            <div className='settings-content' id="settings-content">
                <UserSettings />
            </div>
        </div>
    );
};

export default Settings_Content;