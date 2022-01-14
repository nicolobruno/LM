import React, { useEffect, useState } from 'react';
import axios from 'axios'

import { BASE_URL } from '../../api';
import Quote from '../../components/Quote';
import { useMobileDevice } from '../../hooks/useDeviceMobile'
import './styles.scss';

const Quotes = () => {
    const [quotes, setQuotes] = useState([])
    const [limit, setLimit] = useState(6)
    const isMobile = useMobileDevice()

    useEffect(() => {
        axios
        .get(BASE_URL)
        .then(data => setQuotes(data.data.quotes))
      }, []);
    
      const handleOnClickViewMore = () => {
          setLimit(quotes.length)
      }

    return (
        <div className="container-home">
            {quotes && quotes.slice(0, limit).map(item => <Quote key={item._id} id={item._id} date={item.activeTs} image={isMobile ? item.mobileImage.publicURL : item.desktopImage.publicURL} />)}
            {quotes && limit < quotes.length && (
                <div className="container-button">
                    <button type="button" onClick={handleOnClickViewMore} className="view-more">+ View More</button>
                </div>
            )}
        </div>
    )
}

export default Quotes