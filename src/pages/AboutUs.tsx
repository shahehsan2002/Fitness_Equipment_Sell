
const AboutUs = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-white py-12 px-6">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold mb-4 text-green-400">About Us</h1>
        <p className="text-lg mb-6 max-w-3xl text-gray-200">
          Welcome to <strong>StrengthZone</strong>, where we are passionate about delivering high-quality products and exceptional service to our customers. Since our inception, we’ve been committed to creating a seamless shopping experience that combines innovation, quality, and customer satisfaction. Whether you're looking for the latest gadgets, fitness equipment, or daily accessories, we have something special for you.
        </p>

        <div className="w-full flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
          <div className="w-48 h-48 rounded-full bg-gradient-to-r from-green-400 to-blue-500 overflow-hidden shadow-lg hover:scale-105 transition-transform">
            <img src="https://via.placeholder.com/150?text=Person+1" alt="Person 1" className="w-full h-full object-cover" />
          </div>
          <div className="w-48 h-48 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 overflow-hidden shadow-lg hover:scale-105 transition-transform">
            <img src="https://via.placeholder.com/150?text=Person+2" alt="Person 2" className="w-full h-full object-cover" />
          </div>
        </div>

        <p className="text-lg mt-8 max-w-3xl text-gray-200">
          Our team is made up of passionate individuals with expertise in various fields, all working towards the same goal: to make your life easier and more enjoyable. Meet some of the brilliant minds behind <strong>Your Company Name</strong>!
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
