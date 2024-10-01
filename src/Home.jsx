import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Accordion from './components/Accordion';
import { FaLeaf, FaStar, FaHeart, FaGift, FaRegClock, FaHandsHelping, FaHandSparkles, FaShieldAlt, FaUsers, FaPhone, FaEnvelope, FaStarHalfAlt } from 'react-icons/fa';
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
            className="my-8 font-serif text-6xl font-bold tracking-tight text-emerald-900 sm:text-7xl md:text-8xl lg:text-9xl"
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
            className="max-w-3xl mx-auto mb-12 text-xl font-medium text-emerald-800 sm:text-2xl md:text-3xl"
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
            <motion.a 
              href="#shop" 
              className="w-full px-10 py-5 text-xl font-bold text-white transition duration-300 rounded-full shadow-2xl bg-gradient-to-r from-emerald-500 to-teal-600 sm:w-auto hover:from-emerald-600 hover:to-teal-700 focus:outline-none focus:ring-4 focus:ring-emerald-500 focus:ring-offset-4"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(16, 185, 129, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Now
            </motion.a>
            <motion.a 
              href="#contact" 
              className="w-full px-10 py-5 text-xl font-bold transition duration-300 bg-transparent border-2 rounded-full shadow-2xl text-emerald-600 border-emerald-600 sm:w-auto hover:bg-emerald-50 focus:outline-none focus:ring-4 focus:ring-emerald-500 focus:ring-offset-4 backdrop-blur-sm"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(16, 185, 129, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-0 left-0 w-full"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <svg viewBox="0 0 1440 320" className="w-full h-auto">
            <motion.path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,154.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              initial={{ pathLength: 0, pathOffset: 1 }}
              animate={{ pathLength: 1, pathOffset: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="absolute inset-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-0 w-full h-auto">
            <path fill="#e2e8f0" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>

        <div className="container relative z-10 px-6 mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-4xl font-bold text-center text-gray-800 sm:text-5xl"
          >
            Our Premium Services
          </motion.h2>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Makeup Services', img: 'img/section.jpg', desc: 'Get stunning makeup looks for any occasion with our professional services.', link: '/makeup' },
              { title: 'Skin Care', img: 'img/skin.jpg', desc: 'Achieve radiant skin with our specialized skincare treatments and products.', link: '/skin-care' },
              { title: 'Hair Styling', img: 'img/shampoo.jpg', desc: 'Transform your look with our expert hair styling services.', link: '/hair-styling' },
              { title: 'Salon Products', img: 'img/sec2.jpg', desc: 'Explore our exclusive range of salon-quality products.', link: '/products' },
              { title: 'Salon Masterclass', img: 'img/sec3.jpg', desc: 'Pamper yourself with our luxurious body treatments.', link: '/body-treatments' },
              { title: 'Nail Extension', img: 'img/pro5.jpg', desc: 'Book a consultation to get personalized beauty advice and recommendations.', link: '/consultations' },
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative overflow-hidden transition-all duration-300 bg-white shadow-xl rounded-2xl hover:shadow-2xl group"
              >
                <div className="absolute top-0 right-0 z-10 p-2 m-2 text-xs font-semibold text-white bg-teal-500 rounded-full">
                  Popular
                  </div>
                <div className="relative overflow-hidden">
                  <img src={service.img} alt={service.title} className="object-cover w-full h-64 transition-transform duration-300 transform group-hover:scale-110"/>
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black to-transparent group-hover:opacity-70"></div>
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-2xl font-semibold text-gray-800">{service.title}</h3>
                  <p className="mb-4 text-gray-600">{service.desc}</p>
                  <Link 
                    to={service.link} 
                    className="inline-block px-6 py-2 font-semibold text-white transition-colors duration-300 bg-teal-500 rounded-full hover:bg-teal-600"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute left-0 w-32 h-32 -translate-x-1/2 bg-teal-100 rounded-full top-1/4 opacity-20"></div>
        <div className="absolute right-0 w-40 h-40 translate-x-1/2 bg-yellow-100 rounded-full bottom-1/4 opacity-20"></div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gradient-to-b from-white to-teal-50">
        <div className="min-h-screen p-8 bg-gradient-to-br from-teal-50 to-green-100">
          <div className="mx-auto max-w-7xl">
            <motion.h1 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12 text-6xl font-extrabold text-center text-teal-800"
            >
              About Organic by Pooja
            </motion.h1>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-8 transform bg-white shadow-2xl rounded-3xl -rotate-3"
              >
                <h2 className="mb-4 text-3xl font-bold text-teal-700">Our Story</h2>
                <p className="leading-relaxed text-gray-600">
                  Founded in 2019, Organic by Pooja has been on a mission to provide natural, homemade solutions for skin and hair that heal and nourish from within. Our journey from a small initiative to a trusted name in personalized care is a testament to our commitment to authenticity and quality.
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
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-12 text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">What Our Clients Say</h2>
          <div className="relative overflow-hidden">
            <div className="flex gap-4 scrolling-wrapper md:gap-6 lg:gap-8">
              {[
                { name: 'Eshita Arora', review: '"The organic products are amazing, and the treatments are top-notch. I feel rejuvenated every time!"', img: 'img/sec2.jpg', rating: 5 },
                { name: 'Kanika', review: '"Excellent service and great quality products. Highly recommend for anyone looking to elevate their skincare routine."', img: 'img/sec2.jpg', rating: 4.5 },
                { name: 'Nandini Pathak', review: '"Professional staff and fantastic results. The best salon experience I have ever had!"', img: 'img/sec2.jpg', rating: 4 },
                { name: 'Kavita Bhalla', review: '"The organic products are amazing, and the treatments are top-notch. I feel rejuvenated every time!"', img: 'img/sec2.jpg', rating: 5 },
                { name: 'Anjali Sharma', review: '"Excellent service and great quality products. Highly recommend for anyone looking to elevate their skincare routine."', img: 'img/sec2.jpg', rating: 4.5 },
                { name: 'Varsha Agarwal', review: '"Professional staff and fantastic results. The best salon experience I have ever had!"', img: 'img/sec2.jpg', rating: 4 },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center flex-shrink-0 w-full max-w-xs p-4 bg-gray-100 rounded-lg shadow-lg cursor-pointer testimonial-box sm:p-6 sm:max-w-sm lg:max-w-md"
                >
                  <img src={testimonial.img} alt={testimonial.name} className="w-20 h-20 mb-4 rounded-full sm:w-24 sm:h-24"/>
                  <p className="mb-4 text-sm text-gray-600 sm:text-base">"{testimonial.review}"</p>
                  <p className="text-sm font-semibold text-gray-800 sm:text-base">{testimonial.name}</p>
                  
                  {/* Star Rating */}
                  <div className="flex items-center mt-2">
                    {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500"/>
                    ))}
                    {testimonial.rating % 1 !== 0 && <FaStarHalfAlt className="text-yellow-500"/>}
                  </div>
                </div>
              ))}
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
      <section ref={el => sectionRefs.current[4] = el} className="py-16 text-white bg-teal-500">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">Get in Touch</h2>
          <p className="mb-8 text-xl">We'd love to hear from you! Reach out for inquiries or to book an appointment.</p>
          <div className="flex flex-col items-center justify-center mb-8 space-y-4 md:flex-row md:space-y-0 md:space-x-8">
            <a href="tel:+1234567890" className="flex items-center justify-center w-full px-6 py-3 text-lg font-semibold text-teal-500 transition duration-300 bg-white rounded-full md:w-auto hover:bg-yellow-400">
              <FaPhone className="mr-2" /> Call Us
            </a>
            <a href="mailto:info@organicbypooja.com" className="flex items-center justify-center w-full px-6 py-3 text-lg font-semibold text-teal-500 transition duration-300 bg-white rounded-full md:w-auto hover:bg-yellow-400">
              <FaEnvelope className="mr-2" /> Email Us
            </a>
          </div>
          <Link to="/contact" className="inline-block px-8 py-3 text-lg font-semibold text-teal-500 transition duration-300 bg-white rounded-full hover:bg-yellow-400">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
                