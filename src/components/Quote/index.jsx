import React from 'react';
import { Link } from "react-router-dom";
import dayjs from 'dayjs';

import arrow from '../../assets/arrow-white.png';
import { useLoadImage } from '../../hooks/useLoadImage'
import './styles.scss';

const Quote = ({date, id, image}) => {
    const loaded = useLoadImage(image)
    return (
        <Link to={`/quote/${id}`}>
            <div className={`picture-card ${!loaded ? 'loading' : ''}`} style={ loaded ? { backgroundImage: `url(${loaded})` } : {}}>
                <div className="date">
                    <span className="text">{dayjs(date).format('dddd, MMMM D, YYYY')}</span>
                    <img src={arrow} alt="arrow" className="arrow-date"/>
                </div>
            </div>
        </Link>
    )
}
    
export default Quote;
