
import React from 'react';
import { companyInfo } from '../data/database';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const { socials } = companyInfo;

  return (
    <footer className="mt-16">
       <div className="container mx-auto px-4">
            <div className="bg-[rgba(10,15,20,0.3)] backdrop-blur-lg border-t border-[var(--glass-border)]">
                <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-white/60">&copy; {year} {companyInfo.name}. Todos los derechos reservados.</p>
                    <div className="flex space-x-6">
                        <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[var(--color-keppel)] transition-colors duration-300">
                            <i className="fab fa-instagram fa-lg"></i>
                        </a>
                        <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[var(--color-keppel)] transition-colors duration-300">
                            <i className="fab fa-facebook-f fa-lg"></i>
                        </a>
                        <a href={socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[var(--color-keppel)] transition-colors duration-300">
                            <i className="fab fa-whatsapp fa-lg"></i>
                        </a>
                    </div>
                </div>
            </div>
       </div>
    </footer>
  );
};

export default Footer;