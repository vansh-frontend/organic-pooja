import { FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa';
import './Contact.css'; // Import the custom CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Information Section */}
      <div className="info-section">
        <div className="mt-8">
          <h2 className="info-heading">
            <img 
              src="/img/pooja 2.png" 
              alt="Organic By Pooja Logo" 
            />
            Organic By Pooja
          </h2>
          <div className="info-item">
            <FaMapMarkerAlt />
            <p>#762 JanakPuri, Bareilly 243122</p>
          </div>
          <div className="info-item">
            <FaClock />
            <p>Mon-Sun, 9 AM - 8 PM</p>
          </div>
          <div className="info-item">
            <FaEnvelope />
            <p>For further info, please visit our website or contact us via email.</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-section">
        <div className="w-full max-w-lg">
          <h1 className="contact-form-heading">
            <FaEnvelope />
            Book your appointment now!
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
                className="form-input"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="placeholder-label"
              >
                Your Name
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="placeholder-label"
              >
                Your Email
              </label>
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder=" "
                required
              ></textarea>
              <label
                htmlFor="message"
                className="placeholder-label"
              >
                Your Message
              </label>
            </div>
            <button
              type="submit"
              className="submit-button"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
