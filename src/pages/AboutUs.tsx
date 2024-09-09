import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-16">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-60"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-12 text-center lg:text-left">
        {/* Header */}
        <motion.h1
          className="text-5xl font-bold mb-6 text-green-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About StrengthZone
        </motion.h1>

        {/* Company Overview */}
        <motion.p
          className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto lg:mx-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Welcome to <strong>StrengthZone</strong>, where we blend innovation, passion, and exceptional service to empower your fitness journey. Since our inception, we’ve committed to offering a seamless shopping experience, providing quality fitness equipment, accessories, and expert guidance for every lifestyle.
        </motion.p>

        {/* Interactive Team Members */}
        <motion.div
          className="w-full flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            className="w-48 h-48 rounded-full bg-gradient-to-r from-green-400 to-blue-500 overflow-hidden shadow-lg hover:scale-110 transition-transform"
            whileHover={{ scale: 1.1, rotate: 10 }}
          >
            <img
              src="https://via.placeholder.com/150?text=Person+1"
              alt="CEO"
              className="w-full h-full object-cover"
            />
            <div className="text-white text-center mt-4">John Doe - CEO</div>
          </motion.div>

          <motion.div
            className="w-48 h-48 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 overflow-hidden shadow-lg hover:scale-110 transition-transform"
            whileHover={{ scale: 1.1, rotate: -10 }}
          >
            <img
              src="https://via.placeholder.com/150?text=Person+2"
              alt="CTO"
              className="w-full h-full object-cover"
            />
            <div className="text-white text-center mt-4">Jane Smith - CTO</div>
          </motion.div>
        </motion.div>

        {/* Team Intro */}
        <motion.p
          className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto lg:mx-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          Our team is made up of passionate experts in their fields, dedicated to delivering excellence. From product development to customer service, we’re here to make your experience at StrengthZone extraordinary.
        </motion.p>

        {/* Interactive Testimonials */}
        <motion.div
          className="testimonials-container max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <h2 className="text-3xl font-semibold mb-8 text-green-300">What Our Customers Say</h2>
          <div className="space-y-8">
            <motion.blockquote
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0px 4px 20px rgba(0, 255, 127, 0.3)' }}
            >
              <p className="text-gray-300 italic">"StrengthZone is my trusted source for fitness gear. Outstanding service and premium products!"</p>
              <cite className="text-green-400 mt-4 block">– Alex Johnson</cite>
            </motion.blockquote>

            <motion.blockquote
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0px 4px 20px rgba(255, 20, 147, 0.3)' }}
            >
              <p className="text-gray-300 italic">"Excellent quality and fast delivery. I always find what I need at StrengthZone!"</p>
              <cite className="text-green-400 mt-4 block">– Maria Garcia</cite>
            </motion.blockquote>
          </div>
        </motion.div>

        {/* Contact Us Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
        >
          <h3 className="text-4xl font-semibold text-green-300 mb-4">Get in Touch</h3>
          <p className="text-lg text-gray-300">
            Have any questions, feedback, or inquiries? Feel free to <a href="/contact" className="text-green-400 underline hover:text-green-300">contact us</a> anytime. We're here to help!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
