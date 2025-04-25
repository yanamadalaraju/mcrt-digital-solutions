
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-mcrt-blue">MCRT</span>
          <span className="ml-1 text-mcrt-teal font-medium">Digital Solutions</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-base transition-colors hover:text-mcrt-blue ${
                location.pathname === item.path
                  ? "text-mcrt-blue font-medium"
                  : "text-gray-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="btn-primary">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-mcrt-dark focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-6 shadow-lg absolute w-full">
          <div className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-base transition-colors hover:text-mcrt-blue ${
                  location.pathname === item.path
                    ? "text-mcrt-blue font-medium"
                    : "text-gray-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="btn-primary w-full mt-4">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Get a Quote</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
