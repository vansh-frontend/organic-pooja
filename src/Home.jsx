import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Accordion from './components/Accordion';
import { FaLeaf, FaStar, FaHeart, FaGift, FaRegClock, FaHandsHelping, FaHandSparkles, FaShieldAlt, FaUsers, FaPhone, FaEnvelope, FaStarHalfAlt,FaComments } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

import './Home.css';

const Home = () => {
  const sectionRefs = useRef([]);
  const [scrollDirection, setScrollDirection] = useState(null);
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

  return (
    <div className="relative w-full overflow-hidden bg-gray-50">
      {/* Organic By Pooja Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8">
  {/* Background elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
    <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-32 left-20 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center">
    {/* Content */}
    <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0">
      <span className="inline-block px-4 py-2 bg-emerald-200 text-emerald-800 rounded-full text-sm font-semibold tracking-wide mb-6 shadow-md transform hover:scale-105 transition-transform duration-300">
        100% Natural & Organic
      </span>
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 leading-tight mb-6 animate-gradient">
        <span className="block">ORGANIC</span>
        <span className="block">BY POOJA</span>
      </h1>
      <p className="text-xl text-emerald-800 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed">
        Elevate your skincare routine with our premium body and facial products, crafted with nature's finest ingredients.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <a 
          href="/products" 
          className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold hover:from-emerald-600 hover:to-teal-600 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Shop Now
        </a>
        <a 
          href="/services" 
          className="px-8 py-4 border-2 border-emerald-600 text-emerald-600 rounded-full font-semibold hover:bg-emerald-600 hover:text-white transition duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          Our Services
        </a>
      </div>
    </div>

    {/* Image - hidden on mobile, visible on md and up */}
    <div className="w-full md:w-1/2 relative hidden md:block">
      <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <img 
          src="img/section.jpg" 
          alt="Organic skincare products" 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 to-transparent opacity-50"></div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-10 -left-10 w-20 h-20 bg-gradient-to-br from-emerald-300 to-teal-400 rounded-full flex items-center justify-center animate-float shadow-lg">
        <FaLeaf className="text-white text-3xl" />
      </div>
      <div className="absolute bottom-10 -right-10 w-24 h-24 bg-gradient-to-br from-teal-400 to-green-500 rounded-full flex items-center justify-center animate-float animation-delay-2000 shadow-lg">
        <FaStar className="text-white text-4xl" />
      </div>
      <div className="absolute top-1/2 -right-5 w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center animate-pulse shadow-lg">
        <FaHeart className="text-white text-2xl" />
      </div>
    </div>
  </div>

  {/* Mobile-only decorative elements */}
  <div className="absolute top-10 left-5 w-16 h-16 bg-gradient-to-br from-emerald-300 to-teal-400 rounded-full flex items-center justify-center animate-float shadow-lg md:hidden">
    <FaLeaf className="text-white text-2xl" />
  </div>
  <div className="absolute bottom-10 right-5 w-20 h-20 bg-gradient-to-br from-teal-400 to-green-500 rounded-full flex items-center justify-center animate-float animation-delay-2000 shadow-lg md:hidden">
    <FaStar className="text-white text-3xl" />
  </div>
</section>
      {/* Services Section */}
      <section className="relative flex items-center justify-center min-h-screen px-4 py-16 bg-gradient-to-br from-teal-50 to-green-100">
  <div className="w-full mx-auto max-w-7xl">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-12 text-center"
    >
      <h2 className="mb-4 text-3xl font-extrabold text-teal-800 md:text-4xl lg:text-5xl">Our Premium Services</h2>
      <p className="max-w-2xl mx-auto text-base text-teal-600 md:text-lg lg:text-xl">Indulge in luxury and transform your look with our exclusive range of premium beauty services.</p>
    </motion.div>

    <div className="flex flex-wrap -mx-4">
      {[
        { title: 'Luxury Makeup', icon: '💄', desc: 'Experience red carpet-worthy looks with our high-end makeup services.', link: '/makeup' },
        { title: 'Advanced Skin Care', icon: '✨', desc: 'Rejuvenate your skin with cutting-edge treatments and premium products.', link: '/skin-care' },
        { title: 'Couture Hair Styling', icon: '💇‍♀️', desc: 'Get runway-ready hair with our expert styling and coloring services.', link: '/hair-styling' },
        { title: 'Exclusive Product Line', icon: '🛍️', desc: 'Shop our curated collection of luxury beauty and skincare products.', link: '/products' },
        { title: 'VIP Beauty Masterclass', icon: '👩‍🏫', desc: 'Learn from industry experts in our exclusive beauty workshops.', link: '/masterclass' },
        { title: 'Bespoke Nail Artistry', icon: '💅', desc: 'Elevate your style with our custom nail designs and premium extensions.', link: '/nail-art' },
      ].map((service, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="w-full px-4 mb-8 sm:w-1/2 lg:w-1/3"
        >
          <div className="flex flex-col h-full p-6 transition-all duration-300 bg-white border-2 border-teal-200 rounded-lg hover:border-teal-400 hover:shadow-lg">
            <div className="flex items-center mb-4">
              <span className="mr-4 text-4xl">{service.icon}</span>
              <h3 className="text-xl font-bold text-teal-800">{service.title}</h3>
            </div>
            <p className="flex-grow mb-4 text-teal-600">{service.desc}</p>
            <Link 
              to={service.link} 
              className="inline-block px-4 py-2 mt-auto text-sm font-semibold text-teal-600 transition-all duration-300 border-b-2 border-teal-600 hover:text-teal-800 hover:border-teal-800"
            >
              Learn More →
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
      {/* About Us Section */}
      <section className="py-24 overflow-hidden bg-gradient-to-b from-white to-teal-50">
  <div className="min-h-screen p-4 sm:p-8 bg-gradient-to-br from-teal-50 to-green-100">
    <div className="mx-auto max-w-7xl">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-4xl font-extrabold leading-tight text-center text-teal-800 sm:text-5xl md:text-6xl"
      >
        Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-600">Organic by Pooja</span>
      </motion.h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative p-6 transition-all duration-300 transform bg-white shadow-2xl sm:p-8 rounded-3xl hover:rotate-0 group"
          style={{ transform: 'rotate(-2deg)' }}
        >
          <div className="absolute top-0 left-0 w-20 h-20 transition-transform duration-300 -translate-x-1/2 -translate-y-1/2 bg-teal-400 rounded-full opacity-20 group-hover:scale-150"></div>
          <h2 className="mb-6 text-3xl font-bold text-teal-700 sm:text-4xl">Our Story</h2>
          <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
            Founded in 2019, Organic by Pooja embarked on a mission to revolutionize skincare with natural, homemade solutions. Our journey from a small initiative to a trusted name in personalized care is a testament to our unwavering commitment to authenticity and quality.
          </p>
          <div className="absolute bottom-0 right-0 w-16 h-16 transition-transform duration-300 translate-x-1/2 translate-y-1/2 bg-green-400 rounded-full opacity-20 group-hover:scale-150"></div>
        </motion.div>

        <div className="space-y-4 sm:space-y-6">
          {['Values', 'Services', 'Testimonials'].map((section) => (
            <motion.button
              key={section}
              whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 sm:py-5 px-6 sm:px-8 rounded-2xl text-lg sm:text-xl font-semibold transition-all duration-300 ${
                activeSection === section 
                  ? 'bg-gradient-to-r from-teal-500 to-green-500 text-white shadow-lg' 
                  : 'bg-white text-teal-600 hover:bg-teal-50'
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
            className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 sm:mt-16"
          >
            {values.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotate: 2, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                className={`p-6 sm:p-8 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-${item.color}-50 hover:to-${item.color}-100`}
              >
                <item.icon className={`text-5xl sm:text-6xl mb-4 sm:mb-6 text-${item.color}-500`} />
                <p className={`text-lg sm:text-xl font-semibold text-${item.color}-700 text-center`}>{item.text}</p>
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
            className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 sm:mt-16"
          >
            {services.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                className={`p-8 sm:p-10 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-${item.color}-50 hover:to-${item.color}-100`}
              >
                <item.icon className={`text-6xl sm:text-7xl mb-4 sm:mb-6 text-${item.color}-500`} />
                <p className={`text-xl sm:text-2xl font-semibold text-${item.color}-700 text-center`}>{item.text}</p>
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
            className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 sm:mt-16"
          >
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                className="flex flex-col justify-between h-full p-6 transition-all duration-300 bg-white shadow-lg sm:p-8 rounded-2xl hover:bg-gradient-to-br hover:from-teal-50 hover:to-green-100"
              >
                <div>
                  <p className="mb-4 text-base italic text-gray-600 sm:mb-6 sm:text-lg">"{item.text}"</p>
                  <p className="text-lg font-semibold text-teal-700 sm:text-xl">{item.name}</p>
                </div>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={`${i < item.rating ? 'text-yellow-400' : 'text-gray-300'} text-xl sm:text-2xl mr-1`} />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>
</section>

      {/* Testimonials Section */}
      <section className="py-24 overflow-hidden bg-gradient-to-br from-teal-50 to-green-100">
  <div className="container px-4 mx-auto">
    <motion.h2 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-16 text-4xl font-bold text-center text-teal-800 md:text-5xl"
    >
      What Our Clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-500">Love About Us</span>
    </motion.h2>
    
    <div className="relative">
      <div className="absolute top-0 left-0 w-40 h-40 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute w-40 h-40 bg-pink-300 rounded-full -bottom-8 left-20 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="relative overflow-hidden">
        <div className="flex gap-6 pb-8 scrolling-wrapper">
          {[
            { name: 'Eshita Arora', review: 'The organic products are amazing, and the treatments are top-notch. I feel rejuvenated every time!', img: 'img/sec2.jpg', rating: 5 },
            { name: 'Kanika', review: 'Excellent service and great quality products. Highly recommend for anyone looking to elevate their skincare routine.', img: 'img/sec2.jpg', rating: 4.5 },
            { name: 'Nandini Pathak', review: 'Professional staff and fantastic results. The best salon experience I have ever had!', img: 'img/sec2.jpg', rating: 4 },
            { name: 'Kavita Bhalla', review: 'The organic products are amazing, and the treatments are top-notch. I feel rejuvenated every time!', img: 'img/sec2.jpg', rating: 5 },
            { name: 'Anjali Sharma', review: 'Excellent service and great quality products. Highly recommend for anyone looking to elevate their skincare routine.', img: 'img/sec2.jpg', rating: 4.5 },
            { name: 'Varsha Agarwal', review: 'Professional staff and fantastic results. The best salon experience I have ever had!', img: 'img/sec2.jpg', rating: 4 },
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
              className="flex-shrink-0 p-6 transition-all duration-300 bg-white shadow-xl w-80 rounded-2xl hover:shadow-2xl"
            >
              <div className="flex items-center mb-4">
                <img src={testimonial.img} alt={testimonial.name} className="w-16 h-16 mr-4 border-2 border-teal-500 rounded-full"/>
                <div>
                  <p className="font-semibold text-teal-800">{testimonial.name}</p>
                  <div className="flex items-center">
                    {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                      <FaStar key={i} className="text-sm text-yellow-400"/>
                    ))}
                    {testimonial.rating % 1 !== 0 && <FaStarHalfAlt className="text-sm text-yellow-400"/>}
                  </div>
                </div>
              </div>
              <p className="mb-4 text-sm italic text-gray-600">{testimonial.review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
      {/* FAQ Section */}
      <section className="py-16 bg-white" ref={(el) => (sectionRefs.current[7] = el)}>
        <div className="container px-6 mx-auto">
          <h2 className="mb-8 text-3xl font-semibold text-center text-gray-800">Frequently Asked Questions</h2>
          <Accordion />
        </div>
      </section>

      {/* Contact Section */}
      <section ref={el => sectionRefs.current[4] = el} className="relative py-24 overflow-hidden bg-gradient-to-br from-teal-900 to-green-900">
  {/* Animated background */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,...')] animate-slide"></div>
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>

  <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-16 text-center"
    >
      <h2 className="mb-4 text-5xl font-extrabold tracking-tight text-white">
        Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-400">Touch</span>
      </h2>
      <p className="max-w-2xl mx-auto text-xl text-teal-100">
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
            className="block p-8 transition-all duration-300 transform bg-white/10 backdrop-filter backdrop-blur-lg rounded-2xl hover:bg-white/20 hover:scale-105 group"
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white rounded-full bg-gradient-to-r from-teal-500 to-green-500 group-hover:animate-bounce">
              <item.icon />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">{item.text}</h3>
            <p className="text-teal-200 transition-colors duration-300 group-hover:text-white">
              Click to {item.text.toLowerCase()}
            </p>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Decorative elements */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden">
  </div>
</section>
    </div>
  );
};

export default Home;
                