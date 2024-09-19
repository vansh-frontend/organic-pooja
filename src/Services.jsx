import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaSeedling, FaTruck, FaChalkboardTeacher, FaCalendarAlt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const title = container.querySelector('h2');
    const description = container.querySelector('.services-description');
    const cards = container.querySelectorAll('.service-card');
    
    gsap.set([title, description], { opacity: 0, y: 50 });
    gsap.set(cards, { opacity: 0, y: 100 });
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 60%',
        end: 'bottom 20%',
        scrub: 1,
      },
    });

    tl.to(title, { opacity: 1, y: 0, duration: 0.5 })
      .to(description, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
      .to(cards, { 
        opacity: 1, 
        y: 0, 
        stagger: 0.2, 
        duration: 0.5,
        ease: 'power2.out',
      }, '-=0.2');

    // Parallax effect on cards
    cards.forEach((card) => {
      gsap.to(card, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="px-4 py-24 overflow-hidden bg-gradient-to-b from-green-50 to-green-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-5xl font-bold tracking-tight text-center text-green-800 sm:text-6xl lg:text-7xl">
          Our Services
        </h2>
        <p className="max-w-3xl mx-auto mb-20 text-xl leading-relaxed text-center text-green-700 services-description">
          Experience the future of organic farming with our innovative and sustainable services, 
          bringing nature's finest directly to your table.
        </p>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <ServiceCard 
            title="Organic Farming" 
            description="Cultivate health with our chemical-free, sustainable farming practices."
            icon={<FaSeedling className="w-8 h-8" />}
          />
          <ServiceCard 
            title="Fresh Delivery" 
            description="Farm-fresh organic produce, delivered straight to your doorstep."
            icon={<FaTruck className="w-8 h-8" />}
          />
          <ServiceCard 
            title="Farming Workshops" 
            description="Master organic techniques through immersive, hands-on learning experiences."
            icon={<FaChalkboardTeacher className="w-8 h-8" />}
          />
          <ServiceCard 
            title="Crop Planning" 
            description="Tailored crop strategies for small-scale farmers and home gardeners."
            icon={<FaCalendarAlt className="w-8 h-8" />}
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, description, icon }) => (
  <div className="overflow-hidden transition-all duration-300 transform bg-white shadow-lg service-card rounded-2xl hover:scale-105 hover:shadow-xl">
    <div className="p-8">
      <div className="flex items-center justify-center w-16 h-16 mb-6 bg-green-100 rounded-full">
        {icon}
      </div>
      <h3 className="mb-4 text-2xl font-semibold text-green-800">{title}</h3>
      <p className="mb-6 text-gray-600">{description}</p>
      <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white transition-colors duration-300 bg-green-600 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
        Learn More
        <svg className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
);

export default Services;