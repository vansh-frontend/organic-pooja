import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const AccordionItem = ({ id, title, content, isOpen, onToggle }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="mb-6 overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-lg bg-opacity-10 backdrop-filter backdrop-blur-sm hover:shadow-xl"
    >
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onToggle(id)}
        className={`flex items-center justify-between w-full px-6 py-4 text-left focus:outline-none transition-all duration-300 ${
          isOpen ? 'text-white' : 'text-gray-300'
        }`}
      >
        <span className="pr-4 text-lg font-light tracking-wider">{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaStar className={`text-xl ${isOpen ? 'text-white' : 'text-gray-500'}`} />
        </motion.span>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 py-4 text-gray-300 bg-white bg-opacity-5">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

AccordionItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      id: 0,
      title: "What skin issues do you address?",
      content: "We specialize in treating various skin concerns such as dull skin, acne scars, ageing skin, and skin brightening and lightening. Our treatments are customized to target the root cause of your concerns, ensuring long-lasting results."
    },
    {
      id: 1,
      title: "What treatments do you offer for skin rejuvenation?",
      content: "We use advanced techniques like Thermage Treatment, Chemical Peel Treatment, Q-Switch Laser Treatment, and HydraFacial. These treatments help rejuvenate the skin, promote collagen production, and address specific skin issues."
    },
    {
      id: 2,
      title: "Are your treatments safe for sensitive skin?",
      content: "Yes, our treatments are designed using organic, plant-based ingredients and are tailored to be gentle on all skin types, including sensitive skin."
    },
    {
      id: 3,
      title: "What hair concerns do you treat?",
      content: "We address hair loss, hair thinning, and overall scalp health for both men and women. Our goal is to work on the root cause of hair fall and thinning."
    },
    {
      id: 4,
      title: "What treatments do you offer for hair loss?",
      content: "We provide treatments like PRP GF Therapy, Laser Hair Treatment, and customized scalp care to promote hair regrowth and reduce hair fall."
    },
    {
      id: 5,
      title: "What advanced technologies do you use in your treatments?",
      content: "In addition to our organic treatments, we utilize modern technology such as laser machines, Thermage, and HydraFacial equipment to provide comprehensive care for both skin and hair."
    },
    {
      id: 6,
      title: "How do I book a consultation or treatment?",
      content: "You can easily book a consultation through our website or by contacting us directly. We will guide you through the best options based on your individual needs."
    }
  ];

  return (
    <div className="relative z-10 max-w-6xl px-4 mx-auto">
      <div className="relative">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative grid gap-6 md:grid-cols-2"
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AccordionItem
                id={item.id}
                title={item.title}
                content={item.content}
                isOpen={openIndex === item.id}
                onToggle={handleToggle}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Accordion;