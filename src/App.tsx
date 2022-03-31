import { Redirect, Route, NavLink } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { useEffect } from 'react';
import axios from 'axios';
import './global.css';

import Welcome_Page from './pages/welcome_page/Welcome_Page';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Settings from './pages/settings/Settings';
import Equipment from './pages/equipment/Equipment';
import Notification from './pages/notification/Notification';
import Detail from './pages/equipment/site/detail';
import HomeDetail from './pages/home/site/Detail';
import Logout from './pages/logout/Logout';
import Chat from './pages/chat/Chat';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const AppTest: React.FC = () => (

  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/login/Login">
          <Login />
        </Route>
        <Route exact path="/register/Register">
          <Register />
        </Route>
        <Route exact path="/home/Home">
          <Home />
        </Route>
        <Route exact path="/settings/Settings">
          <Settings />
        </Route>
        <Route exact path="/equipment/Equipment">
          <Equipment />
        </Route>
        <Route exact path="/equipment/site/detail">
          <Detail />
        </Route>
        <Route exact path="/home/site/Detail">
          <HomeDetail/>
        </Route>
        <Route exact path="/notification/Notification">
          <Notification />
        </Route>
        <Route exact path="/logout/Logout">
          <Logout />
        </Route>
        <Route exact path="/welcome_page/Welcome_Page">
          <Welcome_Page />
        </Route>
        <Route exact path="/chat/Chat">
          <Chat />
        </Route>
        <Route exact path="/">
          <Redirect to="/welcome_page/Welcome_Page" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default AppTest;
