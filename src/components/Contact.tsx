"use client"
import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-yellow-500">Contact Me</h2>
        <p className="text-lg text-gray-300 mb-10">
          Feel free to reach out to me through the following methods:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
          {/* Email */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-xl font-semibold text-gray-100">Email:</p>
            <a
              href="mailto:your-email@example.com"
              className="text-yellow-500 text-lg hover:underline break-words"
            >
              maheenbrohi88@gmail.com
            </a>
          </div>
          {/* Phone */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-xl font-semibold text-gray-100">Phone:</p>
            <a
              href="tel:+1234567890"
              className="text-yellow-500 text-lg hover:underline break-words"
            >
              03403645360
            </a>
          </div>
        </div>
      </div>
      <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Orange Line */}
        <div className="border-t-4 border-yellow-500 mb-6"></div>
        {/* Footer Text */}
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Thanks for Visit!
        </h2>
      </div>
    </footer>
    </section>
  );
};

export default Contact;
