import React from 'react';
import { BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialSites = () => {
    return (
        <div>
            <div className="insta bg-secondary rounded-full p-1 mb-2">
                <BsInstagram />
            </div>
            <div className="facebook bg-secondary rounded-full p-1 mb-2">
                <FaFacebookF />
            </div>
            <div className="twitter bg-secondary rounded-full p-1 mb-2">
                <BsTwitter />
            </div>
            <div className="whatapp bg-secondary rounded-full p-1 mb-2">
                <BsWhatsapp />
            </div>
        </div>
    );
};

export default SocialSites;