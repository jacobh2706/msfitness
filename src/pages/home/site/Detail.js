import { IonBackButton, IonContent, IonModal, IonButton } from '@ionic/react';
import React from 'react';
import { useState } from 'react';
import bg_image from '../../../images/image1.jpg';
import { NavLink } from 'react-router-dom';

import './Detail.css';

import FastAverageColor from 'fast-average-color';

const fac = new FastAverageColor();
function getColor() {
    const container = document.getElementsByClassName('text-card');
    const container_text = document.getElementsByClassName('text-card-content');
    fac.getColorAsync(bg_image, { algorithm: 'dominant' })
        .then(function (color) {
            for (let i = 0; i < container.length; i++) {
                console.log(container);
                console.log(color.rgba);
                container[i].style.backgroundColor = color.rgba;
                container_text[i].style.color = color.isDark ? '#fff' : '#000';
            }
        })
        .catch(function (e) {
            console.error(e);
        });
}

const DetailContent = () => {
    const showText = () => {
        var preview = document.getElementById('show-text');
        var file = document.querySelector('input[type=file]').files[0];
        var reader = new FileReader()

        var textFile = /text.*/;

        if (file.type.match(textFile)) {
            reader.onload = function (event) {
                preview.innerHTML = event.target.result;
            }
        } else {
            preview.innerHTML = "<span class='error'>It doesn't seem to be a text file!</span>";
        }
        reader.readAsText(file);
    }

    return (
        <IonContent onLoad={getColor()} >
            <div className='home-detail-content' slot='fixed'>
                <img className='image-card' src={bg_image} />
                <div className='text-card'>
                    <IonBackButton style={{ width: 'min-content' }} className='back-button' defaultHref='./home/Home' />
                    <p className='text-card-content'>
                        Test
                    </p>
                </div>
            </div>
        </IonContent>
    );
};

export default DetailContent;