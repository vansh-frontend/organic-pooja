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
      <section className="relative flex flex-col items-center min-h-screen overflow-hidden font-sans bg-gradient-to-br from-emerald-50 to-teal-100">
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{ 
            background: [
              "radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.3) 0%, rgba(6, 95, 70, 0) 50%)",
              "radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.3) 0%, rgba(6, 95, 70, 0) 50%)",
              "radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.3) 0%, rgba(6, 95, 70, 0) 50%)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <motion.div className="absolute inset-0 opacity-40">
          {[...Array(5)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full mix-blend-multiply filter blur-xl"
              style={{
                background: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.4)`,
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
                scale: [1, Math.random() * 0.5 + 1, 1],
                rotate: [0, Math.random() * 360, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </motion.div>

        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full max-w-6xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.span 
              className="inline-block px-6 py-3 text-sm font-bold rounded-full shadow-lg text-emerald-800 bg-emerald-200 sm:text-base md:text-lg backdrop-blur-sm"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(16, 185, 129, 0.5)" }}
            >
              100% Natural & Organic
            </motion.span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="my-8 font-serif text-6xl font-bold tracking-tight text-emerald-900 sm:text-6xl md:text-8xl lg:text-8xl"
          >
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              ORGANIC
            </motion.span>
            <motion.span 
              className="block mt-2 text-teal-600"
            >
              BY POOJA
            </motion.span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="max-w-3xl mx-auto mb-12 text-xl font-medium text-emerald-800 sm:text-1xl md:text-2xl"
          >
            Elevate your skincare routine with our <motion.span 
              className="font-bold"
              whileHover={{ scale: 1.05, color: "#047857" }}
            >premium body and facial products</motion.span>.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col items-center justify-center w-full gap-6 mb-16 sm:flex-row sm:gap-8"
          >
          <div className="flex flex-col items-center justify-center w-full gap-6 mb-16 sm:flex-row sm:gap-8">
  <motion.a 
    href="/products" 
    className="relative w-full px-10 py-5 overflow-hidden text-xl font-bold text-white transition-all duration-300 rounded-full shadow-lg sm:w-auto group"
    style={{
      background: "linear-gradient(45deg, #10B981, #0D9488)",
      boxShadow: "0 4px 6px rgba(16, 185, 129, 0.25)"
    }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="relative z-10">Shop Now</span>
    <span className="absolute inset-0 w-full h-full transition-all duration-300 opacity-0 bg-gradient-to-r from-emerald-600 to-teal-700 group-hover:opacity-100"></span>
  </motion.a>

  <motion.a 
    href="/services" 
    className="relative w-full px-10 py-5 overflow-hidden text-xl font-bold transition-all duration-300 bg-transparent border-2 rounded-full shadow-lg sm:w-auto group text-emerald-600 border-emerald-600"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Our Services</span>
    <span className="absolute inset-0 w-full h-full transition-all duration-300 scale-x-0 bg-emerald-600 group-hover:scale-x-100"></span>
  </motion.a>
</div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-0 left-0 w-full"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="relative flex items-center justify-center min-h-screen py-16 bg-gradient-to-br from-teal-50 to-green-100">
  <div className="container px-4 mx-auto sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-12 text-center"
    >
      <h2 className="mb-4 text-4xl font-extrabold text-teal-800 sm:text-5xl">Our Premium Services</h2>
      <p className="max-w-2xl mx-auto text-lg text-teal-600 sm:text-xl">Indulge in luxury and transform your look with our exclusive range of premium beauty services.</p>
    </motion.div>

    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
          className="flex flex-col h-full p-6 transition-all duration-300 bg-white border-2 border-teal-200 rounded-lg hover:border-teal-400 hover:shadow-lg"
        >
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
      <section ref={el => sectionRefs.current[4] = el} className="relative py-24 overflow-hidden bg-black">
  {/* Animated background */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 opacity-50 bg-gradient-to-r from-teal-500 to-green-500"></div>
    <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-30 animate-slide"></div>
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
      <p className="max-w-2xl mx-auto text-xl text-gray-300">
        We'd love to hear from you! Reach out for inquiries or to book an appointment.
      </p>
    </motion.div>

    <div className="grid gap-8 md:grid-cols-3">
      {[
        { icon: FaPhone, text: "Call Us", href: "tel:+1234567890" },
        { icon: FaEnvelope, text: "Email Us", href: "mailto:info@organicbypooja.com" },
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
            className="block p-8 transition-all duration-300 transform bg-white group bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl hover:bg-opacity-20 hover:scale-105"
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white rounded-full bg-gradient-to-r from-teal-500 to-green-500 group-hover:animate-bounce">
              <item.icon />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">{item.text}</h3>
            <p className="text-gray-400 transition-colors duration-300 group-hover:text-teal-300">
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
                