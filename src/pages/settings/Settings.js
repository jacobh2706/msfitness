import { IonContent, IonHeader, IonPage} from '@ionic/react';
import './Settings.css';
import '../dark-theme.css';
import Header_Settings from '../../components/Header-Settings';
import Settings_Content from '../../components/User/UserContent';


const Settings = () => {
    return (
        <IonPage>
            <Header_Settings site_title={"Account"} />

            <IonContent fullscreen="true">
                <Settings_Content />
            </IonContent>
        </IonPage>
    );
};

export default Settings;
