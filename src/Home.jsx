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

  return (
    <div className="relative w-full py-0 overflow-hidden">
      {/* Skin Color Section */}
      <div className="bg-[#fce5cd] px-4 sm:px-6 lg:px-12 pt-0 mt-0">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-between w-full py-8 sm:flex-row">
          <div className="flex flex-col items-center w-full sm:w-1/2 animate-content">
            <h1 className="mb-4 text-6xl font-extrabold text-center uppercase fade-in">
              ORGANIC <br />
              BY POOJA
            </h1>
            <p className="mt-4 text-sm text-center text-gray-700 sm:text-base md:text-lg fade-in">
              Perfect your skin care routine
            </p>
            <p className="mt-2 text-sm text-center text-gray-700 sm:text-base md:text-lg fade-in">
              with our body and facial products.
            </p>
            <div className="flex justify-center mt-6 space-x-4">
              <button className="px-6 py-2 text-base font-semibold text-white transition-all duration-300 bg-black rounded-lg hover:bg-gray-800 shimmer">
                SHOP NOW
              </button>
              <button className="px-6 py-2 text-base font-semibold text-black transition-all duration-300 border border-black rounded-lg hover:bg-gray-200 fade-in">
                LEARN MORE
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full mt-6 sm:w-1/2 sm:mt-0">
            <img src="img/section.jpg" alt="Service Image 1" className="object-cover w-full h-48 mb-4 rounded-lg zoom-in" />
            <img src="img/sec2.jpg" alt="Service Image 2" className="object-cover w-full h-48 rounded-lg zoom-in" />
          </div>
        </div>
      </div>

      {/* Smooth background transition to white */}
      <div className="w-full h-4 bg-white"></div>

      {/* Explore Our Services Section */}
      <div className="mt-12 text-center bg-white content-hidden" ref={(el) => (sectionRefs.current[0] = el)}>
        <h2 className="text-3xl font-semibold slide-in">Explore Our Services</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 p-4 mt-6 bg-white md:grid-cols-2 lg:grid-cols-3">
        {/* Service 1 */}
        <div className="p-6 bg-white rounded-lg shadow-md content-hidden fade-in" ref={(el) => (sectionRefs.current[1] = el)}>
          <img src="img/section.jpg" alt="Makeup Services" className="object-cover w-full h-48 rounded-lg" />
          <h3 className="mt-4 text-xl font-semibold">Makeup Services</h3>
          <p className="mt-2 text-gray-600">Professional makeup services for every occasion.</p>
          <Link to="/makeupservices" className="inline-block mt-4 text-blue-600">Book Now</Link>
        </div>

        {/* Service 2 */}
        <div className="p-6 bg-white rounded-lg shadow-md content-hidden fade-in" ref={(el) => (sectionRefs.current[2] = el)}>
          <img src="img/skin.jpg" alt="Skin Care" className="object-cover w-full h-48 rounded-lg" />
          <h3 className="mt-4 text-xl font-semibold">Skin Care</h3>
          <p className="mt-2 text-gray-600">Advanced skincare treatments for glowing skin.</p>
          <Link to="/skincare" className="inline-block mt-4 text-blue-600">Book Now</Link>
        </div>

        {/* Service 3 */}
        <div className="p-6 bg-white rounded-lg shadow-md content-hidden fade-in" ref={(el) => (sectionRefs.current[3] = el)}>
          <img src="img/hair.png" alt="Hair Styling" className="object-cover w-full h-48 rounded-lg" />
          <h3 className="mt-4 text-xl font-semibold">Hair Styling</h3>
          <p className="mt-2 text-gray-600">Hair services to give you the perfect look.</p>
          <Link to="/hairstyling" className="inline-block mt-4 text-blue-600">Book Now</Link>
        </div>

        {/* Service 4 */}
        <div className="p-6 bg-white rounded-lg shadow-md content-hidden fade-in" ref={(el) => (sectionRefs.current[4] = el)}>
          <img src="img/sec2.jpg" alt="Salon Products" className="object-cover w-full h-48 rounded-lg" />
          <h3 className="mt-4 text-xl font-semibold">Salon Products</h3>
          <p className="mt-2 text-gray-600">Quality salon products for hair, skin, and more.</p>
          <Link to="/salonproducts" className="inline-block mt-4 text-blue-600">Shop Now</Link>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-12 content-hidden slide-in" ref={(el) => (sectionRefs.current[7] = el)}>
        <Accordion />
      </div>
    </div>
  );
};

export default Home;
