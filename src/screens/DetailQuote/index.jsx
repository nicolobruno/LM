import React, { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import dayjs from 'dayjs';

import { useMobileDevice } from '../../hooks/useDeviceMobile';
import { BASE_URL } from '../../api';
import { useLoadImage} from '../../hooks/useLoadImage';
import ShareButtons from './components/ShareButtons';
import './styles.scss';

const DetailQuote = () => {
    const { id } = useParams();
    const [quote, setQuote] = useState(null);
    const isMobile = useMobileDevice();
    const loaded = useLoadImage(quote ? isMobile ? quote.mobileImage.publicURL : quote.desktopImage.publicURL : null)

    useEffect(() => {
        window.scrollTo(0, 0);
        axios
        .get(`${BASE_URL}/${id}`)
        .then(data => setQuote(data.data))
      }, [id]);

      const urlShared = encodeURIComponent(`${window.location.origin}/quote/${id}`)

    return (
        <div className="container-detail-quote">
            {quote && (
                <Fragment>
                    <img className={`image-quote ${!loaded ? 'loading' : ''}`} src={loaded} alt="quote" />
                    <div className="container-detail-body">
                        <div className="header-quote">
                            <span className="date">{dayjs(quote.activeTs).format('dddd, MMMM D, YYYY')}</span>
                            <ShareButtons urlShared={urlShared} />
                        </div>  
                        <h2 className="title">{quote.title}</h2>
                        <img src="https://lm-challenges.s3.amazonaws.com/resources/quote-icon.svg" alt="separator" />
                        <h2 className="author">{quote.author.title}</h2>
                        <p className="description">{quote.description}</p>
                    </div>
                </Fragment>
            )}
        </div>
    )
}

export default DetailQuote;
