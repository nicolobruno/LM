import React from 'react';
import { Link } from "react-router-dom";

import { ITEMS_FOOTER } from './constants';
import './styles.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <h1 className="title">LM</h1>
                <hr className="separator"/>
                <div className="container-items">
                    {ITEMS_FOOTER && ITEMS_FOOTER.map(elem => 
                        <Link key={elem.name} className="item" to={elem.route}>{elem.name}</Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Footer