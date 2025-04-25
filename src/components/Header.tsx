import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./../assets/mcrlogo.jpg"; // adjust the path based on your project structure
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceItems = [
    { name: "Tally Implementation", path: "/services/tally-implementation" },
    { name: "Tally Integration", path: "/services/tally-integration" },
    { name: "Tally Customization", path: "/services/tally-customization" },
    { name: "Mobile Application", path: "/services/mobile-application" },
    { name: "Tally on Web", path: "/services/tally-web" },
    { name: "Web Applications", path: "/services/web-applications" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">
      <Link to="/" className="flex items-center">
  <img src={Logo} alt="MCRT Logo" className="h-10 w-auto mr-2" />
  <div className="flex flex-col">
    {/* <span className="text-2xl font-bold text-mcrt-blue"></span>
    <span className="text-sm text-mcrt-teal font-medium"></span> */}
  </div>
</Link>
        {/* <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-mcrt-blue">MCRT</span>
          <span className="ml-1 text-mcrt-teal font-medium">Digital Solutions</span>
        </Link> */}
        
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
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className={`text-base transition-colors hover:text-mcrt-blue ${
                    location.pathname.includes("/services")
                      ? "text-mcrt-blue font-medium"
                      : "text-gray-600"
                  }`}
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-64 bg-white">
                    {serviceItems.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="block py-2 px-4 hover:bg-mcrt-light hover:text-mcrt-blue rounded-md transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button asChild className="btn-primary">
            <Link to="/quote">Get a Quote</Link>
          </Button>
        </nav>
        
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-mcrt-dark focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
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
            
            <div className="space-y-2">
              <div className="font-medium text-gray-600">Services</div>
              {serviceItems.map((service) => (
                <Link
                  key={service.name}
                  to={service.path}
                  className="block pl-4 py-1 text-gray-600 hover:text-mcrt-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
            
            <Button asChild className="btn-primary w-full">
              <Link to="/quote" onClick={() => setIsMenuOpen(false)}>Get a Quote</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
