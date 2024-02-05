import React from "react";
import "./footer.css";
import Link from "next/link";
import { footerLinks } from "@/constants/footerLinks";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";
import Image from "next/image";

const footer = () => {
  return (
    <div className="footer">
      <div className="social__media-section">
        <div className="social__icons-heading">
          <h4>Follow Us</h4>
        </div>
        <div className="social__icons">
          <span className="social__icon">
            <FaYoutube />
          </span>
          <span className="social__icon">
            <FaTwitter />
          </span>
          <span className="social__icon">
            <FaFacebookF />
          </span>
        </div>
      </div>

      <div className="more__services-section">
        {footerLinks.map((item) => (
          <div className="services">
            <h4 className="services__heading">{item.heading}</h4>
            <div className="services__links">
              {item.links.map((link) => (
                <Link href="" className="service__link">
                  {link}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="footer__section">
        <div className="footer__heading-subsection">
          <h4 className="footer__heading">
            {" "}
            Similar <span className="heading-with-background">Watch</span>
          </h4>
        </div>
        <div className="footer__copywrite">
          {[
            "Privacy Policy",
            "Terms and conditions",
            "Cookies Policy",
            "About us",
            "EULA",
            "Contact",
          ].map((item) => (
            <Link href="" key={item} className="footer__copywrite-link">
              {item}
            </Link>
          ))}

          <span className="theme__icon">
            <FiMoon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default footer;
