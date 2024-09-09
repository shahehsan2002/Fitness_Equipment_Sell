import React, { useState } from 'react';
import Modal from './Modal';  // Ensure you have a Modal component

const benefitsData = [
  {
    title: 'High Quality',
    description: 'Our products are manufactured with the highest standards of quality to ensure durability and performance.',
    image: 'https://via.placeholder.com/300x200?text=Quality',
    moreInfo: 'Learn more about our quality assurance processes and certifications.',
  },
  {
    title: 'Innovative Design',
    description: 'Featuring modern and ergonomic designs, our products provide both functionality and style.',
    image: 'https://via.placeholder.com/300x200?text=Design',
    moreInfo: 'Discover how our design team creates products that are both functional and stylish.',
  },
  {
    title: 'Affordable Prices',
    description: 'We offer competitive pricing without compromising on quality, making our products accessible to everyone.',
    image: 'https://via.placeholder.com/300x200?text=Price',
    moreInfo: 'Explore how we keep our prices low while maintaining high quality.',
  },
  {
    title: 'Excellent Customer Support',
    description: 'Our dedicated customer service team is here to assist you with any questions or concerns you may have.',
    image: 'https://via.placeholder.com/300x200?text=Support',
    moreInfo: 'Find out how our support team ensures your satisfaction and resolves issues promptly.',
  },
];

const Benefits = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBenefit, setSelectedBenefit] = useState<any>(null);

  const handleShowModal = (benefit: any) => {
    setSelectedBenefit(benefit);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedBenefit(null);
    setShowModal(false);
  };

  return (
    <section className="bg-gray-50 text-gray-900 py-12 px-4 lg:px-8">
      {showModal && (
        <Modal
          title={selectedBenefit?.title}
          content={selectedBenefit?.moreInfo}
          onClose={handleCloseModal}
        />
      )}
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8 text-green-400">Benefits of Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              onClick={() => handleShowModal(benefit)}
              className="relative border border-gray-200 rounded-xl shadow-lg overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col h-full cursor-pointer"
            >
              <img
                src={benefit.image}
                alt={benefit.title}
                className="w-full h-56 object-cover transition-opacity duration-300 hover:opacity-80"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{benefit.description}</p>
                {/* <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShowModal(benefit);
                  }}
                  className="bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-600 transition duration-300 shadow-lg hover:shadow-xl"
                >
                  Learn More
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits
