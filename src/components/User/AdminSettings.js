import { IonContent, IonHeader, IonList, IonItem, IonLabel, IonSpinner } from '@ionic/react';
import './UserContent.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';

const Admin_Settings = () => {
    var Elems = [];

    useEffect(() => {
        ReactDOM.render(
            <IonSpinner />,
            document.getElementById('admin-content')
        );
        axios.get('https://msfitness-17584.nodechef.com/getalluserdata').then((result) => {
            Elems.push(result.data);

            var count_item = $("<ion-item>Registrierte Benutzer: " + Elems[0].length + "</ion-item>").addClass("user-count");
            $('.admin-content').append(count_item[0]);

            ReactDOM.render(
                <IonList className='user-list' lines='full'></IonList>,
                document.getElementById('admin-content')
            );
            for (let i = 0; i < Elems[0].length; i++) {
                var item = $("<ion-item></ion-item>").addClass("user");
                $('.user-list').append(item[0]);

                var label = $("<ion-label></ion-label>").addClass("user-label");
                $('.user')[i].append(label[0]);

                $('.user-label')[i].appendChild(document.createElement("h2")).appendChild(document.createTextNode(Elems[0][i].FIRSTNAME + " " + Elems[0][i].LASTNAME));
                $('.user-label')[i].appendChild(document.createElement("p")).appendChild(document.createTextNode(Elems[0][i].EMAIL));

                if (Elems[0][i].ROLE == "ADMIN") {
                    var item = $('<p>Administrator</p>').addClass("user-role");
                    $('.user-label')[i].append(item[0]);
                }
            }
        });
    });

    return (
        <IonContent className='admin-content' id="admin-content">
        </IonContent>
    );
};

export default Admin_Settings;