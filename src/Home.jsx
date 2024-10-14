import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Accordion from './components/Accordion';
import { FaLeaf, FaStar, FaHeart, FaGift, FaRegClock, FaHandsHelping, FaHandSparkles, FaShieldAlt, FaUsers, FaPhone, FaEnvelope, FaComments, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

import './Home.css';

const Home = () => {
  const sectionRefs = useRef([]);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const testimonialRef = useRef(null);

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
    { name: 'ESHITA ARORA', review: 'The organic products are amazing, and the treatments are top-notch. I feel rejuvenated every time!', img: 'img/sec2.jpg', rating: 5 },
    { name: 'KANIKA', review: 'Excellent service and great quality products. Highly recommend for anyone looking to elevate their skincare routine.', img: 'img/sec2.jpg', rating: 4.5 },
    { name: 'NANDINI PATHAK', review: 'Professional staff and fantastic results. The best salon experience I have ever had!', img: 'img/sec2.jpg', rating:5 },
    { name: 'KAVITA BHALLA', review: 'The organic products are amazing, and the treatments are top-notch. I feel rejuvenated every time!', img: 'img/sec2.jpg', rating: 5 },
    { name: 'ANJALI SHARMA', review: 'Excellent service and great quality products. Highly recommend for anyone looking to elevate their skincare routine.', img: 'img/sec2.jpg', rating: 4.5 },
    { name: 'VARSHA AGARWAL', review: 'Professional staff and fantastic results. The best salon experience I have ever had!', img: 'img/sec2.jpg', rating: 4 },
  ];

  useEffect(() => {
    let lastScrollTop = window.pageYOffset;

    const handleScroll = () => {
      let currentScrollTop = window.pageYOffset;
      setScrollDirection(currentScrollTop < lastScrollTop ? 'up' : 'down');
      lastScrollTop = currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = sectionRefs.current;
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!entry.target.classList.contains('already-visible')) {
            entry.target.classList.add(scrollDirection === 'up' ? 'content-visible' : 'content-visible-right');
            entry.target.classList.add('already-visible');
          }
        } else {
          entry.target.classList.remove('already-visible');
        }
      });
    });
  
    sections.forEach((section) => {
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
  }, [scrollDirection]);

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

  const scrollTestimonials = (direction) => {
    if (testimonialRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      testimonialRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };


  return (
    <div className="relative w-full overflow-hidden bg-gray-50">
      {/* Organic By Pooja Section */}
      <section className="relative min-h-screen overflow-hidden text-white bg-black">
  {/* Background image with overlay */}
  <motion.div 
    className="absolute inset-0 z-0"
    initial={{ scale: 1.2, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1.5 }}
  >
    <img 
      src="/img/combo.jpg" 
      alt="Elegant Spa Background" 
      className="object-cover w-full h-full"
    />
    <div className="absolute inset-0 bg-black opacity-60"></div>
    <div className="absolute inset-0 opacity-75 bg-gradient-to-r from-black via-transparent to-black"></div>
  </motion.div>

  <div className="container relative z-10 flex flex-col justify-center min-h-screen px-4 py-16 mx-auto">
    <div className="max-w-3xl">
      <motion.h1 
        className="mb-6 text-4xl font-light md:text-5xl lg:text-6xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Discover the essence of <br />
        <span className="relative inline-block mt-2">
          <span className="font-bold tracking-wide text-white font-playfair">
            Organic
          </span>
          <span className="mx-2 font-bold tracking-wider text-white bold font-playfair">
            By
          </span>
          <span className="font-bold tracking-wide text-white font-playfair">
            Pooja
          </span>
        </span>
      </motion.h1>
      
      <motion.p 
        className="mb-12 text-xl text-gray-100 md:text-2xl font-poppins"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        Elevate your natural beauty with our bespoke organic treatments and premium skincare solutions.
      </motion.p>

      <motion.div
        className="space-x-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <a 
          href="/services" 
          className="inline-block px-8 py-3 text-sm tracking-wider uppercase transition duration-300 border border-white hover:bg-white hover:text-black"
        >
          Explore Our Services
        </a>
        <a 
          href="/Products" 
          className="inline-block px-8 py-3 text-sm tracking-wider uppercase hover:underline"
        >
          Our Products
        </a>
      </motion.div>
    </div>

    {/* Added feature highlights - hidden on phones and vertical devices */}
    <motion.div 
      className="hidden grid-cols-1 gap-12 mt-16 md:grid md:grid-cols-3"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.1 }}
    >
      {['Natural Ingredients', 'Personalized Care', 'Sustainable Beauty'].map((feature, index) => (
        <motion.div 
          key={index} 
          className="text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-white to-transparent bg-opacity-20"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-3xl">✦</span>
          </motion.div>
          <h3 className="mb-3 text-xl font-light tracking-wide">{feature}</h3>
          <p className="text-sm leading-relaxed text-gray-100">
            Experience the difference with our commitment to {feature.toLowerCase()}.
          </p>
        </motion.div>
      ))}
    </motion.div>
  </div>

  {/* Subtle animated element */}
  <motion.div
    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent"
    animate={{
      scaleX: [1, 1.5, 1],
      opacity: [0.3, 0.6, 0.3]
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />

  {/* Added decorative elements */}
  <motion.div
    className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20"
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, 90, 0],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
  <motion.div
    className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20"
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, -90, 0],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
</section>
      {/* Services Section */}

 {/* Services Section */}
 <section className="relative min-h-screen overflow-hidden text-white bg-black">
  <motion.div 
    className="absolute inset-0 z-0"
    initial={{ scale: 1.2, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1.5 }}
  >
    <div className="absolute inset-0 opacity-75 bg-gradient-to-r from-black via-transparent to-black"></div>
  </motion.div>

  <div className="container relative z-10 flex flex-col justify-center min-h-screen px-4 py-16 mx-auto">
    <motion.div
      className="mb-12 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2 
        className="mb-4 text-3xl font-light md:text-4xl lg:text-5xl"
      >
        Our Premium <span className="font-semibold">Services</span>
      </motion.h2>
      <motion.p
        className="text-lg text-gray-300 md:text-xl lg:text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Indulge in luxury and transform your look
      </motion.p>
    </motion.div>

    <motion.div 
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      {[
        { title: 'LUXURY MAKEUP', desc: 'Elevate your look with our high-end makeup services.' },
        { title: 'ADVANCED SKIN CARE', desc: 'Rejuvenate your skin with cutting-edge treatments.' },
        { title: 'COUTURE HAIR STYLING', desc: 'Achieve runway-ready hair with our expert stylists.' },
        { title: 'EXCLUSIVE PRODUCT LINE', desc: 'Experience our curated collection of luxury products.' },
        { title: 'VIP BEAUTY MASTERCLASS', desc: 'Learn from industry experts in exclusive workshops.' },
        { title: 'BESPOKE NAIL ARTISTRY', desc: 'Indulge in custom nail designs and premium care.' },
      ].map((service, index) => (
        <motion.div 
          key={index}
          className="relative p-4 bg-white rounded-lg sm:p-6 bg-opacity-10 backdrop-filter backdrop-blur-sm group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
        >
          <h3 className="mb-2 text-base font-light tracking-widest text-white sm:text-lg">{service.title}</h3>
          <p className="mb-4 text-sm font-light text-gray-300">{service.desc}</p>
          <a 
            href="#" 
            className="text-sm font-light tracking-wider text-white uppercase transition-colors duration-300 hover:text-gray-300"
          >
            Learn more
          </a>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
        </motion.div>
      ))}
    </motion.div>
  </div>

  <motion.div
    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent"
    animate={{
      scaleX: [1, 1.5, 1],
      opacity: [0.3, 0.6, 0.3]
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
</section>


{/* Product Section */}
<section className="relative py-24 overflow-hidden text-white bg-black">
  <div className="absolute inset-0 opacity-5">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
      <path fill="#ffffff" fillOpacity="0.4" d="M14 16H9v-2h5V9h2v5h5v2h-5v5h-2v-5zM64 62v2h-5v5h-2v-5h-5v-2h5v-5h2v5h5zm-32 0v2h-5v5h-2v-5h-5v-2h5v-5h2v5h5zm0-48v2h-5v5h-2v-5h-5v-2h5V9h2v5h5z"></path>
    </svg>
  </div>
  
  <div className="container relative z-10 px-4 mx-auto max-w-7xl">
    <motion.div
      className="mb-12 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2 
        className="mb-4 text-3xl font-light md:text-4xl lg:text-5xl"
      >
        Our Featured <span className="font-semibold">Products</span>
      </motion.h2>
      <motion.p
        className="text-lg text-gray-300 md:text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Discover our handpicked selection of organic beauty essentials
      </motion.p>
    </motion.div>

    <motion.div 
      className="grid grid-cols-1 gap-6 mb-12 sm:grid-cols-2 lg:grid-cols-3"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      {[
        { name: "Organic Face Serum", price: "₹999", image: "/img/Hair Oil.jpg" },
        { name: "Natural Hair Oil", price: "₹799", image: "/img/faceserum.jpg" },
        { name: "Herbal Body Lotion", price: "₹699", image: "/img/body lotion.jpg" },
        { name: "Organic Skin Toner", price: "₹999", image: "/img/skin toner.jpg" },
        { name: "Natural Hair Conditioner", price: "₹799", image: "/img/hair conditioner.jpg" },
        { name: "Combo Pack", price: "₹699", image: "/img/combo 1.jpg" },
      ].map((product, index) => (
        <motion.div 
          key={index}
          className="flex flex-col overflow-hidden transition-all duration-300 border border-white rounded-lg bg-opacity-10 backdrop-filter backdrop-blur-sm hover:bg-white hover:bg-opacity-5"
          whileHover={{ scale: 1.03 }}
        >
          <div className="relative flex-shrink-0 h-48 sm:h-56 md:h-64">
            <img src={product.image} alt={product.name} className="absolute object-cover w-full h-full" />
          </div>
          <div className="flex flex-col flex-grow p-4">
            <h3 className="mb-2 text-lg font-light sm:text-xl">{product.name}</h3>
            <p className="mb-4 text-base font-semibold text-gray-100 sm:text-lg">{product.price}</p>
            <button className="px-4 py-2 mt-auto text-sm font-light tracking-wider text-black transition-all duration-300 bg-white rounded-full hover:bg-opacity-80">
              View Details
            </button>
          </div>
        </motion.div>
      ))}
    </motion.div>

    <div className="text-center">
      <Link 
        to="/products" 
        className="inline-flex items-center px-6 py-3 text-base font-light tracking-wider text-black transition-all duration-300 bg-white rounded-full sm:px-8 sm:text-lg hover:bg-opacity-80"
      >
        View All Products
        <FaArrowRight className="ml-2" />
      </Link>
    </div>
  </div>

  {/* Subtle floating elements */}
  <motion.div
    className="absolute w-48 h-48 bg-white rounded-full sm:w-64 sm:h-64 top-1/4 left-1/4 mix-blend-overlay filter blur-3xl opacity-10"
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, 90, 180, 270, 360],
      x: ['-25%', '0%', '-25%'],
      y: ['-25%', '0%', '-25%'],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
  <motion.div
    className="absolute w-48 h-48 bg-white rounded-full sm:w-64 sm:h-64 bottom-1/4 right-1/4 mix-blend-overlay filter blur-3xl opacity-10"
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, -90, -180, -270, -360],
      x: ['25%', '0%', '25%'],
      y: ['25%', '0%', '25%'],
    }}
    transition={{
      duration: 25,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />

  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
</section>


{/* product section */}



      {/* About Us Section */}
      <section className="relative min-h-screen overflow-hidden text-white bg-black">
  <div className="absolute inset-0 opacity-5">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
      <path fill="#ffffff" fillOpacity="0.4" d="M14 16H9v-2h5V9h2v5h5v2h-5v5h-2v-5zM64 62v2h-5v5h-2v-5h-5v-2h5v-5h2v5h5zm-32 0v2h-5v5h-2v-5h-5v-2h5v-5h2v5h5zm0-48v2h-5v5h-2v-5h-5v-2h5V9h2v5h5z"></path>
    </svg>
  </div>
  
  <div className="container relative z-10 flex flex-col justify-center min-h-screen px-4 py-16 mx-auto max-w-7xl">
    <motion.div
      className="mb-16 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2 
        className="mb-4 text-4xl font-light md:text-5xl lg:text-6xl"
      >
        Discover <span className="font-semibold">Organic by Pooja</span>
      </motion.h2>
      <motion.p
        className="text-xl text-gray-300 md:text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Our journey of natural beauty and wellness
      </motion.p>
    </motion.div>

    <div className="grid gap-12 mb-16 md:grid-cols-2">
      <motion.div 
        className="flex flex-col justify-between p-8 border border-white rounded-lg bg-opacity-10 backdrop-filter backdrop-blur-sm"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div>
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
              <span className="text-2xl font-bold text-black">OP</span>
            </div>
            <h3 className="ml-4 text-3xl font-light text-white">Our Story</h3>
          </div>
          
          <div className="space-y-6">
            <p className="relative text-lg leading-relaxed text-gray-300">
              <span className="absolute top-0 text-5xl text-white opacity-30 -left-4"></span>
              Founded in <span className="font-light text-white">2019</span>, <span className="font-light text-white">ORGANIC BY POOJA</span> embarked on a mission to revolutionize skincare with natural, homemade solutions. Our journey from a small initiative to a trusted name in personalized care is a testament to our unwavering commitment to authenticity and quality.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              We believe in harnessing the power of nature to bring out your inner beauty, offering a range of organic products and services tailored to your unique needs.
            </p>
          </div>
        </div>
        
        <div className="flex justify-end mt-8">
          <div className="px-6 py-2 text-sm font-light tracking-widest text-white border border-white rounded-full">
            EST. 2019
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="relative overflow-hidden border border-white rounded-lg bg-opacity-10 backdrop-filter backdrop-blur-sm"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <img src="img/1.jpg" alt="Organic by Pooja" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h3 className="mb-4 text-2xl font-light text-white sm:text-3xl">Our Promise</h3>
          <ul className="space-y-2 text-gray-200">
            {['100% Natural Ingredients', 'Personalized Skincare Solutions', 'Eco-friendly Practices', 'Cruelty-free Products'].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <svg className="w-6 h-6 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className="font-light">{item}</span>
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
      {['VALUES', 'SERVICES', 'TESTIMONIALS'].map((section) => (
        <motion.button
          key={section}
          className="relative px-8 py-6 overflow-hidden text-lg font-light tracking-widest text-white transition-all duration-300 border border-white rounded-lg hover:bg-white hover:bg-opacity-5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          onClick={() => setActiveSection(section)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">{section}</span>
        </motion.button>
      ))}
    </motion.div>
  </div>

  {/* Subtle floating elements */}
  <motion.div
    className="absolute w-64 h-64 bg-white rounded-full top-1/4 left-1/4 mix-blend-overlay filter blur-3xl opacity-10"
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, 90, 180, 270, 360],
      x: ['-25%', '0%', '-25%'],
      y: ['-25%', '0%', '-25%'],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
  <motion.div
    className="absolute w-64 h-64 bg-white rounded-full bottom-1/4 right-1/4 mix-blend-overlay filter blur-3xl opacity-10"
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, -90, -180, -270, -360],
      x: ['25%', '0%', '25%'],
      y: ['25%', '0%', '25%'],
    }}
    transition={{
      duration: 25,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />

  {/* Modal Overlay */}
  {activeSection && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <motion.div 
        className="relative w-full max-w-4xl p-8 overflow-y-auto border border-white bg-black bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-lg shadow-2xl max-h-[90vh]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          className="absolute text-gray-400 top-4 right-4 hover:text-gray-200"
          onClick={() => setActiveSection(null)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <h3 className="mb-6 text-3xl font-light text-white">{activeSection}</h3>
        
        {activeSection === 'VALUES' && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((item, index) => (
              <motion.div 
                key={index} 
                className="p-6 transition-all duration-300 border border-white rounded-lg hover:bg-white hover:bg-opacity-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <item.icon className="mb-4 text-4xl text-white" />
                <h4 className="mb-2 text-lg font-light tracking-widest text-white">{item.text}</h4>
                <p className="text-sm text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </motion.div>
            ))}
          </div>
        )}
        {activeSection === 'SERVICES' && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item, index) => (
              <motion.div 
                key={index} 
                className="p-6 transition-all duration-300 border border-white rounded-lg hover:bg-white hover:bg-opacity-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <item.icon className="mb-4 text-4xl text-white" />
                <h4 className="mb-2 text-lg font-light tracking-widest text-white">{item.text}</h4>
                <p className="text-sm text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </motion.div>
            ))}
          </div>
        )}
        {activeSection === 'TESTIMONIALS' && (
          <div className="grid gap-8 sm:grid-cols-2">
            {testimonials.map((item, index) => (
              <motion.div 
                key={index} 
                className="p-6 transition-all duration-300 border border-white rounded-lg hover:bg-white hover:bg-opacity-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 text-black bg-white rounded-full">
                    <span className="text-xl font-bold">{item.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-light tracking-widest text-white">{item.name}</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={`${i < item.rating ? 'text-yellow-400' : 'text-gray-600'} text-sm`} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm italic text-gray-300">&ldquo;{item.text}&rdquo;</p>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  )}

  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
</section>
      {/* Testimonials Section */}
{/* Testimonials Section */}
 <section className="relative py-24 overflow-hidden text-white bg-black">
        <div className="container relative z-10 px-4 mx-auto max-w-7xl">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
                          className="mb-4 text-4xl font-light md:text-5xl lg:text-6xl"
            >
              What Our Clients <span className="font-semibold">Love About Us</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 md:text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hear from our satisfied customers about their experiences
            </motion.p>
          </motion.div>
          
          <div className="relative">
            <motion.div 
              ref={testimonialRef}
              className="flex gap-6 pb-8 overflow-x-auto scrolling-touch scrolling-wrapper"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 p-6 transition-all duration-300 border border-white rounded-lg bg-opacity-10 backdrop-filter backdrop-blur-sm w-80 hover:bg-white hover:bg-opacity-5"
                >
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 mr-3 text-black bg-white rounded-full">
                      <span className="text-lg font-bold">{testimonial.name[0]}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-light tracking-widest text-white truncate">{testimonial.name}</p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'} text-xs`} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm italic text-gray-300">{testimonial.review}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center mt-8">
            <button 
              onClick={() => scrollTestimonials('left')}
              className="p-2 mr-4 text-white transition-colors duration-300 border border-white rounded-full hover:bg-white hover:text-black"
            >
              <FaChevronLeft />
            </button>
            <button 
              onClick={() => scrollTestimonials('right')}
              className="p-2 text-white transition-colors duration-300 border border-white rounded-full hover:bg-white hover:text-black"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Subtle floating elements */}
        <motion.div
          className="absolute w-64 h-64 bg-white rounded-full top-1/4 left-1/4 mix-blend-overlay filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
            x: ['-25%', '0%', '-25%'],
            y: ['-25%', '0%', '-25%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-white rounded-full bottom-1/4 right-1/4 mix-blend-overlay filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -90, -180, -270, -360],
            x: ['25%', '0%', '25%'],
            y: ['25%', '0%', '25%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
      </section>


{/* FAQ Section */}
<section className="relative min-h-screen py-24 text-white bg-black" ref={(el) => (sectionRefs.current[7] = el)}>
  <div className="container relative z-10 px-4 mx-auto max-w-7xl">
    <motion.div
      className="mb-16 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2 
        className="mb-4 text-4xl font-light md:text-5xl lg:text-6xl"
      >
        Frequently Asked <span className="font-semibold">Questions</span>
      </motion.h2>
      <motion.p
        className="text-xl text-gray-300 md:text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Find answers to your queries about our services and products
      </motion.p>
    </motion.div>
    
    <div className="relative">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Accordion />
      </motion.div>
    </div>
  </div>

  {/* Subtle floating elements */}
  <motion.div
    className="absolute w-64 h-64 bg-white rounded-full top-1/4 left-1/4 mix-blend-overlay filter blur-3xl opacity-10"
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, 90, 180, 270, 360],
      x: ['-25%', '0%', '-25%'],
      y: ['-25%', '0%', '-25%'],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
  <motion.div
    className="absolute w-64 h-64 bg-white rounded-full bottom-1/4 right-1/4 mix-blend-overlay filter blur-3xl opacity-10"
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, -90, -180, -270, -360],
      x: ['25%', '0%', '25%'],
      y: ['25%', '0%', '25%'],
    }}
    transition={{
      duration: 25,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />

  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
</section>
 {/* Contact Section */}
 <section ref={el => sectionRefs.current[4] = el} className="relative py-24 overflow-hidden text-white bg-black">
  {/* Enhanced background pattern */}
  <div className="absolute inset-0 opacity-5">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
      <path fill="#ffffff" fillOpacity="0.4" d="M14 16H9v-2h5V9h2v5h5v2h-5v5h-2v-5zM64 62v2h-5v5h-2v-5h-5v-2h5v-5h2v5h5zm-32 0v2h-5v5h-2v-5h-5v-2h5v-5h2v5h5zm0-48v2h-5v5h-2v-5h-5v-2h5V9h2v5h5z"></path>
    </svg>
  </div>
  
  <div className="container relative z-10 px-4 mx-auto max-w-7xl">
    <motion.div
      className="mb-16 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2 
        className="mb-4 text-4xl font-light md:text-5xl lg:text-6xl"
      >
        Get in <span className="font-semibold">Touch</span>
      </motion.h2>
      <motion.p
        className="max-w-2xl mx-auto text-xl text-gray-300 md:text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        We'd love to hear from you! Reach out for inquiries or to book an appointment.
      </motion.p>
    </motion.div>

    <div className="grid gap-8 md:grid-cols-3">
      {[
        { icon: FaPhone, text: "CALL US", href: "tel:+918171924503" },
        { icon: FaEnvelope, text: "EMAIL US", href: "mailto:organicbypooja@gmail.com" },
        { icon: FaComments, text: "CONTACT US", href: "/contact" }
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link 
            to={item.href}
            className="flex flex-col items-center p-8 transition-all duration-300 border border-white rounded-lg hover:bg-white hover:bg-opacity-5 group"
          >
            <div className="flex items-center justify-center w-16 h-16 mb-4 text-3xl text-black bg-white rounded-full group-hover:animate-bounce">
              <item.icon />
            </div>
            <h3 className="mb-2 text-lg font-light tracking-widest text-white">{item.text}</h3>
            <p className="text-center text-gray-300 transition-colors duration-300 group-hover:text-white">
              Click to {item.text.toLowerCase()}
            </p>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Subtle floating elements */}
  <motion.div
    className="absolute w-64 h-64 bg-white rounded-full top-1/4 left-1/4 mix-blend-overlay filter blur-3xl opacity-10"
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, 90, 180, 270, 360],
      x: ['-25%', '0%', '-25%'],
      y: ['-25%', '0%', '-25%'],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
  <motion.div
    className="absolute w-64 h-64 bg-white rounded-full bottom-1/4 right-1/4 mix-blend-overlay filter blur-3xl opacity-10"
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, -90, -180, -270, -360],
      x: ['25%', '0%', '25%'],
      y: ['25%', '0%', '25%'],
    }}
    transition={{
      duration: 25,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />

  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
</section>
    </div>
  );
};

export default Home;
                