import { IonToolbar, IonHeader, IonTitle } from '@ionic/react';
import './Header.css';



const Header = ({ site_title }) => {

    return (
        <IonHeader translucent="true">
            <IonToolbar>
                <IonTitle>{site_title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
};

export default Header;