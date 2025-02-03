import React, { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { to: "home", label: "Home", duration: 200 },
    { to: "about", label: "About", duration: 500 },
    { to: "teams", label: "Teams", duration: 1000 },
    { to: "contact", label: "Contact", duration: 1000 }
  ];

  return (
    <nav className="absolute top-3 left-0 right-0 z-[11] items-center bg-opacity-50 w-11/12 flex justify-between shadow-lg rounded-lg border border-gray-200 mx-auto">
      {/* Desktop Menu */}
      <div className="hidden md:block">
        <ul className="flex items-center bg-white z-10 gap-10 pl-10">
          {menuItems.map((item) => (
            <li key={item.to}>
              <Link 
                to={item.to} 
                smooth={true} 
                duration={item.duration} 
                className="cursor-pointer hover:text-purple-500"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden pl-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 p-2"
        >
          <div className="w-6 h-0.5 bg-gray-600 mb-1.5"></div>
          <div className="w-6 h-0.5 bg-gray-600 mb-1.5"></div>
          <div className="w-6 h-0.5 bg-gray-600"></div>
        </button>
      </div>

      {/* Logo (Same for both mobile and desktop) */}
      <div>
        <img 
          src="/cinchalogo.png" 
          className="object-cover h-20 w-40 object-left-bottom rounded-r-lg" 
          alt="logo"
        />
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white mt-2 rounded-lg shadow-lg border border-gray-200">
          <ul className="py-2">
            {menuItems.map((item) => (
              <li key={item.to} className="border-b border-gray-100 last:border-none">
                <Link 
                  to={item.to} 
                  smooth={true} 
                  duration={item.duration} 
                  className="block px-6 py-3 hover:bg-gray-50 hover:text-purple-500"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;