import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "react-lazy-load-image-component/src/effects/blur.css";
import { useLanguage } from "../../context/language/language";
// import LogoComponent from "../Reusable/LogoComponent";
import Logo from "../../assets/images/Logo.png";

// Import Social Icons
import facebookIcon from "../../assets/icons/facebook.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import { useSelector } from "react-redux";

const Footer = () => {
  const { isAuthenticated, user, role } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // Image loading states
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [socialIconsLoaded, setSocialIconsLoaded] = useState({});
  const { language } = useLanguage();

  const currentYear = new Date().getFullYear();

  const handleNavigation = (link) => {
    if (link.startsWith("http://") || link.startsWith("https://")) {
      window.open(link, "_blank");
    } else {
      navigate(link);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const socialIcons = [
    { icon: instagramIcon, alt: "instagram", link: "https://www.instagram.com" },
    { icon: facebookIcon, alt: "facebook", link: "https://www.facebook.com" },
    { icon: twitterIcon, alt: "twitter", link: "https://x.com" },
  ];

  const footerLinks = [
    {
      title: "About Us",
      links: [
        { name: "Team", path: "/team" },
        { name: "Careers", path: "/careers" },
        { name: "Socials", path: "/socials" },
        { name: "Activity", path: "/activity" },
      ]
    },
    {
      title: "Terms & Conditions",
      links: [
        { name: "Team", path: "/team" },
        { name: "Careers", path: "/careers" },
        { name: "Socials", path: "/socials" },
        { name: "Activity", path: "/activity" },
      ]
    },
    {
      title: "Privacy Policy",
      links: [
        { name: "Team", path: "/team" },
        { name: "Careers", path: "/careers" },
        { name: "Socials", path: "/socials" },
        { name: "Activity", path: "/activity" },
      ]
    }
  ];

  return (
    <footer 
      className="w-full h-[318px] border-t"
      style={{ 
        borderTopColor: "var(--color-stroke-01)",
        padding: "48px 80px 24px 80px",
      }}
    >
      <div className="flex flex-wrap justify-between">
        {/* Logo */}
        <div className="flex flex-col mb-8" style={{ width: "400px" }}>
          <div className="mb-6">
            {/* <LogoComponent
              src={Logo}
              alt="Logo"
              link="/"
              width={117}
              height={43}
            /> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;