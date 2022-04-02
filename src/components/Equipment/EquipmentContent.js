import { IonContent, IonRefresher, IonRefresherContent, IonSearchbar, IonToolbar, IonTitle, IonHeader } from '@ionic/react';
import React, { useState, useEffect, createElement, Children } from 'react';
import { chevronDownCircleOutline } from 'ionicons/icons';
import { RefresherEventDetail } from '@ionic/core';
import './EquipmentContent.css';
import axios from 'axios';

import $ from 'jquery';
import { Keyboard } from '@capacitor/keyboard';

function doRefresh(RefresherEventDetail) {
    console.log('Begin async operation');
    var Elems = []
    axios.get('https://msfitness-17584.nodechef.com/getEquipment').then((result) => {
        Elems.push(result.data);
        setTimeout(() => {
            console.log('Async operation has ended');
            $('.device-list')[0].remove();
            $('.device-list-wrapper')[0].appendChild(document.createElement("ul"));
            $('.device-list-wrapper ul')[0].classList.add("device-list");
            for (let i = 0; i < Elems[0].length; i++) {
                $('.device-list')[0].appendChild(document.createElement("a"));

                $('.device-list a')[i].classList.add("device-link");
                $('.device-link')[i].setAttribute('href', '../equipment/site/detail?ID=' + Elems[0][i].ID);
                $('.device-link')[i].appendChild(document.createElement("li"));

                $('.device-list li')[i].classList.add("device");
                $('.device-list li')[i].appendChild(document.createElement("div"));

                $('.device-list li')[i].appendChild(document.createElement("h3"));
                $('.device-list li h3')[i].appendChild(document.createTextNode(Elems[0][i].NAME));
            }
            RefresherEventDetail.detail.complete();
        }, 2000);
    });
}

const EquipmentContent = () => {
    const [searchText, setSearchText] = useState('');
    var Elems = []

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', info => {
            $('.menu-bottom').css('display', 'none');
        });
        Keyboard.addListener('keyboardDidHide', info => {
            $('.menu-bottom').css('display', 'inline');
        });

        if (searchText) {
            console.log(searchText);
            showFiltered(searchText);
        } else {
            showAll();
        }
    }, [searchText]);

    const showAll = () => {
        axios.get('https://msfitness-17584.nodechef.com/getEquipment').then((result) => {
            Elems.push(result.data);
            console.log(Elems);
            $('.device-list')[0].remove();
            $('.device-list-wrapper')[0].appendChild(document.createElement("ul"));
            $('.device-list-wrapper ul')[0].classList.add("device-list");
            for (let i = 0; i < Elems[0].length; i++) {
                console.log(i);
                $('.device-list')[0].appendChild(document.createElement("a"));

                $('.device-list a')[i].classList.add("device-link");
                $('.device-link')[i].setAttribute('href', '../equipment/site/detail?ID=' + Elems[0][i].ID);
                $('.device-link')[i].appendChild(document.createElement("li"));

                $('.device-list li')[i].classList.add("device ripple-parent");
                $('.device-list li')[i].appendChild(document.createElement("div"));

                $('.device-list li')[i].appendChild(document.createElement("h3"));
                $('.device-list li h3')[i].appendChild(document.createTextNode(Elems[0][i].NAME));
            }
        });
    }

    const showFiltered = (searchText) => {
        console.log("suche nach: " + searchText);
        axios.get('https://msfitness-17584.nodechef.com/getEquipment').then((result) => {
            $('.device-list')[0].remove();
            $('.device-list-wrapper')[0].appendChild(document.createElement("ul"));
            $('.device-list-wrapper ul')[0].classList.add("device-list");

            for (let j = 0; j < result.data.length; j++) {
                if (result.data[j].NAME.includes(searchText)) {
                    Elems.push(result.data[j]);
                    console.log(result.data[j])
                    console.log("gepushed");
                }
            }

            setTimeout(() => {
                for (let i = 0; i < Elems.length; i++) {
                    console.log(i);
                    $('.device-list')[0].appendChild(document.createElement("a"));

                    $('.device-list a')[i].classList.add("device-link");
                    $('.device-link')[i].setAttribute('href', '../equipment/site/detail?ID=' + Elems[i].ID);
                    $('.device-link')[i].appendChild(document.createElement("li"));

                    $('.device-list li')[i].classList.add("device");
                    $('.device-list li')[i].appendChild(document.createElement("div"));

                    $('.device-list li')[i].appendChild(document.createElement("h3"));
                    $('.device-list li h3')[i].appendChild(document.createTextNode(Elems[i].NAME));
                }
            }, 200);
        });
    }

    return (
        <IonContent fullscreen="true">
            <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">Geräte</IonTitle>
                </IonToolbar>
                <IonToolbar>
                    <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value)}></IonSearchbar>
                </IonToolbar>
            </IonHeader>

            <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
                <IonRefresherContent></IonRefresherContent>
            </IonRefresher>
            <div className='device-list-wrapper'>
                <ul className='device-list'>
                </ul>
            </div>
        </IonContent>
    );
};

export default EquipmentContent;