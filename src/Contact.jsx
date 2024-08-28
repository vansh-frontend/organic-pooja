// import React from 'react'

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
    <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="mb-6 text-3xl font-semibold text-white">Book Appoinment</h1>
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
                    placeholder="Your Name"
                    className="w-full p-3 text-white transition-all duration-300 bg-gray-700 border border-gray-600 rounded-lg outline-none peer focus:border-teal-400"
                    required
                />
                <label
                    htmlFor="name"
                    className="absolute text-gray-400 transition-all duration-300 transform -translate-y-1/2 top-1/2 left-3 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-teal-400 peer-focus:text-sm"
                >
                    Your Name
                </label>
            </div>
            <div className="relative">
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full p-3 text-white transition-all duration-300 bg-gray-700 border border-gray-600 rounded-lg outline-none peer focus:border-teal-400"
                    required
                />
                <label
                    htmlFor="email"
                    className="absolute text-gray-400 transition-all duration-300 transform -translate-y-1/2 top-1/2 left-3 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-teal-400 peer-focus:text-sm"
                >
                    Your Email
                </label>
            </div>
            <div className="relative">
                <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    className="w-full h-32 p-3 text-white transition-all duration-300 bg-gray-700 border border-gray-600 rounded-lg outline-none resize-none peer focus:border-teal-400"
                    required
                ></textarea>
                <label
                    htmlFor="message"
                    className="absolute text-gray-400 transition-all duration-300 transform -translate-y-1/2 top-1/2 left-3 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-teal-400 peer-focus:text-sm"
                >
                    Your Message
                </label>
            </div>
            <button
                type="submit"
                className="w-full px-4 py-2 text-white transition duration-300 bg-teal-500 rounded-lg shadow-lg hover:bg-teal-600"
            >
                Send Message
            </button>
        </form>
    </div>
</div>
  )
}

export default Contact
