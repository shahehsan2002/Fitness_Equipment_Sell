import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 lg:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        
        {/* Contact Information */}
        <div className="mb-8 lg:mb-0 text-center lg:text-left">
          <h3 className="text-2xl font-bold mb-4 text-green-400">Contact Us</h3>
          <p className="mb-2">Email: <a href="mailto:info@strengthzone.com" className="text-green-400 hover:underline">info@strengthzone.com</a></p>
          <p className="mb-2">Phone: <a href="tel:+1234567890" className="text-green-400 hover:underline">+123 456 7890</a></p>
          <p>Address: 123 Fitness St, Gym City, Fitland</p>
        </div>

        {/* Social Media Links */}
        <motion.div
          className="mb-8 lg:mb-0 flex space-x-4 justify-center lg:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <a href="https://facebook.com/strengthzone" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/strengthzone" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com/strengthzone" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com/company/strengthzone" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </motion.div>

        {/* Quick Links */}
        <div className="text-center lg:text-right">
          <h3 className="text-2xl font-bold mb-4 text-green-400">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="text-gray-300 hover:text-green-400">About Us</a></li>
            <li><a href="/products" className="text-gray-300 hover:text-green-400">Products</a></li>
            {/* <li><a href="/services" className="text-gray-300 hover:text-green-400">Services</a></li> */}
            <li><a href="/contact" className="text-gray-300 hover:text-green-400">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} StrengthZone. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
