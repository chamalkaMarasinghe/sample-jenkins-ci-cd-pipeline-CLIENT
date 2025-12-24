import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTheme } from "../../context/ThemeContext";

import { IoMdClose } from "react-icons/io";
import { ChevronDown, ChevronUp } from "lucide-react";

import { menuItems } from "./menuItems";
import { logout } from "../../store";
import Logo from "../../assets/images/Logo.png";
import Input from "../pagesSpecific/Login/Input";
// import LogoComponent from "../Reusable/LogoComponent";
import { ReactComponent as SearchIcon } from "../../assets/icons/Search.svg";

const SideBar = ({ isMobile = false, isSidebarOpen = true, setIsSidebarOpen }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { theme } = useTheme();
  const [openSubmenus, setOpenSubmenus] = useState({});
  const [searchValue, setSearchValue] = useState("");

  // Check if any submenu is active
  const isSubmenuActive = (subMenu) =>
    subMenu.some(
      (subItem) => pathname?.split("/")?.[2] === subItem.link?.split("/")?.[2]
    );

  // Auto-open submenu if one of its items is active
  useEffect(() => {
    const newOpenSubmenus = {};
    menuItems.forEach((item) => {
      if (item.hasSubMenu && isSubmenuActive(item.subMenu)) {
        newOpenSubmenus[item.title] = true;
      }
    });
    setOpenSubmenus(newOpenSubmenus);
  }, [pathname]);

  const closeSidebar = () => setIsSidebarOpen(false);

  const toggleSubmenu = (itemTitle) => {
    setOpenSubmenus((prev) => {
      const newState = {};
      Object.keys(prev).forEach((key) => {
        newState[key] = false;
      });
      newState[itemTitle] = !prev[itemTitle];
      return newState;
    });
  };

  const isMainItemActive = (item) =>
    !item.hasSubMenu && pathname?.split("/")?.[2] === item.link?.split("/")?.[2];

  const isSubItemActive = (subItem) =>
    pathname?.split("/")?.[2] === subItem.link?.split("/")?.[2];

  return (
    <aside
      className={`w-[280px] fixed top-0 left-0 h-screen z-[999] border-r border-[var(--color-stroke-01)] transition-all duration-300 ${
        isMobile ? (isSidebarOpen ? "translate-x-0" : "-translate-x-[280px]") : "translate-x-0"
      }`}
    >
      <div className="relative h-full">
        {/* Close Icon - Mobile Only */}
        {isMobile && isSidebarOpen && (
          <div className="absolute z-10 cursor-pointer top-4 right-4">
            <IoMdClose
              className="text-xl text-white transition-colors hover:text-gray-300"
              onClick={closeSidebar}
            />
          </div>
        )}

        <div className="flex flex-col h-full py-10">
           {/* Logo Section */}
          <div className="flex items-center justify-center w-full p-2 px-6">
            {/* <LogoComponent
              src={Logo}
              alt="Logo"
              link="/"                    
            /> */}
          </div>

          {/* Search Section */}
          <div className="px-6 py-5">
            <Input
              type="text"
              placeholder="Search for..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              icon={
                <div className="absolute -translate-y-1/2 left-1 top-1/2 text-[var(--color-content-01)]">
                  <SearchIcon width={16} height={16} />
                </div>
              }
              iconPosition="left"
              className="w-full h-[42px] rounded-lg border border-[var(--color-stroke-01)] bg-transparent px-3 py-2 pl-10 text-base font-inter font-normal text-[var(--color-content-03)] focus:outline-none placeholder-[var(--color-content-03)]"
            />
          </div>

          {/* Navigation Section */}
          <div className="flex-1 py-2 overflow-y-auto">
            <nav className="px-6">
              <ul className="space-y-2">
                {menuItems.map((item) => {
                  const isActive = isMainItemActive(item);
                  const isSubmenuOpen = openSubmenus[item.title];
                  const hasActiveSubitem =
                    item.hasSubMenu && item.subMenu.some((sub) => isSubItemActive(sub));

                  return (
                    <li
                      key={item.title}
                      onClick={() => {
                        if (item?.title === "Logout") dispatch(logout());
                      }}
                    >
                      {/* Main Menu Item */}
                      {item.hasSubMenu ? (
                        <button
                          className={`group w-full h-[40px] flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-200 text-left ${
                            hasActiveSubitem || isSubmenuOpen
                              ? "text-[var(--color-label)] sidebar-gradient"
                              : "text-[var(--color-content-03)] hover:text-[var(--color-label)] sidebar-gradient-hover"
                          }`}
                          onClick={() => toggleSubmenu(item.title)}
                        >
                          <div className="flex items-center">
                            <item.icon className="w-6 h-6 mr-3" />
                            <span className="text-base font-normal leading-6">
                              {item.title}
                            </span>
                            {item.badge && (
                              <span className="ml-2 px-2 py-1 text-xs font-semibold rounded-full min-w-[20px] text-center">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center">
                            {isSubmenuOpen ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            )}
                          </div>
                        </button>
                      ) : (
                        <Link
                          to={item.link}
                          className={`group w-full h-[40px] flex items-center px-3 py-2 rounded-lg transition-all duration-200 ${
                            isActive
                              ? "text-[var(--color-label)] sidebar-gradient"
                              : "text-[var(--color-content-03)] hover:text-[var(--color-label)] sidebar-gradient-hover"
                          }`}
                        >
                          <item.icon className="w-6 h-6 mr-3" />
                          <span className="text-base font-normal leading-6">
                            {item.title}
                          </span>
                          {item.badge && (
                            <span className="ml-auto px-2 py-1 text-xs font-semibold bg-purple-600 text-white rounded-full min-w-[20px] text-center">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      )}

                      {/* Submenu Items */}
                      {item.hasSubMenu && isSubmenuOpen && (
                        <ul className="mt-2 space-y-1">
                          {item.subMenu.map((subItem) => {
                            const isSubActive = isSubItemActive(subItem);

                            return (
                              <li key={subItem.link}>
                                <Link
                                  to={subItem.link}
                                  className={`group w-full h-[40px] flex items-center justify-between px-3 py-2 pl-12 rounded-lg transition-all duration-200 ${
                                    isSubActive
                                      ? "text-[var(--color-label)] sidebar-gradient"
                                      : "text-[var(--color-content-03)] hover:text-[var(--color-label)] sidebar-gradient-hover"
                                  }`}
                                >
                                  <span className="text-base font-normal leading-6">
                                    {subItem.title}
                                  </span>
                                  {subItem.badge && (
                                    <span className="px-2 py-1 text-xs font-semibold bg-purple-600 text-white rounded-full min-w-[20px] text-center">
                                      {subItem.badge}
                                    </span>
                                  )}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Sidebar text Section */}
          <div className="absolute bottom-0 left-0 w-full mb-5 px-9">
            <div
              className="flex items-center justify-center text-xs font-light text-center rounded-lg"
              style={{
                color: "var(--color-content-03)",
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "20px",
              }}
            >
              I@2025. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;