import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './detail.css';
import '../../dark-theme.css';
import axios from 'axios';
import React, { useEffect,useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Detail_Header from '../../../components/Detail_Header';
import DetailContent from '../../../components/Equipment/DetailContent';


const Equipment_Detail = () => {
    const [title, setTitle] = useState('');
    const [descr, setDescr] = useState('');
    const [videoLink, setVideoLink] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [id, setID] = useState('');


    useEffect(() => {
        var url_string = window.location;
        var url = new URL(url_string);
        var ID = url.searchParams.get("ID");

        axios.post('https://msfitness-17584.nodechef.com/getEquipmentDetail', {
            ID: ID
        }).then((result) => {
            getdata(result.data); 
        });
    })

    const getdata = (data) => {
        setID(data[0].ID)
        setTitle(data[0].NAME);
        setDescr(data[0].DESCR);
        setVideoLink(data[0].LINK);

        setIsLoaded(true);        
    }


    return (
        <IonPage>
            {isLoaded && (<Detail_Header site_title={title} />)}
            {isLoaded && (<DetailContent site_title={title} site_descr={descr} video_link={videoLink} site_id={id}/>)}
        </IonPage>
    );
};

export default Equipment_Detail;
