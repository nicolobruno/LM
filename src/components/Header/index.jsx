import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { ITEMS_HEADER } from './constants';
import { useMobileDevice } from '../../hooks/useDeviceMobile';
import menu from '../../assets/menu.png';
import './styles.scss';

const Header = () => {
    const isMobile = useMobileDevice();
    const [menuOpen, setMenuOpen] = useState(false);
    const handleClickToogle = () => {
        if (isMobile) {
            setMenuOpen((prevState) => !prevState);
        }
    }

    return (
        <div className="header">
            <div className="container">
                <Link className="title" onClick={handleClickToogle} to="/quotes">Likemind</Link>
                {isMobile && (
                    <img src={menu} alt="menu" onClick={handleClickToogle} />
                )}
                {(!isMobile || menuOpen) && (
                    <div className="container-items">
                        {ITEMS_HEADER && ITEMS_HEADER.map(elem => 
                            <Link key={elem.name} onClick={handleClickToogle} className="item" to={elem.route}>{elem.name}</Link>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header