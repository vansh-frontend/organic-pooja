
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
      <section className="relative py-32 overflow-hidden bg-black">
  <div className="absolute inset-0 bg-[url('/textures/subtle-dark-pattern.png')] opacity-10"></div>
  
  <div className="container relative z-10 max-w-6xl px-4 mx-auto">
    <motion.h2 
      className="mb-24 text-4xl font-light text-center text-gray-200 uppercase tracking-[0.2em] md:text-5xl lg:text-6xl"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Elevate Your <span className="font-normal text-amber-100">Natural Beauty</span>
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
          <div className="absolute inset-0 transition-all duration-300 bg-transparent border opacity-100 border-amber-900/30 group-hover:border-amber-700/50"></div>
          <div className="relative z-10 p-8">
            <div className="flex items-center mb-6">
              <div className="mr-4 text-2xl text-amber-200">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3 className="text-xl font-light tracking-wider text-gray-100 uppercase">{service.title}</h3>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">{service.desc}</p>
            <a 
              href="#" 
              className="inline-block text-xs font-semibold tracking-wider uppercase transition-colors duration-300 text-amber-200 hover:text-amber-100"
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

  <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
  <div className="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
</section>
      {/* About Us Section */}
      <section className="relative py-32 overflow-hidden bg-black">
  <div className="absolute inset-0 bg-[url('/textures/luxury-pattern.png')] opacity-5"></div>
  
  <div className="container relative z-10 max-w-6xl px-4 mx-auto">
    <motion.h2 
      className="mb-24 text-4xl font-light text-center text-gray-100 uppercase tracking-[0.2em] md:text-5xl lg:text-6xl"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Discover <span className="font-normal text-amber-100">Organic by Pooja</span>
    </motion.h2>

    <div className="grid gap-16 mb-24 md:grid-cols-2">
      <motion.div 
        className="relative p-8 overflow-hidden border rounded-lg border-amber-900/30"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative z-10">
          <div className="flex items-center mb-8">
            <div className="flex items-center justify-center w-16 h-16 mr-6 text-2xl font-light text-black rounded-full bg-amber-200">
              OP
            </div>
            <h3 className="text-3xl font-light tracking-wider uppercase text-amber-100">Our Story</h3>
          </div>
          
          <div className="space-y-6">
            <p className="relative text-lg leading-relaxed text-gray-300">
              <span className="absolute top-0 text-5xl text-amber-700 opacity-20 -left-4">"</span>
              Founded in <span className="font-normal text-amber-200">2019</span>, <span className="font-normal text-amber-200">Organic by Pooja</span> embarked on a mission to revolutionize skincare with natural, homemade solutions. Our journey from a small initiative to a trusted name in personalized care is a testament to our unwavering commitment to authenticity and quality.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              We believe in harnessing the power of nature to bring out your inner beauty, offering a range of organic products and services tailored to your unique needs.
            </p>
          </div>
          
          <div className="mt-10 text-right">
            <span className="px-6 py-2 text-sm font-light tracking-wider uppercase text-amber-900 bg-amber-200">
              Est. 2019
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="relative overflow-hidden rounded-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <img src="/img/1.jpg" alt="Organic by Pooja" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h3 className="mb-6 text-2xl font-light tracking-wider uppercase text-amber-100 sm:text-3xl">Our Promise</h3>
          <ul className="space-y-3 text-gray-200">
            {['100% Natural Ingredients', 'Personalized Skincare Solutions', 'Eco-friendly Practices', 'Cruelty-free Products'].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <span className="mr-3 text-amber-300">&#8212;</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>

    <motion.div 
  className="grid gap-8 mb-24 sm:grid-cols-3"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6 }}
