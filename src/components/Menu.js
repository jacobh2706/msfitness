import {
    NavLink,
    Route,
} from 'react-router-dom';

import './Menu.css';
import '../pages/dark-theme.css';

import home_icon from '../images/home-icon.png';
import home_icon_active from '../images/home-icon-active.png';
import user_icon from '../images/user-icon.png';
import user_icon_active from '../images/user-icon-active.png';
import gym_icon from '../images/gym-icon.png';
import gym_icon_active from '../images/gym-icon-active.png';
import chat_icon from '../images/chat-icon.png';
import chat_icon_active from '../images/chat-icon-active.png';

const Menu = () => {
    return (
        <nav className='menu-bottom'>
            <ul>
                <NavLink exact to="../equipment/Equipment" activeStyle={{ display: 'none' }}>
                    <li>
                        <img src={gym_icon} />
                    </li>
                </NavLink>
                <NavLink exact to="../equipment/Equipment" style={{ display: 'none' }} activeStyle={{ display: 'flex' }}>
                    <li>
                        <img src={gym_icon_active} />
                    </li>
                </NavLink>

                <NavLink to="../chat/Chat" activeStyle={{ display: 'none' }}>
                    <li>
                        <img src={chat_icon} />
                    </li>
                </NavLink>
                <NavLink to="../chat/Chat" style={{ display: 'none' }} activeStyle={{ display: 'flex' }}>
                    <li>
                        <img src={chat_icon_active} />
                    </li>
                </NavLink>

                <NavLink to="../home/Home" activeStyle={{ display: 'none' }}>
                    <li>
                        <img src={home_icon} />
                    </li>
                </NavLink>
                <NavLink to="../home/Home" style={{ display: 'none' }} activeStyle={{ display: 'flex' }}>
                    <li>
                        <img src={home_icon_active} />
                    </li>
                </NavLink>

                <NavLink to="../settings/Settings" activeStyle={{ display: 'none' }}>
                    <li>
                        <img src={user_icon} />
                    </li>
                </NavLink>
                <NavLink to="../settings/Settings" style={{ display: 'none' }} activeStyle={{ display: 'flex' }}>
                    <li>
                        <img src={user_icon_active} />
                    </li>
                </NavLink>
            </ul>
        </nav>
    );
};

export default Menu;