
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-mcrt-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">MCRT Digital Solutions</h3>
            <p className="mb-4 text-gray-300">
              Empowering businesses with innovative software solutions and specialized services in Tally ERP customization and mobile app development.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/" className="hover:text-mcrt-teal transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-mcrt-teal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-mcrt-teal transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-mcrt-teal transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/services/tally-implementation" className="hover:text-mcrt-teal transition-colors">
                  Tally Implementation
                </Link>
              </li>
              <li>
                <Link to="/services/tally-integration" className="hover:text-mcrt-teal transition-colors">
                  Tally Integration
                </Link>
              </li>
              <li>
                <Link to="/services/tally-customization" className="hover:text-mcrt-teal transition-colors">
                  Tally Customization
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-application" className="hover:text-mcrt-teal transition-colors">
                  Mobile Application
                </Link>
              </li>
              <li>
                <Link to="/services/tally-web" className="hover:text-mcrt-teal transition-colors">
                  Tally on Web
                </Link>
              </li>
              <li>
                <Link to="/services/web-applications" className="hover:text-mcrt-teal transition-colors">
                  Web Applications
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>No.660,1st Floor, 1st B, Main Road,Jayanagar 8 Block,BANGALORE - 560070</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>+91 9964740243</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>sales@mcrindia.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 mt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} MCRT Software India Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
