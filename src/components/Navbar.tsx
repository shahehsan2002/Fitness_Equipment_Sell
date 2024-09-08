import { Link } from "react-router-dom";
import { Moon, ShoppingCart } from "lucide-react";
import { useState } from "react";
// import Logo from "../assets/logo.png";
import { useAppSelector } from "../redux/hooks";

const Header = () => {
  const products = useAppSelector((store) => store.cart.products);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0  w-full bg-transparent text-white px-4 my-12 shadow-lg z-50">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          {/* <img src={Logo} alt="StrengthZone Logo" className="w-24 h-auto" /> */}
          <p className="font-extrabold text-3xl ml-36 " >StrengthZone</p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:mr-36">
          <ul className="flex space-x-6">
            <li>
              <Link
                className="hover:text-yellow-400 transition duration-300"
                to="/products"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-yellow-400 transition duration-300"
                to="/about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-yellow-400 transition duration-300"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <Link to="/cart" className="relative hover:text-yellow-400">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs font-bold rounded-full px-2 py-1">
                {products.length}
              </span>
            </Link>

            {/* Dark Mode Toggle */}
            <button className="hover:text-yellow-400 transition duration-300">
              <Moon size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={handleMenuToggle}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-5 mt-4 bg-green-600 rounded-lg p-4">
          <li>
            <Link
              className="hover:text-yellow-400 transition duration-300"
              to="/products"
              onClick={handleMenuToggle}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-yellow-400 transition duration-300"
              to="/about"
              onClick={handleMenuToggle}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-yellow-400 transition duration-300"
              to="/contact"
              onClick={handleMenuToggle}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-yellow-400 transition duration-300 relative"
              to="/cart"
              onClick={handleMenuToggle}
            >
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs font-bold rounded-full px-2 py-1">
                {products.length}
              </span>
            </Link>
          </li>
          <li>
            {/* <button className="hover:text-yellow-400 transition duration-300">
              <Moon size={24} />
            </button> */}
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
