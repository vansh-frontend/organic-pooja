import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaExchangeAlt, FaTruck, FaFileDownload, FaMoneyBillWave, FaShippingFast } from 'react-icons/fa';

const PolicySection = ({ title, items, icon }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 mb-8 bg-white rounded-lg shadow-md"
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-gray-100 rounded-full">{icon}</div>
        <h2 className="ml-4 text-xl font-semibold text-gray-800">{title}</h2>
      </div>
      <ul className="space-y-2 text-gray-600">
        {items.map((item, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-start"
          >
            <span className="mr-2 text-gray-400">•</span>
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
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
      icon: <FaBook className="text-2xl text-gray-600" />
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
      icon: <FaExchangeAlt className="text-2xl text-gray-600" />
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
      icon: <FaTruck className="text-2xl text-gray-600" />
    }
  ];

  return (
    <div className="min-h-screen py-12 bg-[#F9F6EE]">
      <div className="max-w-4xl px-4 mx-auto">
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold text-gray-800">
            Our Refund & Cancellation Policy
          </h1>
          <p className="mb-8 text-xl text-gray-600">
            We strive to ensure your satisfaction with our products and services
          </p>
          <div className="flex justify-center space-x-8">
            <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
              <FaExchangeAlt className="mb-2 text-3xl text-gray-600" />
              <span className="text-sm text-gray-600">Easy Returns</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
              <FaMoneyBillWave className="mb-2 text-3xl text-gray-600" />
              <span className="text-sm text-gray-600">Quick Refunds</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
              <FaShippingFast className="mb-2 text-3xl text-gray-600" />
              <span className="text-sm text-gray-600">Fast Shipping</span>
            </motion.div>
          </div>
        </motion.header>

        {policies.map((policy, index) => (
          <PolicySection key={index} {...policy} />
        ))}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadPDF}
            disabled={isDownloading}
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaFileDownload className="mr-2" />
            <span>{isDownloading ? 'Opening PDF...' : 'View Full Policy PDF'}</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Return;