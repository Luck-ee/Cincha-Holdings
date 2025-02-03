import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const ContactInfoSection = () => {
  return (
    <footer className="bg-white">
      {/* Mobile View */}
      <div className="md:hidden">
        <div className="px-4 py-8">
          {/* Contact Cards */}
          <div className="space-y-4 max-w-md mx-auto">
            {/* Location Card */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <MapPin className="text-gray-600 mr-3" size={20} />
                <h2 className="text-lg font-semibold text-gray-800">Location</h2>
              </div>
              <p className="text-gray-600 pl-8">500 Terry Francine St.</p>
              <p className="text-gray-600 pl-8">San Francisco, CA 94158</p>
            </div>

            {/* Hours Card */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Clock className="text-gray-600 mr-3" size={20} />
                <h2 className="text-lg font-semibold text-gray-800">Hours</h2>
              </div>
              <div className="pl-8">
                <p className="text-gray-600">Mon - Fri: 9:00 am – 5:00 pm</p>
                <p className="text-gray-600">Sat - Sun: 9:00 am – 2:00 pm</p>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Phone className="text-gray-600 mr-3" size={20} />
                <h2 className="text-lg font-semibold text-gray-800">Contact</h2>
              </div>
              <div className="pl-8 space-y-2">
                <p className="text-gray-600 flex items-center">
                  <Phone size={16} className="mr-2" /> 123-456-7890
                </p>
                <p className="text-gray-600 flex items-center">
                  <Mail size={16} className="mr-2" /> info@mysite.com
                </p>
                <button className="mt-3 w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop/Tablet View */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4 py-12">
          <hr className="border-t border-gray-300 mb-12" />
          <div className="flex flex-col md:flex-row md:justify-around">
            {/* Location */}
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl mb-4">Location</h2>
              <p className="text-gray-600">500 Terry Francine St.</p>
              <p className="text-gray-600">San Francisco, CA 94158</p>
            </div>

            {/* Hours */}
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl mb-4">Hours</h2>
              <p className="text-gray-600">Mon - Fri 9:00 am – 5:00 pm</p>
              <p className="text-gray-600">Saturday 9:00 am – 2:00 pm</p>
              <p className="text-gray-600">Sunday 9:00 am – 2:00 pm</p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-3xl mb-4">Contact</h2>
              <p className="text-gray-600">123-456-7890</p>
              <p className="text-gray-600">info@mysite.com</p>
              <button className="mt-4 bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition duration-300">
                Contact Us
              </button>
            </div>
          </div>
          <hr className="border-t border-gray-300 mt-12" />
        </div>
      </div>
      
      {/* Copyright - Both Views */}
      <div className="text-center py-4 text-sm text-gray-500 border-t border-gray-100">
        © 2025 Cincha Holdings. All rights reserved.
      </div>
    </footer>
  );
};

export default ContactInfoSection;