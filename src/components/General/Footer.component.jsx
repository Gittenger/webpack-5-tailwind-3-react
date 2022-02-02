import React from 'react';

import EmailImg from '../../assets/icons/email.svg?react';
import FacebookImg from '../../assets/icons/facebook.svg?react';
import InstagramImg from '../../assets/icons/instagram.svg?react';

const Footer = () => (
  <div>
    <div>&copy; 2021 My Website</div>
    <div>
      <ul>
        <li>
          <a href={`mailto:${process.env.MAIN_EMAIL}`}>
            <EmailImg />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com"
          >
            <FacebookImg />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/"
          >
            <InstagramImg />
          </a>
        </li>
      </ul>
    </div>
    <div>
      <div>
        Website made by{' '}
        <a href="http://www.johnpittenger.com/" title="Vectors Market">
          John Pittenger
        </a>{' '}
        Website design © John Pittenger
      </div>
    </div>
  </div>
);

export default Footer;
