import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const PublicHeader = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: 'About Us', path: '/', shouldDisplay: location.pathname === '/' || location.pathname === '/login' },
    { label: 'Login', path: 'login', shouldDisplay: location.pathname === '/' || location.pathname === '/about' },
    { label: 'Home', path: '/dashboard/home', shouldDisplay: location.pathname.startsWith('/dashboard')},
    { label: 'Tracker', path: '/dashboard/tracker', shouldDisplay: location.pathname.startsWith('/dashboard')},
    { label: 'Summary', path: '/dashboard/summary', shouldDisplay: location.pathname.startsWith('/dashboard')},
  ]

  return (
    <header className="fixed top-0 left-0 w-full bg-orange-500 shadow-md z-10 h-24">
      <div className="flex w-full items-center justify-between px-3">
        <div className="px-4 max-w-[200px]">
          <a href="/">
            <img 
              src="/png/logo-white.png" 
              alt="Welcome" 
              className="max-w-full h-24" />
          </a>
        </div>
        <div className="hidden px-4 lg:flex space-x-4">
          {menuItems.map((menuItem) =>
            menuItem.shouldDisplay && (
            <a
              key={menuItem.label}
              href={menuItem.path}
              className="text-white hover:text-orange-600 focus:text-orange-500"
              >
              {menuItem.label}
            </a>
          ))}
        </div>
        <div className="lg:hidden flex items-center">
          {isMenuOpen ? (
            <button
              onClick={toggleMenu}
              className="text-xl text-black hover:text-orange-600"
            >
              ✕ {/* Close icon (e.g., 'X') when the menu is open */}
            </button>
          ) : (
            <button
              onClick={toggleMenu}
              className="text-xl text-black hover:text-orange-600"
            >
              ☰ {/* Hamburger icon (e.g., '☰') when the menu is closed */}
            </button>
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white p-4 space-y-4 flex flex-col">
          {menuItems.map((menuItem) => 
            menuItem.shouldDisplay && (
            <a
              key={menuItem.label}
              href={menuItem.path}
              className="text-black hover:text-orange-600 focus:text-orange-500"
              >
              {menuItem.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default PublicHeader;