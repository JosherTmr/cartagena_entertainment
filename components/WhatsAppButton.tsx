
import React from 'react';
import { companyInfo } from '../data/database';
import './WhatsAppButton.css';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={companyInfo.socials.whatsapp}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/whatsapp_icon.png" alt="WhatsApp" />
    </a>
  );
};

export default WhatsAppButton;
