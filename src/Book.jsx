import { FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 lg:flex-row">
      {/* Contact Form Section */}
      <div className="flex flex-col justify-center flex-1 p-12 bg-white shadow-lg lg:shadow-xl lg:rounded-l-xl">
        <h1 className="mb-8 text-4xl font-extrabold text-gray-800">Book Your Appointment</h1>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="space-y-6"
        >
          <input
            type="hidden"
            name="access_key"
            value="43891102-fecf-4b69-8f17-4362fc2e9d1c"
          />

          {/* Name Input */}
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-4 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-lg shadow-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Your Name"
            required
          />

          {/* Email Input */}
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-4 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-lg shadow-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Your Email"
            required
          />

          {/* Phone Input */}
          <input
            type="text"
            id="phone"
            name="phone"
            className="w-full p-4 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-lg shadow-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Your Phone Number"
            required
          />

          {/* Treatment Select */}
          <select
            id="treatment"
            name="treatment"
            className="w-full p-4 text-gray-800 placeholder-gray-500 transition-colors duration-300 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600 hover:border-teal-500"
            required
          >
            <option value="" className='bg-black'>Select Treatment</option>
            {/* Options */}
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

          {/* Date & Time Inputs */}
          <div className="flex space-x-4">
            <div className="w-full">
              <label htmlFor="date" className="block mb-2 text-gray-700">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                className="w-full p-4 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-lg shadow-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="time" className="block mb-2 text-gray-700">Time</label>
              <input
                type="time"
                id="time"
                name="time"
                className="w-full p-4 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-lg shadow-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
          </div>

          {/* Message Input */}
          <textarea
            id="message"
            name="message"
            className="w-full p-4 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-lg shadow-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Your Message For Us"
            rows="4"
            required
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-4 text-white transition duration-300 ease-in-out bg-teal-600 rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-300"
          >
            Book Appointment
          </button>
        </form>
      </div>

      {/* Contact Information Section */}
      <div className="flex flex-col justify-between flex-1 p-12 text-white bg-teal-800 lg:rounded-r-xl">
        <div>
          <h2 className="mb-6 text-4xl font-extrabold">Get in Touch</h2>
          <p className="mb-8 text-lg">
            We are here to assist you! Contact us or book an appointment using the form below.
          </p>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-3xl" />
              <p className="text-lg">#762 JanakPuri, Bareilly 243122</p>
            </div>

            {/* Hours */}
            <div className="flex items-center space-x-4">
              <FaClock className="text-3xl" />
              <p className="text-lg">Mon-Sun, 9 AM - 8 PM</p>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-3xl" />
              <p className="text-lg">
                <a 
                  href="mailto:info@organicbypooja.com" 
                  className="hover:underline"
                >
                  info@organicbypooja.com
                </a>
              </p>
            </div>
            <div className="mt-8">
        <iframe
  title="Google Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.0973403079293!2d79.41506981441764!3d28.364338282527683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a00677d142e4ab%3A0x51cc6cf62f759c13!2sBareilly%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1635675008746!5m2!1sen!2sin"
  width="100%"
  height="250"
  frameBorder="0"
  style={{ border: 0 }}
  allowFullScreen=""
  aria-hidden="false"
  tabIndex="0"
></iframe>
        </div>
          </div>
        </div>

        {/* Google Map */}

      </div>
    </div>
  );
};

export default Contact;
