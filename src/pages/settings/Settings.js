import { IonContent, IonHeader, IonPage, IonProgressBar} from '@ionic/react';
import './Settings.css';
import '../dark-theme.css';
import Header_Settings from '../../components/Header-Settings';
import Settings_Content from '../../components/User/UserContent';


const Settings = () => {
    return (
        <IonPage>
            <Header_Settings site_title={"Account"} />
            <Settings_Content />
        </IonPage>
    );
};

export default Settings;
