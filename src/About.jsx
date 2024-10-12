import React, { useState } from 'react';
import { FaLeaf, FaStar, FaHeart, FaGift, FaRegClock, FaHandsHelping, FaHandSparkles, FaShieldAlt, FaUsers } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.4 } }
  };

  const values = [
    { icon: FaLeaf, text: "Natural Ingredients", color: "green" },
    { icon: FaStar, text: "Quality Assurance", color: "yellow" },
    { icon: FaHeart, text: "Customer Love", color: "red" },
    { icon: FaGift, text: "Special Offers", color: "blue" },
    { icon: FaRegClock, text: "Timely Service", color: "purple" },
    { icon: FaHandsHelping, text: "Community Support", color: "teal" },
  ];

  const services = [
    { icon: FaHandSparkles, text: "Personalized Treatments", color: "teal" },
    { icon: FaShieldAlt, text: "Safe & Effective", color: "blue" },
    { icon: FaUsers, text: "Expert Team", color: "green" },
  ];

  const testimonials = [
    {
      text: "Organic by Pooja has completely transformed my skin!",
      name: "Eshita Arora",
      rating: 4,
    },
    {
      text: "I love the special offers and quality of products.",
      name: "Kanika",
      rating: 3,
    },
    {
      text: "The team at Organic by Pooja truly cares about their customers.",
      name: "Nandini Pathak",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-teal-50 to-green-100">
      <div className="mx-auto max-w-7xl">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-6xl font-extrabold text-center text-teal-800"
        >
          Organic by Pooja
        </motion.h1>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-8 transform bg-white shadow-2xl rounded-3xl -rotate-3"
          >
            <h2 className="mb-4 text-3xl font-bold text-teal-700">Our Story</h2>
            <p className="leading-relaxed text-gray-600">
              Since 2019, we've been on a mission to provide natural, homemade solutions for skin and hair that heal and nourish from within. Our journey from a small initiative to a trusted name in personalized care is a testament to our commitment to authenticity and quality.
            </p>
          </motion.div>

          <div className="space-y-6">
            {['Values', 'Services', 'Testimonials'].map((section) => (
              <motion.button
                key={section}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 px-6 rounded-full text-xl font-semibold transition-colors ${
                  activeSection === section ? 'bg-teal-600 text-white' : 'bg-white text-teal-600 hover:bg-teal-100'
                }`}
                onClick={() => setActiveSection(activeSection === section ? null : section)}
              >
                {section}
              </motion.button>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {activeSection === 'Values' && (
            <motion.div
              key="values"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-2 gap-6 mt-12 md:grid-cols-3"
            >
              {values.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className={`p-6 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center`}
                >
                  <item.icon className={`text-5xl mb-4 text-${item.color}-500`} />
                  <p className={`font-semibold text-${item.color}-700`}>{item.text}</p>
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
              className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-3"
            >
              {services.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 3 : -3 }}
                  className={`p-8 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center`}
                >
                  <item.icon className={`text-6xl mb-4 text-${item.color}-500`} />
                  <p className={`text-xl font-semibold text-${item.color}-700`}>{item.text}</p>
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
              className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-3"
            >
              {testimonials.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-white shadow-lg rounded-xl"
                >
                  <p className="mb-4 italic text-gray-600">"{item.text}"</p>
                  <p className="font-semibold text-teal-700">{item.name}</p>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`${i < item.rating ? 'text-yellow-400' : 'text-gray-300'} mr-1`} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <h3 className="mb-6 text-4xl font-bold text-teal-800">Ready to Experience the Difference?</h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 text-xl font-semibold text-white transition-colors bg-teal-600 rounded-full shadow-lg hover:bg-teal-700"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;