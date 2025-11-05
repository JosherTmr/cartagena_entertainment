import React from 'react';
import { companyInfo } from '../data/database';
import './WhatsAppButton.css';

const WhatsAppButton: React.FC = () => {
  return (
    <div className="phone-call cbh-phone cbh-green cbh-show cbh-static group" id="clbh_phone_div">
        <a id="WhatsApp-button" href={companyInfo.socials.whatsapp} target="_blank" className="phoneJs" title="Contact us on WhatsApp" rel="noopener noreferrer">
            <div className="cbh-ph-circle"></div>
            <div className="cbh-ph-circle-fill"></div>
            <div className="cbh-ph-img-circle1"></div>
        </a>
    </div>
  );
};

export default WhatsAppButton;