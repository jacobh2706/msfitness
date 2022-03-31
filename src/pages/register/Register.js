import { IonContent, IonPage, useIonAlert, IonProgressBar, useIonToast, IonButtons, IonButton,IonModal, IonDatetime } from '@ionic/react';
import './Register.css';
import '../dark-theme.css';
import logo from '../../images/logo.png'
import logolight from '../../images/logo-light.png';
import axios from 'axios';
import React, { useRef, useState } from "react";
import { format, parseISO } from 'date-fns';

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

function dark(e) {
  if (prefersDarkScheme.matches) {
    e.target.setAttribute('src', logolight);
  } else {
    e.target.setAttribute('src', logo);
  }
}

const Register = () => {
  var [firstnameReg, setFirstnameReg] = useState("");
  var [lastnameReg, setLastnameReg] = useState("");
  var [emailReg, setEmailReg] = useState("");
  var [passwordReg, setPasswordReg] = useState("");
  const [birthdayReg, setBirthdayReg] = useState("");

  const [present] = useIonAlert();
  const [present_toast, dismiss] = useIonToast();

  var formValid = true;

  const validation = () => {
    if (!firstnameReg) {
      alert_box("Bitte geben Sie Ihren Vornamen an.");
      formValid = false;
    }

    if (typeof firstnameReg !== "undefined") {
      if (!firstnameReg.match(/^[a-zA-Z]+$/)) {
        alert_box("Nur buchstaben erlaubt.");
        formValid = false;
      }
    }

    if (!lastnameReg) {
      alert_box("Bitte geben Sie Ihren Nachnamen an.");
      formValid = false;
    }

    if (typeof lastnameReg !== "undefined") {
      if (!firstnameReg.match(/^[a-zA-Z]+$/)) {
        alert_box("Nur buchstaben erlaubt.");
        formValid = false;
      }
    }

    if (!emailReg) {
      alert_box("Bitte geben Sie ihre Email an.");
      formValid = false;
    }

    if (!passwordReg) {
      alert_box("Bitte entscheiden Sie sich für ein Passwort.");
      formValid = false;
    }
    register();
  }


  const register = () => {
    if (formValid == true) {

      axios.post("https://msfitness-17584.nodechef.com/register", {
        firstname: firstnameReg,
        lastname: lastnameReg,
        email: emailReg,
        password: passwordReg,
        birthday: birthdayReg,
      }).then((response) => {
        document.getElementsByClassName('loading-bar')[0].style.display = 'inline';
        setTimeout(() => {
          document.getElementsByClassName('loading-bar')[0].style.display = 'none';
          toast_box(response.data.message);
          if (response.data.message == "User wurde erfolgreich erstellt.")
            setTimeout(() => { success(); }, 2000);
        }, 2000);
      });
    }
  }

  function success() {
    window.location.replace("./login/Login");
  }

  function alert_box(msg) {
    present({
      cssClass: 'my-css',
      header: 'Hinweis',
      message: msg,
      buttons: [
        { text: 'Ok', handler: (d) => console.log('ok pressed') },
      ],
    })
  }

  function toast_box(msg) {
    present_toast({
      duration: 1000,
      message: msg,
      onDidDismiss: () => console.log('dismissed'),
      onWillDismiss: () => console.log('will dismiss'),
    })
  }



  const formatDate = (value) => {
    return format(parseISO(value), 'yyyy-MM-dd');
  };

  return (
    <IonPage>
      <div className='main' slot="fixed">
        <div className='logo-img'><img src={logo} onLoad={dark} /></div>
        <div className='register'>
          <p>Vorname</p>
          <input required type="text"
            onChange={(e) => {
              setFirstnameReg(e.target.value);
            }} type="text" />

          <p>Nachname</p>
          <input required type="text"
            onChange={(e) => {
              setLastnameReg(e.target.value);
            }} type="text" />

          <p>Geburtstag</p>
          <input required id="open-modal" defaultValue={birthdayReg}/>

          <IonModal trigger="open-modal">
            <IonContent>
              <IonDatetime presentation="date" onIonChange={ev => setBirthdayReg(formatDate(ev.detail.value))}>
              </IonDatetime>
            </IonContent>
          </IonModal>

          <p>Email</p>
          <input required type="text"
            onChange={(e) => {
              setEmailReg(e.target.value);
            }} type="email" />

          <p>Password</p>
          <input required type="text"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }} type="password" />
          <p>Bereits registriert? <a href='../login/Login'>Melde dich hier an.</a></p>
          <button onClick={validation}>Registrieren <span>💪</span></button>
        </div>
      </div>
      <IonProgressBar class='loading-bar' style={{ display: 'none' }} type="indeterminate"></IonProgressBar>
    </IonPage>
  );
};

export default Register;
