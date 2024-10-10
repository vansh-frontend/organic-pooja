import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Accordion from './components/Accordion';
import { FaLeaf, FaStar, FaHeart, FaGift, FaHandSparkles, FaShieldAlt, FaUsers, FaPhone, FaEnvelope, FaStarHalfAlt, FaComments } from 'react-icons/fa';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

import './Home.css';

const Home = () => {
  const sectionRefs = useRef([]);
  const [activeSection, setActiveSection] = useState(null);
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 1,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };


  return (
    <div className="relative min-h-screen overflow-hidden text-white bg-gray-900">
      {/* organic by pooja section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-white bg-gray-900">
  {/* Background image container with enhanced animation */}
  <motion.div 
    className="absolute inset-0 overflow-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2 }}
  >
    <motion.div
      className="w-full h-full"
      initial={{ scale: 1.2 }}
      animate={{ scale: 1 }}
      transition={{ duration: 10, ease: "easeOut" }}
    >
      <img
        src="img/combo.jpg"
        alt="Cosmic background"
        className="object-cover w-full h-full"
      />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-purple-900/80 to-indigo-900/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      ></motion.div>
    </motion.div>
  </motion.div>
  
  {/* Cosmic elements */}
  <div className="absolute inset-0 overflow-hidden">
    <motion.div
      className="absolute w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-20"
      initial={{ x: "-50%", y: "-50%" }}
      animate={{ x: "150%", y: "150%" }}
      transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
    />
    <motion.div
      className="absolute bg-indigo-500 rounded-full w-96 h-96 blur-3xl opacity-20"
      initial={{ x: "150%", y: "150%" }}
      animate={{ x: "-50%", y: "-50%" }}
      transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
    />
  </div>
  
  {/* Content with staggered animations */}
  <motion.div 
    className="relative z-10 flex flex-col items-center px-6 py-12 space-y-12 text-center lg:px-12"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
  >
   <motion.h1 
  className="flex flex-col font-serif text-4xl font-black tracking-wide sm:text-5xl md:text-6xl lg:text-7xl"
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 1, delay: 0.7 }}
>
  <span className="mb-2 text-white text-8xl drop-shadow-lg font-poppins">ORGANIC</span>
  <span className="text-transparent text-8xl drop-shadow-lg font-poppins bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text">BY POOJA</span>
</motion.h1>
    <motion.p 
      className="max-w-3xl font-sans text-lg font-light leading-relaxed text-white sm:text-xl md:text-2xl lg:text-3xl drop-shadow-md"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.9 }}
    >
      Indulge in our luxurious, organic treatments designed to enhance your natural radiance and rejuvenate your spirit.
    </motion.p>
    
    <motion.div 
      className="flex flex-col w-full gap-4 mt-8 sm:flex-row sm:justify-center sm:gap-6"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1.1 }}
    >
      <motion.button 
        className="px-8 py-3 text-base font-bold text-purple-900 transition-all duration-300 transform bg-white rounded-full sm:px-10 sm:py-4 sm:text-lg hover:bg-purple-200 hover:text-purple-900 hover:shadow-lg hover:shadow-purple-300/50 hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore Services
      </motion.button>
      <motion.button 
        className="px-8 py-3 text-base font-bold text-white transition-all duration-300 transform bg-transparent border-2 border-white rounded-full sm:px-10 sm:py-4 sm:text-lg hover:bg-white hover:text-purple-900 hover:shadow-lg hover:shadow-white/50 hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Our Products
      </motion.button>
    </motion.div>
  </motion.div>
