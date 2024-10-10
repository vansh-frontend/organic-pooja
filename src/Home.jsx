
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Accordion from './components/Accordion';
import { FaLeaf, FaStar, FaHeart, FaGift, FaRegClock, FaHandsHelping, FaHandSparkles, FaShieldAlt, FaUsers, FaPhone, FaEnvelope, FaStarHalfAlt, FaComments} from 'react-icons/fa';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';

import './Home.css';

const Home = () => {
  const canvasRef = useRef(null);
  const sectionRefs = useRef([]);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

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
    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 10000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 3;

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(0, 0, 2);
    scene.add(pointLight);

    let mouseX = 0;
    let mouseY = 0;

    const animate = () => {
      requestAnimationFrame(animate);

      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.001;

      // Responsive to mouse movement
      particlesMesh.rotation.x += (mouseY * 0.00008 - particlesMesh.rotation.x) * 0.05;
      particlesMesh.rotation.y += (mouseX * 0.00008 - particlesMesh.rotation.y) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Handle mouse movement
    const handleMouseMove = (event) => {
      mouseX = event.clientX - window.innerWidth / 2;
      mouseY = event.clientY - window.innerHeight / 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    setIsLoaded(true);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4"
        style={{ y }}
      >
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl"
            variants={itemVariants}
          >
            <span className="block">Organic</span>
            <span className="block text-amber-500">
              By Pooja
            </span>
          </motion.h1>
          
          <motion.p 
            className="mb-8 text-xl text-gray-300 md:text-2xl"
            variants={itemVariants}
          >
            Elevate Your Natural Beauty with Our Premium Organic Treatments
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 gap-6 mb-12 sm:grid-cols-3"
            variants={containerVariants}
          >
            {[
              { icon: FaLeaf, title: "Natural Ingredients" },
              { icon: FaStar, title: "Premium Quality" },
              { icon: FaHeart, title: "Made with Love" },
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="p-6 transition-all duration-300 bg-gray-800 bg-opacity-50 rounded-xl backdrop-filter backdrop-blur-lg hover:bg-opacity-70"
                variants={itemVariants}
              >
                <item.icon className="mx-auto mb-4 text-4xl text-amber-400" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="flex flex-col justify-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Link 
                to="/services"
                className="block px-8 py-3 text-lg font-semibold transition-all duration-300 bg-white rounded-full text-amber-600 hover:bg-amber-600 hover:text-white"
              >
                Explore Services
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link 
                to="/products"
                className="block px-8 py-3 text-lg font-semibold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-full hover:bg-transparent hover:text-amber-600"
              >
                Our Products
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Services Section */}
      <section className="relative py-32 overflow-hidden bg-amber-50">
  <div className="absolute inset-0 bg-[url('/textures/subtle-light-pattern.png')] opacity-10"></div>
  
  <div className="container relative z-10 max-w-6xl px-4 mx-auto">
    <motion.h2 
      className="mb-24 text-4xl font-light text-center text-amber-900 uppercase tracking-[0.2em] md:text-5xl lg:text-6xl"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Elevate Your <span className="font-normal text-amber-600">Natural Beauty</span>
    </motion.h2>

    <div className="grid gap-8 mb-24 md:grid-cols-2 lg:grid-cols-3">
      {[
        { title: 'Bespoke Skincare', desc: 'Tailored treatments for radiant skin', icon: 'FaLeaf' },
        { title: 'Holistic Wellness', desc: 'Balance for body, mind, and spirit', icon: 'FaSpa' },
        { title: 'Luxury Cosmetics', desc: 'Premium, organic makeup artistry', icon: 'FaPaintBrush' },
        { title: 'Advanced Haircare', desc: 'Innovative, natural hair solutions', icon: 'FaCut' },
        { title: 'Signature Rituals', desc: 'Exclusive, transformative experiences', icon: 'FaGem' },
        { title: 'Curated Products', desc: 'Handpicked organic beauty essentials', icon: 'FaShoppingBag' },
      ].map((service, index) => (
        <motion.div 
          key={index}
          className="relative group"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div className="absolute inset-0 transition-all duration-300 bg-transparent border opacity-100 border-amber-200 group-hover:border-amber-400"></div>
          <div className="relative z-10 p-8">
            <div className="flex items-center mb-6">
              <div className="mr-4 text-2xl text-amber-600">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3 className="text-xl font-light tracking-wider uppercase text-amber-800">{service.title}</h3>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-amber-700">{service.desc}</p>
            <a 
              href="#" 
              className="inline-block text-xs font-semibold tracking-wider uppercase transition-colors duration-300 text-amber-600 hover:text-amber-800"
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

  <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
  <div className="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
</section>
      {/* About Us Section */}
      <section className="relative py-8 overflow-hidden sm:py-12 md:py-24 bg-gradient-to-br from-amber-50 to-amber-100">
  <div className="absolute inset-0 bg-[url('/textures/organic-pattern-light.png')] opacity-10"></div>
  
  <div className="container relative z-10 px-4 mx-auto max-w-7xl">
    <motion.h2 
      className="mb-6 sm:mb-8 md:mb-16 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-center text-amber-800 uppercase tracking-[0.2em]"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Organic by <span className="font-normal text-amber-600">Pooja</span>
    </motion.h2>

    <div className="grid gap-6 mb-8 sm:gap-8 md:gap-12 sm:mb-12 md:mb-24 md:grid-cols-2">
      <motion.div 
        className="relative h-auto p-4 overflow-auto bg-white rounded-lg shadow-lg sm:p-6 sm:h-64 md:h-80"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-300 to-amber-500"></div>
        <h3 className="mb-2 text-xl font-light tracking-wider uppercase sm:mb-4 sm:text-2xl text-amber-700">Our Story</h3>
        <p className="mb-2 text-sm sm:text-base text-amber-900">Founded in <span className="font-semibold text-amber-600">2019</span>, <span className="font-semibold text-amber-600">Organic by Pooja</span> revolutionizes skincare with natural, homemade solutions.</p>
        <p className="text-sm sm:text-base text-amber-900">We harness nature's power for your inner beauty, offering tailored organic products and services.</p>
      </motion.div>

      <motion.div 
        className="relative h-64 overflow-hidden rounded-lg shadow-lg sm:h-80"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <img src="/img/1.jpg" alt="Organic Beauty" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-600/70 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-center p-4 sm:p-6">
          <h3 className="mb-2 text-xl font-light tracking-wider text-white uppercase sm:mb-4 sm:text-2xl">Our Promise</h3>
          <ul className="space-y-1 text-sm text-white sm:space-y-2 sm:text-base">
            {['100% Natural Ingredients', 'Personalized Skincare', 'Eco-friendly Practices', 'Cruelty-free Products'].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <span className="mr-2 text-amber-300">&#8226;</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>

    <div className="mb-8 sm:mb-12 md:mb-24">
      <h3 className="mb-4 text-xl font-light tracking-wider text-center uppercase sm:mb-6 md:mb-12 sm:text-2xl md:text-3xl text-amber-800">Discover Our World</h3>
      <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 md:grid-cols-3">
        {[
          { title: 'Our Values', icon: 'FaHeart', desc: 'Embracing nature, ethics, and personalized care' },
          { title: 'Our Services', icon: 'FaSparkles', desc: 'Luxurious, organic treatments for face and body' },
          { title: 'Testimonials', icon: 'FaStar', desc: 'Hear from our satisfied, glowing clients' }
        ].map((section, index) => (
          <motion.button
            key={section.title}
            className="relative p-4 text-left transition-all duration-500 bg-white rounded-lg shadow-md sm:p-6 hover:shadow-xl focus:outline-none group"
            onClick={() => setActiveSection(section.title)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="flex items-center mb-2 sm:mb-4">
              <i className={`fas ${section.icon} text-lg sm:text-xl md:text-2xl text-amber-500 mr-3 sm:mr-4 group-hover:text-amber-600 transition-colors duration-300`}></i>
              <h4 className="text-base font-light tracking-wider uppercase transition-colors duration-300 sm:text-lg md:text-xl text-amber-700 group-hover:text-amber-800">{section.title}</h4>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-amber-900">{section.desc}</p>
            <div className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-300 bg-amber-500 group-hover:w-full"></div>
          </motion.button>
        ))}
      </div>
    </div>
  </div>

  {/* Modal Overlay */}
  {activeSection && (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-amber-900/80"
      onClick={() => setActiveSection(null)}
    >
      <div 
        className="relative w-full max-w-4xl p-4 sm:p-6 md:p-12 bg-white rounded-lg shadow-2xl m-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute text-amber-600 top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6 hover:text-amber-800"
          onClick={() => setActiveSection(null)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <h3 className="mb-4 text-xl font-light tracking-wider uppercase sm:mb-6 md:mb-8 sm:text-2xl md:text-3xl text-amber-800">{activeSection}</h3>
        {activeSection === 'Our Values' && (
          <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: 'FaLeaf', title: 'Natural', desc: 'We use only the purest organic ingredients' },
              { icon: 'FaHeart', title: 'Ethical', desc: 'Cruelty-free and environmentally conscious' },
              { icon: 'FaUserAlt', title: 'Personal', desc: 'Tailored solutions for your unique beauty' },
              { icon: 'FaGem', title: 'Quality', desc: 'Premium products for discerning clients' },
              { icon: 'FaSeedling', title: 'Sustainable', desc: 'Eco-friendly practices in all we do' },
              { icon: 'FaHandsHelping', title: 'Community', desc: 'Supporting local suppliers and causes' }
            ].map((item, index) => (
              <div 
                key={index} 
                className="p-4 text-center transition-all duration-300 rounded-lg sm:p-6 bg-amber-50 hover:bg-amber-100"
              >
                <i className={`fas ${item.icon} text-xl sm:text-2xl md:text-3xl text-amber-600 mb-2 sm:mb-4`}></i>
                <h4 className="mb-1 text-base font-light tracking-wider uppercase sm:mb-2 sm:text-lg md:text-xl text-amber-800">{item.title}</h4>
                <p className="text-xs sm:text-sm md:text-base text-amber-700">{item.desc}</p>
              </div>
            ))}
          </div>
        )}
        {activeSection === 'Our Services' && (
          <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: 'FaPaintBrush', title: 'Organic Facials', desc: 'Revitalize your skin with our signature treatments' },
              { icon: 'FaSparkles', title: 'Natural Peels', desc: 'Gentle, effective exfoliation for radiant skin' },
              { icon: 'FaHandSparkles', title: 'Holistic Massages', desc: 'Relax and rejuvenate with our bespoke techniques' },
              { icon: 'FaLeaf', title: 'Herbal Wraps', desc: 'Detoxify and nourish with our organic body wraps' },
              { icon: 'FaGem', title: 'Luxury Packages', desc: 'Indulge in our premium, all-inclusive experiences' },
              { icon: 'FaGraduationCap', title: 'Skincare Workshops', desc: 'Learn the art of natural beauty from our experts' }
            ].map((item, index) => (
              <div 
                key={index} 
                className="p-4 transition-all duration-300 rounded-lg sm:p-6 bg-amber-50 hover:bg-amber-100"
              >
                <i className={`fas ${item.icon} text-xl sm:text-2xl md:text-3xl text-amber-600 mb-2 sm:mb-4`}></i>
                <h4 className="mb-1 text-base font-light tracking-wider uppercase sm:mb-2 sm:text-lg md:text-xl text-amber-800">{item.title}</h4>
                <p className="text-xs sm:text-sm md:text-base text-amber-700">{item.desc}</p>
              </div>
            ))}
          </div>
        )}
        {activeSection === 'Testimonials' && (
          <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2">
            {[
              { name: 'Sarah L.', rating: 5, text: 'Organic by Pooja has transformed my skincare routine. The personalized approach and natural products have given me the best skin of my life!' },
              { name: 'Michael R.', rating: 5, text: 'I was skeptical at first, but the results speak for themselves. My skin has never looked better, and I love knowing everything is organic.' },
              { name: 'Emma T.', rating: 5, text: 'The facial I received was pure bliss. Not only did my skin glow, but I felt completely relaxed and pampered. A true luxury experience!' },
              { name: 'David K.', rating: 5, text: 'As someone with sensitive skin, finding Organic by Pooja was a game-changer. Their products are gentle yet effective. Highly recommended!' }
            ].map((item, index) => (
              <div 
                key={index} 
                className="p-4 transition-all duration-300 rounded-lg sm:p-6 bg-amber-50 hover:bg-amber-100"
              >
                <div className="flex items-center mb-2 sm:mb-4">
                  <div className="flex items-center justify-center w-8 h-8 mr-2 text-base font-light rounded-full sm:w-10 sm:h-10 md:w-12 md:h-12 sm:mr-3 md:mr-4 sm:text-lg md:text-xl text-amber-50 bg-amber-600">
                    {item.name[0]}
                  </div>
                  <div>
                    <p className="font-light text-amber-800">{item.name}</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className={`fas fa-star ${i < item.rating ? 'text-amber-400' : 'text-amber-200'} text-xs sm:text-sm`}></i>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-xs italic sm:text-sm md:text-base text-amber-700">"{item.text}"</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )}
</section>
      {/* Testimonials Section */}
      <section className="relative py-24 overflow-hidden sm:py-32 bg-gradient-to-br from-amber-50 to-amber-100">
  <div className="absolute inset-0 opacity-10 bg-[url('/textures/organic-pattern-light.png')]"></div>
  
  <div className="container relative z-10 max-w-6xl px-4 mx-auto">
    <motion.h2 
      className="mb-16 sm:mb-24 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-center text-amber-800 uppercase tracking-[0.2em]"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Client <span className="font-normal text-amber-600">Testimonials</span>
    </motion.h2>
    
    <div className="relative mb-24">
      <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-amber-500 opacity-20 mix-blend-overlay filter blur-xl animate-pulse"></div>
      <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-amber-700 opacity-20 mix-blend-overlay filter blur-xl animate-pulse animation-delay-2000"></div>
      <div className="absolute w-40 h-40 rounded-full bg-amber-300 opacity-20 -bottom-8 left-20 mix-blend-overlay filter blur-xl animate-pulse animation-delay-4000"></div>
      
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
              className="flex-shrink-0 p-4 transition-all duration-300 bg-white bg-opacity-50 border rounded-lg shadow-xl sm:p-6 backdrop-filter backdrop-blur-lg w-72 sm:w-80 hover:shadow-2xl border-amber-200 group"
            >
              <div className="flex items-center mb-4">
                <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 mr-3 border-2 rounded-full sm:w-16 sm:h-16 sm:mr-4 border-amber-500"/>
                <div>
                  <p className="text-sm font-light sm:text-base text-amber-800">{testimonial.name}</p>
                  <div className="flex items-center">
                    {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                      <FaStar key={i} className="text-xs sm:text-sm text-amber-500"/>
                    ))}
                    {testimonial.rating % 1 !== 0 && <FaStarHalfAlt className="text-xs sm:text-sm text-amber-500"/>}
                  </div>
                </div>
              </div>
              <p className="mb-4 text-xs italic transition-colors duration-300 sm:text-sm text-amber-700 group-hover:text-amber-900">{testimonial.review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* Enhanced floating elements with 3D animations */}
  <motion.div
    className="absolute w-32 h-32 rounded-full bg-amber-500 md:w-64 md:h-64 top-1/4 left-1/4 mix-blend-overlay filter blur-xl opacity-30"
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
    className="absolute w-32 h-32 rounded-full bg-amber-700 md:w-64 md:h-64 bottom-1/4 right-1/4 mix-blend-overlay filter blur-xl opacity-30"
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
  
  <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
  <div className="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
</section>
      {/* FAQ Section */}
    
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100" ref={(el) => (sectionRefs.current[7] = el)}>
  <div className="absolute inset-0 opacity-10 bg-[url('/textures/organic-pattern-light.png')]"></div>
  <div className="container relative z-10 max-w-6xl px-4 mx-auto">
    <motion.h2 
      className="mb-24 text-4xl font-light text-center text-amber-800 uppercase tracking-[0.2em] md:text-5xl lg:text-6xl"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Frequently Asked <span className="font-normal text-amber-600">Questions</span>
    </motion.h2>
    
    <div className="relative">
      <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-amber-500 opacity-20 mix-blend-multiply filter blur-xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-amber-700 opacity-20 mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      
      <div className="relative">
        <Accordion />
      </div>
    </div>
  </div>

  {/* Enhanced floating elements with 3D animations */}
  <motion.div
    className="absolute w-32 h-32 rounded-full bg-amber-500 md:w-64 md:h-64 top-1/4 left-1/4 mix-blend-multiply filter blur-xl opacity-30"
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
    className="absolute w-32 h-32 rounded-full bg-amber-700 md:w-64 md:h-64 bottom-1/4 right-1/4 mix-blend-multiply filter blur-xl opacity-30"
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
  
  <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
  <div className="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
</section>
      {/* Contact Section */}
      <section ref={el => sectionRefs.current[4] = el} className="relative py-32 overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100">
  <div className="absolute inset-0 opacity-10 bg-[url('/textures/organic-pattern-light.png')]"></div>
  
  <div className="container relative z-10 max-w-6xl px-4 mx-auto">
    <motion.h2 
      className="mb-24 text-4xl font-light text-center text-amber-800 uppercase tracking-[0.2em] md:text-5xl lg:text-6xl"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Get in <span className="font-normal text-amber-600">Touch</span>
    </motion.h2>

    <motion.p 
      className="max-w-2xl mx-auto mb-16 text-lg text-center text-amber-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      We'd love to hear from you! Reach out for inquiries or to book an appointment.
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
            className="block p-8 transition-all duration-300 bg-white bg-opacity-50 border rounded-lg border-amber-200 hover:bg-amber-100/50 group"
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl transition-colors duration-300 rounded-full text-amber-100 bg-gradient-to-r from-amber-500 to-amber-600 group-hover:text-white">
              <item.icon />
            </div>
            <h3 className="mb-2 text-xl font-light tracking-wider text-center uppercase text-amber-700">{item.text}</h3>
            <p className="text-center transition-colors duration-300 text-amber-600 group-hover:text-amber-800">
              {item.description}
            </p>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>

  <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-amber-500 opacity-20 mix-blend-multiply filter blur-xl animate-pulse"></div>
  <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-amber-700 opacity-20 mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>

  <motion.div
    className="absolute w-32 h-32 rounded-full bg-amber-500 md:w-64 md:h-64 top-1/4 left-1/4 mix-blend-multiply filter blur-xl opacity-30"
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
    className="absolute w-32 h-32 rounded-full bg-amber-700 md:w-64 md:h-64 bottom-1/4 right-1/4 mix-blend-multiply filter blur-xl opacity-30"
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
  
  <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
  <div className="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
</section>
    </div>
  );
};

export default Home;
                
