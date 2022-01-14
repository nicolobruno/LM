import React from 'react';
import { Link } from "react-router-dom";

import { ITEMS_HEADER } from './constants';
import { useMobileDevice } from '../../hooks/useDeviceMobile';
import menu from '../../assets/menu.png';
import './styles.scss';

const Header = () => {
    const isMobile = useMobileDevice();
    return (
        <div className="header">
            <div className="container">
                <Link className="title" to="/quotes">Likemind</Link>
                {isMobile ? (
                    <img src={menu} alt="menu" />
                ) : (
                    <div className="container-items">
                        {ITEMS_HEADER && ITEMS_HEADER.map(elem => 
                            <Link key={elem.name} className="item" to={elem.route}>{elem.name}</Link>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header