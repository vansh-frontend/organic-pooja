import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Accordion from './components/Accordion';
import './Home.css'; // Keep external CSS if needed

const Home = () => {
  const sectionRefs = useRef([]);
  const [scrollDirection, setScrollDirection] = useState(null);


  // Track scroll direction
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

  // IntersectionObserver to animate content on scroll
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

  // Handle loader
 
  return (
    <>
   
        <div className="relative w-full overflow-hidden bg-gray-50">
          {/* Organic By Pooja Section */}
          <section className="relative flex flex-col items-center justify-start h-auto px-6 py-8 overflow-hidden text-white bg-teal-500 lg:px-12 lg:py-12">
  <div className="absolute inset-0">
    <img
      src="img/section.jpg"
      alt="Background"
      className="object-cover w-full h-full opacity-30"
    />
  </div>
  <div className="relative z-10 flex flex-col items-center space-y-4 text-center lg:space-y-6">
    <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
      ORGANIC <span className="block text-5xl font-bold text-yellow-300 sm:text-6xl lg:text-7xl">BY POOJA</span>
    </h1>
    
    <p className="text-lg sm:text-xl lg:text-2xl">
      Elevate your skincare routine with our premium body and facial products.
    </p>
    
    <div className="flex flex-col gap-4 mt-4 sm:flex-row sm:gap-6">
      <button className="px-8 py-3 text-lg font-semibold text-gray-800 transition-transform transform bg-yellow-500 rounded-lg shadow-lg hover:scale-105">
        SHOP NOW
      </button>
      <button className="px-8 py-3 text-lg font-semibold text-yellow-500 transition-transform transform border border-yellow-500 rounded-lg shadow-lg hover:bg-yellow-500 hover:text-gray-800 hover:scale-105">
        ASK US ANYTHING
      </button>
    </div>
  </div>
</section>

          {/* Services Section */}
          <section className="px-6 py-16 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="mb-12 text-3xl font-bold text-gray-800 sm:text-4xl">Our Premium Services</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Makeup Services', img: 'img/section.jpg', desc: 'Get stunning makeup looks for any occasion with our professional services.', link: '/makeup' },
              { title: 'Skin Care', img: 'img/skin.jpg', desc: 'Achieve radiant skin with our specialized skincare treatments and products.', link: '/skin-care' },
              { title: 'Hair Styling', img: 'img/shampoo.jpg', desc: 'Transform your look with our expert hair styling services.', link: '/hair-styling' },
              { title: 'Salon Products', img: 'img/sec2.jpg', desc: 'Explore our exclusive range of salon-quality products.', link: '/products' },
              { title: 'Salon Masterclass', img: 'img/sec3.jpg', desc: 'Pamper yourself with our luxurious body treatments.', link: '/body-treatments' },
              { title: ' Nail extension', img: 'img/pro5.jpg', desc: 'Book a consultation to get personalized beauty advice and recommendations.', link: '/consultations' },
            ].map((service, index) => (
              <div key={index} className="overflow-hidden transition-transform transform bg-white rounded-lg shadow-lg hover:scale-105">
                <img src={service.img} alt={service.title} className="object-cover w-full h-48"/>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">{service.title}</h3>
                  <p className="mb-4 text-gray-600">{service.desc}</p>
                  <Link to={service.link} className="font-semibold text-teal-500 hover:text-teal-600">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
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
          { name: 'Jane Doe', review: '“The organic products are amazing, and the treatments are top-notch. I feel rejuvenated every time!”', img: 'img/jane.jpg' },
          { name: 'John Smith', review: '“Excellent service and great quality products. Highly recommend for anyone looking to elevate their skincare routine.”', img: 'img/john.jpg' },
          { name: 'Emily Davis', review: '“Professional staff and fantastic results. The best salon experience I have ever had!”', img: 'img/emily.jpg' },
          { name: 'Jane Doe', review: '“The organic products are amazing, and the treatments are top-notch. I feel rejuvenated every time!”', img: 'img/jane.jpg' },
          { name: 'John Smith', review: '“Excellent service and great quality products. Highly recommend for anyone looking to elevate their skincare routine.”', img: 'img/john.jpg' },
          { name: 'Emily Davis', review: '“Professional staff and fantastic results. The best salon experience I have ever had!”', img: 'img/emily.jpg' },
        ].map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col items-center flex-shrink-0 w-full max-w-xs p-4 bg-gray-100 rounded-lg shadow-lg cursor-pointer testimonial-box sm:p-6 sm:max-w-sm lg:max-w-md"
          >
            <img src={testimonial.img} alt={testimonial.name} className="w-20 h-20 mb-4 rounded-full sm:w-24 sm:h-24"/>
            <p className="mb-4 text-sm text-gray-600 sm:text-base">"{testimonial.review}"</p>
            <p className="text-sm font-semibold text-gray-800 sm:text-base">{testimonial.name}</p>
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
          <section className="px-6 py-16 text-white bg-teal-500">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold sm:text-4xl">Get in Touch</h2>
          <p className="mb-8 text-lg">We'd love to hear from you! Reach out to us for any inquiries or to schedule an appointment.</p>
          <Link
            to="/contact"
            className="px-6 py-3 font-semibold text-gray-800 transition-transform transform bg-yellow-500 rounded-lg shadow-lg hover:bg-yellow-600 hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </section>

        </div>
 
    </>
  );
};

export default Home;
