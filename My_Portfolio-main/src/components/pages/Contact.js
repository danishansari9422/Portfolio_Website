import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  

  return (
    <div
      id="contact"
      className="bg-gradient-to-b from-black to-black w-full min-h-screen p-2 flex items-center"
    >

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-4xl font-bold text-yellow-300 mb-4">
              Contact <span className="text-red-500">Me</span>
            </h2>
            <p className="text-lg text-white mb-8">
              If you have any questions please
              don't hesitate to contact me
            </p>
            <ul className="text-lg text-white">
              <li className="flex items-center mb-4">
                <FaPhone className="h-6 w-6 mr-2 text-yellow-300" />
                6292022250
              </li>
              <li className="flex items-center mb-4">
                <FaMapMarkerAlt className="h-6 w-6 mr-2 text-yellow-300" />
                VIT Vellore
              </li>
              <li className="flex items-center mb-4">
                <FaEnvelope className="h-6 w-6 mr-2 text-yellow-300" />
                danishansari96571@gmail.com
              </li>
            </ul>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Contact;
