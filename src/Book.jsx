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
    <div className="min-h-screen px-4 py-16 font-sans text-white bg-black sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-7xl"
      >
        <div className="overflow-hidden shadow-2xl bg-black/50 rounded-3xl backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Contact Information Section */}
            <motion.div
              {...fadeIn}
              className="p-8 text-white bg-gradient-to-br from-black to-gray-900 lg:col-span-1"
            >
              <h2 className="mb-8 text-3xl font-light leading-tight text-white lg:text-4xl">Contact <span className="font-normal">Us</span></h2>
              <p className="mb-12 text-lg font-light leading-relaxed text-white/80">
                Get in touch with us for a cosmic experience tailored just for you.
              </p>

              <div className="space-y-6">
                {/* Address */}
                <motion.div className="flex flex-col space-y-4">
                  <motion.div whileHover={{ scale: 1.05 }} className="flex items-start space-x-4">
                    <FaMapMarkerAlt className="mt-1 text-2xl text-white/80" />
                    <div className='flex flex-col'>
                      <h3 className="mb-1 font-light text-white">Location</h3>
                      <p className="text-white/80">#762 JanakPuri, Bareilly 243122</p>
                    </div>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} className="flex items-start space-x-4">
                    <FaMapMarkerAlt className="mt-1 text-2xl text-white/80" />
                    <div className='flex flex-col'>
                      <h3 className="mb-1 font-light text-white">Location 2</h3>
                      <p className="text-white/80">#E42 A New Multan Nagar
                      Ground floor New Delhi</p>
                    </div>
                  </motion.div>
                </motion.div>
                {/* Hours */}
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-start space-x-4">
                  <FaClock className="mt-1 text-2xl text-white/80" />
                  <div>
                    <h3 className="mb-1 font-light text-white">Hours</h3>
                    <p className="text-white/80">Mon-Sun, 9 AM - 8 PM</p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-start space-x-4">
                  <FaEnvelope className="mt-1 text-2xl text-white/80" />
                  <div>
                    <h3 className="mb-1 font-light text-white">Email</h3>
                    <a href="mailto:info@organicbypooja.com" className="transition duration-300 text-white/80 hover:text-white">
                      info@organicbypooja.com
                    </a>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-start space-x-4">
                  <FaPhone className="mt-1 text-2xl text-white/80" />
                  <div>
                    <h3 className="mb-1 font-light text-white">Phone</h3>
                    <a href="tel:+919876543210" className="transition duration-300 text-white/80 hover:text-white">
                      +91 98765 43210
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Social Media Icons */}
              <div className="flex mt-12 space-x-4">
                <motion.a whileHover={{ scale: 1.2, rotate: 15 }} href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 text-white transition-colors duration-300 rounded-full bg-white/10 hover:bg-white/20">
                  <FaInstagram className="w-6 h-6" />
                </motion.a>
                <motion.a whileHover={{ scale: 1.2, rotate: -15 }} href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 text-white transition-colors duration-300 rounded-full bg-white/10 hover:bg-white/20">
                  <FaFacebookF className="w-6 h-6" />
                </motion.a>
                <motion.a whileHover={{ scale: 1.2, rotate: 15 }} href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 text-white transition-colors duration-300 rounded-full bg-white/10 hover:bg-white/20">
                  <FaTwitter className="w-6 h-6" />
                </motion.a>
              </div>
            </motion.div>

            {/* Booking Form Section */}
            <motion.div
              {...fadeIn}
              className="p-8 bg-black/50 lg:col-span-2 lg:p-12"
            >
              <h1 className="mb-8 text-4xl font-light leading-tight text-white lg:text-5xl">
                Book Your <span className="font-normal">Appointment</span>
              </h1>
              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                <input type="hidden" name="access_key" value="1b077766-d32d-4769-858c-696427453279" />
                
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Name Input */}
                  <div className="relative">
                    <MdMessage className="absolute transition-all duration-300 text-white/60 top-3 left-3 peer-focus:text-white" />
                    <input type="text" id="name" name="name" className="w-full py-3 pl-10 pr-4 text-white placeholder-transparent transition-all duration-300 border-2 rounded-lg bg-white/10 border-white/20 peer focus:outline-none focus:border-white focus:ring focus:ring-white/50 focus:ring-opacity-50" placeholder="Your Name" required />
                    <label htmlFor="name" className="absolute text-sm transition-all duration-300 transform -translate-y-1/2 text-white/60 bg-black/50 left-10 top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/60 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:left-3 peer-focus:text-white peer-focus:text-xs">Your Name</label>
                  </div>
                  
                  {/* Email Input */}
                  <div className="relative">
                    <FaEnvelope className="absolute transition-all duration-300 text-white/60 top-3 left-3 peer-focus:text-white" />
                    <input type="email" id="email" name="email" className="w-full py-3 pl-10 pr-4 text-white placeholder-transparent transition-all duration-300 border-2 rounded-lg bg-white/10 border-white/20 peer focus:outline-none focus:border-white focus:ring focus:ring-white/50 focus:ring-opacity-50" placeholder="Your Email" required />
                    <label htmlFor="email" className="absolute text-sm transition-all duration-300 transform -translate-y-1/2 text-white/60 bg-black/50 left-10 top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/60 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:left-3 peer-focus:text-white peer-focus:text-xs">Your Email</label>
                  </div>
                </div>

                {/* Phone Input */}
                <div className="relative">
                  <FaPhone className="absolute transition-all duration-300 text-white/60 top-3 left-3 peer-focus:text-white" />
                  <input type="text" id="phone" name="phone" className="w-full py-3 pl-10 pr-4 text-white placeholder-transparent transition-all duration-300 border-2 rounded-lg bg-white/10 border-white/20 peer focus:outline-none focus:border-white focus:ring focus:ring-white/50 focus:ring-opacity-50" placeholder="Your Phone Number" required />
                  <label htmlFor="phone" className="absolute text-sm transition-all duration-300 transform -translate-y-1/2 text-white/60 bg-black/50 left-10 top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/60 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:left-3 peer-focus:text-white peer-focus:text-xs">Your Phone Number</label>
                </div>

                {/* Treatment Select */}
                <div className="relative">
                  <MdSpa className="absolute transition-all duration-300 text-white/60 top-3 left-3 peer-focus:text-white" />
                  <select id="treatment" name="treatment" className="w-full py-3 pl-10 pr-10 text-black transition-all duration-300 border-2 rounded-lg appearance-none bg-white/10 border-white/20 peer focus:outline-none focus:border-white focus:ring focus:ring-white/50 focus:ring-opacity-50" required>
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
                  <label htmlFor="treatment" className="absolute text-sm transition-all duration-300 transform -translate-y-1/2 text-white/60 bg-black/50 left-10 top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/60 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:left-3 peer-focus:text-white peer-focus:text-xs">Select Treatment</label>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-white/60">
                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>

                {/* Date & Time Inputs */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="relative">
                    <MdEventAvailable className="absolute transition-all duration-300 text-white/60 top-3 left-3 peer-focus:text-white" />
                    <input type="date" id="date" name="date" className="w-full py-3 pl-10 pr-4 text-white placeholder-transparent transition-all duration-300 border-2 rounded-lg bg-white/10 border-white/20 peer focus:outline-none focus:border-white focus:ring focus:ring-white/50 focus:ring-opacity-50" required />

<label htmlFor="date" className="absolute text-sm transition-all duration-300 transform -translate-y-1/2 text-white/60 bg-black/50 left-10 top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/60 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:left-3 peer-focus:text-white peer-focus:text-xs">Preferred Date</label>
</div>
<div className="relative">
<FaClock className="absolute transition-all duration-300 text-white/60 top-3 left-3 peer-focus:text-white" />
<input type="time" id="time" name="time" className="w-full py-3 pl-10 pr-4 text-white placeholder-transparent transition-all duration-300 border-2 rounded-lg bg-white/10 border-white/20 peer focus:outline-none focus:border-white focus:ring focus:ring-white/50 focus:ring-opacity-50" required />
<label htmlFor="time" className="absolute text-sm transition-all duration-300 transform -translate-y-1/2 text-white/60 bg-black/50 left-10 top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/60 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:left-3 peer-focus:text-white peer-focus:text-xs">Preferred Time</label>
</div>
</div>

{/* Message Textarea */}
<div className="relative">
<MdMessage className="absolute transition-all duration-300 text-white/60 top-3 left-3 peer-focus:text-white" />
<textarea id="message" name="message" rows="4" className="w-full py-3 pl-10 pr-4 text-white placeholder-transparent transition-all duration-300 border-2 rounded-lg bg-white/10 border-white/20 peer focus:outline-none focus:border-white focus:ring focus:ring-white/50 focus:ring-opacity-50" placeholder="Your Message" required></textarea>
<label htmlFor="message" className="absolute text-sm transition-all duration-300 transform -translate-y-1/2 text-white/60 bg-black/50 left-10 top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/60 peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:left-3 peer-focus:text-white peer-focus:text-xs">Your Message</label>
</div>

{/* Submit Button */}
<motion.button
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
type="submit"
className="w-full px-6 py-3 text-lg font-medium text-black transition-colors duration-300 bg-white rounded-lg hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
>
Book Consultation
</motion.button>
</form>
</motion.div>
</div>
</div>
</motion.div>
</div>
);
};

export default Book;