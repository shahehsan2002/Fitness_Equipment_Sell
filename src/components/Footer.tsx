
const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white py-6 border-t border-gray-700 overflow-hidden">
    {/* Background SVG */}
    <svg
      className="absolute inset-0 w-full h-full object-cover"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1440 320"
    >
      <defs>
        <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#38b2ac", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#2b6cb0", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        fill="url(#footerGradient)"
        d="M0,160L30,154.7C60,149,120,139,180,133.3C240,128,300,128,360,138.7C420,149,480,171,540,181.3C600,192,660,192,720,181.3C780,171,840,149,900,139.3C960,128,1020,128,1080,138.7C1140,149,1200,171,1260,181.3C1320,192,1380,192,1410,192L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
      />
    </svg>

    <div className="relative z-10 container mx-auto px-4 text-center">
      {/* Social Media Links */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-100">Follow Us</h3>
        <div className="flex justify-center space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Instagram
          </a>
        </div>
      </div>

      {/* Copyright Text */}
      <div className="text-gray-100 text-sm">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer