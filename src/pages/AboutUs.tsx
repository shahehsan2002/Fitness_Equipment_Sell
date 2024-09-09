const AboutUs = () => {
  return (
    <section className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 text-white py-12 px-6">
      <div className="container mx-auto text-center">
        {/* Company Overview */}
        <h1 className="text-4xl font-bold mb-6 text-green-400">About Us</h1>
        <p className="text-lg mb-8 max-w-4xl mx-auto text-gray-200">
          Welcome to <strong className="text-green-300">StrengthZone</strong>, where we are passionate about helping people lead healthier lives. Founded in 2023, our mission is to provide fitness enthusiasts with top-notch equipment and accessories that enhance their workout experience. We believe in empowering individuals to push their limits and achieve their fitness goals. Our vision is to be a trusted global leader in the fitness industry, known for quality, innovation, and exceptional customer service.
        </p>

        {/* Team Introduction */}
        <h2 className="text-3xl font-bold mt-12 mb-6 text-green-400">Meet the Team</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="w-64 h-64 rounded-full bg-gradient-to-r from-green-400 to-blue-500 overflow-hidden shadow-xl transform transition-transform hover:scale-110">
            <img src="https://via.placeholder.com/150?text=Ehsan+Ahmed" alt="Ehsan Ahmed" className="w-full h-full object-cover" />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-green-300">Ehsan Ahmed</h3>
            <p className="text-gray-200 text-lg">CEO & Founder</p>
            <p className="text-gray-400 mt-2">
              Ehsan brings a passion for fitness and business innovation. With years of experience in e-commerce, he leads the company with a focus on growth and customer satisfaction.
            </p>
          </div>
          <div className="w-64 h-64 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 overflow-hidden shadow-xl transform transition-transform hover:scale-110">
            <img src="https://via.placeholder.com/150?text=Tuli+Rahman" alt="Tuli Rahman" className="w-full h-full object-cover" />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-purple-300">Tuli Rahman</h3>
            <p className="text-gray-200 text-lg">Chief Marketing Officer</p>
            <p className="text-gray-400 mt-2">
              Tuli is an expert in marketing and brand strategy, ensuring StrengthZone reaches fitness enthusiasts worldwide. Her vision helps create lasting relationships with our customers.
            </p>
          </div>
        </div>

        {/* Customer Testimonials */}
        <h2 className="text-3xl font-bold mt-12 mb-6 text-green-400">What Our Customers Say</h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-green-400 transition-transform transform hover:scale-105">
            <p className="text-gray-200">
              "StrengthZone has completely transformed my home gym experience. The quality of the equipment is unmatched, and their customer service is always responsive!"
            </p>
            <p className="mt-2 text-gray-400">- Sarah Johnson</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-purple-400 transition-transform transform hover:scale-105">
            <p className="text-gray-200">
              "I love the wide selection of accessories they offer. The team is so helpful, and I always feel confident in my purchases."
            </p>
            <p className="mt-2 text-gray-400">- Michael Lee</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-pink-400 transition-transform transform hover:scale-105">
            <p className="text-gray-200">
              "Top-notch products and an amazing shopping experience. StrengthZone is my go-to for all my fitness needs!"
            </p>
            <p className="mt-2 text-gray-400">- Jessica Brown</p>
          </div>
        </div>

        {/* Contact Information */}
        <h2 className="text-3xl font-bold mt-12 mb-6 text-green-400">Contact Us</h2>
        <p className="text-lg text-gray-200 mb-6">
          Have any questions or feedback? We’d love to hear from you! Feel free to reach out to us using the contact information below.
        </p>
        <div className="text-gray-400">
          <p><strong>Email:</strong> <a href="mailto:support@strengthzone.com" className="text-green-300 hover:underline">support@strengthzone.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+18001234567" className="text-green-300 hover:underline">+1 (800) 123-4567</a></p>
          <p><strong>Address:</strong> 123 Fitness Lane, Muscle City, USA</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
