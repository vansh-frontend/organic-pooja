import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaExchangeAlt, FaTruck, FaFileDownload, FaMoneyBillWave, FaShippingFast } from 'react-icons/fa';
import './Return.css';

const PolicySection = ({ title, items, icon }) => {
  return (
    <section className="py-12 border-b border-gray-700">
      <div className="container px-6 mx-auto">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-blue-500 rounded-full">{icon}</div>
          <h2 className="ml-5 text-3xl font-semibold text-white">{title}</h2>
        </div>
        <ul className="pl-4 space-y-3 text-gray-300">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-3 text-blue-400">•</span>
              <span className="text-base">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const Return = () => {
  const [isDownloading, setIsDownloading] = React.useState(false);

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
      icon: <FaBook className="text-2xl text-white" />
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
      icon: <FaExchangeAlt className="text-2xl text-white" />
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
      icon: <FaTruck className="text-2xl text-white" />
    }
  ];

  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-gray-900 to-gray-800">
      <header className="py-20 bg-gray-900">
        <div className="container px-6 mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-4xl font-extrabold leading-tight text-center text-white"
          >
            Our Refund & Cancellation Policy
          </motion.h1>
          <div className="w-32 h-1 mx-auto bg-blue-500 rounded-full"></div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto mt-4 text-lg text-center text-gray-300"
          >
            We strive to ensure your satisfaction with our products and services
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center mt-8 space-x-8"
          >
            <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
              <FaExchangeAlt className="mb-2 text-4xl text-blue-400" />
              <span className="text-sm text-gray-300">Easy Returns</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
              <FaMoneyBillWave className="mb-2 text-4xl text-green-400" />
              <span className="text-sm text-gray-300">Quick Refunds</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
              <FaShippingFast className="mb-2 text-4xl text-yellow-400" />
              <span className="text-sm text-gray-300">Fast Shipping</span>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {policies.map((policy, index) => (
        <PolicySection key={index} {...policy} />
      ))}

      <footer className="py-16">
        <div className="container px-6 mx-auto text-center">
          <button
            onClick={downloadPDF}
            disabled={isDownloading}
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white transition duration-300 ease-in-out bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaFileDownload className="mr-2" />
            <span>{isDownloading ? 'Opening PDF...' : 'View Full Policy PDF'}</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Return;