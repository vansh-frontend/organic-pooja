import { useEffect, useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { Link } from 'react-router-dom'; 
import Accordion from "./components/Accordion";
import "./Home.css";

const Home = () => {
  const sectionRefs = useRef([]);
  const [scrollDirection, setScrollDirection] = useState(null);

  // Track scroll direction
  useEffect(() => {
    let lastScrollTop = window.pageYOffset;

    const handleScroll = () => {
      let currentScrollTop = window.pageYOffset;
      if (currentScrollTop < lastScrollTop) {
        setScrollDirection('up');
      } else {
        setScrollDirection('down');
      }
      lastScrollTop = currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Add IntersectionObserver to animate content on scroll up
  useEffect(() => {
    const sections = sectionRefs.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && scrollDirection === 'up') {
          entry.target.classList.add('content-visible');
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

  // Define your images and text content here
  const products = [
    {
      img: 'img/pro1.jpg',
      title: 'Hair Care',
      description: 'Explore our range of products designed to nourish and strengthen your hair.',
      link: '/haircare',
    },
    {
      img: 'img/pro2.jpg',
      title: 'Body Care',
      description: 'Body care essentials to keep your skin hydrated and smooth.',
      link: '/bodycare',
    },
    {
      img: 'img/pro3.jpg',
      title: 'Skin Care',
      description: 'Discover our skincare products for glowing, healthy skin.',
      link: '/skincare',
    }
  ];

  return (
    <div className="relative w-full py-8 overflow-hidden bg-gray-100">
      {/* Carousel Section */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 exclude-animation"> {/* Exclude animation class */}
        <Carousel
          autoPlay
          interval={3000}
          infiniteLoop
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          swipeable={true}
          emulateTouch
          swipeScrollTolerance={5}
          dynamicHeight={false}
          className="w-full mx-auto overflow-hidden carousel-root"
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-row bg-white rounded-lg shadow-lg w-full h-auto sm:h-72 md:h-80 lg:h-96 xl:h-[500px]"
            >
              {/* Image section */}
              <Link to={product.link} className="flex-grow w-1/2">
                <img
                  src={product.img}
                  alt={product.title}
                  className="object-cover w-full h-full" 
                />
              </Link>

              {/* Text section */}
              <div
                className="flex flex-col items-start justify-center flex-grow w-1/2 p-4 sm:p-6 md:p-8 lg:p-10"
                style={{ backgroundColor: '#D0F0C0' }} 
              >
                <div className="text-left">
                  <h3 className="text-lg font-bold text-gray-800 sm:text-xl md:text-2xl">{product.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg">
                    Organic Pooja offers a premium beauty experience using only organic products. From hair styling to nail treatments and makeup, we specialize in creating contemporary and timeless looks for every occasion. Our mission is to make you shine like a star naturally.
                  </p>
                  <div className="flex justify-start mt-4">
                    <button className="px-4 py-2 font-serif text-sm text-white transition duration-300 transform bg-black rounded-full sm:px-6 sm:py-3 sm:text-base hover:scale-105 hover:bg-gray-700 hover:shadow-lg focus:outline-none">
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Centered Content - Services Section */}
      <div className="mt-8 mb-4 text-center content-hidden" ref={(el) => (sectionRefs.current[0] = el)}>
        <h2 className="text-2xl font-bold">Explore Our Services</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Service 1 */}
        <div className="p-6 bg-white rounded-lg shadow-lg content-hidden" ref={(el) => (sectionRefs.current[1] = el)}>
          <img src="img/skin.jpg" alt="Anti-Ageing" className="object-cover w-full h-48 rounded-lg" />
          <h3 className="mt-4 text-xl font-bold">Anti-ageing</h3>
          <p className="mt-2">Discover our anti-ageing services for a youthful glow.</p>
          <Link to="/antiageing" className="inline-block mt-4 text-blue-500 hover:underline">Book Now</Link>
        </div>

        {/* Service 2 */}
        <div className="p-6 bg-white rounded-lg shadow-lg content-hidden" ref={(el) => (sectionRefs.current[2] = el)}>
          <img src="img/shampoo.jpg" alt="Laser Hair Reduction" className="object-cover w-full h-48 rounded-lg" />
          <h3 className="mt-4 text-xl font-bold">Laser Hair Reduction</h3>
          <p className="mt-2">Achieve smooth skin with our laser hair reduction services.</p>
          <Link to="/laserhairreduction" className="inline-block mt-4 text-blue-500 hover:underline">Book Now</Link>
        </div>

        {/* Service 3 */}
        <div className="p-6 bg-white rounded-lg shadow-lg content-hidden" ref={(el) => (sectionRefs.current[3] = el)}>
          <img src="img/hair.png" alt="Hair Care" className="object-cover w-full h-48 rounded-lg" />
          <h3 className="mt-4 text-xl font-bold">Hair Care</h3>
          <p className="mt-2">Explore our hair care services for healthier, shinier hair.</p>
          <Link to="/haircare" className="inline-block mt-4 text-blue-500 hover:underline">Book Now</Link>
        </div>
      </div>

      {/* FAQ Section (Accordion) */}
      <div className="exclude-animation">
        <Accordion />
      </div>
    </div>
  );
};

export default Home;
