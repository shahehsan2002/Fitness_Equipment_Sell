import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 border-t border-gray-700">
      <div className="container mx-auto px-4 text-center">
        {/* Social Media Links */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-green-400">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-300 transition duration-300"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-300 transition duration-300"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-300 transition duration-300"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Copyright Text */}
        <div className="text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer