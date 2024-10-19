import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div 
      className="min-h-screen w-full bg-[#F9F6EE] font-sans text-gray-800"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <motion.h1 className="mb-6 text-3xl font-bold text-center sm:text-4xl" variants={itemVariants}>
          Terms and Conditions
        </motion.h1>

        <motion.div className="space-y-4" variants={itemVariants}>
          <p className="text-base sm:text-lg">
            These terms and conditions ("Terms") govern your use of the Organic by Pooja website (the "Site") and the purchase of products from Organic by Pooja. By accessing the Site or making a purchase, you agree to be bound by these Terms. Please read them carefully.
          </p>

          {[
            { title: "1. Agreement to Terms", content: "By accessing the Site or making a purchase, you agree to be bound by these Terms and all applicable laws and regulations. If you do not agree with any of these Terms, you are prohibited from using or accessing the Site." },
            { title: "2. Products and Orders", content: "All products displayed on the Site are subject to availability. We reserve the right to limit the quantity of products available for purchase and to discontinue any product at any time." },
            { title: "3. Payment and Billing", content: "Payment for orders placed on the Site must be made using the available payment methods. By providing payment information, you represent and warrant that you have the legal right to use the payment method." },
            { title: "4. Intellectual Property", content: "All content, trademarks, logos, and other intellectual property displayed on the Site are the property of Organic by Pooja or its licensors." },
            { title: "5. Privacy", content: "Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and disclose your personal information." },
            { title: "6. Limitation of Liability", content: "In no event shall Organic by Pooja or its affiliates be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Site or the purchase of products." },
            { title: "7. Changes to Terms", content: "We reserve the right to update or modify these Terms at any time without prior notice. It is your responsibility to review these Terms periodically for any changes." },
          ].map((section, index) => (
            <motion.div key={index} className="p-4 bg-white rounded-lg shadow-sm" variants={itemVariants}>
              <h2 className="mb-2 text-xl font-semibold text-gray-700">{section.title}</h2>
              <p className="text-sm text-gray-600 sm:text-base">{section.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Terms;