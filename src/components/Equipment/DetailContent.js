import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useEffect, } from 'react';
import ReactPlayer from 'react-player'
import video from '../../images/Rum_kreuzheben.mov';
import $ from 'jquery';
import axios from 'axios';

import './DetailContent.css';


const DetailContent = ({ site_title, site_descr, video_link, site_id }) => {
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("EditMode") == "true") {
            setEditMode(true);
            console.log("EditMode ON")
        } else {
            setEditMode(false);
            console.log("EditMode OFF")
        }
    });

    return (
        <IonContent fullscreen="true">
            <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">{site_title}</IonTitle>
                </IonToolbar>
            </IonHeader>

            {!editMode &&
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
                </div>}

            {editMode &&
                <div className='detail-content-edit'>
                    <h1>Text</h1>
                    <textarea defaultValue={site_descr}></textarea>
                    <h1>Video</h1>
                    <input defaultValue={video_link} id='link-input'></input>
                    <input defaultValue={site_id} style={{display:"none"}} id="site-id"></input>
                </div>}
        </IonContent>
    );
};

export function updateData (){
    console.log("Daten updaten...");
    axios.post("https://msfitness-17584.nodechef.com/updateEquipmentDetail", {
        descr: $('textarea').val(),
        link: $('#link-input').val(),
        id: $('#site-id').val(),
    }).then((response) => {
        setTimeout(() => {
            console.log(response.data.message);
            window.location.reload(true);
        }, 2000);
    });
}

export default DetailContent;