// import React from 'react';
import { motion } from 'framer-motion';

const Policy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="max-w-4xl px-4 py-8 mx-auto bg-black"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 className="mb-6 text-3xl font-bold text-green-800" variants={itemVariants}>
        Privacy Policy
      </motion.h1>
      
      <motion.p className="mb-4" variants={itemVariants}>
        This privacy policy describes how organicbypooja.in (the "Site") collects, uses, and discloses your personal information when you visit or make a purchase from the Site.
      </motion.p>

      <motion.h2 className="mt-8 mb-4 text-2xl font-semibold text-green-700" variants={itemVariants}>
        Collecting Personal Information
      </motion.h2>
      
      <motion.p className="mb-4" variants={itemVariants}>
        When you visit the Site, we collect certain information about your device, your interaction with the Site, and information necessary to process your purchases. We may also collect additional information if you contact us for customer support. In this privacy policy, we refer to any information that can uniquely identify an individual as "personal information." See the list below for more information about what personal information we collect and why.
      </motion.p>

      <motion.h3 className="mt-6 mb-2 text-xl font-semibold text-green-600" variants={itemVariants}>
        Device Information:
      </motion.h3>
      
      <motion.ul className="pl-6 mb-4 list-disc" variants={itemVariants}>
        <li>Examples of personal information collected: Version of web browser, IP address, time zone, cookie information, what sites or products you view, search terms, and how you interact with the Site.</li>
        <li>Purpose of collection: To load the Site accurately for you, and to perform analytics on Site usage to optimize our Site.</li>
        <li>Source of collection: Collected automatically when you access our Site using cookies, log files, web beacons, tags, or pixels.</li>
        <li>Disclosure for a business purpose: Shared with our analytics provider.</li>
      </motion.ul>

      <motion.h3 className="mt-6 mb-2 text-xl font-semibold text-green-600" variants={itemVariants}>
        Order Information:
      </motion.h3>
      
      <motion.ul className="pl-6 mb-4 list-disc" variants={itemVariants}>
        <li>Examples of personal information collected: Name, billing address, shipping address, payment information, email address, and phone number.</li>
        <li>Purpose of collection: To provide products or services to you, fulfill our contract, process your payment, arrange for shipping, and provide you with invoices and/or order confirmations.</li>
        <li>Source of collection: Collected directly from you.</li>
        <li>Disclosure for a business purpose: Shared with our payment processor(Phonepe) and shipping provider(Delhivery).</li>
      </motion.ul>

      <motion.h3 className="mt-6 mb-2 text-xl font-semibold text-green-600" variants={itemVariants}>
        Customer Support Information:
      </motion.h3>
      
      <motion.ul className="pl-6 mb-4 list-disc" variants={itemVariants}>
        <li>Examples of personal information collected: Name, billing address, shipping address, payment information, email address, and phone number.</li>
        <li>Purpose of collection: To provide customer support.</li>
        <li>Source of collection: Collected from you.</li>
        <li>Disclosure for a business purpose: Shared as necessary for customer support.</li>
      </motion.ul>

      <motion.h2 className="mt-8 mb-4 text-2xl font-semibold text-green-700" variants={itemVariants}>
        Sharing Personal Information
      </motion.h2>
      
      <motion.p className="mb-4" variants={itemVariants}>
        We share your personal information with service providers to help us provide our services and fulfill our contracts with you, as described above. For example:
      </motion.p>

      <motion.ul className="pl-6 mb-4 list-disc" variants={itemVariants}>
        <li>We use analytics providers to help us understand how our customers use the Site.</li>
        <li>We share information with our payment processor and shipping provider to process orders and deliveries.</li>
        <li>We may share your personal information to comply with applicable laws, respond to legal requests, or to protect our rights.</li>
      </motion.ul>

      <motion.h2 className="mt-8 mb-4 text-2xl font-semibold text-green-700" variants={itemVariants}>
        Behavioural Advertising
      </motion.h2>
      
      <motion.p className="mb-4" variants={itemVariants}>
        We use your personal information to provide you with targeted advertisements or marketing communications that may be of interest to you. We use analytics tools to help us understand how our customers use the Site. We share information about your use of the Site, your purchases, and your interactions with our ads on other websites with our advertising partners.
      </motion.p>

      <motion.h2 className="mt-8 mb-4 text-2xl font-semibold text-green-700" variants={itemVariants}>
        Using Personal Information
      </motion.h2>
      
      <motion.p className="mb-4" variants={itemVariants}>
        We use your personal information to provide our services to you, which includes: offering products for sale, processing payments, shipping and fulfillment of your order, and keeping you up-to-date on new products, services, and offers.
      </motion.p>

      <motion.h2 className="mt-8 mb-4 text-2xl font-semibold text-green-700" variants={itemVariants}>
        Do Not Track
      </motion.h2>
      
      <motion.p className="mb-4" variants={itemVariants}>
        Please note that we do not alter our data collection and usage practices when we detect a "Do Not Track" signal from your browser due to the lack of a consistent industry standard for responding to such signals.
      </motion.p>

      <motion.h2 className="mt-8 mb-4 text-2xl font-semibold text-green-700" variants={itemVariants}>
        Changes
      </motion.h2>
      
      <motion.p className="mb-4" variants={itemVariants}>
        We may update this privacy policy from time to time to reflect changes to our practices or for other operational, legal, or regulatory reasons.
      </motion.p>

      <motion.h2 className="mt-8 mb-4 text-2xl font-semibold text-green-700" variants={itemVariants}>
        Contact
      </motion.h2>
      
      <motion.p className="mb-4" variants={itemVariants}>
        For more information about our privacy practices, if you have any questions, or if you would like to make a complaint, please contact us via email at organicbypooja@gmail.com or by mail using the details provided below:
      </motion.p>

      <motion.p className="font-semibold" variants={itemVariants}>
        Organic by Pooja<br />
        762, JANAKPURI, BAREILLY
      </motion.p>
    </motion.div>
  );
};

export default Policy;