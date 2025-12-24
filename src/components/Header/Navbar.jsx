import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/images/Logo.png"
import { useTheme } from "../../context/ThemeContext";
import ThemeToggleButton from "./ThemeToggleButton";
// import "react-lazy-load-image-component/src/effects/blur.css";
// import LogoComponent from "../Reusable/LogoComponent";


const Navbar = () => {
  const { theme, themes } = useTheme();

  // State management
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Refs for click outside detection
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Handle click outside to close menus
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Close menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  // Navigation links configuration
  const NAV_LINKS = [
    { path: "/services", label: "Services" },
    { path: "/orders", label: "Orders" },
    { path: "/profile", label: "Profile" },
  ];

  // Toggle handlers
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="fixed top-0 z-50 flex justify-center w-full">
      <nav className="navbar w-[1280px] h-[67px] ml-[80px] mr-[80px] border-b border-[var(--color-stroke-01)] transition-all duration-300 relative">
        
      {/* Logo Container */}
      {/* <LogoComponent
        src={Logo}
        alt="Logo"
        link="/"
        width={100}
        height={27}
        padding="20px 12px"
        gap={10}
        rounded="rounded-md"
      /> */}

        {/* Desktop Navigation Links*/}
        <div className="absolute left-[457px] top-[24px] w-[345px] h-[19px] hidden lg:flex items-center gap-[24px]">
          <Link
            to="/services"
            className="w-[67px] h-[19px] font-inter font-medium text-[16px] leading-[100%] tracking-[0%] capitalize opacity-100 text-[var(--color-content-01)] transition-colors duration-200"
          >
            Services
          </Link>
          
          <Link
            to="/orders"
            className="w-[53px] h-[19px] font-inter font-medium text-[16px] leading-[100%] tracking-[0%] capitalize opacity-100 text-[var(--color-content-01)] transition-colors duration-200"
          >
            Orders
          </Link>
          
          <Link
            to="/profile"
            className="w-[49px] h-[19px] font-inter font-medium text-[16px] leading-[100%] tracking-[0%] capitalize opacity-100 text-[var(--color-content-01)] transition-colors duration-200"
          >
            Profile
          </Link>
        </div>

        {/* icons */}
        <div className="absolute right-[83px] top-0 h-[67px] w-[147px] hidden lg:flex items-center justify-center">
        <div className="flex items-center gap-2">
          <ThemeToggleButton />
        </div>
      </div>



        {/* Mobile Menu Button */}
        <button
          ref={buttonRef}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          className={`
            lg:hidden p-2 rounded-md transition-colors duration-200 absolute right-4 top-1/2 transform -translate-y-1/2
            ${theme === themes.dark 
              ? 'text-[var(--color-content)] hover:bg-[var(--color-stroke-01)]' 
              : 'text-[var(--color-content-03)] hover:bg-gray-100'
            }
            focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]
          `}
        >
          {isMenuOpen ? <p>sd</p> : <p>as</p>}
        </button>

        {/* Mobile Navigation Menu */}
        <div
          ref={menuRef}
          className={`
            lg:hidden fixed inset-0 top-[67px] z-40 navbar
            transition-all duration-300 ease-in-out
            ${isMenuOpen 
              ? 'opacity-100 visible' 
              : 'opacity-0 invisible'
            }
          `}
          aria-hidden={!isMenuOpen}
        >
          <div className="px-4 py-6 space-y-6">
            {/* Mobile Navigation Links */}
            <div className="space-y-4">
              {NAV_LINKS.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`
                    block text-base font-medium transition-colors duration-200
                    ${theme === themes.dark
                      ? 'text-[var(--color-content)] hover:text-[var(--color-primary)]'
                      : 'text-[var(--color-content-03)] hover:text-[var(--color-primary)]'
                    }
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
     
            </div>

            {/* Mobile Theme Toggle */}
            <div className="pt-4 border-t border-[var(--color-stroke-01)]">
              <div className="flex items-center justify-between">
                <span className={`
                  text-sm font-medium 
                  ${theme === themes.dark 
                    ? 'text-[var(--color-content)]' 
                    : 'text-[var(--color-content-03)]'
                  }
                `}>
                  Theme
                </span>
                <ThemeToggleButton />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;