</section>
    {/* Services Section */}
    <section className="relative py-32 overflow-hidden bg-[#050810]">
  <div className="absolute inset-0 opacity-20"></div>

  <div className="container relative z-10 max-w-6xl px-4 mx-auto">
    <motion.h2 
      className="mb-24 text-4xl font-light text-center text-blue-100 uppercase tracking-[0.2em] md:text-5xl lg:text-6xl"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Elevate Your <span className="font-normal text-purple-600">Natural Beauty</span>
    </motion.h2>

    <div className="grid gap-8 mb-24 md:grid-cols-2 lg:grid-cols-3">
      {[
        { title: 'Skin care', desc: 'Tailored treatments for radiant skin', icon: 'FaLeaf' },
        { title: 'Hair care', desc: 'Balance for body, mind, and spirit', icon: 'FaSpa' },
        { title: 'Makeup', desc: 'Premium, organic makeup artistry', icon: 'FaPaintBrush' },
        { title: 'Nail Extensions', desc: 'Innovative, natural hair solutions', icon: 'FaCut' },
        { title: 'Salon Master class', desc: 'Exclusive, transformative experiences', icon: 'FaGem' },
        { title: 'Curated Products', desc: 'Handpicked organic beauty essentials', icon: 'FaShoppingBag' },
      ].map((service, index) => (
        <motion.div 
          key={index}
          className="relative group"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div className="absolute inset-0 transition-all duration-300 bg-[#0A1020] bg-opacity-70 border border-[#1E2A4A] opacity-100 group-hover:border-[#FF69B4] backdrop-filter backdrop-blur-lg"></div>
          <div className="relative z-10 p-8">
            <div className="flex items-center mb-6">
              <div className="mr-4 text-2xl text-[#FF69B4]">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3 className="text-xl font-light tracking-wider text-blue-100 uppercase">{service.title}</h3>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-gray-300">{service.desc}</p>
            <a 
              href="#" 
              className="inline-block text-xs font-semibold tracking-wider text-purple-600 uppercase transition-colors duration-300 hover:text-blue-200"
            >
              Discover More
            </a>
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div 
      className="text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
    </motion.div>
  </div>

  <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-[#1E2A4A] to-transparent"></div>
  <div className="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-r from-transparent via-[#1E2A4A] to-transparent"></div>
</section>
      {/* About Us Section */}
      <section className="relative py-16 overflow-hidden sm:py-24 md:py-32 bg-[#050810]">
  <div className="absolute inset-0 bg-[url('/textures/deep-space.png')] opacity-20"></div>
  
  <div className="container relative z-10 px-4 mx-auto max-w-7xl">
    <motion.h2 
      className="mb-12 sm:mb-16 md:mb-24 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-center text-purple-200 uppercase tracking-[0.2em]"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Organic by <span className="font-normal text-purple-400">Pooja</span>
    </motion.h2>

    <div className="grid gap-8 mb-16 sm:mb-24 md:mb-32 md:grid-cols-2">
      <motion.div 
        className="relative p-6 overflow-hidden bg-[#0A1020] bg-opacity-70 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-600 to-purple-400"></div>
        <h3 className="mb-4 text-2xl font-light tracking-wider text-purple-300 uppercase">Our Story</h3>
        <p className="mb-4 text-base text-purple-200">Founded in <span className="font-semibold text-purple-400">2019</span>, <span className="font-semibold text-purple-400">Organic by Pooja</span> revolutionizes skincare with natural, homemade solutions.</p>
        <p className="text-base text-purple-200">We harness nature's power for your inner beauty, offering tailored organic products and services.</p>
      </motion.div>

      <motion.div 
        className="relative overflow-hidden rounded-lg shadow-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <img src="/img/1.jpg" alt="Organic Beauty" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1020]/70 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-center p-6">
          <h3 className="mb-4 text-2xl font-light tracking-wider text-purple-200 uppercase">Our Promise</h3>
          <ul className="space-y-2 text-base text-purple-100">
            {['100% Natural Ingredients', 'Personalized Skincare', 'Eco-friendly Practices', 'Cruelty-free Products'].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <span className="mr-2 text-purple-400">&#8226;</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>

    <div className="mb-16 sm:mb-24 md:mb-32">
      <h3 className="mb-8 text-2xl font-light tracking-wider text-center text-purple-200 uppercase sm:text-3xl md:text-4xl">Discover Our World</h3>
      <div className="grid gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 md:grid-cols-3">
        {[
          { title: 'Our Values', icon: 'FaHeart', desc: 'Embracing nature, ethics, and personalized care' },
          { title: 'Our Services', icon: 'FaSparkles', desc: 'Luxurious, organic treatments for face and body' },
          { title: 'Testimonials', icon: 'FaStar', desc: 'Hear from our satisfied, glowing clients' }
        ].map((section, index) => (
          <motion.button
            key={section.title}
            className="relative p-6 text-left transition-all duration-500 bg-[#0A1020] bg-opacity-70 rounded-lg shadow-md backdrop-filter backdrop-blur-lg hover:shadow-xl focus:outline-none group"
            onClick={() => setActiveSection(section.title)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="flex items-center mb-4">
              <i className={`fas ${section.icon} text-2xl md:text-3xl text-purple-400 mr-4 group-hover:text-purple-300 transition-colors duration-300`}></i>
              <h4 className="text-lg font-light tracking-wider text-purple-200 uppercase transition-colors duration-300 sm:text-xl md:text-2xl group-hover:text-purple-100">{section.title}</h4>
            </div>
            <p className="text-sm text-purple-300 sm:text-base">{section.desc}</p>
            <div className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-300 bg-purple-500 group-hover:w-full"></div>
          </motion.button>
        ))}
      </div>
    </div>

    {activeSection && (
      <div className="mb-16 sm:mb-24 md:mb-32">
        <h3 className="mb-8 text-2xl font-light tracking-wider text-center text-purple-200 uppercase sm:text-3xl md:text-4xl">{activeSection}</h3>
        {activeSection === 'Our Values' && (
          <div className="grid gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 md:grid-cols-3">
            {[
              { icon: FaLeaf, title: "Natural Ingredients", desc: "We use only the purest, organic ingredients" },
              { icon: FaHeart, title: "Customer Love", desc: "Your satisfaction is our top priority" },
              { icon: FaShieldAlt, title: "Ethical Practices", desc: "Committed to sustainable and cruelty-free methods" },
            ].map((item, index) => (
              <div 
                key={index} 
                className="p-6 transition-all duration-300 bg-[#0A1020] bg-opacity-70 rounded-lg backdrop-filter backdrop-blur-lg hover:bg-opacity-80"
              >
                <item.icon className="mb-4 text-4xl text-purple-400 sm:text-5xl md:text-6xl" />
                <h4 className="mb-2 text-lg font-light tracking-wider text-purple-200 uppercase sm:text-xl md:text-2xl">{item.title}</h4>
                <p className="text-sm text-purple-300 sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        )}
        {activeSection === 'Our Services' && (
          <div className="grid gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 md:grid-cols-3">
            {[
              { icon: FaHandSparkles, title: "Facial Treatments", desc: "Revitalize your skin with our organic facials" },
              { icon: FaUsers, title: "Group Sessions", desc: "Enjoy our services with friends and family" },
              { icon: FaGift, title: "Gift Packages", desc: "Perfect presents for your loved ones" },
            ].map((item, index) => (
              <div 
                key={index} 
                className="p-6 transition-all duration-300 bg-[#0A1020] bg-opacity-70 rounded-lg backdrop-filter backdrop-blur-lg hover:bg-opacity-80"
              >
                <item.icon className="mb-4 text-4xl text-purple-400 sm:text-5xl md:text-6xl" />
                <h4 className="mb-2 text-lg font-light tracking-wider text-purple-200 uppercase sm:text-xl md:text-2xl">{item.title}</h4>
                <p className="text-sm text-purple-300 sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        )}
        {activeSection === 'Testimonials' && (
          <div className="grid gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2">
            {[
              { name: 'Sarah L.', rating: 5, text: 'Organic by Pooja has transformed my skincare routine. The personalized approach and natural products have given me the best skin of my life!' },
              { name: 'Michael R.', rating: 5, text: 'I was skeptical at first, but the results speak for themselves. My skin has never looked better, and I love knowing everything is organic.' },
              { name: 'Emma T.', rating: 5, text: 'The facial I received was pure bliss. Not only did my skin glow, but I felt completely relaxed and pampered. A true luxury experience!' },
              { name: 'David K.', rating: 5, text: 'As someone with sensitive skin, finding Organic by Pooja was a game-changer. Their products are gentle yet effective. Highly recommended!' }
            ].map((item, index) => (
              <div 
                key={index} 
                className="p-6 transition-all duration-300 bg-[#0A1020] bg-opacity-70 rounded-lg backdrop-filter backdrop-blur-lg hover:bg-opacity-80"
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 mr-3 text-lg font-light text-purple-900 bg-purple-400 rounded-full sm:w-12 sm:h-12 md:w-14 md:h-14 sm:mr-4 md:mr-5 sm:text-xl md:text-2xl">
                    {item.name[0]}
                  </div>
                  <div>
                    <p className="font-light text-purple-200">{item.name}</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className={`fas fa-star ${i < item.rating ? 'text-purple-400' : 'text-purple-900'} text-sm sm:text-base`}></i>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm italic text-purple-300 sm:text-base">&ldquo;{item.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}
      </div>
    )}
  </div>

  <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
  <div className="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
</section>
      {/* Testimonials Section */}
      <section className="relative py-24 overflow-hidden sm:py-32 bg-[#050810]">
  <div className="absolute inset-0 opacity-10 bg-[url('/textures/deep-space.png')]"></div>
  
  <div className="container relative z-10 max-w-6xl px-4 mx-auto">
    <motion.h2 
      className="mb-16 sm:mb-24 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-center text-purple-200 uppercase tracking-[0.2em]"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Client <span className="font-normal text-purple-400">Testimonials</span>
    </motion.h2>
    
    <div className="relative mb-24">
      {/* Moving glass blur divs */}
      <motion.div
        className="absolute w-64 h-64 bg-purple-500 rounded-full opacity-10 filter blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute w-64 h-64 bg-purple-700 rounded-full opacity-10 filter blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <div className="relative overflow-hidden">
        <div className="flex gap-6 pb-8 overflow-x-auto scrolling-wrapper">
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
              className="flex-shrink-0 p-4 transition-all duration-300 bg-[#0A1020] bg-opacity-50 border rounded-lg shadow-xl sm:p-6 backdrop-filter backdrop-blur-lg w-72 sm:w-80 hover:shadow-2xl border-purple-500/30 group"
            >
              <div className="flex items-center mb-4">
                <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 mr-3 border-2 border-purple-500 rounded-full sm:w-16 sm:h-16 sm:mr-4"/>
                <div>
                  <p className="text-sm font-light text-purple-200 sm:text-base">{testimonial.name}</p>
                  <div className="flex items-center">
                    {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                      <FaStar key={i} className="text-xs text-purple-400 sm:text-sm"/>
                    ))}
                    {testimonial.rating % 1 !== 0 && <FaStarHalfAlt className="text-xs text-purple-400 sm:text-sm"/>}
                  </div>
                </div>
              </div>
              <p className="mb-4 text-xs italic text-purple-300 transition-colors duration-300 sm:text-sm group-hover:text-purple-200">{testimonial.review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* Enhanced floating elements with 3D animations */}
  <motion.div
    className="absolute w-32 h-32 bg-purple-500 rounded-full md:w-64 md:h-64 top-1/4 left-1/4 mix-blend-overlay filter blur-xl opacity-30"
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
    className="absolute w-32 h-32 bg-purple-700 rounded-full md:w-64 md:h-64 bottom-1/4 right-1/4 mix-blend-overlay filter blur-xl opacity-30"
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

  <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
  <div className="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
</section>
{/* faq */}

<section className="relative py-32 overflow-hidden bg-black" ref={(el) => (sectionRefs.current[7] = el)}>
  <div className="absolute inset-0 opacity-5 bg-[url('/textures/organic-pattern-dark.png')]"></div>
  <div className="container relative z-10 max-w-6xl px-4 mx-auto">
    <motion.h2 
      className="mb-24 text-4xl font-light text-center text-gray-200 uppercase tracking-[0.2em] md:text-5xl lg:text-6xl"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Frequently Asked <span className="font-normal text-purple-400">Questions</span>
    </motion.h2>
    
    <div className="relative">
      <div className="absolute top-0 left-0 w-40 h-40 bg-purple-900 rounded-full opacity-10 mix-blend-screen filter blur-xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-700 rounded-full opacity-10 mix-blend-screen filter blur-xl animate-pulse animation-delay-2000"></div>
      
      <div className="relative">
        <Accordion />
      </div>
    </div>
  </div>

  {/* Enhanced floating elements with 3D animations */}
  <motion.div
    className="absolute w-32 h-32 bg-purple-900 rounded-full md:w-64 md:h-64 top-1/4 left-1/4 mix-blend-screen filter blur-xl opacity-10"
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
    className="absolute w-32 h-32 bg-purple-700 rounded-full md:w-64 md:h-64 bottom-1/4 right-1/4 mix-blend-screen filter blur-xl opacity-10"
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
  
  <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-900/10 to-transparent"></div>
  <div className="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-900/10 to-transparent"></div>
</section>
{/* Contact Section */}


<section ref={el => sectionRefs.current[4] = el} className="relative py-32 overflow-hidden bg-black">
<div className="absolute inset-0 opacity-5 bg-[url('/textures/organic-pattern-dark.png')]"></div>

<div className="container relative z-10 max-w-6xl px-4 mx-auto">
  <motion.h2 
    className="mb-24 text-4xl font-light text-center text-gray-200 uppercase tracking-[0.2em] md:text-5xl lg:text-6xl"
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    Get in <span className="font-normal text-purple-400">Touch</span>
  </motion.h2>

  <motion.p 
    className="max-w-2xl mx-auto mb-16 text-lg text-center text-gray-400"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    We&apos;d love to hear from you! Reach out for inquiries or to book an appointment.
  </motion.p>

  <div className="grid gap-8 md:grid-cols-3">
    {[
      { icon: FaPhone, text: "Call Us", href: "tel:+918171924503", description: "+91 817-192-4503" },
      { icon: FaEnvelope, text: "Email Us", href: "mailto:organicbypooja@gmail.com", description: "organicbypooja@gmail.com" },
      { icon: FaComments, text: "Contact Us", href: "/contact", description: "Send us a message" }
    ].map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Link 
          to={item.href}
          className="block p-8 transition-all duration-300 bg-gray-900 border border-gray-800 rounded-lg hover:bg-gray-800 group"
        >
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-purple-200 transition-colors duration-300 rounded-full bg-gradient-to-r from-purple-900 to-purple-800 group-hover:text-white">
            <item.icon />
          </div>
          <h3 className="mb-2 text-xl font-light tracking-wider text-center text-gray-300 uppercase">{item.text}</h3>
          <p className="text-center text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
            {item.description}
          </p>
        </Link>
      </motion.div>
    ))}
  </div>
</div>

<div className="absolute top-0 left-0 w-40 h-40 bg-purple-900 rounded-full opacity-10 mix-blend-screen filter blur-xl animate-pulse"></div>
<div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-700 rounded-full opacity-10 mix-blend-screen filter blur-xl animate-pulse animation-delay-2000"></div>

<motion.div
  className="absolute w-32 h-32 bg-purple-900 rounded-full md:w-64 md:h-64 top-1/4 left-1/4 mix-blend-screen filter blur-xl opacity-10"
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
  className="absolute w-32 h-32 bg-purple-700 rounded-full md:w-64 md:h-64 bottom-1/4 right-1/4 mix-blend-screen filter blur-xl opacity-10"
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

<div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-900/10 to-transparent"></div>
<div className="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-900/10 to-transparent"></div>
</section>
</div>
);
};

export default Home;