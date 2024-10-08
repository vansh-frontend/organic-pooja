import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Accordion from './components/Accordion';
import { FaLeaf, FaStar, FaHeart, FaGift, FaRegClock, FaHandsHelping, FaHandSparkles, FaShieldAlt, FaUsers, FaPhone, FaEnvelope, FaStarHalfAlt, FaComments} from 'react-icons/fa';
import { motion, useAnimation, useMotionValue, useTransform, useViewportScroll } from 'framer-motion';

import './Home.css';

const Home = () => {
  const sectionRefs = useRef([]);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const controls = useAnimation();
  const { scrollY } = useViewportScroll();
  const y = useMotionValue(0);
  const opacity = useTransform(y, [-100, 0, 100], [0, 1, 0]);

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

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ opacity: 1, y: 0 });
      setIsLoaded(true);
    };
    sequence();
  }, [controls]);

  useEffect(() => {
    let lastScrollTop = window.pageYOffset;

    const handleScroll = () => {
      let currentScrollTop = window.pageYOffset;
      setScrollDirection(currentScrollTop < lastScrollTop ? 'up' : 'down');
      lastScrollTop = currentScrollTop;
      y.set(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [y]);

  useEffect(() => {
    const sections = sectionRefs.current;
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!entry.target.classList.contains('already-visible')) {
            controls.start(i => ({
              opacity: 1,
              y: 0,
              transition: { delay: i * 0.1 }
            }));
            entry.target.classList.add('already-visible');
          }
        } else {
          entry.target.classList.remove('already-visible');
        }
      });
    }, { threshold: 0.1 });
  
    sections.forEach((section, index) => {
      if (section && !section.classList.contains('exclude-animation')) {
        observer.observe(section);
      }
    });
  
    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [controls, scrollDirection]);

  useEffect(() => {
    if (activeSection) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [activeSection]);

  return (
    <div className="relative w-full overflow-hidden bg-gray-50">
      {/* Organic By Pooja Section */}
      <motion.section 
        className="relative min-h-screen overflow-hidden text-white bg-black perspective-1000"
        initial={{ opacity: 0 }}
        animate={controls}
      >
        {/* Cinematic background animation */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ 
            scale: [1.5, 1.2, 1],
            opacity: [0, 0.5, 1],
          }}
          transition={{ 
            duration: 4,
            times: [0, 0.7, 1],
            ease: "easeOut"
          }}
          style={{
            backgroundImage: 'url("/img/section.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3) saturate(1.2) contrast(1.2)',
          }}
        />
        
        {/* Dynamic overlay with animated gradient */}
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black opacity-80" />
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff)',
              backgroundSize: '400% 400%',
              opacity: 0.1,
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 15,
              ease: 'linear',
              repeat: Infinity,
            }}
          />
        </motion.div>

        <div className="container relative z-10 flex flex-col items-center justify-center min-h-screen px-4 mx-auto">
          {/* Header with complex reveal animation */}
          <motion.header 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <motion.h1 
              className="mb-4 text-4xl font-bold md:text-7xl lg:text-9xl"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, delay: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              {['Organic', 'By Pooja'].map((word, index) => (
                <motion.span
                  key={index}
                  className={`block ${index === 1 ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600' : ''}`}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.5 + 1.5, ease: [0.6, -0.05, 0.01, 0.99] }}
                >
                  {word.split('').map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: charIndex * 0.05 + index * 0.5 + 2 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 md:text-3xl lg:text-4xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3 }}
            >
              Elevate Your Natural Beauty
            </motion.p>
          </motion.header>

          {/* Main content with advanced staggered animation */}
{/* Main content with advanced staggered animation */}
{isLoaded && (
  <motion.div 
    className="w-full max-w-6xl mt-12"
    initial="hidden"
    animate="show"
    variants={{
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.3,
          delayChildren: 3.5
        }
      }
    }}
  >
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
      {[
        { title: "Luxurious Facials", description: "Revitalize your skin with our premium organic treatments" },
        { title: "Holistic Massages", description: "Experience total relaxation and rejuvenation" },
        { title: "Natural Hair Care", description: "Nourish and style with nature's finest ingredients" },
      ].map((service, index) => (
        <motion.div 
          key={index}
          className="p-4 text-center bg-black bg-opacity-50 border border-purple-500 backdrop-filter backdrop-blur-lg rounded-2xl"
          variants={{
            hidden: { opacity: 0, y: 50, rotateY: -15 },
            show: { 
              opacity: 1, 
              y: 0, 
              rotateY: 0,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
              }
            }
          }}
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 0 30px rgba(147, 51, 234, 0.3)",
            transition: { duration: 0.3 }
          }}
        >
          <h3 className="mb-2 text-xl font-semibold md:mb-4 md:text-2xl">{service.title}</h3>
          <p className="text-sm text-gray-300 md:text-base">{service.description}</p>
        </motion.div>
      ))}
    </div>

    {/* New text before CTA buttons */}
    <motion.p
      className="mt-8 mb-6 text-lg text-center text-gray-300 md:text-xl lg:text-1xl"
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { 
          opacity: 1, 
          y: 0,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.5
          }
        }
      }}
    >
      Indulge in our luxurious, organic treatments designed to enhance your natural radiance and rejuvenate your spirit.
    </motion.p>

    {/* CTA Section with advanced hover animation */}
    <motion.div
      className="mt-12 text-center"
      variants={{
        hidden: { opacity: 0 },
        show: { 
          opacity: 1,
          transition: {
            delay: 0.7
          }
        }
      }}
    >
      <motion.div 
        className="flex flex-col items-center justify-center w-full space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
      >
        {[
          { text: "Explore Services", href: "/services", primary: true },
          { text: "Our Products", href: "/products", primary: false },
        ].map((button, index) => (
          <motion.a 
            key={index}
            href={button.href}
            className={`inline-block w-full px-6 py-3 text-base font-semibold text-center transition-all duration-300 rounded-full sm:w-auto md:px-10 md:py-4 md:text-lg ${
              button.primary ? 'text-purple-400 bg-white' : 'text-purple-400 border-2 border-purple-400'
            }`}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: `0 0 30px ${button.primary ? 'rgba(147, 51, 234, 0.5)' : 'rgba(167, 139, 250, 0.3)'}`,
            }}
            whileTap={{ scale: 0.95 }}
          >
            {button.text}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  </motion.div>
)}
        </div>

        {/* Advanced particle effect */}
        <motion.div
          className="absolute inset-0 z-20 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
        >
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              style={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                opacity: [0, 1, 0],
                scale: [0, Math.random() * 2, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Cinematic light rays effect */}
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.1, 0] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          style={{
            background: 'radial-gradient(ellipse at top, rgba(255,255,255,0.3) 0%, transparent 70%)',
          }}
        />
      </motion.section>
      {/* Services Section */}

 {/* Services Section */}
 <section className="relative min-h-screen py-24 text-gray-300 bg-gradient-to-b from-gray-900 to-purple-900">
  <div className="absolute inset-0 bg-black opacity-50"></div>
  
  <div className="container relative z-10 px-4 mx-auto">
    <motion.div
      className="mb-16 text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h2 
        className="mb-4 text-4xl font-bold text-pink-400 md:text-5xl lg:text-6xl"
      >
        Our Premium Services
      </motion.h2>
      <motion.p
        className="text-xl text-purple-300 md:text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Indulge in luxury and transform your look
      </motion.p>
    </motion.div>

    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {[
        { title: 'Luxury Makeup', desc: 'Elevate your look with our high-end makeup services.' },
        { title: 'Advanced Skin Care', desc: 'Rejuvenate your skin with cutting-edge treatments.' },
        { title: 'Couture Hair Styling', desc: 'Achieve runway-ready hair with our expert stylists.' },
        { title: 'Exclusive Product Line', desc: 'Experience our curated collection of luxury products.' },
        { title: 'VIP Beauty Masterclass', desc: 'Learn from industry experts in exclusive workshops.' },
        { title: 'Bespoke Nail Artistry', desc: 'Indulge in custom nail designs and premium care.' },
      ].map((service, index) => (
        <motion.div 
          key={index}
          className="p-8 transition-all duration-300 bg-gray-800 border border-purple-700 shadow-lg rounded-xl hover:bg-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h3 className="mb-4 text-xl font-semibold text-pink-400">{service.title}</h3>
          <p className="mb-6 text-gray-300">{service.desc}</p>
          <a 
            href="#" 
            className="text-purple-400 transition-colors duration-300 hover:text-pink-400"
          >
            Learn more
          </a>
        </motion.div>
      ))}
    </div>
  </div>

  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

  {/* Add some floating elements for visual interest */}
  <div className="absolute w-64 h-64 bg-purple-500 rounded-full top-1/4 left-1/4 mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
  <div className="absolute w-64 h-64 bg-pink-500 rounded-full top-3/4 right-1/4 mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
  <div className="absolute w-64 h-64 bg-yellow-500 rounded-full bottom-1/4 left-1/2 mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
