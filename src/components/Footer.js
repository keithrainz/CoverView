import React from 'react';
import AdSense from 'react-adsense-ad';
import './App.css';

const Footer = () => {
    return (
        <footer>
		
	      <AdSense.Google
  client='ca-pub-2534224332415775'
  slot='7709604485'
  style={{ width: 500, height: 300, float: 'left' }}
  format='auto'
/>
            Made with &#10084; By <a href="https://keithrainz.me/blogcover/">Keith Rainz</a>
        </footer>
    );

}

export default Footer;
