import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaExchangeAlt, FaTruck, FaFileDownload, FaMoneyBillWave, FaShippingFast } from 'react-icons/fa';

const PolicySection = ({ title, items, icon }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-12 border-b border-white border-opacity-20"
    >
      <div className="container px-6 mx-auto">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-white rounded-full bg-opacity-10">{icon}</div>
          <h2 className="ml-5 text-2xl font-light text-gray-800">{title}</h2>
        </div>
        <ul className="pl-4 space-y-3 text-gray-800">
          {items.map((item, index) => (
            <motion.li 
              key={index} 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="mr-3 text-gray-800">•</span>
              <span className="text-base font-light">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

const Return = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadPDF = () => {
    setIsDownloading(true);
    const pdfUrl = '/Pdf/policy.pdf';
    window.open(pdfUrl, '_blank');
    setTimeout(() => setIsDownloading(false), 2000);
  };

  const policies = [
    {
      title: "Refund and Cancellation Policy",
      items: [
        "Cancellations considered if requested within 7 days of order placement.",
        "Cancellations may not be possible if shipping has begun or product is out for delivery.",
        "No cancellations for perishable items, but refund/replacement possible for quality issues.",
        "Report damaged or defective items within 7 days of receipt.",
        "Complaints about product discrepancies must be reported within 7 days.",
        "Warranty issues should be referred to manufacturers.",
        "Approved refunds processed within 7 days."
      ],
      icon: <FaBook className="text-2xl text-gray-800" />
    },
    {
      title: "Return Policy",
      items: [
        "Refund/exchange offered within 7 days of purchase.",
        "Item must be unused and in original condition with packaging.",
        "Sale items may not be eligible for return/exchange.",
        "Defective or damaged items may be replaced.",
        "Some product categories may be exempt from returns or refunds.",
        "Returns are subject to inspection and approval."
      ],
      icon: <FaExchangeAlt className="text-2xl text-gray-800" />
    },
    {
      title: "Shipping Policy",
      items: [
        "Orders shipped via registered domestic courier or speed post.",
        "Shipping within 7 days of order/payment or as agreed.",
        "Platform Owner not liable for courier/postal delays.",
        "Delivery to address provided at time of purchase.",
        "Service delivery confirmed via registered email.",
        "Shipping costs are non-refundable."
      ],
      icon: <FaTruck className="text-2xl text-gray-800" />
    }
  ];

  return (
    <div className="min-h-screen text-gray-800 bg-[#F9F6EE]">
      <header className="py-20 text-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg">
        <div className="container px-6 mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-4 text-4xl font-light text-center text-gray-800 md:text-5xl lg:text-6xl"
          >
            Our Refund & Cancellation Policy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-2xl mx-auto mt-4 text-xl text-center text-gray-800 md:text-2xl"
          >
            We strive to ensure your satisfaction with our products and services
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap justify-center mt-12 space-x-8"
          >
            <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center mb-4">
              <FaExchangeAlt className="mb-2 text-4xl text-gray-800" />
              <span className="text-sm font-light text-gray-800">Easy Returns</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center mb-4"> 
              <FaMoneyBillWave className="mb-2 text-4xl text-gray-800" />
              <span className="text-sm font-light text-gray-800">Quick Refunds</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center mb-4">
              <FaShippingFast className="mb-2 text-4xl text-gray-800" />
              <span className="text-sm font-light text-gray-800">Fast Shipping</span>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {policies.map((policy, index) => (
        <PolicySection key={index} {...policy} />
      ))}

      <footer className="py-16 bg-opacity-50 backdrop-filter backdrop-blur-lg">
        <div className="container px-6 mx-auto text-center">  
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadPDF}
            disabled={isDownloading}
            className="inline-flex items-center px-8 py-3 text-base font-light text-black transition duration-300 ease-in-out bg-white rounded-full hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaFileDownload className="mr-2" />
            <span>{isDownloading ? 'Opening PDF...' : 'View Full Policy PDF'}</span>
          </motion.button>
        </div>
      </footer>
    </div>
  );
};

export default Return;