</section>
      {/* About Us Section */}
      <section className="relative py-24 overflow-hidden bg-gray-900">
  {/* Dynamic background pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] animate-pulse"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-600/30"></div>
  </div>

  <div className="container relative z-10 px-4 mx-auto max-w-7xl">
    <motion.h2 
      className="mb-16 text-4xl font-extrabold text-center text-white md:text-5xl lg:text-6xl"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Organic by Pooja</span>
    </motion.h2>

    <div className="grid gap-12 mb-16 md:grid-cols-2">
      <motion.div 
        className="relative p-8 overflow-hidden bg-gray-800 shadow-lg rounded-3xl"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Animated background effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 animate-gradient-xy"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-500">
              <span className="text-2xl font-bold text-white">OP</span>
            </div>
            <h3 className="ml-4 text-3xl font-extrabold text-white">Our Story</h3>
          </div>
          
          <div className="space-y-6">
            <p className="relative text-lg leading-relaxed text-gray-300">
              <span className="absolute top-0 text-5xl text-pink-600 opacity-30 -left-4">"</span>
              Founded in <span className="font-semibold text-pink-400">2019</span>, <span className="font-semibold text-pink-400">Organic by Pooja</span> embarked on a mission to revolutionize skincare with natural, homemade solutions. Our journey from a small initiative to a trusted name in personalized care is a testament to our unwavering commitment to authenticity and quality.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              We believe in harnessing the power of nature to bring out your inner beauty, offering a range of organic products and services tailored to your unique needs.
            </p>
          </div>
          
          <div className="flex justify-end mt-8">
            <div className="px-6 py-2 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-pink-500 to-purple-500">
              Est. 2019
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="relative overflow-hidden shadow-lg rounded-3xl"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <img src="img/1.jpg" alt="Organic by Pooja" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">Our Promise</h3>
          <ul className="space-y-2 text-gray-200">
            {['100% Natural Ingredients', 'Personalized Skincare Solutions', 'Eco-friendly Practices', 'Cruelty-free Products'].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <svg className="w-6 h-6 mr-2 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>

    <motion.div 
      className="grid gap-6 mb-16 sm:grid-cols-2 lg:grid-cols-3"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      {['Values', 'Services', 'Testimonials'].map((section) => (
        <motion.button
          key={section}
          className="relative px-8 py-6 overflow-hidden text-xl font-semibold text-white transition-all duration-300 bg-gray-800 border-2 border-pink-600 rounded-xl hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50 group"
          onClick={() => setActiveSection(section)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">{section}</span>
          <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-pink-600 to-purple-600 group-hover:opacity-20"></div>
        </motion.button>
      ))}
    </motion.div>
  </div>

  {/* Enhanced floating elements with 3D animations */}
  <motion.div
    className="absolute w-32 h-32 bg-purple-500 rounded-full md:w-64 md:h-64 top-1/4 left-1/4 mix-blend-multiply filter blur-xl opacity-70"
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, 90, 180, 270, 360],
      x: [0, 50, 0, -50, 0],
      y: [0, 50, 0, -50, 0],
      z: [0, 100, 0, -100, 0],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse",
    }}
    style={{ transformStyle: 'preserve-3d' }}
  />
  <motion.div
    className="absolute w-32 h-32 bg-pink-500 rounded-full md:w-64 md:h-64 bottom-1/4 right-1/4 mix-blend-multiply filter blur-xl opacity-70"
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, -90, -180, -270, -360],
      x: [0, -50, 0, 50, 0],
      y: [0, -50, 0, 50, 0],
      z: [0, -100, 0, 100, 0],
    }}
    transition={{
      duration: 25,
      repeat: Infinity,
      repeatType: "reverse",
    }}
    style={{ transformStyle: 'preserve-3d' }}
  />

  {/* Modal Overlay */}
  {activeSection && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <motion.div 
        className="relative w-full max-w-4xl p-8 overflow-y-auto bg-gray-800 rounded-2xl shadow-2xl max-h-[90vh]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          className="absolute text-gray-400 top-4 right-4 hover:text-white"
          onClick={() => setActiveSection(null)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <h3 className="mb-6 text-3xl font-bold text-white">{activeSection}</h3>
        {activeSection === 'Values' && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((item, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center p-6 text-center transition-all duration-300 bg-gray-700 rounded-xl hover:bg-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-pink-500 to-purple-500">
                  <item.icon className="text-2xl text-white" />
                </div>
                <h4 className="mb-2 text-xl font-bold text-white">{item.text}</h4>
                <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </motion.div>
            ))}
          </div>
        )}
        {activeSection === 'Services' && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item, index) => (
              <motion.div 
                key={index} 
                className="p-6 transition-all duration-300 bg-gray-700 rounded-xl hover:bg-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <item.icon className="mb-4 text-4xl text-pink-400" />
                <h4 className="mb-2 text-xl font-bold text-white">{item.text}</h4>
                <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </motion.div>
            ))}
          </div>
        )}
        {activeSection === 'Testimonials' && (
          <div className="grid gap-8 sm:grid-cols-2">
            {testimonials.map((item, index) => (
              <motion.div 
                key={index} 
                className="p-6 transition-all duration-300 bg-gray-700 rounded-xl hover:bg-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-full bg-gradient-to-br from-pink-500 to-purple-500">
                    <span className="text-xl font-bold text-white">{item.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{item.name}</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={`${i < item.rating ? 'text-yellow-400' : 'text-gray-600'} text-sm`} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="italic text-gray-300">"{item.text}"</p>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  )}
</section>
      {/* Testimonials Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-black to-purple-900">
  <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,...')]"></div>
  <div className="container relative z-10 px-4 mx-auto max-w-7xl">
    <motion.h2 
      className="mb-16 text-4xl font-extrabold text-center text-white md:text-5xl lg:text-6xl"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      What Our Clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Love About Us</span>
    </motion.h2>
    
    <div className="relative">
      <div className="absolute top-0 left-0 w-40 h-40 bg-pink-500 rounded-full opacity-30 mix-blend-multiply filter blur-xl animate-pulse"></div>
      <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500 rounded-full opacity-30 mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      <div className="absolute w-40 h-40 bg-blue-500 rounded-full opacity-30 -bottom-8 left-20 mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      
      <div className="relative overflow-hidden">
        <div className="flex gap-6 pb-8 scrolling-wrapper">
          {[
            { name: 'Eshita Arora', review: 'The organic products are amazing, and the treatments are top-notch. I feel rejuvenated every time!', img: 'img/sec2.jpg', rating: 5 },
            { name: 'Kanika', review: 'Excellent service and great quality products. Highly recommend for anyone looking to elevate their skincare routine.', img: 'img/sec2.jpg', rating: 4.5 },
            { name: 'Nandini Pathak', review: 'Professional staff and fantastic results. The best salon experience I have ever had!', img: 'img/sec2.jpg', rating: 4 },
            { name: 'Kavita Bhalla', review: 'The organic products are amazing, and the treatments are top-notch. I feel rejuvenated every time!', img: 'img/sec2.jpg', rating: 5 },
            { name: 'Anjali Sharma', review: 'Excellent service and great quality products. Highly recommend for anyone looking to elevate their skincare routine.', img: 'img/sec2.jpg', rating: 4.5 },
            { name: 'Varsha Agarwal', review: 'Professional staff and fantastic results. The best salon experience I have ever had!', img: 'img/sec2.jpg', rating: 4 },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 p-6 transition-all duration-300 bg-black bg-opacity-50 shadow-xl backdrop-filter backdrop-blur-lg w-80 rounded-3xl hover:shadow-2xl"
            >
              <div className="flex items-center mb-4">
                <img src={testimonial.img} alt={testimonial.name} className="w-16 h-16 mr-4 border-2 border-pink-500 rounded-full"/>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <div className="flex items-center">
                    {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                      <FaStar key={i} className="text-sm text-yellow-400"/>
                    ))}
                    {testimonial.rating % 1 !== 0 && <FaStarHalfAlt className="text-sm text-yellow-400"/>}
                  </div>
                </div>
              </div>
              <p className="mb-4 text-sm italic text-gray-300">{testimonial.review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* Enhanced floating elements with 3D animations */}
  <motion.div
    className="absolute w-32 h-32 bg-purple-500 rounded-full md:w-64 md:h-64 top-1/4 left-1/4 mix-blend-multiply filter blur-xl opacity-70"
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, 90, 180, 270, 360],
      x: [0, 50, 0, -50, 0],
      y: [0, 50, 0, -50, 0],
      z: [0, 100, 0, -100, 0],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse",
    }}
    style={{ transformStyle: 'preserve-3d' }}
  />
  <motion.div
    className="absolute w-32 h-32 bg-pink-500 rounded-full md:w-64 md:h-64 bottom-1/4 right-1/4 mix-blend-multiply filter blur-xl opacity-70"
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, -90, -180, -270, -360],
      x: [0, -50, 0, 50, 0],
      y: [0, -50, 0, 50, 0],
      z: [0, -100, 0, 100, 0],
    }}
    transition={{
      duration: 25,
      repeat: Infinity,
      repeatType: "reverse",
    }}
    style={{ transformStyle: 'preserve-3d' }}
  />
