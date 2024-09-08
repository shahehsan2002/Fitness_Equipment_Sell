import { Link } from "react-router-dom";
import BannerPic from "../assets/BannerPic.jpg";

const Banner = () => {
  return (
    <section
    className="relative w-full h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${BannerPic})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Banner Content */}
      <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-center px-4 md:px-8 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-down">
          Welcome to StrengthZone
        </h1>
        <p className="text-lg md:text-2xl font-light mb-6 animate-fade-in-up">
          Your ultimate destination for premium fitness equipment and accessories.
        </p>
        <div className="flex space-x-4 animate-fade-in">
          <Link
            to="/products"
            className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
          >
            Shop Now
          </Link>

          <Link
            to="/about"
            className="px-8 py-3 bg-transparent border-2 border-white font-semibold rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
