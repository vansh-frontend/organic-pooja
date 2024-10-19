import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLeaf, FaStar, FaHeart, FaGift, FaClock, FaHandsHelping, FaHandSparkles, FaShieldAlt, FaUsers, FaQuoteLeft, FaBars } from 'react-icons/fa';

const About = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.4 } }
  };

  const values = [
    { icon: FaLeaf, text: "Natural Ingredients", color: "bg-green-100 text-green-600" },
    { icon: FaStar, text: "Quality Assurance", color: "bg-yellow-100 text-yellow-600" },
    { icon: FaHeart, text: "Customer Love", color: "bg-red-100 text-red-600" },
    { icon: FaGift, text: "Special Offers", color: "bg-blue-100 text-blue-600" },
    { icon: FaClock, text: "Timely Service", color: "bg-purple-100 text-purple-600" },
    { icon: FaHandsHelping, text: "Community Support", color: "bg-teal-100 text-teal-600" },
  ];

  const services = [
    { icon: FaHandSparkles, text: "Personalized Treatments", color: "bg-teal-100 text-teal-600" },
    { icon: FaShieldAlt, text: "Safe & Effective", color: "bg-blue-100 text-blue-600" },
    { icon: FaUsers, text: "Expert Team", color: "bg-green-100 text-green-600" },
  ];

  const testimonials = [
    { text: "Organic by Pooja has completely transformed my skin!", name: "Eshita Arora", rating: 5 },
    { text: "I love the special offers and quality of products.", name: "Kanika", rating: 4 },
    { text: "The team truly cares about their customers.", name: "Nandini Pathak", rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50">
      <header className="bg-white shadow-md">
        <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-extrabold text-indigo-900 sm:text-3xl">About Organic by Pooja</h1>
            <button 
              className="text-indigo-900 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FaBars className="text-2xl" />
            </button>
            <nav className="hidden md:block">
              <ul className="flex space-x-4">
                {['Our Story', 'Values', 'Services', 'Testimonials'].map((item) => (
                  <li key={item}>
                    <button 
                      onClick={() => setActiveSection(item)}
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        activeSection === item ? 'bg-indigo-100 text-indigo-900' : 'text-gray-600 hover:bg-indigo-50'
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {isMenuOpen && (
            <nav className="mt-4 md:hidden">
              <ul className="space-y-2">
                {['Our Story', 'Values', 'Services', 'Testimonials'].map((item) => (
                  <li key={item}>
                    <button 
                      onClick={() => {
                        setActiveSection(item);
                        setIsMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                        activeSection === item ? 'bg-indigo-100 text-indigo-900' : 'text-gray-600 hover:bg-indigo-50'
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </header>

      <main className="px-4 py-8 mx-auto max-w-7xl sm:py-12 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {activeSection === 'Our Story' && (
            <motion.div
              key="story"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="p-6 mb-8 bg-white shadow-xl rounded-2xl sm:p-8 sm:mb-12"
            >
              <h2 className="mb-4 text-2xl font-bold text-indigo-900 sm:text-3xl sm:mb-6">Our Journey</h2>
              <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
                Since 2019, Organic by Pooja has been on a mission to provide natural, homemade solutions for skin and hair that heal and nourish from within. Our journey from a small initiative to a trusted name in personalized care is a testament to our commitment to authenticity and quality.
              </p>
            </motion.div>
          )}

          {activeSection === 'Values' && (
            <motion.div
              key="values"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {values.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className={`${item.color} p-4 sm:p-6 rounded-xl shadow-lg flex items-center space-x-4`}
                >
                  <item.icon className="text-3xl sm:text-4xl" />
                  <p className="text-lg font-semibold sm:text-xl">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeSection === 'Services' && (
            <motion.div
              key="services"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid gap-6 sm:gap-8 sm:grid-cols-3"
            >
              {services.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className={`${item.color} p-6 sm:p-8 rounded-xl shadow-lg flex flex-col items-center text-center`}
                >
                  <item.icon className="mb-3 text-4xl sm:text-5xl sm:mb-4" />
                  <p className="text-xl font-bold sm:text-2xl">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeSection === 'Testimonials' && (
            <motion.div
              key="testimonials"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {testimonials.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="relative flex flex-col justify-between p-6 bg-white shadow-lg rounded-xl"
                >
                  <FaQuoteLeft className="absolute text-3xl text-indigo-200 opacity-50 sm:text-4xl top-4 left-4" />
                  <p className="mt-8 mb-4 text-base italic text-gray-700 sm:text-lg">"{item.text}"</p>
                  <div>
                    <p className="font-bold text-indigo-900">{item.name}</p>
                    <div className="flex mt-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={`${i < item.rating ? 'text-yellow-400' : 'text-gray-300'} mr-1`} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 text-center sm:mt-16"
        >
          <h3 className="mb-4 text-2xl font-extrabold text-indigo-900 sm:text-3xl sm:mb-6">Ready to Experience the Organic Difference?</h3>
          <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-6 py-3 text-lg font-medium text-indigo-600 transition-colors duration-300 bg-transparent border-2 border-indigo-600 rounded-full shadow-lg sm:px-8 sm:text-xl hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
>
  Start Your Journey
</motion.button>
        </motion.div>
      </main>
    </div>
  );
};

export default About;