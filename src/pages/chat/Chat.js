import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Chat.css';
import '../dark-theme.css';

import Header from '../../components/Header';
import Menu from '../../components/Menu';

import Lottie from "lottie-react";
import underConstruction from "./under-construction.json";

const Chat = () => {

    return (
        <IonPage>
            <Header site_title={"Chat"} />
            <IonContent scrollEvents={true} fullscreen="true">
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Chat</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <Lottie animationData={underConstruction} loop={true} />
            </IonContent>
            <Menu />
        </IonPage>
    );
};

export default Chat;