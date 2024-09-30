import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaEnvelope, FaPhone, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { MdSpa, MdEventAvailable, MdMessage } from 'react-icons/md';

const Contact = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen px-4 py-16 font-sans bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-7xl"
      >
        <div className="overflow-hidden bg-white shadow-2xl rounded-3xl">
          <div className="lg:flex">
            {/* Contact Form Section */}
            <motion.div
              {...fadeIn}
              className="p-8 bg-white lg:w-3/5 lg:p-16"
            >
              <h1 className="mb-8 font-serif text-5xl font-extrabold leading-tight text-gray-800">
                Book Your <span className="text-purple-600">Luxurious</span> Experience
              </h1>
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-8"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="43891102-fecf-4b69-8f17-4362fc2e9d1c"
                />

<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {/* Name Input */}
                  <div className="relative">
                    <MdMessage className="absolute text-gray-400 transition-all duration-300 top-4 left-4 peer-focus:text-purple-500" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full py-4 pl-12 pr-4 text-gray-700 placeholder-transparent transition-all duration-300 border-2 border-gray-200 rounded-lg peer bg-gray-50 focus:outline-none focus:border-purple-500 focus:ring focus:ring-purple-200"
                      placeholder="Your Name"
                      required
                    />
                    <label htmlFor="name" className="absolute left-12 -top-2.5 text-sm text-gray-600 bg-white px-1 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-purple-600 peer-focus:text-sm">Your Name</label>
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <FaEnvelope className="absolute text-gray-400 transition-all duration-300 top-4 left-4 peer-focus:text-purple-500" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full py-4 pl-12 pr-4 text-gray-700 placeholder-transparent transition-all duration-300 border-2 border-gray-200 rounded-lg peer bg-gray-50 focus:outline-none focus:border-purple-500 focus:ring focus:ring-purple-200"
                      placeholder="Your Email"
                      required
                    />
                    <label htmlFor="email" className="absolute left-12 -top-2.5 text-sm text-gray-600 bg-white px-1 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-purple-600 peer-focus:text-sm">Your Email</label>
                  </div>
                </div>
                {/* Phone Input */}
                <div className="relative">
                  <FaPhone className="absolute text-gray-400 transition-all duration-300 top-4 left-4 peer-focus:text-purple-500" />
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="w-full py-4 pl-12 pr-4 text-gray-700 placeholder-transparent transition-all duration-300 border-2 border-gray-200 rounded-lg peer bg-gray-50 focus:outline-none focus:border-purple-500 focus:ring focus:ring-purple-200"
                    placeholder="Your Phone Number"
                    required
                  />
                  <label htmlFor="phone" className="absolute left-12 -top-2.5 text-sm text-gray-600 bg-white px-1 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-purple-600 peer-focus:text-sm">Your Phone Number</label>
                </div>


                {/* Treatment Select */}
                <div className="relative">
                  <MdSpa className="absolute text-gray-400 transition-all duration-300 top-4 left-4 peer-focus:text-purple-500" />
                  <select
                    id="treatment"
                    name="treatment"
                    className="w-full py-4 pl-12 pr-10 text-gray-700 transition-all duration-300 border-2 border-gray-200 rounded-lg appearance-none peer bg-gray-50 focus:outline-none focus:border-purple-500 focus:ring focus:ring-purple-200"
                    required
                  >
                    <option value="">Select Treatment</option>
                    <optgroup label="Skin Treatments">
                      <option value="Laser Hair Removal">Laser Hair Removal</option>
                      <option value="Thermage Treatment">Thermage Treatment</option>
                      <option value="Microneedling">Microneedling</option>
                      <option value="Chemical Peel">Chemical Peel</option>
                      <option value="Facial">Facial</option>
                      <option value="Acne Treatment">Acne Treatment</option>
                      <option value="Anti-Aging Treatment">Anti-Aging Treatment</option>
                    </optgroup>
                    <optgroup label="Hair Treatments">
                      <option value="PRP GF Treatment">PRP GF Treatment</option>
                      <option value="Hair Thread Treatment">Hair Thread Treatment</option>
                      <option value="Hair Coloring">Hair Coloring</option>
                      <option value="Hair Smoothing">Hair Smoothing</option>
                      <option value="Hair Cut">Hair Cut</option>
                      <option value="Hair Styling">Hair Styling</option>
                      <option value="Scalp Treatment">Scalp Treatment</option>
                    </optgroup>
                    <optgroup label="Makeup Services">
                      <option value="Bridal Makeup">Bridal Makeup</option>
                      <option value="Party Makeup">Party Makeup</option>
                      <option value="Photo Shoot Makeup">Photo Shoot Makeup</option>
                      <option value="Casual Makeup">Casual Makeup</option>
                      <option value="Makeup Lessons">Makeup Lessons</option>
                      <option value="Special Effects Makeup">Special Effects Makeup</option>
                    </optgroup>
                    <optgroup label="Body Treatments">
                      <option value="Body Scrub">Body Scrub</option>
                      <option value="Body Wrap">Body Wrap</option>
                      <option value="Massage Therapy">Massage Therapy</option>
                      <option value="Detoxification">Detoxification</option>
                      <option value="Cellulite Treatment">Cellulite Treatment</option>
                      <option value="Body Contouring">Body Contouring</option>
                    </optgroup>
                    <optgroup label="Nail Services">
                      <option value="Manicure">Manicure</option>
                      <option value="Pedicure">Pedicure</option>
                      <option value="Nail Extensions">Nail Extensions</option>
                      <option value="Nail Art">Nail Art</option>
                      <option value="Gel Nails">Gel Nails</option>
                    </optgroup>
                  </select>
                  <label htmlFor="treatment" className="absolute left-4 -top-2.5 text-sm text-gray-600 bg-white px-1 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-purple-600 peer-focus:text-sm">Select Treatment</label>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>

                {/* Date & Time Inputs */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="relative">
                    <MdEventAvailable className="absolute text-gray-400 transition-all duration-300 top-4 left-4 peer-focus:text-purple-500" />
                    <input
                      type="date"
                      id="date"
                      name="date"
                      className="w-full py-4 pl-12 pr-4 text-gray-700 placeholder-transparent transition-all duration-300 border-2 border-gray-200 rounded-lg peer bg-gray-50 focus:outline-none focus:border-purple-500 focus:ring focus:ring-purple-200"
                      required
                    />
                    <label htmlFor="date" className="absolute left-12 -top-2.5 text-sm text-gray-600 bg-white px-1 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-purple-600 peer-focus:text-sm">Date</label>
                  </div>
                  <div className="relative">
                    <FaClock className="absolute text-gray-400 transition-all duration-300 top-4 left-4 peer-focus:text-purple-500" />
                    <input
                      type="time"
                      id="time"
                      name="time"
                      className="w-full py-4 pl-12 pr-4 text-gray-700 placeholder-transparent transition-all duration-300 border-2 border-gray-200 rounded-lg peer bg-gray-50 focus:outline-none focus:border-purple-500 focus:ring focus:ring-purple-200"
                      required
                    />
                    <label htmlFor="time" className="absolute left-12 -top-2.5 text-sm text-gray-600 bg-white px-1 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-purple-600 peer-focus:text-sm">Time</label>
                  </div>
                </div>
                {/* Message Input */}
                <div className="relative">
                  <MdMessage className="absolute text-gray-400 transition-all duration-300 top-4 left-4 peer-focus:text-purple-500" />
                  <textarea
                    id="message"
                    name="message"
                    className="w-full py-4 pl-12 pr-4 text-gray-700 placeholder-transparent transition-all duration-300 border-2 border-gray-200 rounded-lg peer bg-gray-50 focus:outline-none focus:border-purple-500 focus:ring focus:ring-purple-200"
                    rows="4"
                    required
                  ></textarea>
                  <label htmlFor="message" className="absolute left-12 -top-2.5 text-sm text-gray-600 bg-white px-1 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-purple-600 peer-focus:text-sm">Your Message For Us</label>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full p-4 font-semibold text-white transition duration-300 ease-in-out bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50"
                >
                  Book Your Luxurious Experience
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information Section */}
            <motion.div
              {...fadeIn}
              className="flex flex-col justify-between p-8 text-white bg-gradient-to-br from-purple-600 to-indigo-800 lg:w-2/5 lg:p-16"
            >
              <div>
                <h2 className="mb-8 font-serif text-4xl font-extrabold leading-tight">Experience <span className="text-pink-300">Luxury</span> at Your Fingertips</h2>
                <p className="mb-12 text-lg leading-relaxed">
                  Indulge in our premium services and treatments. Our expert team is ready to pamper you and elevate your beauty experience.
                </p>

                <div className="space-y-8">
                  {/* Address */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-start space-x-4"
                  >
                    <FaMapMarkerAlt className="mt-1 text-3xl text-pink-300" />
                    <div>
                      <h3 className="mb-1 font-semibold text-pink-300">Visit Us</h3>
                      <p className="text-lg">#762 JanakPuri, Bareilly 243122</p>
                    </div>
                  </motion.div>

                  {/* Hours */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-start space-x-4"
                  >
                    <FaClock className="mt-1 text-3xl text-pink-300" />
                    <div>
                      <h3 className="mb-1 font-semibold text-pink-300">Opening Hours</h3>
                      <p className="text-lg">Mon-Sun, 9 AM - 8 PM</p>
                    </div>
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-start space-x-4"
                  >
                    <FaEnvelope className="mt-1 text-3xl text-pink-300" />
                    <div>
                      <h3 className="mb-1 font-semibold text-pink-300">Email Us</h3>
                      <a 
                        href="mailto:info@organicbypooja.com" 
                        className="text-lg transition duration-300 hover:underline hover:text-pink-300"
                      >
                        info@organicbypooja.com
                      </a>
                    </div>
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-start space-x-4"
                  >
                    <FaPhone className="mt-1 text-3xl text-pink-300" />
                    <div>
                      <h3 className="mb-1 font-semibold text-pink-300">Call Us</h3>
                      <a 
                        href="tel:+919876543210" 
                        className="text-lg transition duration-300 hover:underline hover:text-pink-300"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                  </motion.div>
                </div>

                {/* Social Media Icons */}
                <div className="flex mt-12 space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-white transition-colors duration-300 bg-pink-500 rounded-full hover:bg-pink-600"
                  >
                    <FaInstagram className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: -15 }}
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-white transition-colors duration-300 bg-blue-600 rounded-full hover:bg-blue-700"
                  >
                    <FaFacebookF className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-white transition-colors duration-300 bg-blue-400 rounded-full hover:bg-blue-500"
                  >
                    <FaTwitter className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>

              {/* Google Map */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-12"
              >
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.0973403079293!2d79.41506981441764!3d28.364338282527683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a00677d142e4ab%3A0x51cc6cf62f759c13!2sBareilly%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1635675008746!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: '0.75rem' }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;