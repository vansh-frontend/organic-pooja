import { FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-gray-50">
      {/* Main Container */}
      <div className="relative z-10 flex flex-col lg:flex-row">
        
        {/* Contact Form Section */}
        <div className="flex flex-col justify-center w-full p-8 bg-white rounded-lg shadow-lg lg:w-1/2 lg:px-12 lg:py-16">
          <div className="w-full max-w-lg mx-auto">
            <h1 className="mb-6 text-3xl font-bold text-gray-800">Book Your Appointment</h1>
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
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-4 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your Name"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-4 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your Email"
                  required
                />
              </div>

              {/* Phone Input */}
              <div className="relative">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full p-4 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your Phone Number"
                  required
                />
              </div>

              {/* Treatment Select */}
              <div className="relative">
                <select
                  id="treatment"
                  name="treatment"
                  className="w-full p-4 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                >
                  <option value="Select Treatment">Select Treatment</option>
                  {/* Options */}
                  <optgroup label="Skin Treatments">
                    <option value="Laser Hair Treatment">Laser Hair Treatment</option>
                    <option value="Thermage Treatment">Thermage Treatment</option>
                    <option value="HIFU Treatment">HIFU Treatment</option>
                    <option value="Dermal Fillers Treatment">Dermal Fillers Treatment</option>
                    <option value="Chemical Peel Treatment">Chemical Peel Treatment</option>
                    <option value="Q-Switch Laser Treatment">Q-Switch Laser Treatment</option>
                    <option value="Skin Brightening and Lightening Treatment">Skin Brightening and Lightening Treatment</option>
                    <option value="Ageing Skin">Ageing Skin</option>
                    <option value="Acne Scars">Acne Scars</option>
                    <option value="Dull Skin">Dull Skin</option>
                    <option value="IV Drips For Skin">IV Drips For Skin</option>
                  </optgroup>

                  {/* Hair Treatments */}
                  <optgroup label="Hair Treatments">
                    <option value="PRP GF Treatment">PRP GF Treatment</option>
                    <option value="Hair Thread Treatment">Hair Thread Treatment</option>
                    <option value="Biocell Therapy">Biocell Therapy</option>
                    <option value="Hair Loss In Women">Hair Loss In Women</option>
                    <option value="IV Drips For Hair">IV Drips For Hair</option>
                    <option value="Hair Loss Concern">Hair Loss Concern</option>
                  </optgroup>

                  {/* Makeup Services */}
                  <optgroup label="Makeup Services">
                    <option value="Bridal Makeup">Bridal Makeup</option>
                    <option value="Party Makeup">Party Makeup</option>
                  </optgroup>
                </select>
              </div>

              {/* Date & Time Inputs */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="relative">
                  <label htmlFor="date" className="text-teal-500">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="w-full p-4 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                <div className="relative">
                  <label htmlFor="time" className="text-teal-500">Time</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    className="w-full p-4 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-4 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your Message For Us"
                  rows="4"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full p-4 font-bold text-white transition duration-300 bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-400"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="flex flex-col justify-center w-full p-8 text-gray-800 lg:w-1/2 lg:justify-start lg:px-12 lg:py-16">
          <h2 className="mb-4 text-4xl font-bold text-teal-600">Get in Touch</h2>
          <p className="mb-8 text-lg text-gray-600">
            We are here to assist you! Contact us or book an appointment using the form below.
          </p>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-2xl text-teal-600" />
              <p className="text-lg">#762 JanakPuri, Bareilly 243122</p>
            </div>

            {/* Hours */}
            <div className="flex items-center space-x-4">
              <FaClock className="text-2xl text-teal-600" />
              <p className="text-lg">Mon-Sun, 9 AM - 8 PM</p>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-2xl text-teal-600" />
              <p className="text-lg">
                <a 
                  href="mailto:info@organicbypooja.com" 
                  className="text-black hover:underline hover:underline-offset-8 hover:text-teal-600"
                >
                  info@organicbypooja.com
                </a>
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-8">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9025902177554!2d90.38882541429766!3d23.750834684588457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b86124827977%3A0x46870f81b0e11a65!2sJanakpuri!5e0!3m2!1sen!2sbd!4v1635675008746!5m2!1sen!2sbd"
              width="100%"
              height="350"
              className="border-0 rounded-lg"
              allowFullScreen=""
              loading="eager"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
