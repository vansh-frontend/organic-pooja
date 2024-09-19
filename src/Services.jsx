import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const cards = container.querySelectorAll('.service-card');
    
    gsap.set(cards, { opacity: 0, y: 50 });
    
    cards.forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        delay: index * 0.2,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="px-4 py-24 bg-gradient-to-b from-gray-50 to-gray-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-4xl font-extrabold leading-tight text-center text-gray-900">
          Our <span className="text-green-600">Organic</span> Services
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Service Card 1 */}
          <div className="overflow-hidden transition-all duration-300 transform bg-white shadow-xl service-card rounded-xl hover:scale-105">
            <div className="p-8">
              <h3 className="mb-6 text-3xl font-bold text-gray-900">Hair Loss in Men</h3>
              <p className="mb-6 text-lg text-gray-600">Tailored specifically for men, our treatments focus on addressing male pattern baldness and thinning hair using advanced solutions and natural remedies.</p>
              <ul className="mb-6 space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Targeted Solutions
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Growth Stimulation
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Personalized Care
                </li>
              </ul>
              <p className="font-semibold text-gray-700">Why Choose Us: Organic by Pooja provides effective, natural solutions to combat hair loss in men, ensuring a holistic approach to hair restoration.</p>
            </div>
          </div>
          
          {/* Service Card 2 */}
          <div className="overflow-hidden transition-all duration-300 transform bg-white shadow-xl service-card rounded-xl hover:scale-105">
            <div className="p-8">
              <h3 className="mb-6 text-3xl font-bold text-gray-900">Hair Loss and Thinning for Women</h3>
              <p className="mb-6 text-lg text-gray-600">Our treatments for women address thinning hair and hair loss with specialized formulas and techniques designed to restore volume and strength.</p>
              <ul className="mb-6 space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Volume Enhancement
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Strength Improvement
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Gentle Organic Care
                </li>
              </ul>
              <p className="font-semibold text-gray-700">Why Choose Us: We offer a unique blend of organic care and modern technology to effectively address hair thinning and loss in women.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;