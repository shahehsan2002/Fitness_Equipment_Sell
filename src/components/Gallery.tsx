import React from 'react';

// Sample data
const galleryImages = [
  'https://i.postimg.cc/tCVrzB0j/alireza-zarafshani-6j47-JIzpx-Po-unsplash.jpg/600x400?text=User+1',
  'https://i.postimg.cc/tCVrzB0j/alireza-zarafshani-6j47-JIzpx-Po-unsplash.jpg/600x400?text=User+1',
  'https://i.postimg.cc/tCVrzB0j/alireza-zarafshani-6j47-JIzpx-Po-unsplash.jpg/600x400?text=User+1',
  'https://i.postimg.cc/tCVrzB0j/alireza-zarafshani-6j47-JIzpx-Po-unsplash.jpg/600x400?text=User+1',
//   'https://via.placeholder.com/600x400?text=User+2',
//   'https://via.placeholder.com/600x400?text=User+3',
//   'https://via.placeholder.com/600x400?text=User+4',
//   'https://via.placeholder.com/600x400?text=User+5',
//   'https://via.placeholder.com/600x400?text=User+6',
  // Add more images as needed
];

const Gallery = () => {
  return (
    <section className="py-12 px-4 lg:px-8 bg-gray-100">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8 text-green-400">Our Happy Customers</h1>
        <p className="text-lg mb-12 text-gray-600">
          See how our products have made a positive impact on the lives of our customers.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={image}
                alt={`Customer ${index + 1}`}
                className="w-full h-56 object-cover transition-opacity duration-300 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xl font-bold">Happy Customer</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
