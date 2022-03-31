import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAlert, useIonAlert, useIonViewWillEnter } from '@ionic/react';
import './Equipment.css';
import '../dark-theme.css';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import EquipmentContent from '../../components/Equipment/EquipmentContent';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Equipment = () => {
    const [checkPW, setCheckPW] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [present] = useIonAlert();

    useIonViewWillEnter(() => {
        setShowAlert(true);
        if (localStorage.getItem("PWChecked") == "true") {
            setCheckPW(true);
            setShowAlert(false);
            localStorage.setItem("PWChecked", "true");
        }
    })

    return (
        <IonPage>
            <Header site_title="Geräte" />
            {checkPW && (<EquipmentContent />)}
            <IonAlert
                isOpen={showAlert}
                onDidDismiss={() => setShowAlert(false)}
                cssClass='my-custom-class'
                header={'Passwort Checker'}
                inputs={[
                    {
                        name: 'PWChecker',
                        type: 'text',
                        placeholder: 'Passwort'
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
                        text: 'Ok',
                        handler: (alertdata) => {
                            console.log('Confirm Ok');
                            if (alertdata.PWChecker == '1234') {
                                console.log(alertdata.PWChecker);
                                localStorage.setItem("PWChecked", "true");
                                setCheckPW(true);
                                setShowAlert(false);
                            } else if (alertdata.PWChecker == 'Hallo') {
                                present({
                                    header: 'Geheime Nachricht',
                                    message: 'Hallo ' + localStorage.getItem("user-firstname") + ', danke das du unsere App benutzt',
                                    buttons: [
                                        { text: 'Ok', handler: (d) => console.log('ok pressed') },
                                    ],
                                    onDidDismiss: (e) => console.log('did dismiss'),
                                })
                            } else {
                                present({
                                    header: 'Falsches Passwort',
                                    message: 'Bitte geben Sie das richtige Passwort ein.',
                                    buttons: [
                                        { text: 'Ok', handler: (d) => console.log('ok pressed') },
                                    ],
                                    onDidDismiss: (e) => console.log('did dismiss'),
                                })
                            }
                        }
                    }
                ]}
            ></IonAlert>
            <Menu />
        </IonPage>
    );
};

export default Equipment;
