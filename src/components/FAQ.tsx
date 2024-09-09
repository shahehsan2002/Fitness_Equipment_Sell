import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqData = [
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy on most items. Please visit our Returns page for more details.',
  },
  {
    question: 'How do I track my order?',
    answer: 'Once your order is shipped, you will receive a tracking number via email. You can use this number to track your order on our Track Order page.',
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we offer international shipping. Please check our Shipping Information page for details on rates and delivery times.',
  },
  // Add more FAQs as needed
];

const FAQ = () => {
  const [feedback, setFeedback] = useState<{ [key: number]: 'like' | 'dislike' | null }>({});

  const handleFeedback = (index: number, type: 'like' | 'dislike') => {
    setFeedback((prev) => ({
      ...prev,
      [index]: prev[index] === type ? null : type,
    }));
  };

  return (
    <section className="bg-gray-100 text-gray-900 py-12 px-4 lg:px-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-green-400">Frequently Asked Questions</h1>
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 mb-4 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                {faq.question}
              </h2>
              <p className="text-gray-600 mb-4">
                {faq.answer}
              </p>
              <div className="flex items-center space-x-4 mt-4">
                <button
                  onClick={() => handleFeedback(index, 'like')}
                  className={`flex items-center ${feedback[index] === 'like' ? 'text-green-500' : 'text-gray-500'} transition-colors duration-300`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7 7 7-7M5 9l7-7 7 7" />
                  </svg>
                  <span className="ml-2">Like</span>
                </button>
                <button
                  onClick={() => handleFeedback(index, 'dislike')}
                  className={`flex items-center ${feedback[index] === 'dislike' ? 'text-red-500' : 'text-gray-500'} transition-colors duration-300`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7-7-7 7m14 6l-7 7-7-7" />
                  </svg>
                  <span className="ml-2">Dislike</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
