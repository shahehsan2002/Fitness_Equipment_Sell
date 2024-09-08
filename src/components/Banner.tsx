

const Banner = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-black to-gray-800 text-white flex items-center justify-center overflow-hidden">
    {/* Background Image (Optional) */}
    <div className="absolute inset-0">
        <img 
            src="your-image-url.jpg" 
            alt="Background" 
            className="object-cover w-full h-full opacity-50" 
        />
    </div>
    
    <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-6">StrengthZone</h1>
        <p className="text-xl mb-8">Your Ultimate Source for Fitness Equipment & Accessories</p>
        <a href="#" className="inline-block px-8 py-4 text-lg font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 transition duration-300">
            Shop Now
        </a>
    </div>
</div>
  );
};

export default Banner;
