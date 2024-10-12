import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSpa, FaLeaf, FaCut, FaPaintBrush, FaHeart, FaSun, FaSmile, FaLightbulb, FaGem, FaSnowflake, FaStar, FaSearch } from 'react-icons/fa';

const serviceCategories = [
  {
    id: 'skincare',
    title: 'Skincare Services',
    icon: <FaSpa className="w-5 h-5 md:w-6 md:h-6" />,
    services: [
      {
        title: 'Laser Hair Treatment',
        icon: <FaLightbulb className="w-4 h-4 md:w-5 md:h-5" />,
        description: 'Advanced method to reduce unwanted hair growth using state-of-the-art laser technology.',
        benefits: [
          'Long-lasting hair reduction',
          'Minimal discomfort',
          'Reduced ingrown hairs',
          'Improved skin texture'
        ]
      },
      {
        title: 'Thermage Treatment',
        icon: <FaSun className="w-4 h-4 md:w-5 md:h-5" />,
        description: 'Non-invasive skin tightening treatment using radiofrequency energy to stimulate collagen production.',
        benefits: [
          'Non-invasive skin tightening',
          'Stimulates collagen production',
          'Suitable for face and body',
          'Long-lasting results'
        ]
      },
      {
        title: 'Q-Switch Laser Treatment',
        icon: <FaGem className="w-4 h-4 md:w-5 md:h-5" />,
        description: 'Powerful solution for pigmentation and tattoo removal using advanced laser technology.',
        benefits: [
          'Safe for all skin types',
          'Effective pigmentation and tattoo removal',
          'No downtime'
        ]
      }
    ]
  },
  {
    id: 'skinConcerns',
    title: 'Skin Concerns',
    icon: <FaLeaf className="w-5 h-5 md:w-6 md:h-6" />,
    services: [
      {
        title: 'Ageing Skin',
        icon: <FaSnowflake className="w-4 h-4 md:w-5 md:h-5" />,
        description: 'Rejuvenating treatments to restore youthful elasticity using organic ingredients.',
        benefits: [
          'Boosts collagen production for firmness',
          'Provides deep hydration',
          'Reduces signs of ageing'
        ]
      },
      {
        title: 'Acne Scars',
        icon: <FaHeart className="w-4 h-4 md:w-5 md:h-5" />,
        description: 'Treatments targeting stubborn acne marks using natural ingredients.',
        benefits: [
          'Reduces appearance of scars',
          'Smoothens skin texture',
          'Encourages natural skin healing'
        ]
      },
      {
        title: 'Dull Skin',
        icon: <FaSmile className="w-4 h-4 md:w-5 md:h-5" />,
        description: 'Revitalizing treatments to restore radiance using plant-based ingredients.',
        benefits: [
          'Enhances natural skin radiance',
          'Refreshes and revitalizes tired skin',
          'Deeply hydrates for a supple appearance'
        ]
      }
    ]
  },
  {
    id: 'hairConcerns',
    title: 'Hair Concerns',
    icon: <FaCut className="w-5 h-5 md:w-6 md:h-6" />,
    services: [
      {
        title: 'Hair Loss Concern',
        icon: <FaGem className="w-4 h-4 md:w-5 md:h-5" />,
        description: 'Comprehensive treatments for hair loss, including PRP GF treatments.',
        benefits: [
          'Stimulates natural hair growth',
          'Strengthens existing hair',
          'Minimally invasive with no downtime'
        ]
      },
      {
        title: 'Hair Loss for Women',
        icon: <FaHeart className="w-4 h-4 md:w-5 md:h-5" />,
        description: 'Specialized treatments addressing thinning hair in women.',
        benefits: [
          'Enhances hair density and volume',
          'Improves hair strength',
          'Uses organic ingredients safe for women'
        ]
      }
    ]
  },
  {
    id: 'makeup',
    title: 'Makeup Services',
    icon: <FaPaintBrush className="w-5 h-5 md:w-6 md:h-6" />,
    services: [
      {
        title: 'HD Makeup',
        icon: <FaStar className="w-4 h-4 md:w-5 md:h-5" />,
        description: 'High-definition beauty that looks flawless on camera.',
        benefits: [
          'Provides a smooth finish',
          'Long-lasting throughout the day',
          'Ideal for photoshoots'
        ]
      },
      {
        title: 'Airbrush Makeup',
        icon: <FaSnowflake className="w-4 h-4 md:w-5 md:h-5" />,
        description: 'Luxurious airbrush makeup for a radiant finish.',
        benefits: [
          'Ensures an even look',
          'Feels light on the skin',
          'Long-lasting with minimal touch-ups'
        ]
      }
    ]
  }
];
const ServiceItem = ({ item, index }) => (
  <motion.div 
    className="p-4 transition-all duration-300 bg-black bg-opacity-50 border border-white rounded-lg backdrop-filter backdrop-blur-sm sm:p-6 border-opacity-20 hover:bg-opacity-70 hover:border-opacity-50 hover:shadow-lg hover:scale-105"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
  >
    <div className="flex items-center mb-3">
      <div className="p-2 mr-3 text-white transition-colors duration-300 bg-gray-800 rounded-full group-hover:bg-gray-700">
        {item.icon}
      </div>
      <h3 className="text-base font-light tracking-wider text-white transition-colors duration-300 sm:text-lg font-cormorant group-hover:text-pink-200">{item.title}</h3>
    </div>
    <p className="mb-3 text-xs font-light text-gray-300 transition-colors duration-300 sm:text-sm font-montserrat group-hover:text-white">{item.description}</p>
    <div className="text-left">
      <h4 className="mb-2 text-xs font-light tracking-wider text-white uppercase transition-colors duration-300 sm:text-sm font-cormorant group-hover:text-pink-200">BENEFITS:</h4>
      <ul className="pl-5 text-xs font-light text-gray-300 list-disc sm:text-sm font-montserrat">
        {item.benefits.map((benefit, index) => (
          <li key={index} className="mb-1 transition-colors duration-300 group-hover:text-white">
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);
ServiceItem.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    benefits: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const ServiceCategory = ({ category }) => (
  <motion.div
    className="mb-16 text-center"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <motion.h2 
      className="mb-4 text-3xl font-light text-white sm:text-4xl md:text-5xl lg:text-6xl font-cormorant"
    >
      {category.title}
    </motion.h2>
    <motion.p
      className="mb-8 text-lg text-gray-300 sm:text-xl md:text-2xl font-montserrat"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      Indulge in our premium {category.title.toLowerCase()} services
    </motion.p>
    <motion.div 
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      {category.services.map((service, index) => (
        <ServiceItem key={index} item={service} index={index} />
      ))}
    </motion.div>
  </motion.div>
);

ServiceCategory.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    services: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToCategory = (categoryId) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredCategories = serviceCategories.map(category => ({
    ...category,
    services: category.services.filter(service =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.services.length > 0);

  return (
    <div className="min-h-screen text-gray-300 bg-black">
      {/* Header */}
      <header className="sticky top-0 z-20 px-4 py-3 bg-black shadow-md sm:px-6 sm:py-4">
        <div className="container flex flex-col items-center justify-between mx-auto sm:flex-row">
          <h1 className="mb-3 text-2xl font-semibold text-white sm:mb-0 sm:text-3xl font-cormorant">Our Services</h1>
          <div className="relative w-full sm:w-auto" ref={searchInputRef}>
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              className={`w-full px-4 py-2 pl-10 text-sm bg-gray-900 border border-gray-700 text-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 font-montserrat sm:w-48 md:w-64 ${
                isSearchFocused ? 'sm:w-56 md:w-80' : ''
              }`}
            />
            <FaSearch className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky z-10 px-4 py-3 bg-black shadow-md top-16 sm:px-6 sm:py-4">
  <div className="container mx-auto">
    <div className="flex justify-center">
      <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-4">
        {serviceCategories.map((category) => (
          <li key={category.id} className="mb-2 sm:mb-0">
            <button
              onClick={() => scrollToCategory(category.id)}
              className={`flex items-center px-3 py-2 text-xs font-light transition-all duration-200 rounded-lg sm:text-sm md:text-base font-cormorant ${
                activeCategory === category.id
                  ? 'bg-white text-black'
                  : 'text-gray-300 hover:bg-white hover:text-black border border-white border-opacity-20'
              }`}
            >
              <span className="mr-2 text-base sm:text-lg">{category.icon}</span>
              <span>{category.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  </div>
</nav>  

      {/* Content */}
      <main className="container px-4 py-6 mx-auto sm:px-6 sm:py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {filteredCategories.map((category) => (
            <div key={category.id} id={category.id}>
              <ServiceCategory category={category} />
            </div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default Services;