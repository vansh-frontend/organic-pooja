import { FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 bg-gray-100 lg:grid-cols-2 lg:p-12">
      {/* Information Section */}
      <div className="p-6 lg:p-8 bg-gray-200 rounded-lg shadow-md lg:max-h-[300px] overflow-auto">
        <h2 className="flex items-center mb-6 space-x-4 text-2xl font-semibold">
          <img 
            src="/img/pooja 2.png" 
            alt="Organic By Pooja Logo" 
            className="object-contain w-16 h-16"
          />
          <span>Organic By Pooja</span>
        </h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-gray-700">
            <FaMapMarkerAlt className="text-lg" />
            <p>#762 JanakPuri, Bareilly 243122</p>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <FaClock className="text-lg" />
            <p>Mon-Sun, 9 AM - 8 PM</p>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <FaEnvelope className="text-lg" />
            <p>For further info, please visit our website or contact us via email.</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h1 className="flex items-center mb-6 space-x-2 text-2xl font-semibold">
          <FaEnvelope className="text-xl" />
          <span>Book your appointment now!</span>
        </h1>
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
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="absolute text-gray-500 transition-transform duration-300 ease-in-out transform -translate-y-1/2 top-3 left-3 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-translate-y-5 peer-focus:text-blue-600 peer-focus:text-xs"
            >
              Your Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="absolute text-gray-500 transition-transform duration-300 ease-in-out transform -translate-y-1/2 top-3 left-3 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-translate-y-5 peer-focus:text-blue-600 peer-focus:text-xs"
            >
              Your Email
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              id="phone"
              name="phone"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=" "
              required
            />
            <label
              htmlFor="phone"
              className="absolute text-gray-500 transition-transform duration-300 ease-in-out transform -translate-y-1/2 top-3 left-3 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-translate-y-5 peer-focus:text-blue-600 peer-focus:text-xs"
            >
              Your Phone Number
            </label>
          </div>

          <div className="relative">
            <select
              id="treatment"
              name="treatment"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled selected>Select Treatment</option>
              <optgroup label="Skin Treatments">
                <option value="Laser Hair Treatment">Laser Hair Treatment</option>
                <option value="Thermage Treatment">Thermage Treatment</option>
                <option value="HIFU Treatment">HIFU Treatment</option>
                <option value="Dermal Fillers Treatment">Dermal Fillers Treatment</option>
                <option value="Chemical Peel Treatment">Chemical Peel Treatment</option>
                <option value="Q-Switch Laser Treatment">Q-Switch Laser Treatment</option>
                <option value="Skin Brightening Treatment">Skin Brightening and Lightening Treatment</option>
                <option value="Ageing Skin">Ageing Skin</option>
                <option value="Acne Scars">Acne Scars</option>
                <option value="Dull Skin">Dull Skin</option>
                <option value="IV Drips For Skin">IV Drips For Skin</option>
              </optgroup>

              <optgroup label="Hair Treatments">
                <option value="PRP GF Treatment">PRP GF Treatment</option>
                <option value="Hair Thread Treatment">Hair Thread Treatment</option>
                <option value="Biocell Therapy">Biocell Therapy</option>
                <option value="Hair Loss In Women">Hair Loss In Women</option>
                <option value="IV Drips For Hair">IV Drips For Hair</option>
                <option value="Hair Loss Concern">Hair Loss Concern</option>
              </optgroup>

              <optgroup label="Makeup Services">
                <option value="Bridal Makeup">Bridal Makeup</option>
                <option value="Party Makeup">Party Makeup</option>
                <option value="HD Makeup">HD Makeup</option>
                <option value="Airbrush Makeup">Airbrush Makeup</option>
              </optgroup>
            </select>
            <label
              htmlFor="treatment"
              className="absolute text-gray-500 transition-transform duration-300 ease-in-out transform -translate-y-1/2 top-3 left-3 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-translate-y-5 peer-focus:text-blue-600 peer-focus:text-xs"
            >
              Select Treatment
            </label>
          </div>

          {/* Date and Time Section */}
          <div className="flex gap-4">
            <div className="relative flex-1">
              <input
                type="date"
                id="date"
                name="date"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <label
                htmlFor="date"
                className="absolute text-gray-500 transition-transform duration-300 ease-in-out transform -translate-y-1/2 top-3 left-3 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-translate-y-5 peer-focus:text-blue-600 peer-focus:text-xs"
              >
                Preferred Date
              </label>
            </div>

            <div className="relative flex-1">
              <input
                type="time"
                id="time"
                name="time"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <label
                htmlFor="time"
                className="absolute text-gray-500 transition-transform duration-300 ease-in-out transform -translate-y-1/2 top-3 left-3 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-translate-y-5 peer-focus:text-blue-600 peer-focus:text-xs"
              >
                Preferred Time
              </label>
            </div>
          </div>

          <div className="relative">
            <textarea
              id="message"
              name="message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=" "
              rows="4"
              required
            ></textarea>
            <label
              htmlFor="message"
              className="absolute text-gray-500 transition-transform duration-300 ease-in-out transform -translate-y-1/2 top-3 left-3 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-translate-y-5 peer-focus:text-blue-600 peer-focus:text-xs"
            >
              Your Message
            </label>
          </div>

          <button
            type="submit"
            className="w-full p-3 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
