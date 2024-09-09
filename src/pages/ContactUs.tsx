import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted', formData);
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 opacity-70"></div>

      {/* Content */}
      <div className="relative container mx-auto flex flex-col lg:flex-row-reverse items-center justify-center text-white py-12 px-4">
        <motion.div
          className="text-center lg:text-left lg:mr-12 mb-8 lg:mb-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="text-5xl font-bold mb-6 text-shadow">Get in Touch!</h1>
          <p className="text-lg">
            Have questions, feedback, or inquiries? We would love to hear from you! <br />
            Please fill out the form and we’ll get back to you as soon as possible.
          </p>
        </motion.div>
        <motion.div
          className="card bg-white w-full max-w-lg shadow-2xl mt-8 lg:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <form className="card-body p-8" onSubmit={handleSubmit}>
            <div className="form-control mb-4">
              <label className="label text-gray-700">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 transition-transform transform hover:scale-105"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control mb-4">
              <label className="label text-gray-700">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 transition-transform transform hover:scale-105"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control mb-6">
              <label className="label text-gray-700">
                <span className="label-text">Message</span>
              </label>
              <textarea
                placeholder="Your Message"
                className="textarea textarea-bordered border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 transition-transform transform hover:scale-105"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form-control">
              <button
                type="submit"
                className="btn btn-primary bg-green-500 hover:bg-green-600 transition-transform transform hover:scale-110 text-white"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