</section>
      {/* FAQ Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-black to-purple-900" ref={(el) => (sectionRefs.current[7] = el)}>
  <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,...')]"></div>
  <div className="container relative z-10 px-4 mx-auto max-w-7xl">
    <motion.h2 
      className="mb-16 text-4xl font-extrabold text-center text-white md:text-5xl lg:text-6xl"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Questions</span>
    </motion.h2>
    
    <div className="relative">
      <div className="absolute top-0 left-0 w-40 h-40 bg-pink-500 rounded-full opacity-30 mix-blend-multiply filter blur-xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500 rounded-full opacity-30 mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      
      <div className="relative">
        <Accordion />
      </div>
    </div>
  </div>

  {/* Enhanced floating elements with 3D animations */}
  <motion.div
    className="absolute w-32 h-32 bg-purple-500 rounded-full md:w-64 md:h-64 top-1/4 left-1/4 mix-blend-multiply filter blur-xl opacity-70"
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, 90, 180, 270, 360],
      x: [0, 50, 0, -50, 0],
      y: [0, 50, 0, -50, 0],
      z: [0, 100, 0, -100, 0],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse",
    }}
    style={{ transformStyle: 'preserve-3d' }}
  />
  <motion.div
    className="absolute w-32 h-32 bg-pink-500 rounded-full md:w-64 md:h-64 bottom-1/4 right-1/4 mix-blend-multiply filter blur-xl opacity-70"
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, -90, -180, -270, -360],
      x: [0, -50, 0, 50, 0],
      y: [0, -50, 0, 50, 0],
      z: [0, -100, 0, 100, 0],
    }}
    transition={{
      duration: 25,
      repeat: Infinity,
      repeatType: "reverse",
    }}
    style={{ transformStyle: 'preserve-3d' }}
  />
