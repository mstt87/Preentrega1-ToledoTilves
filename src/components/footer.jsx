import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white text-center p-4 mt-8">
            <div className="flex justify-center space-x-4">
                <a href="#" className="hover:text-orange-500">
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
                <a href="#" className="hover:text-blue-800">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
                <a href="#" className="hover:text-red-500">
                    <FontAwesomeIcon icon={faYoutube} size="lg" />
                </a>
                <a href="#" className="hover:text-sky-400">
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
            </div>
            <p className="mt-2">© 2024 Funko E-shop</p>
        </footer>
    );
}

export default Footer;
