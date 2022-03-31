import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect } from 'react';
import ReactPlayer from 'react-player'
import video from '../../images/Rum_kreuzheben.mov';

import './DetailContent.css';

const DetailContent = ({ site_title,site_descr,video_link }) => {
    return (
        <IonContent fullscreen="true">
            <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">{site_title}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <div className='detail-content'>
                <p>{site_descr}</p>
                <h1>Video</h1>
                <div className='player-wrapper'>
                    <ReactPlayer
                        className='react-player'
                        url={[video_link]}
                        width='80%'
                        height='100%'
                        controls={true}
                    />
                </div>
            </div>
        </IonContent>
    );
};

export default DetailContent;