import React from 'react';

const ShareButtons = ({ urlShared }) => {
    return (
        <div className="container-icons">
            <a
                target="_blank"
                className="link-share"
                rel="noopener noreferrer"
                href={`https://www.facebook.com/sharer/sharer.php?u=${urlShared}`}>
                <img src="https://lm-challenges.s3.amazonaws.com/resources/fb-icon.svg" alt="facebook" />
            </a>
            <a
                target="_blank"
                className="link-share"
                rel="noopener noreferrer"
                href={`https://twitter.com/share?url=${urlShared}`}>
                <img src="https://lm-challenges.s3.amazonaws.com/resources/tw-icon.svg" alt="tw" />
            </a>
            <a
                target="_blank"
                className="link-share"
                rel="noopener noreferrer"
                href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&body= Take a look at this quote ${urlShared}&ui=2&tf=1&pli=1`}>
                <img src="https://lm-challenges.s3.amazonaws.com/resources/email-icon.svg" alt="email" />
            </a>
        </div>
    )
}

export default ShareButtons;
