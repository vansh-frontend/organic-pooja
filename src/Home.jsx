import { useEffect, useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { Link } from 'react-router-dom'; 
import Accordion from "./components/Accordion";
import "./Home.css";
import './Button.css';

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
    <div className="relative w-full py-8 overflow-hidden bg-gray-50">
      {/* Carousel Section */}
      <div className="px-4 sm:px-6 lg:px-12 exclude-animation">
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
      className="flex flex-row bg-white rounded-lg shadow-lg w-full h-auto sm:h-72 md:h-80 lg:h-96 xl:h-[500px] overflow-hidden"
    >
      {/* Image section */}
      <Link to={product.link} className="flex-grow w-1/2 overflow-hidden rounded-l-lg">
        <img
          src={product.img}
          alt={product.title}
          className="object-cover w-full h-full rounded-l-lg" 
        />
      </Link>

      {/* Text section */}
      <div
        className="flex flex-col items-start justify-center flex-grow w-1/2 p-4 rounded-r-lg sm:p-6 md:p-8 lg:p-10"
        style={{ backgroundColor: '#D0F0C0' }}
      >
        <div className="text-left">
          <h3 className="text-lg font-bold text-gray-800 sm:text-xl md:text-2xl">{product.title}</h3>
          <p className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg">
            Organic Pooja offers a premium beauty experience using only organic products. From hair styling to nail treatments and makeup, we specialize in creating contemporary and timeless looks for every occasion. Our mission is to make you shine like a star naturally.
          </p>
          <div className="flex justify-start mt-4">
          <button className="relative flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gray-800 border-none rounded-full cursor-pointer group shimmeringbtn">
      <span className="relative inline-block pr-10 transition-all duration-500 group-hover:pr-16">
        SHOP NOW
        <span className="absolute right-0 transition-opacity duration-500 transform -translate-y-1/2 opacity-0 top-1/2 group-hover:opacity-100">
          &rarr;
        </span>
      </span>
    </button>

          </div>
        </div>
      </div>
    </div>
  ))}
</Carousel>


      </div>

      {/* Services Section */}
      <div className="mt-12 text-center content-hidden" ref={(el) => (sectionRefs.current[0] = el)}>
        <h2 className="text-3xl font-semibold">Explore Our Services</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 p-4 mt-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Service 1 */}
        <div className="p-6 bg-white rounded-lg shadow-md content-hidden" ref={(el) => (sectionRefs.current[1] = el)}>
          <img src="img/makeup.jpg" alt="Makeup Services" className="object-cover w-full h-48 rounded-lg" />
          <h3 className="mt-4 text-xl font-semibold">Makeup Services</h3>
          <p className="mt-2 text-gray-600">Professional makeup services for every occasion.</p>
          <Link to="/makeupservices" className="inline-block mt-4 text-blue-600">Book Now</Link>
        </div>

        {/* Service 2 */}
        <div className="p-6 bg-white rounded-lg shadow-md content-hidden" ref={(el) => (sectionRefs.current[2] = el)}>
          <img src="img/skin.jpg" alt="Skin Care" className="object-cover w-full h-48 rounded-lg" />
          <h3 className="mt-4 text-xl font-semibold">Skin Care</h3>
          <p className="mt-2 text-gray-600">Advanced skincare treatments for glowing skin.</p>
          <Link to="/skincare" className="inline-block mt-4 text-blue-600">Book Now</Link>
        </div>

        {/* Service 3 */}
        <div className="p-6 bg-white rounded-lg shadow-md content-hidden" ref={(el) => (sectionRefs.current[3] = el)}>
          <img src="img/hair.png" alt="Hair Styling" className="object-cover w-full h-48 rounded-lg" />
          <h3 className="mt-4 text-xl font-semibold">Hair Styling</h3>
          <p className="mt-2 text-gray-600">Hair services to give you the perfect look.</p>
          <Link to="/hairstyling" className="inline-block mt-4 text-blue-600">Book Now</Link>
        </div>

        {/* Service 4 */}
        <div className="p-6 bg-white rounded-lg shadow-md content-hidden" ref={(el) => (sectionRefs.current[4] = el)}>
          <img src="img/products.jpg" alt="Salon Products" className="object-cover w-full h-48 rounded-lg" />
          <h3 className="mt-4 text-xl font-semibold">Salon Products</h3>
          <p className="mt-2 text-gray-600">Quality salon products for hair, skin, and more.</p>
          <Link to="/salonproducts" className="inline-block mt-4 text-blue-600">Shop Now</Link>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-12 content-hidden" ref={(el) => (sectionRefs.current[7] = el)}>
        <Accordion />
      </div>
    </div>
  );  
};

export default Home;
