import { FaLeaf, FaStar, FaHeart, FaGift, FaRegClock, FaHandsHelping, FaHandSparkles, FaShieldAlt, FaUsers, FaStarHalfAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="px-4 py-16 bg-white lg:py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Main Content Section */}
        <div className="flex flex-col items-center justify-center gap-8 lg:gap-16 lg:flex-row lg:items-center lg:justify-center">
          {/* Text Section */}
          <div className="flex flex-col items-center justify-center w-full text-center">
            <h2 className="max-w-full mb-4 text-4xl font-bold text-gray-700">
              Organic by Pooja
            </h2>
            <p className="max-w-full text-base leading-6 text-gray-600 sm:text-lg lg:text-xl">
              Organic by Pooja began in 2019 with a simple mission: to offer natural, homemade solutions for skin and hair that heal and nourish from within. What started as a small initiative quickly gained the trust of customers seeking authenticity and quality. Combining modern treatments with organic, handmade products, Organic by Pooja has become a trusted name for personalized care. Our goal is to bring out your natural beauty while making you feel good inside and out.
            </p>
          </div>
        </div>

        {/* Icon Section */}
        <div className="mt-16">
          <h3 className="mb-8 text-2xl font-semibold text-center text-gray-800">Our Values</h3>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="text-center transition-colors duration-300 transform hover:text-green-500 hover:scale-110">
              <FaLeaf className="mx-auto mb-2 text-4xl" />
              <p className="text-gray-600">Natural Ingredients</p>
            </div>
            <div className="text-center transition-colors duration-300 transform hover:text-yellow-500 hover:scale-110">
              <FaStar className="mx-auto mb-2 text-4xl" />
              <p className="text-gray-600">Quality Assurance</p>
            </div>
            <div className="text-center transition-colors duration-300 transform hover:text-red-500 hover:scale-110">
              <FaHeart className="mx-auto mb-2 text-4xl" />
              <p className="text-gray-600">Customer Love</p>
            </div>
            <div className="text-center transition-colors duration-300 transform hover:text-blue-500 hover:scale-110">
              <FaGift className="mx-auto mb-2 text-4xl" />
              <p className="text-gray-600">Special Offers</p>
            </div>
            <div className="text-center transition-colors duration-300 transform hover:text-purple-500 hover:scale-110">
              <FaRegClock className="mx-auto mb-2 text-4xl" />
              <p className="text-gray-600">Timely Service</p>
            </div>
            <div className="text-center transition-colors duration-300 transform hover:text-teal-500 hover:scale-110">
              <FaHandsHelping className="mx-auto mb-2 text-4xl" />
              <p className="text-gray-600">Community Support</p>
            </div>
          </div>
        </div>

        {/* New Section: Our Services */}
        <div className="mt-16">
          <h3 className="mb-8 text-2xl font-semibold text-center text-gray-800">Our Services</h3>
          <div className="flex flex-wrap justify-center gap-12">
            <motion.div 
              className="text-center transition-colors duration-300 transform hover:text-teal-500 hover:scale-110"
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <FaHandSparkles className="mx-auto mb-2 text-4xl" />
              <p className="text-gray-600">Personalized Treatments</p>
            </motion.div>
            <motion.div 
              className="text-center transition-colors duration-300 transform hover:text-blue-500 hover:scale-110"
              whileHover={{ scale: 1.1, rotate: -10 }}
            >
              <FaShieldAlt className="mx-auto mb-2 text-4xl" />
              <p className="text-gray-600">Safe & Effective</p>
            </motion.div>
            <motion.div 
              className="text-center transition-colors duration-300 transform hover:text-green-500 hover:scale-110"
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <FaUsers className="mx-auto mb-2 text-4xl" />
              <p className="text-gray-600">Expert Team</p>
            </motion.div>
          </div>
        </div>

        {/* New Section: Customer Testimonials */}
        <div className="mt-16">
          <h3 className="mb-8 text-2xl font-semibold text-center text-gray-800">Customer Testimonials</h3>
          <div className="flex flex-wrap justify-center gap-12">
            <motion.div 
              className="p-6 text-center transition-transform duration-300 bg-gray-100 rounded-lg shadow-lg hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <p className="italic text-gray-600">"Organic by Pooja has completely transformed my skin! The personalized care and natural ingredients are unmatched."</p>
              <p className="mt-4 font-semibold text-gray-800">Eshita Arora</p>
              <div className="flex justify-center mt-4">
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <FaStar 
                      key={index} 
                      className={`text-2xl ${index < 4 ? 'text-yellow-500' : 'text-gray-300'} transition-transform duration-300 hover:scale-110`} 
                    />
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="p-6 text-center transition-transform duration-300 bg-gray-100 rounded-lg shadow-lg hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <p className="italic text-gray-600">"I love the special offers and quality of products. It's a refreshing experience every time."</p>
              <p className="mt-4 font-semibold text-gray-800">Kanika.</p>
              <div className="flex justify-center mt-4">
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <FaStar 
                      key={index} 
                      className={`text-2xl ${index < 3 ? 'text-yellow-500' : 'text-gray-300'} transition-transform duration-300 hover:scale-110`} 
                    />
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="p-6 text-center transition-transform duration-300 bg-gray-100 rounded-lg shadow-lg hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <p className="italic text-gray-600">"The team at Organic by Pooja truly cares about their customers. The community support is amazing!"</p>
              <p className="mt-4 font-semibold text-gray-800">Nandini Pathak</p>
              <div className="flex justify-center mt-4">
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <FaStar 
                      key={index} 
                      className={`text-2xl ${index < 5 ? 'text-yellow-500' : 'text-gray-300'} transition-transform duration-300 hover:scale-110`} 
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-16 text-center">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">Ready to Experience the Difference?</h3>
          <p className="mb-8 text-gray-600">Join us today and discover the benefits of organic, handmade beauty treatments tailored just for you.</p>
          <a href="/contact">
            <motion.button 
              className="px-6 py-3 font-semibold text-white transition-transform duration-300 bg-teal-500 rounded-lg shadow-lg hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              Contact Us
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
