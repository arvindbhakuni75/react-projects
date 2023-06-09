import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            beatae delectus ad laudantium aperiam, repellendus doloribus nisi
            praesentium! Rerum delectus sit, vel hic earum ipsum temporibus odit
            reprehenderit autem provident.
          </div>
        </div>
        <div className="col">
            <div className="title">Contact</div>
            <div className="c-item">
                <FaLocationArrow/>
                <div className="text">Sector 2 Noida Delhi NCR 201301</div>
            </div>
            <div className="c-item">
                <FaMobileAlt/>
                <div className="text">Phone: 9090 909 000</div>
            </div>
            <div className="c-item">
                <FaEnvelope/>
                <div className="text">Email: arvind@gmail.com</div>
            </div>
        </div>
        <div className="col">
            <div className="title">Categories</div>
            <span className="text">Headphones</span>
            <span className="text">Smart Watches</span>
            <span className="text">Bluetooth Speaker</span>
            <span className="text">Wireless Earbuds</span>
            <span className="text">Home Theater</span>
            <span className="text">Projectors</span>
        </div>
        <div className="col">
            <div className="title">Pages</div>
            <span className="text">Home</span>
            <span className="text">About</span>
            <span className="text">Privace Policy</span>
            <span className="text">Returns</span>
            <span className="text">Terms & Conditions</span>
            <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text">AReactStore CREATED BY ARVIND. PREMIUM E-COMMERCE APP</div>
            <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
