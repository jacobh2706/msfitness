import { IonContent, IonHeader, IonPage, useIonViewWillEnter } from '@ionic/react';
import './Home.css';
import '../dark-theme.css';
import { useState, useEffect } from 'react';
import axios from "axios";

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import HomeContent from '../../components/Home/HomeContent';
import moment from 'moment';

import { App } from '@capacitor/app';
import { BackgroundTask } from '@robingenz/capacitor-background-task';

import { LocalNotifications } from '@capacitor/local-notifications';
import { Badge } from '@awesome-cordova-plugins/badge';

const Home = () => {
    var Elems = []
    const [isloaded, setisloaded] = useState(false);
    const [isBday, setIsBday] = useState(false);
    const date = new Date();

    useEffect(async () => {
        axios.post("https://msfitness-17584.nodechef.com/getuserdata", {
            token: localStorage.getItem('user-token'),
        }).then((response) => {
            if (response.data) {
                localStorage.setItem('user-firstname', response.data.FIRSTNAME);
            }
        });

        checkBirthday();

        setisloaded(true);
    }, []);

    useIonViewWillEnter(() => {
        setisloaded(false);

        axios.get('https://msfitness-17584.nodechef.com/getNotification').then((result) => {
            Elems = [];
            Elems.push(result.data);
            console.log("Datenbank" + Elems[0].length);
            console.log("Lokal" + localStorage.getItem("notification-count"));
            if (Elems[0].length != localStorage.getItem("notification-count")) {
                localStorage.setItem("newNotiCount", Elems[0].length - localStorage.getItem("notification-count"));
                console.log("Neue nachrichten!");
                setisloaded(true);
            } else {
                localStorage.setItem("newNotiCount", "0");
                console.log("Keine neuen Nachrichten");
                setisloaded(true);
            }
        });
    });

    const checkBirthday = () => {
        console.log(moment().format('YYYY-MM-DD'));
        if (moment().format('YYYY-MM-DD') == localStorage.getItem('user-birthday')) {
            console.log("bday");
            setIsBday(true);
        } else {
            console.log("kein bday");
            setIsBday(false);
        }
    }

    return (
        <IonPage>
            <Header site_title={"Home"} />
            <HomeContent isloaded={isloaded} isBday={isBday} />
            <Menu />
        </IonPage>
    );
};

export default Home;
