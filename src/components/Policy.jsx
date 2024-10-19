import React from 'react';
import { motion } from 'framer-motion';

const Policy = () => {
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
          Privacy Policy
        </motion.h1>

        <motion.div className="space-y-4" variants={itemVariants}>
          <p className="text-base sm:text-lg">
            This privacy policy describes how organicbypooja.in (the "Site") collects, uses, and discloses your personal information when you visit or make a purchase from the Site.
          </p>

          {[
            { title: "1. Collecting Personal Information", content: "When you visit the Site, we collect certain information about your device, your interaction with the Site, and information necessary to process your purchases." },
            { title: "2. Sharing Personal Information", content: "We share your personal information with service providers to help us provide our services and fulfill our contracts with you, as described above." },
            { title: "3. Behavioural Advertising", content: "We use your personal information to provide you with targeted advertisements or marketing communications that may be of interest to you." },
            { title: "4. Using Personal Information", content: "We use your personal information to provide our services to you, which includes: offering products for sale, processing payments, shipping and fulfillment of your order, and keeping you up-to-date on new products, services, and offers." },
            { title: "5. Do Not Track", content: "Please note that we do not alter our data collection and usage practices when we detect a 'Do Not Track' signal from your browser." },
            { title: "6. Changes", content: "We may update this privacy policy from time to time to reflect changes to our practices or for other operational, legal, or regulatory reasons." },
            { title: "7. Contact", content: "For more information about our privacy practices, if you have any questions, or if you would like to make a complaint, please contact us via email at organicbypooja@gmail.com." },
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

export default Policy;