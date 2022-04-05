import { IonContent, IonButton, useIonLoading, IonHeader, IonToolbar, IonTitle, IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';
import './UserContent.css';
import Header from '../Header';
import axios from 'axios';
import { useEffect, useState } from 'react';

const User_Settings = () => {
    const [firstname, setFirstname] = useState(localStorage.getItem("user-firstname"));
    const [lastname, setLastname] = useState(localStorage.getItem("user-lastname"));
    const [email, setEmail] = useState(localStorage.getItem("user-email"));
    const [present, dismiss] = useIonLoading();

    const logout = () => {
        window.location.replace('./Logout/logout');
    }


    const updatedata = () => {
        console.log(lastname);
        axios.post("https://msfitness-17584.nodechef.com/updatedata", {
            firstname: firstname,
            lastname: lastname,
            email: email,
            token: localStorage.getItem("user-token")
        }).then((response) => {
            present('Wird aktualisiert...', 2000, 'lines');
            setTimeout(() => {
                console.log(response.data.message);
                axios.post("https://msfitness-17584.nodechef.com/getuserdata", {
                    token: localStorage.getItem('user-token'),
                }).then((response) => {
                    console.log(response.data);
                    if (response.data) {
                        localStorage.setItem('user-email', response.data.EMAIL);
                        localStorage.setItem('user-firstname', response.data.FIRSTNAME);
                        localStorage.setItem('user-lastname', response.data.LASTNAME);
                        window.location.replace("./settings/Settings");
                    }
                });
            }, 2000);
        });
    }

    return (
        <div slot="fixed">
            <div className='flex-wrapper'>
                <div>
                    <p>Vorname</p>
                    <input onChange={(e) => { setFirstname(e.target.value); }} type='text' defaultValue={localStorage.getItem("user-firstname")} />
                </div>
                <div>
                    <p>Nachname</p>
                    <input onChange={(e) => { setLastname(e.target.value); }} type='text' defaultValue={localStorage.getItem("user-lastname")} />
                </div>
            </div>
            <div>
                <p>Email</p>
                <input onChange={(e) => { setEmail(e.target.value); }} type='email' defaultValue={localStorage.getItem("user-email")} />
            </div>
            <IonButton expand="block" onClick={updatedata}>Aktualisieren</IonButton>

            <div className='log-out-wrapper'>
                <IonButton expand="block" color="danger" onClick={logout}>Ausloggen</IonButton>
            </div>
        </div>
    );
};

export default User_Settings;