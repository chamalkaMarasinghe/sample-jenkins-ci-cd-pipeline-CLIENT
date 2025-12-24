import React, { useCallback } from "react";
import { cn } from "../../utils/cn";

const NavbarProfilePopover = ({
  onMyProfileClick,
  onCompanyProfileClick,
  onSettingsClick,
  onLogoutClick,
  activeSection = null, 
  className,
  style,
}) => {
  const menuItems = [
    {
      id: "profile",
      label: "My Profile",
      onClick: onMyProfileClick,
      isActive: activeSection === "profile",
    },
    {
      id: "company",
      label: "Company Profile",
      onClick: onCompanyProfileClick,
      isActive: activeSection === "company",
    },
    {
      id: "settings",
      label: "Settings",
      onClick: onSettingsClick,
      isActive: activeSection === "settings",
    },
  ];

  const handleKeyDown = useCallback((e, onClick) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick?.();
    }
  }, []);

  return (
    <div
      role="menu"
      className={cn(
        "flex flex-col transition-all duration-300",
        "theme-light:bg-white theme-light:border theme-light:border-[#C2C9D2]",
        "theme-dark:bg-[#282136] theme-dark:border theme-dark:border-[#FFFFFF33]",
        className
      )}
      style={{
        width: "224px",
        height: "232px",
        gap: "8px",
        opacity: 1,
        borderRadius: "16px",
        borderWidth: "1px",
        padding: "12px",
        backgroundColor: "var(--navbar-popover-bg)",
        borderColor: "var(--navbar-popover-border)",
        ...style,
      }}
    >
      {/* Menu Items Container */}
      <div
        className="flex flex-col"
        style={{
          width: "200px",
          height: "144px",
          opacity: 1,
        }}
      >
        {menuItems.map((item) => (
          <button
            key={item.id}
            role="menuitem"
            tabIndex={0}
            className={cn(
              "flex items-center text-left border-none bg-transparent cursor-pointer transition-all duration-300",
              "hover:bg-gradient-to-r hover:from-[rgba(123,2,203,0.1)] hover:to-[rgba(193,2,203,0.1)]",
              "focus:outline-2 focus:outline-offset-2 focus:outline-[var(--color-primary)]",
              {
                "bg-gradient-to-r from-[rgba(123,2,203,0.1)] to-[rgba(193,2,203,0.1)]":
                  item.isActive,
              }
            )}
            style={{
              width: "200px",
              height: "48px",
              gap: "12px",
              borderRadius: "8px",
              padding: "12px",
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              color: "var(--navbar-text-color)",
              backgroundColor: item.isActive ? "transparent" : "inherit",
            }}
            onClick={item.onClick}
            onKeyDown={(e) => handleKeyDown(e, item.onClick)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Divider */}
      <div
        className="w-[200px] opacity-100"
        style={{
          height: "1px",
          borderTop: "1px solid var(--navbar-divider-color)",
          margin: "0",
        }}
      />

      {/* Logout Button */}
      <button
        role="menuitem"
        tabIndex={0}
        className={cn(
          "flex items-center text-left border-none bg-transparent cursor-pointer transition-all duration-300",
          "hover:bg-gradient-to-r hover:from-[rgba(123,2,203,0.1)] hover:to-[rgba(193,2,203,0.1)]",
          "focus:outline-2 focus:outline-offset-2 focus:outline-[var(--color-primary)]"
        )}
        style={{
          width: "200px",
          height: "48px",
          gap: "12px",
          borderRadius: "8px",
          padding: "12px",
          fontFamily: "Inter",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "24px",
          color: "var(--navbar-text-color)",
        }}
        onClick={onLogoutClick}
        onKeyDown={(e) => handleKeyDown(e, onLogoutClick)}
      >
        Logout
      </button>
    </div>
  );
};

export default NavbarProfilePopover;
