// Contact.js

const Contact = () => {
    return (
      <div className="flex items-center justify-center min-h-screen px-4 py-8 bg-white sm:px-6 lg:px-8">
        <div className="w-full max-w-lg p-8 bg-white border border-gray-200 rounded-lg shadow-lg">
          <h1 className="mb-8 text-3xl font-bold text-gray-900">Book Appointment</h1>
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-6"
          >
            <input
              type="hidden"
              name="access_key"
              value="6aa99d94-6385-47ea-af98-84a0e261f23d"
            />
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-4 text-gray-900 transition-all duration-300 bg-gray-100 border border-gray-300 rounded-lg outline-none focus:border-black peer"
                required
              />
              <label
                htmlFor="name"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300 transform peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm"
              >
                Your Name
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-4 text-gray-900 transition-all duration-300 bg-gray-100 border border-gray-300 rounded-lg outline-none focus:border-black peer"
                required
              />
              <label
                htmlFor="email"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300 transform peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm"
              >
                Your Email
              </label>
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                className="w-full h-32 p-4 text-gray-900 transition-all duration-300 bg-gray-100 border border-gray-300 rounded-lg outline-none focus:border-black peer"
                required
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300 transform peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm"
              >
                Your Message
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-3 font-semibold text-white transition duration-300 bg-black rounded-lg hover:bg-gray-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Contact;
  