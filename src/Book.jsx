import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaEnvelope, FaPhone, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { MdSpa, MdEventAvailable, MdMessage } from 'react-icons/md';

const Book = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen px-4 py-16 font-sans text-purple-300 bg-[#050810] sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-7xl"
      >
        <div className="overflow-hidden bg-gray-900 shadow-2xl rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Contact Information Section */}
            <motion.div
              {...fadeIn}
              className="p-8 text-purple-300 bg-gradient-to-br from-purple-900 to-gray-900 lg:col-span-1"
            >
              <h2 className="mb-8 font-serif text-3xl font-extrabold leading-tight text-purple-400 lg:text-4xl">Contact <span className="text-purple-500">Us</span></h2>
              <p className="mb-12 text-lg leading-relaxed text-purple-300">
                Get in touch with us for a cosmic experience tailored just for you.
              </p>

              <div className="space-y-6">
                {/* Address */}
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="mt-1 text-2xl text-purple-500" />
                  <div>
                    <h3 className="mb-1 font-semibold text-purple-400">Location</h3>
                    <p className="text-purple-300">#762 JanakPuri, Bareilly 243122</p>
                  </div>
                </motion.div>

                {/* Hours */}
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-start space-x-4">
                  <FaClock className="mt-1 text-2xl text-purple-500" />
                  <div>
                    <h3 className="mb-1 font-semibold text-purple-400">Hours</h3>
                    <p className="text-purple-300">Mon-Sun, 9 AM - 8 PM</p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-start space-x-4">
                  <FaEnvelope className="mt-1 text-2xl text-purple-500" />
                  <div>
                    <h3 className="mb-1 font-semibold text-purple-400">Email</h3>
                    <a href="mailto:info@organicbypooja.com" className="text-purple-300 transition duration-300 hover:text-purple-400">
                      info@organicbypooja.com
                    </a>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-start space-x-4">
                  <FaPhone className="mt-1 text-2xl text-purple-500" />
                  <div>
                    <h3 className="mb-1 font-semibold text-purple-400">Phone</h3>
                    <a href="tel:+919876543210" className="text-purple-300 transition duration-300 hover:text-purple-400">
                      +91 98765 43210
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Social Media Icons */}
              <div className="flex mt-12 space-x-4">
                <motion.a whileHover={{ scale: 1.2, rotate: 15 }} href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 text-white transition-colors duration-300 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  <FaInstagram className="w-6 h-6" />
                </motion.a>
                <motion.a whileHover={{ scale: 1.2, rotate: -15 }} href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 text-white transition-colors duration-300 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700">
                  <FaFacebookF className="w-6 h-6" />
                </motion.a>
                <motion.a whileHover={{ scale: 1.2, rotate: 15 }} href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 text-white transition-colors duration-300 rounded-full bg-gradient-to-r from-purple-500 to-blue-400 hover:from-purple-600 hover:to-blue-500">
                  <FaTwitter className="w-6 h-6" />
                </motion.a>
              </div>
            </motion.div>

            {/* Booking Form Section */}
            <motion.div
              {...fadeIn}
              className="p-8 bg-gray-900 lg:col-span-2 lg:p-12"
            >
              <h1 className="mb-8 font-serif text-4xl font-extrabold leading-tight text-purple-400 lg:text-5xl">
                Book Your <span className="text-purple-500">Cosmic</span> Experience
              </h1>
              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                <input type="hidden" name="access_key" value="43891102-fecf-4b69-8f17-4362fc2e9d1c" />
                
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Name Input */}
                  <div className="relative">
                    <MdMessage className="absolute text-purple-400 transition-all duration-300 top-3 left-3 peer-focus:text-purple-500" />
                    <input type="text" id="name" name="name" className="w-full py-3 pl-10 pr-4 text-purple-300 placeholder-transparent transition-all duration-300 bg-gray-800 border-2 border-gray-700 rounded-lg peer focus:outline-none focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" placeholder="Your Name" required />
                    <label htmlFor="name" className="absolute text-sm text-purple-400 transition-all duration-300 transform -translate-y-1/2 bg-gray-900 left-10 top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-purple-400 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:left-3 peer-focus:text-purple-500 peer-focus:text-xs">Your Name</label>
                  </div>
                  
                  {/* Email Input */}
                  <div className="relative">
                    <FaEnvelope className="absolute text-purple-400 transition-all duration-300 top-3 left-3 peer-focus:text-purple-500" />
                    <input type="email" id="email" name="email" className="w-full py-3 pl-10 pr-4 text-purple-300 placeholder-transparent transition-all duration-300 bg-gray-800 border-2 border-gray-700 rounded-lg peer focus:outline-none focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" placeholder="Your Email" required />
                    <label htmlFor="email" className="absolute text-sm text-purple-400 transition-all duration-300 transform -translate-y-1/2 bg-gray-900 left-10 top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-purple-400 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:left-3 peer-focus:text-purple-500 peer-focus:text-xs">Your Email</label>
                  </div>
                </div>

                {/* Phone Input */}
                <div className="relative">
                  <FaPhone className="absolute text-purple-400 transition-all duration-300 top-3 left-3 peer-focus:text-purple-500" />
                  <input type="text" id="phone" name="phone" className="w-full py-3 pl-10 pr-4 text-purple-300 placeholder-transparent transition-all duration-300 bg-gray-800 border-2 border-gray-700 rounded-lg peer focus:outline-none focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" placeholder="Your Phone Number" required />
                  <label htmlFor="phone" className="absolute text-sm text-purple-400 transition-all duration-300 transform -translate-y-1/2 bg-gray-900 left-10 top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-purple-400 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:left-3 peer-focus:text-purple-500 peer-focus:text-xs">Your Phone Number</label>
                </div>

                {/* Treatment Select */}
                <div className="relative">
                  <MdSpa className="absolute text-purple-400 transition-all duration-300 top-3 left-3 peer-focus:text-purple-500" />
                  <select id="treatment" name="treatment" className="w-full py-3 pl-10 pr-10 text-purple-300 transition-all duration-300 bg-gray-800 border-2 border-gray-700 rounded-lg appearance-none peer focus:outline-none focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" required>
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
                  <label htmlFor="treatment" className="absolute text-sm text-purple-400 transition-all duration-300 transform -translate-y-1/2 bg-gray-900 left-10 top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-purple-400 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:left-3 peer-focus:text-purple-500 peer-focus:text-xs">Select Treatment</label>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 text-purple-400 pointer-events-none">
                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>

                {/* Date & Time Inputs */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="relative">
                    <MdEventAvailable className="absolute text-purple-400 transition-all duration-300 top-3 left-3 peer-focus:text-purple-500" />
                    <input type="date" id="date" name="date" className="w-full py-3 pl-10 pr-4 text-purple-300 placeholder-transparent transition-all duration-300 bg-gray-800 border-2 border-gray-700 rounded-lg peer focus:outline-none focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" required />
                    <label htmlFor="date" className="absolute text-sm text-purple-400 transition-all duration-300 transform -translate-y-1/2 bg-gray-900 left-10 top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-purple-400 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:left-3 peer-focus:text-purple-500 peer-focus:text-xs">Date</label>
                  </div>
                  <div className="relative">
                    <FaClock className="absolute text-purple-400 transition-all duration-300 top-3 left-3 peer-focus:text-purple-500" />
                    <input type="time" id="time" name="time" className="w-full py-3 pl-10 pr-4 text-purple-300 placeholder-transparent transition-all duration-300 bg-gray-800 border-2 border-gray-700 rounded-lg peer focus:outline-none focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" required />
                    <label htmlFor="time" className="absolute text-sm text-purple-400 transition-all duration-300 transform -translate-y-1/2 bg-gray-900 left-10 top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-purple-400 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:left-3 peer-focus:text-purple-500 peer-focus:text-xs">Time</label>
                  </div>
                </div>

                {/* Message Input */}
                <div className="relative">
                  <MdMessage className="absolute text-purple-400 transition-all duration-300 top-3 left-3 peer-focus:text-purple-500" />
                  <textarea id="message" name="message" rows="4" className="w-full py-3 pl-10 pr-4 text-purple-300 placeholder-transparent transition-all duration-300 bg-gray-800 border-2 border-gray-700 rounded-lg peer focus:outline-none focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" required></textarea>
                  <label htmlFor="message" className="absolute text-sm text-purple-400 transition-all duration-300 transform -translate-y-1/2 bg-gray-900 left-10 top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-purple-400 peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:left-3 peer-focus:text-purple-500 peer-focus:text-xs">Your Message For Us</label>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full p-4 font-semibold text-purple-400 transition duration-300 ease-in-out bg-transparent border-2 border-purple-400 rounded-lg shadow-md hover:bg-purple-500 hover:text-gray-100 focus:outline-none focus:ring-4 focus:ring-pink-300 focus:ring-opacity-50"
                >
                  Book Your Cosmic Experience
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="p-8 bg-gray-900"
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
        </div>
      </motion.div>
    </div>
  );
};

export default Book;