</section>

    {/* Contact Section */}
<section ref={el => sectionRefs.current[4] = el} className="relative py-24 overflow-hidden bg-gradient-to-br from-black to-purple-900">
  {/* Animated background */}
  <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,...')]"></div>
  
  <div className="container relative z-10 px-4 mx-auto max-w-7xl">
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-16 text-center"
    >
      <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
        Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Touch</span>
      </h2>
      <p className="max-w-2xl mx-auto text-xl text-gray-300">
        We'd love to hear from you! Reach out for inquiries or to book an appointment.
      </p>
    </motion.div>

    <div className="grid gap-8 md:grid-cols-3">
      {[
        { icon: FaPhone, text: "Call Us", href: "tel:+918171924503" },
        { icon: FaEnvelope, text: "Email Us", href: "mailto:organicbypooja@gmail.com" },
        { icon: FaComments, text: "Contact Us", href: "/contact" }
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link 
            to={item.href}
            className="block p-8 transition-all duration-300 transform bg-white/5 backdrop-filter backdrop-blur-lg rounded-xl hover:bg-white/10 hover:scale-105 group"
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white rounded-full bg-gradient-to-r from-pink-500 to-purple-500 group-hover:animate-bounce">
              <item.icon />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">{item.text}</h3>
            <p className="text-gray-300 transition-colors duration-300 group-hover:text-white">
              Click to {item.text.toLowerCase()}
            </p>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Enhanced floating elements with 3D animations */}
  <motion.div
    className="absolute w-32 h-32 bg-purple-500 rounded-full md:w-64 md:h-64 top-1/4 left-1/4 mix-blend-multiply filter blur-xl opacity-70"
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, 90, 180, 270, 360],
      x: [0, 50, 0, -50, 0],
      y: [0, 50, 0, -50, 0],
      z: [0, 100, 0, -100, 0],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse",
    }}
    style={{ transformStyle: 'preserve-3d' }}
  />
  <motion.div
    className="absolute w-32 h-32 bg-pink-500 rounded-full md:w-64 md:h-64 bottom-1/4 right-1/4 mix-blend-multiply filter blur-xl opacity-70"
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, -90, -180, -270, -360],
      x: [0, -50, 0, 50, 0],
      y: [0, -50, 0, 50, 0],
      z: [0, -100, 0, 100, 0],
    }}
    transition={{
      duration: 25,
      repeat: Infinity,
      repeatType: "reverse",
    }}
    style={{ transformStyle: 'preserve-3d' }}
  />
</section>
    </div>
  );
};

export default Home;
                