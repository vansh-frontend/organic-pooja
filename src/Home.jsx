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
          <section className="py-16 bg-gray-100" ref={(el) => (sectionRefs.current[0] = el)}>
            <div className="container px-6 mx-auto text-center">
              <h2 className="mb-12 text-3xl font-semibold text-gray-800">Explore Our Services</h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Service 1 */}
                <div className="p-6 transition-transform transform bg-white rounded-lg shadow-md hover:scale-105">
                  <img src="img/section.jpg" alt="Makeup Services" className="object-cover w-full h-48 mb-4 rounded-lg" />
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">Makeup Services</h3>
                  <p className="mb-4 text-gray-600">Expert makeup services for all occasions.</p>
                  <Link to="/makeupservices" className="text-teal-500 hover:text-teal-600">Book Now</Link>
                </div>
                {/* Service 2 */}
                <div className="p-6 transition-transform transform bg-white rounded-lg shadow-md hover:scale-105">
                  <img src="img/skin.jpg" alt="Skin Care" className="object-cover w-full h-48 mb-4 rounded-lg" />
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">Skin Care</h3>
                  <p className="mb-4 text-gray-600">Advanced skincare treatments for glowing skin.</p>
                  <Link to="/skincare" className="text-teal-500 hover:text-teal-600">Book Now</Link>
                </div>
                {/* Service 3 */}
                <div className="p-6 transition-transform transform bg-white rounded-lg shadow-md hover:scale-105">
                  <img src="img/hair.png" alt="Hair Styling" className="object-cover w-full h-48 mb-4 rounded-lg" />
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">Hair Styling</h3>
                  <p className="mb-4 text-gray-600">Professional hair styling services for every look.</p>
                  <Link to="/hairstyling" className="text-teal-500 hover:text-teal-600">Book Now</Link>
                </div>
                {/* Service 4 */}
                <div className="p-6 transition-transform transform bg-white rounded-lg shadow-md hover:scale-105">
                  <img src="img/sec2.jpg" alt="Salon Products" className="object-cover w-full h-48 mb-4 rounded-lg" />
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">Salon Products</h3>
                  <p className="mb-4 text-gray-600">Top-quality products for your salon needs.</p>
                  <Link to="/salonproducts" className="text-teal-500 hover:text-teal-600">Shop Now</Link>
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
        </div>
 
    </>
  );
};

export default Home;
