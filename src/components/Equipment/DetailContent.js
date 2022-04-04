import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons } from '@ionic/react';
import React, { useState, useEffect, } from 'react';
import ReactPlayer from 'react-player'
import video from '../../images/Rum_kreuzheben.mov';


import './DetailContent.css';

const DetailContent = ({ site_title,site_descr,video_link }) => {
    const [editMode, setEditMode] = useState(false);
    
    useEffect(() => {
        if (localStorage.getItem("EditMode") == "true") {
            setEditMode(true);
            console.log("editmode")
        } else {
            setEditMode(false);
            console.log("editmode off")
        }
    });

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

            {editMode && 
            <div className='detail-content-edit'>
                <textarea defaultValue={site_descr}></textarea>
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
            </div>}
        </IonContent>
    );
};

export default DetailContent;