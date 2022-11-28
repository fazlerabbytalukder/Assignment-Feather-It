import React from 'react';
import { BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialSites = () => {
    return (
        <div>
            <a className='cursor-pointer' href="/">
                <div className="insta bg-secondary rounded-full p-1 mb-2">
                    <BsInstagram />
                </div>
            </a>
            <a className='cursor-pointer' href="/">
                <div className="facebook bg-secondary rounded-full p-1 mb-2">
                    <FaFacebookF />
                </div>
            </a>
            <a className='cursor-pointer' href="/">
                <div className="twitter bg-secondary rounded-full p-1 mb-2">
                    <BsTwitter />
                </div>
            </a>
            <a className='cursor-pointer' href="/">
                <div className="whatapp bg-secondary rounded-full p-1 mb-2">
                    <BsWhatsapp />
                </div>
            </a>
        </div>
    );
};

export default SocialSites;