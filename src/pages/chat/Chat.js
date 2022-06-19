import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Chat.css';
import '../dark-theme.css';

import Header from '../../components/Header';
import Menu from '../../components/Menu';

import Lottie from "lottie-react";
import groovyWalkAnimation from "./groovyWalk.json";

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
                <Lottie animationData={groovyWalkAnimation} />
            </IonContent>
            <Menu />
        </IonPage>
    );
};

export default Chat;