>
  {[
    { title: 'Values', icon: 'FaHeart' },
    { title: 'Services', icon: 'FaSparkles' },
    { title: 'Testimonials', icon: 'FaStar' }
  ].map((section) => (
    <motion.button
      key={section.title}
      className="relative px-8 py-6 text-lg font-light tracking-wider uppercase transition-all duration-500 text-amber-100 bg-gradient-to-br from-gray-900 to-black group focus:outline-none"
      onClick={() => setActiveSection(section.title)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10 flex items-center justify-center">
        <i className={`fas ${section.icon} mr-3 text-amber-300 group-hover:text-amber-100 transition-colors duration-300`}></i>
        <span className="transition-colors duration-300 group-hover:text-white">{section.title}</span>
      </span>
      <div className="absolute inset-0 w-full h-full transition-all duration-300 opacity-0 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-amber-600/20"></div>
        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <span className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent"></span>
          <span className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent"></span>
          <span className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-amber-200 to-transparent"></span>
          <span className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-amber-200 to-transparent"></span>
        </div>
      </div>
      <div className="absolute inset-0 w-full h-full transition-all duration-300 opacity-0 group-hover:opacity-100">
        <div className="absolute inset-0 bg-amber-400/10 blur-xl"></div>
        <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-400 to-amber-600 opacity-0 group-hover:opacity-20 blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
      </div>
    </motion.button>
  ))}
</motion.div>
  </div>

  <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-amber-700/30 to-transparent"></div>
  <div className="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-r from-transparent via-amber-700/30 to-transparent"></div>

  {/* Modal Overlay */}
  {activeSection && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
    >
      <motion.div 
        className="relative w-full max-w-4xl p-12 overflow-y-auto bg-gray-900 border border-amber-900/30 rounded-lg shadow-2xl max-h-[90vh]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          className="absolute text-amber-200 top-6 right-6 hover:text-amber-100"
          onClick={() => setActiveSection(null)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <h3 className="mb-8 text-3xl font-light tracking-wider uppercase text-amber-100">{activeSection}</h3>
        {activeSection === 'Values' && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: 'FaLeaf', title: 'Natural', desc: 'We use only the purest organic ingredients' },
              { icon: 'FaHeart', title: 'Ethical', desc: 'Cruelty-free and environmentally conscious' },
              { icon: 'FaUserAlt', title: 'Personal', desc: 'Tailored solutions for your unique beauty' },
              { icon: 'FaGem', title: 'Quality', desc: 'Premium products for discerning clients' },
              { icon: 'FaSeedling', title: 'Sustainable', desc: 'Eco-friendly practices in all we do' },
              { icon: 'FaHandsHelping', title: 'Community', desc: 'Supporting local suppliers and causes' }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="p-6 text-center transition-all duration-300 border rounded-lg border-amber-900/30 hover:bg-amber-900/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <i className={`fas ${item.icon} text-3xl text-amber-400 mb-4`}></i>
                <h4 className="mb-2 text-xl font-light tracking-wider uppercase text-amber-100">{item.title}</h4>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        )}
        {activeSection === 'Services' && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: 'FaPaintBrush', title: 'Organic Facials', desc: 'Revitalize your skin with our signature treatments' },
              { icon: 'FaSparkles', title: 'Natural Peels', desc: 'Gentle, effective exfoliation for radiant skin' },
              { icon: 'FaHandSparkles', title: 'Holistic Massages', desc: 'Relax and rejuvenate with our bespoke techniques' },
              { icon: 'FaLeaf', title: 'Herbal Wraps', desc: 'Detoxify and nourish with our organic body wraps' },
              { icon: 'FaGem', title: 'Luxury Packages', desc: 'Indulge in our premium, all-inclusive experiences' },
              { icon: 'FaGraduationCap', title: 'Skincare Workshops', desc: 'Learn the art of natural beauty from our experts' }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="p-6 transition-all duration-300 border rounded-lg border-amber-900/30 hover:bg-amber-900/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <i className={`fas ${item.icon} text-3xl text-amber-400 mb-4`}></i>
                <h4 className="mb-2 text-xl font-light tracking-wider uppercase text-amber-100">{item.title}</h4>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        )}
        {activeSection === 'Testimonials' && (
          <div className="grid gap-8 sm:grid-cols-2">
            {[
              { name: 'Sarah L.', rating: 5, text: 'Organic by Pooja has transformed my skincare routine. The personalized approach and natural products have given me the best skin of my life!' },
              { name: 'Michael R.', rating: 5, text: 'I was skeptical at first, but the results speak for themselves. My skin has never looked better, and I love knowing everything is organic.' },
              { name: 'Emma T.', rating: 5, text: 'The facial I received was pure bliss. Not only did my skin glow, but I felt completely relaxed and pampered. A true luxury experience!' },
              { name: 'David K.', rating: 5, text: 'As someone with sensitive skin, finding Organic by Pooja was a game-changer. Their products are gentle yet effective. Highly recommended!' }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="p-6 transition-all duration-300 border rounded-lg border-amber-900/30 hover:bg-amber-900/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 text-xl font-light rounded-full text-amber-900 bg-amber-200">
                    {item.name[0]}
                  </div>
                  <div>
                    <p className="font-light text-amber-100">{item.name}</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className={`fas fa-star ${i < item.rating ? 'text-amber-400' : 'text-gray-600'} text-sm`}></i>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="italic text-gray-400">"{item.text}"</p>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  )}
</section>
      {/* Testimonials Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-amber-900/30">
  <div className="absolute inset-0 opacity-10 bg-[url('/textures/luxury-pattern.png')]"></div>
  
  <div className="container relative z-10 max-w-6xl px-4 mx-auto">
    <motion.h2 
      className="mb-24 text-4xl font-light text-center text-gray-100 uppercase tracking-[0.2em] md:text-5xl lg:text-6xl"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Client <span className="font-normal text-amber-100">Testimonials</span>
    </motion.h2>
    
    <div className="relative">
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
              className="flex-shrink-0 p-6 transition-all duration-300 bg-gray-900 bg-opacity-50 border rounded-lg shadow-xl backdrop-filter backdrop-blur-lg w-80 hover:shadow-2xl border-amber-900/30 group"
            >
              <div className="flex items-center mb-4">
                <img src={testimonial.img} alt={testimonial.name} className="w-16 h-16 mr-4 border-2 rounded-full border-amber-500"/>
                <div>
                  <p className="font-light text-amber-100">{testimonial.name}</p>
                  <div className="flex items-center">
                    {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                      <FaStar key={i} className="text-sm text-amber-400"/>
                    ))}
                    {testimonial.rating % 1 !== 0 && <FaStarHalfAlt className="text-sm text-amber-400"/>}
                  </div>
                </div>
              </div>
              <p className="mb-4 text-sm italic text-gray-300 transition-colors duration-300 group-hover:text-gray-100">{testimonial.review}</p>
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
      <section className="relative py-32 overflow-hidden bg-black" ref={(el) => (sectionRefs.current[7] = el)}>
  <div className="absolute inset-0 opacity-10 bg-[url('/textures/luxury-pattern.png')]"></div>
  <div className="container relative z-10 max-w-6xl px-4 mx-auto">
    <motion.h2 
      className="mb-24 text-4xl font-light text-center text-gray-100 uppercase tracking-[0.2em] md:text-5xl lg:text-6xl"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Frequently Asked <span className="font-normal text-amber-100">Questions</span>
    </motion.h2>
    
    <div className="relative">
      <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-amber-500 opacity-20 mix-blend-overlay filter blur-xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-amber-700 opacity-20 mix-blend-overlay filter blur-xl animate-pulse animation-delay-2000"></div>
      
      <div className="relative">
        <Accordion />
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

      {/* Contact Section */}
      <section ref={el => sectionRefs.current[4] = el} className="relative py-32 overflow-hidden bg-black">
  <div className="absolute inset-0 opacity-10 bg-[url('/textures/luxury-pattern.png')]"></div>
  
  <div className="container relative z-10 max-w-6xl px-4 mx-auto">
    <motion.h2 
      className="mb-24 text-4xl font-light text-center text-gray-100 uppercase tracking-[0.2em] md:text-5xl lg:text-6xl"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Get in <span className="font-normal text-amber-100">Touch</span>
    </motion.h2>

    <motion.p 
      className="max-w-2xl mx-auto mb-16 text-lg text-center text-gray-300"
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
            className="block p-8 transition-all duration-300 bg-gray-900 bg-opacity-50 border rounded-lg border-amber-900/30 hover:bg-amber-900/10 group"
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl transition-colors duration-300 rounded-full text-amber-400 bg-gradient-to-r from-amber-700 to-amber-900 group-hover:text-amber-200">
              <item.icon />
            </div>
            <h3 className="mb-2 text-xl font-light tracking-wider text-center uppercase text-amber-100">{item.text}</h3>
            <p className="text-center text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
              {item.description}
            </p>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>

  <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-amber-500 opacity-20 mix-blend-overlay filter blur-xl animate-pulse"></div>
  <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-amber-700 opacity-20 mix-blend-overlay filter blur-xl animate-pulse animation-delay-2000"></div>

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
    </div>
  );
};

export default Home;
                
