

import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from 'react-icons/fa'
import "./Newsletter.scss";

const Newsletter = () => {

    return (
        <div className="newesletter-section">
            <div className="newsletter-content">
                <p className="samll-text">NEWSLETTER</p>
                <h2 className="big-text">SIGN UP FOR LATEST UPDATES AND OFFERS</h2>
                <div className="form">
                    <input type="text" placeholder="Email Address" />
                    <button>Subscribe</button>
                </div>
                <div className="text">Will be used in accordance with out Privacy Policy</div>
                <div className="social-icons">
                    <div className="icon">
                        <FaFacebookF size={14} />
                    </div>
                    <div className="icon">
                        <FaTwitter size={14} />
                    </div>
                    <div className="icon">
                        <FaInstagram size={14} />
                    </div>
                    <div className="icon">
                        <FaLinkedinIn size={14} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
